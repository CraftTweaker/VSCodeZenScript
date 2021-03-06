/* eslint-disable no-empty */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
    CompletionItem,
    CompletionItemKind,
    createConnection,
    Diagnostic,
    DiagnosticSeverity,
    DidChangeConfigurationNotification,
    InitializeParams,
    InitializeResult,
    ProposedFeatures,
    TextDocumentPositionParams,
    TextDocuments,
    TextDocumentSyncKind
} from 'vscode-languageserver/node';

import {
    Range,
    TextDocument,
    TextEdit
} from 'vscode-languageserver-textdocument';
import {
    ANTLRInputStream,
    CommonTokenStream
} from "antlr4ts";
import {ZenCodeLexer} from "./antlr/ZenCodeLexer";
import {ZenCodeParser} from "./antlr/ZenCodeParser";
import {ParseTreeWalker} from 'antlr4ts/tree/ParseTreeWalker';
import {ZenCodeParserListener} from "./antlr/ZenCodeParserListener";
import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {Token} from "antlr4ts/Token";
import {ParserRuleContext} from "antlr4ts/ParserRuleContext";


// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
    const capabilities = params.capabilities;

    // Does the client support the `workspace/configuration` request?
    // If not, we fall back using global settings.
    hasConfigurationCapability = !!(
        capabilities.workspace && !!capabilities.workspace.configuration
    );
    hasWorkspaceFolderCapability = !!(
        capabilities.workspace && !!capabilities.workspace.workspaceFolders
    );
    hasDiagnosticRelatedInformationCapability = !!(
        capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation
    );

    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            // Tell the client that this server supports code completion.
            completionProvider: {
                resolveProvider: true
            }
        }
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }

    return result;
});

connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        // Register for all configuration changes.
        connection.client.register(DidChangeConfigurationNotification.type, undefined);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders(_event => {
            connection.console.log('Workspace folder change event received.');
        });
    }


    console.log("ZSLSP now activated");
});

// The example settings
interface ExampleSettings {
    maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = {maxNumberOfProblems: 1000};
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();


connection.onDidChangeConfiguration(change => {
    if (hasConfigurationCapability) {
        // Reset all cached document settings
        documentSettings.clear();
    } else {
        globalSettings = <ExampleSettings>(
            (change.settings.languageServerExample || defaultSettings)
        );
    }

    // Revalidate all open text documents
    documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: 'languageServerExample'
        });
        documentSettings.set(resource, result);
    }
    return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
    documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
    const diagnostics: Diagnostic[] = [];

    const inputStream = new ANTLRInputStream(textDocument.getText());
    const lexer = new ZenCodeLexer(inputStream);
    lexer.removeErrorListeners();
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ZenCodeParser(tokenStream);
    parser.removeErrorListeners();

    class EnterFunctionListener implements ZenCodeParserListener {

        visitErrorNode(node: ErrorNode) {

            if (!node.parent) {
                return;
            }
            const prevNode = (node.parent.getChild(node.parent.childCount-2).payload as Token);

            // @ts-ignore
            if (prevNode.stop === undefined || typeof prevNode.stop !== "object") {
                return;
            }
            const dRange: Range = {

                start: {
                    // @ts-ignore
                    line: prevNode.stop.line-1,
                    // @ts-ignore
                    character: prevNode.stop.charPositionInLine
                },
                end: {
                    // @ts-ignore
                    line: prevNode.stop.line - 1,
                    // @ts-ignore
                    character: prevNode.stop.charPositionInLine+1
                }
            };
            const severity = DiagnosticSeverity.Error;
            const diagnostic = Diagnostic.create(dRange, node.symbol.text || "Invalid Text!", severity);
            diagnostics.push(diagnostic);

        }

    }

    const listener: ZenCodeParserListener = new EnterFunctionListener();


    const tree = parser.zenFile();
    ParseTreeWalker.DEFAULT.walk(listener, tree);


    // Send the computed diagnostics to VSCode.
    connection.sendDiagnostics({
        uri: textDocument.uri,
        diagnostics
    });
}

// @ts-ignore
connection.onDocumentColor(params => {
    console.log(params);
});

connection.onDidChangeWatchedFiles(_change => {
    // Monitored files have change in VSCode
    connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
    (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {

        const modids = ["minecraft", "forge", "crafttweaker", "modtweaker"];
        const names = ["stick", "dirt", "diamond", "apple", "arrow"];

        const tokenReg = /(?:[()\[\]:]|['\w])+/g;

        const text = documents.get(_textDocumentPosition.textDocument.uri)?.getText() || "";
        const lines = text.split(/\r\n|\r|\n/);

        const line = lines[_textDocumentPosition.position.line];

        let foundStart = false;
        let startIndex = _textDocumentPosition.position.character - 1;
        while (!foundStart) {
            if (startIndex < 0) {
                break;
            }
            const char = line.charAt(startIndex);
            if (!char.match(tokenReg)) {
                foundStart = true;
            } else {
                startIndex--;
            }
        }
        let foundEnd = false;
        let endIndex = _textDocumentPosition.position.character + 1;
        let foundChar = '';
        while (!foundEnd) {
            if (endIndex > line.length) {
                break;
            }
            const char = line.charAt(endIndex++);
            if (!char.match(tokenReg)) {
                foundEnd = true;
                foundChar = char;
            } else {
            }
        }

        // if start is <, get bracket handlers
        const completions: CompletionItem[] = [{
            label: JSON.stringify({start: line.charAt(startIndex)}),
            filterText: "<item:",
            kind: CompletionItemKind.Enum
        }];
        modids.forEach(modid => {
            names.forEach(name => {
                completions.push({
                    label: `<item:${modid}:${name}>`,
                    kind: CompletionItemKind.Enum,
                    textEdit: {
                        newText: `<item:${modid}:${name}>`,
                        range: {
                            start: {
                                line: _textDocumentPosition.position.line,
                                character: startIndex
                            },
                            end: {
                                line: _textDocumentPosition.position.line,
                                character: endIndex
                            }
                        }
                    } as TextEdit
                });
            });
        });
        return completions;
    }
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
    (item: CompletionItem): CompletionItem => {
        if (item.data === 1) {
            item.detail = 'TypeScript details';
            item.documentation = 'TypeScript documentation';
        } else if (item.data === 2) {
            item.detail = 'JavaScript details';
            item.documentation = 'JavaScript documentation';
        }
        return item;
    }
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();

