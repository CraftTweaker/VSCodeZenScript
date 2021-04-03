// Generated from ./server/src/antlr/ZenCodeParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ZenCodeParserListener } from "./ZenCodeParserListener";

export class ZenCodeParser extends Parser {
	public static readonly ZEN_KW_IMPORT = 1;
	public static readonly ZEN_KW_ALIAS = 2;
	public static readonly ZEN_KW_CLASS = 3;
	public static readonly ZEN_KW_FUNCTION = 4;
	public static readonly ZEN_KW_INTERFACE = 5;
	public static readonly ZEN_KW_ENUM = 6;
	public static readonly ZEN_KW_STRUCT = 7;
	public static readonly ZEN_KW_EXPAND = 8;
	public static readonly ZEN_KW_VARIANT = 9;
	public static readonly ZEN_KW_ABSTRACT = 10;
	public static readonly ZEN_KW_FINAL = 11;
	public static readonly ZEN_KW_OVERRIDE = 12;
	public static readonly ZEN_KW_CONST = 13;
	public static readonly ZEN_KW_PRIVATE = 14;
	public static readonly ZEN_KW_PUBLIC = 15;
	public static readonly ZEN_KW_EXPORT = 16;
	public static readonly ZEN_KW_INTERNAL = 17;
	public static readonly ZEN_KW_STATIC = 18;
	public static readonly ZEN_KW_PROTECTED = 19;
	public static readonly ZEN_KW_IMPLICIT = 20;
	public static readonly ZEN_KW_VIRTUAL = 21;
	public static readonly ZEN_KW_EXTERN = 22;
	public static readonly ZEN_KW_IMMUTABLE = 23;
	public static readonly ZEN_KW_VAL = 24;
	public static readonly ZEN_KW_VAR = 25;
	public static readonly ZEN_KW_GET = 26;
	public static readonly ZEN_KW_IMPLEMENTS = 27;
	public static readonly ZEN_KW_SET = 28;
	public static readonly ZEN_KW_VOID = 29;
	public static readonly ZEN_KW_BOOL = 30;
	public static readonly ZEN_KW_BYTE = 31;
	public static readonly ZEN_KW_SBYTE = 32;
	public static readonly ZEN_KW_SHORT = 33;
	public static readonly ZEN_KW_USHORT = 34;
	public static readonly ZEN_KW_INT = 35;
	public static readonly ZEN_KW_UINT = 36;
	public static readonly ZEN_KW_LONG = 37;
	public static readonly ZEN_KW_ULONG = 38;
	public static readonly ZEN_KW_USIZE = 39;
	public static readonly ZEN_KW_FLOAT = 40;
	public static readonly ZEN_KW_DOUBLE = 41;
	public static readonly ZEN_KW_CHAR = 42;
	public static readonly ZEN_KW_STRING = 43;
	public static readonly ZEN_KW_IF = 44;
	public static readonly ZEN_KW_ELSE = 45;
	public static readonly ZEN_KW_DO = 46;
	public static readonly ZEN_KW_WHILE = 47;
	public static readonly ZEN_KW_FOR = 48;
	public static readonly ZEN_KW_THROW = 49;
	public static readonly ZEN_KW_PANIC = 50;
	public static readonly ZEN_KW_LOCK = 51;
	public static readonly ZEN_KW_TRY = 52;
	public static readonly ZEN_KW_CATCH = 53;
	public static readonly ZEN_KW_FINALLY = 54;
	public static readonly ZEN_KW_RETURN = 55;
	public static readonly ZEN_KW_BREAK = 56;
	public static readonly ZEN_KW_CONTINUE = 57;
	public static readonly ZEN_KW_SWITCH = 58;
	public static readonly ZEN_KW_CASE = 59;
	public static readonly ZEN_KW_DEFAULT = 60;
	public static readonly ZEN_KW_IN = 61;
	public static readonly ZEN_KW_IS = 62;
	public static readonly ZEN_KW_AS = 63;
	public static readonly ZEN_KW_MATCH = 64;
	public static readonly ZEN_KW_THROWS = 65;
	public static readonly ZEN_KW_SUPER = 66;
	public static readonly ZEN_KW_THIS = 67;
	public static readonly ZEN_KW_NULL = 68;
	public static readonly ZEN_KW_TRUE = 69;
	public static readonly ZEN_KW_FALSE = 70;
	public static readonly ZEN_KW_NEW = 71;
	public static readonly IntegerLiteral = 72;
	public static readonly DecimalIntegerLiteral = 73;
	public static readonly FloatingPointLiteral = 74;
	public static readonly ZEN_T_ACLOSE = 75;
	public static readonly ZEN_T_AOPEN = 76;
	public static readonly ZEN_T_BRCLOSE = 77;
	public static readonly ZEN_T_BROPEN = 78;
	public static readonly ZEN_T_COMMA = 79;
	public static readonly ZEN_T_DOT = 80;
	public static readonly ZEN_T_SEMICOLON = 81;
	public static readonly ZEN_T_SQCLOSE = 82;
	public static readonly ZEN_T_SQOPEN = 83;
	public static readonly ZEN_T_ADD = 84;
	public static readonly ZEN_T_AND = 85;
	public static readonly ZEN_T_ASSIGN = 86;
	public static readonly ZEN_T_BACKTICK = 87;
	public static readonly ZEN_T_CAT = 88;
	public static readonly ZEN_T_COLON = 89;
	public static readonly ZEN_T_DIV = 90;
	public static readonly ZEN_T_DOLLAR = 91;
	public static readonly ZEN_T_GREATER = 92;
	public static readonly ZEN_T_LESS = 93;
	public static readonly ZEN_T_MOD = 94;
	public static readonly ZEN_T_MUL = 95;
	public static readonly ZEN_T_NOT = 96;
	public static readonly ZEN_T_OR = 97;
	public static readonly ZEN_T_QUEST = 98;
	public static readonly ZEN_T_SUB = 99;
	public static readonly ZEN_T_XOR = 100;
	public static readonly StringLiteral = 101;
	public static readonly ZEN_IDENTIFIER = 102;
	public static readonly ZEN_WS = 103;
	public static readonly ZEN_COMMENT = 104;
	public static readonly ZEN_LINE_COMMENT = 105;
	public static readonly ZEN_PREPROC_COMMENT = 106;
	public static readonly RULE_zenFile = 0;
	public static readonly RULE_zenSHLToken = 1;
	public static readonly RULE_zenSHRToken = 2;
	public static readonly RULE_zenUSHRToken = 3;
	public static readonly RULE_zenAndAndToken = 4;
	public static readonly RULE_zenCoalesceToken = 5;
	public static readonly RULE_zenDecrementToken = 6;
	public static readonly RULE_zenDot2Token = 7;
	public static readonly RULE_zenDot3Token = 8;
	public static readonly RULE_zenEqual2Token = 9;
	public static readonly RULE_zenEqual3Token = 10;
	public static readonly RULE_zenGreaterEqToken = 11;
	public static readonly RULE_zenIncrementToken = 12;
	public static readonly RULE_zenLambdaToken = 13;
	public static readonly RULE_zenLessEqToken = 14;
	public static readonly RULE_zenNotEqualToken = 15;
	public static readonly RULE_zenNotEqual2Token = 16;
	public static readonly RULE_zenOptCallToken = 17;
	public static readonly RULE_zenOrOrToken = 18;
	public static readonly RULE_zenAddAssignToken = 19;
	public static readonly RULE_zenAndAssignToken = 20;
	public static readonly RULE_zenCatAssignToken = 21;
	public static readonly RULE_zenDivAssignToken = 22;
	public static readonly RULE_zenModAssignToken = 23;
	public static readonly RULE_zenMulAssignToken = 24;
	public static readonly RULE_zenOrAssignToken = 25;
	public static readonly RULE_zenSHLAssignToken = 26;
	public static readonly RULE_zenSHRAssignToken = 27;
	public static readonly RULE_zenSubAssignToken = 28;
	public static readonly RULE_zenUSHRAssignToken = 29;
	public static readonly RULE_zenXOrAssignToken = 30;
	public static readonly RULE_zenType = 31;
	public static readonly RULE_zenTypeParams = 32;
	public static readonly RULE_zenTypeParam = 33;
	public static readonly RULE_zenTypeArguments = 34;
	public static readonly RULE_zenCallArguments = 35;
	public static readonly RULE_zenTypeArgumentsForcall = 36;
	public static readonly RULE_zenAnnotationCallArguments = 37;
	public static readonly RULE_zenAnnotations = 38;
	public static readonly RULE_zenImport = 39;
	public static readonly RULE_zenVisibleAccessModifier = 40;
	public static readonly RULE_zenAccessModifier = 41;
	public static readonly RULE_zenDeclerationModifier = 42;
	public static readonly RULE_zenMemberNonStaticModifier = 43;
	public static readonly RULE_zenMemberStaticModifier = 44;
	public static readonly RULE_zenDefinition = 45;
	public static readonly RULE_zenClass = 46;
	public static readonly RULE_zenInterface = 47;
	public static readonly RULE_zenEnum = 48;
	public static readonly RULE_zenStruct = 49;
	public static readonly RULE_zenAlias = 50;
	public static readonly RULE_zenFunction = 51;
	public static readonly RULE_zenExpansion = 52;
	public static readonly RULE_zenVariant = 53;
	public static readonly RULE_zenVariantOption = 54;
	public static readonly RULE_zenEnumConstant = 55;
	public static readonly RULE_zenDefinitionMember = 56;
	public static readonly RULE_zenFieldMember = 57;
	public static readonly RULE_zenThisMember = 58;
	public static readonly RULE_zenConstOrMethodMember = 59;
	public static readonly RULE_zenSetterMember = 60;
	public static readonly RULE_zenGetterMember = 61;
	public static readonly RULE_zenImplementsMember = 62;
	public static readonly RULE_zenCallerMember = 63;
	public static readonly RULE_zenIndexGetOperator = 64;
	public static readonly RULE_zenDestructor = 65;
	public static readonly RULE_zenOperator = 66;
	public static readonly RULE_zenEqualsOperator = 67;
	public static readonly RULE_zenCaster = 68;
	public static readonly RULE_zenContainsOperator = 69;
	public static readonly RULE_zenInnerDefinition = 70;
	public static readonly RULE_zenIterator = 71;
	public static readonly RULE_zenStaticInitializer = 72;
	public static readonly RULE_zenFunctionHeader = 73;
	public static readonly RULE_zenFunctionParameter = 74;
	public static readonly RULE_zenFunctionBodyStatement = 75;
	public static readonly RULE_zenFunctionBody = 76;
	public static readonly RULE_zenIntExpression = 77;
	public static readonly RULE_zenPrefixedIntExpression = 78;
	public static readonly RULE_zenFloatExpression = 79;
	public static readonly RULE_zenStringExpression = 80;
	public static readonly RULE_zenVariableExpression = 81;
	public static readonly RULE_zenLocalExpressionVariable = 82;
	public static readonly RULE_zenThisExpression = 83;
	public static readonly RULE_zenSuperExpression = 84;
	public static readonly RULE_zenDollarExpression = 85;
	public static readonly RULE_zenArrayExpression = 86;
	public static readonly RULE_zenMapExpression = 87;
	public static readonly RULE_zenTrueExpression = 88;
	public static readonly RULE_zenFalseExpression = 89;
	public static readonly RULE_zenNullExpression = 90;
	public static readonly RULE_zenBracketExpression = 91;
	public static readonly RULE_zenNewExpression = 92;
	public static readonly RULE_zenThrowExpression = 93;
	public static readonly RULE_zenPanicExpression = 94;
	public static readonly RULE_zenMatchExpression = 95;
	public static readonly RULE_zenBracketHandlerExpression = 96;
	public static readonly RULE_zenPrimaryExpression = 97;
	public static readonly RULE_zenPostfixExpression = 98;
	public static readonly RULE_zenUnaryExpression = 99;
	public static readonly RULE_zenMulExpression = 100;
	public static readonly RULE_zenAddExpression = 101;
	public static readonly RULE_zenShiftExpression = 102;
	public static readonly RULE_zenCompareExpression = 103;
	public static readonly RULE_zenAndExpression = 104;
	public static readonly RULE_zenXorExpression = 105;
	public static readonly RULE_zenOrExpression = 106;
	public static readonly RULE_zenAndAndExpression = 107;
	public static readonly RULE_zenOrOrExpression = 108;
	public static readonly RULE_zenConditionalExpression = 109;
	public static readonly RULE_zenAssignExpression = 110;
	public static readonly RULE_zenStatementBlock = 111;
	public static readonly RULE_zenStatementReturn = 112;
	public static readonly RULE_zenStatementVar = 113;
	public static readonly RULE_zenStatementIf = 114;
	public static readonly RULE_zenStatementFor = 115;
	public static readonly RULE_zenStatementDo = 116;
	public static readonly RULE_zenStatementWhile = 117;
	public static readonly RULE_zenStatementLock = 118;
	public static readonly RULE_zenStatementThrow = 119;
	public static readonly RULE_zenStatementTry = 120;
	public static readonly RULE_zenStatementContinue = 121;
	public static readonly RULE_zenStatementBreak = 122;
	public static readonly RULE_zenSwitchCaseStatement = 123;
	public static readonly RULE_zenSwitchStatement = 124;
	public static readonly RULE_zenStatement = 125;
	public static readonly RULE_zenAnnotatedStatement = 126;
	public static readonly RULE_zenExpressionLambda = 127;
	public static readonly RULE_zenFunctionLambda = 128;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"zenFile", "zenSHLToken", "zenSHRToken", "zenUSHRToken", "zenAndAndToken", 
		"zenCoalesceToken", "zenDecrementToken", "zenDot2Token", "zenDot3Token", 
		"zenEqual2Token", "zenEqual3Token", "zenGreaterEqToken", "zenIncrementToken", 
		"zenLambdaToken", "zenLessEqToken", "zenNotEqualToken", "zenNotEqual2Token", 
		"zenOptCallToken", "zenOrOrToken", "zenAddAssignToken", "zenAndAssignToken", 
		"zenCatAssignToken", "zenDivAssignToken", "zenModAssignToken", "zenMulAssignToken", 
		"zenOrAssignToken", "zenSHLAssignToken", "zenSHRAssignToken", "zenSubAssignToken", 
		"zenUSHRAssignToken", "zenXOrAssignToken", "zenType", "zenTypeParams", 
		"zenTypeParam", "zenTypeArguments", "zenCallArguments", "zenTypeArgumentsForcall", 
		"zenAnnotationCallArguments", "zenAnnotations", "zenImport", "zenVisibleAccessModifier", 
		"zenAccessModifier", "zenDeclerationModifier", "zenMemberNonStaticModifier", 
		"zenMemberStaticModifier", "zenDefinition", "zenClass", "zenInterface", 
		"zenEnum", "zenStruct", "zenAlias", "zenFunction", "zenExpansion", "zenVariant", 
		"zenVariantOption", "zenEnumConstant", "zenDefinitionMember", "zenFieldMember", 
		"zenThisMember", "zenConstOrMethodMember", "zenSetterMember", "zenGetterMember", 
		"zenImplementsMember", "zenCallerMember", "zenIndexGetOperator", "zenDestructor", 
		"zenOperator", "zenEqualsOperator", "zenCaster", "zenContainsOperator", 
		"zenInnerDefinition", "zenIterator", "zenStaticInitializer", "zenFunctionHeader", 
		"zenFunctionParameter", "zenFunctionBodyStatement", "zenFunctionBody", 
		"zenIntExpression", "zenPrefixedIntExpression", "zenFloatExpression", 
		"zenStringExpression", "zenVariableExpression", "zenLocalExpressionVariable", 
		"zenThisExpression", "zenSuperExpression", "zenDollarExpression", "zenArrayExpression", 
		"zenMapExpression", "zenTrueExpression", "zenFalseExpression", "zenNullExpression", 
		"zenBracketExpression", "zenNewExpression", "zenThrowExpression", "zenPanicExpression", 
		"zenMatchExpression", "zenBracketHandlerExpression", "zenPrimaryExpression", 
		"zenPostfixExpression", "zenUnaryExpression", "zenMulExpression", "zenAddExpression", 
		"zenShiftExpression", "zenCompareExpression", "zenAndExpression", "zenXorExpression", 
		"zenOrExpression", "zenAndAndExpression", "zenOrOrExpression", "zenConditionalExpression", 
		"zenAssignExpression", "zenStatementBlock", "zenStatementReturn", "zenStatementVar", 
		"zenStatementIf", "zenStatementFor", "zenStatementDo", "zenStatementWhile", 
		"zenStatementLock", "zenStatementThrow", "zenStatementTry", "zenStatementContinue", 
		"zenStatementBreak", "zenSwitchCaseStatement", "zenSwitchStatement", "zenStatement", 
		"zenAnnotatedStatement", "zenExpressionLambda", "zenFunctionLambda",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'alias'", "'class'", "'function'", "'interface'", 
		"'enum'", "'struct'", "'expand'", "'variant'", "'abstract'", "'final'", 
		"'override'", "'const'", "'private'", "'public'", "'export'", "'internal'", 
		"'static'", "'protected'", "'implicit'", "'virtual'", "'extern'", "'immutable'", 
		"'val'", "'var'", "'get'", "'implements'", "'set'", "'void'", "'bool'", 
		"'byte'", "'sbyte'", "'short'", "'ushort'", "'int'", "'uint'", "'long'", 
		"'ulong'", "'usize'", "'float'", "'double'", "'char'", "'string'", "'if'", 
		"'else'", "'do'", "'while'", "'for'", "'throw'", "'panic'", "'lock'", 
		"'try'", "'catch'", "'finally'", "'return'", "'break'", "'continue'", 
		"'switch'", "'case'", "'default'", "'in'", "'is'", "'as'", "'match'", 
		"'throws'", "'super'", "'this'", "'null'", "'true'", "'false'", "'new'", 
		undefined, undefined, undefined, "'}'", "'{'", "')'", "'('", "','", "'.'", 
		"';'", "']'", "'['", "'+'", "'&'", "'='", "'`'", "'~'", "':'", "'/'", 
		"'$'", "'>'", "'<'", "'%'", "'*'", "'!'", "'|'", "'?'", "'-'", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ZEN_KW_IMPORT", "ZEN_KW_ALIAS", "ZEN_KW_CLASS", "ZEN_KW_FUNCTION", 
		"ZEN_KW_INTERFACE", "ZEN_KW_ENUM", "ZEN_KW_STRUCT", "ZEN_KW_EXPAND", "ZEN_KW_VARIANT", 
		"ZEN_KW_ABSTRACT", "ZEN_KW_FINAL", "ZEN_KW_OVERRIDE", "ZEN_KW_CONST", 
		"ZEN_KW_PRIVATE", "ZEN_KW_PUBLIC", "ZEN_KW_EXPORT", "ZEN_KW_INTERNAL", 
		"ZEN_KW_STATIC", "ZEN_KW_PROTECTED", "ZEN_KW_IMPLICIT", "ZEN_KW_VIRTUAL", 
		"ZEN_KW_EXTERN", "ZEN_KW_IMMUTABLE", "ZEN_KW_VAL", "ZEN_KW_VAR", "ZEN_KW_GET", 
		"ZEN_KW_IMPLEMENTS", "ZEN_KW_SET", "ZEN_KW_VOID", "ZEN_KW_BOOL", "ZEN_KW_BYTE", 
		"ZEN_KW_SBYTE", "ZEN_KW_SHORT", "ZEN_KW_USHORT", "ZEN_KW_INT", "ZEN_KW_UINT", 
		"ZEN_KW_LONG", "ZEN_KW_ULONG", "ZEN_KW_USIZE", "ZEN_KW_FLOAT", "ZEN_KW_DOUBLE", 
		"ZEN_KW_CHAR", "ZEN_KW_STRING", "ZEN_KW_IF", "ZEN_KW_ELSE", "ZEN_KW_DO", 
		"ZEN_KW_WHILE", "ZEN_KW_FOR", "ZEN_KW_THROW", "ZEN_KW_PANIC", "ZEN_KW_LOCK", 
		"ZEN_KW_TRY", "ZEN_KW_CATCH", "ZEN_KW_FINALLY", "ZEN_KW_RETURN", "ZEN_KW_BREAK", 
		"ZEN_KW_CONTINUE", "ZEN_KW_SWITCH", "ZEN_KW_CASE", "ZEN_KW_DEFAULT", "ZEN_KW_IN", 
		"ZEN_KW_IS", "ZEN_KW_AS", "ZEN_KW_MATCH", "ZEN_KW_THROWS", "ZEN_KW_SUPER", 
		"ZEN_KW_THIS", "ZEN_KW_NULL", "ZEN_KW_TRUE", "ZEN_KW_FALSE", "ZEN_KW_NEW", 
		"IntegerLiteral", "DecimalIntegerLiteral", "FloatingPointLiteral", "ZEN_T_ACLOSE", 
		"ZEN_T_AOPEN", "ZEN_T_BRCLOSE", "ZEN_T_BROPEN", "ZEN_T_COMMA", "ZEN_T_DOT", 
		"ZEN_T_SEMICOLON", "ZEN_T_SQCLOSE", "ZEN_T_SQOPEN", "ZEN_T_ADD", "ZEN_T_AND", 
		"ZEN_T_ASSIGN", "ZEN_T_BACKTICK", "ZEN_T_CAT", "ZEN_T_COLON", "ZEN_T_DIV", 
		"ZEN_T_DOLLAR", "ZEN_T_GREATER", "ZEN_T_LESS", "ZEN_T_MOD", "ZEN_T_MUL", 
		"ZEN_T_NOT", "ZEN_T_OR", "ZEN_T_QUEST", "ZEN_T_SUB", "ZEN_T_XOR", "StringLiteral", 
		"ZEN_IDENTIFIER", "ZEN_WS", "ZEN_COMMENT", "ZEN_LINE_COMMENT", "ZEN_PREPROC_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ZenCodeParser._LITERAL_NAMES, ZenCodeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ZenCodeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ZenCodeParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ZenCodeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ZenCodeParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ZenCodeParser._ATN, this);
	}
	// @RuleVersion(0)
	public zenFile(): ZenFileContext {
		let _localctx: ZenFileContext = new ZenFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ZenCodeParser.RULE_zenFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZenCodeParser.ZEN_KW_IMPORT) {
				{
				{
				this.state = 258;
				this.zenImport();
				}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ALIAS) | (1 << ZenCodeParser.ZEN_KW_CLASS) | (1 << ZenCodeParser.ZEN_KW_FUNCTION) | (1 << ZenCodeParser.ZEN_KW_INTERFACE) | (1 << ZenCodeParser.ZEN_KW_ENUM) | (1 << ZenCodeParser.ZEN_KW_STRUCT) | (1 << ZenCodeParser.ZEN_KW_EXPAND) | (1 << ZenCodeParser.ZEN_KW_VARIANT) | (1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_OVERRIDE) | (1 << ZenCodeParser.ZEN_KW_CONST) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_STATIC) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN) | (1 << ZenCodeParser.ZEN_KW_VAL) | (1 << ZenCodeParser.ZEN_KW_VAR) | (1 << ZenCodeParser.ZEN_KW_GET) | (1 << ZenCodeParser.ZEN_KW_IMPLEMENTS) | (1 << ZenCodeParser.ZEN_KW_SET) | (1 << ZenCodeParser.ZEN_KW_VOID) | (1 << ZenCodeParser.ZEN_KW_BOOL) | (1 << ZenCodeParser.ZEN_KW_BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ZenCodeParser.ZEN_KW_SBYTE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_USHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_INT - 32)) | (1 << (ZenCodeParser.ZEN_KW_UINT - 32)) | (1 << (ZenCodeParser.ZEN_KW_LONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_ULONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_USIZE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FLOAT - 32)) | (1 << (ZenCodeParser.ZEN_KW_DOUBLE - 32)) | (1 << (ZenCodeParser.ZEN_KW_CHAR - 32)) | (1 << (ZenCodeParser.ZEN_KW_STRING - 32)) | (1 << (ZenCodeParser.ZEN_KW_IF - 32)) | (1 << (ZenCodeParser.ZEN_KW_DO - 32)) | (1 << (ZenCodeParser.ZEN_KW_WHILE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FOR - 32)) | (1 << (ZenCodeParser.ZEN_KW_THROW - 32)) | (1 << (ZenCodeParser.ZEN_KW_PANIC - 32)) | (1 << (ZenCodeParser.ZEN_KW_LOCK - 32)) | (1 << (ZenCodeParser.ZEN_KW_TRY - 32)) | (1 << (ZenCodeParser.ZEN_KW_RETURN - 32)) | (1 << (ZenCodeParser.ZEN_KW_BREAK - 32)) | (1 << (ZenCodeParser.ZEN_KW_CONTINUE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SWITCH - 32)) | (1 << (ZenCodeParser.ZEN_KW_IN - 32)) | (1 << (ZenCodeParser.ZEN_KW_AS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ZenCodeParser.ZEN_KW_MATCH - 64)) | (1 << (ZenCodeParser.ZEN_KW_SUPER - 64)) | (1 << (ZenCodeParser.ZEN_KW_THIS - 64)) | (1 << (ZenCodeParser.ZEN_KW_NULL - 64)) | (1 << (ZenCodeParser.ZEN_KW_TRUE - 64)) | (1 << (ZenCodeParser.ZEN_KW_FALSE - 64)) | (1 << (ZenCodeParser.ZEN_KW_NEW - 64)) | (1 << (ZenCodeParser.IntegerLiteral - 64)) | (1 << (ZenCodeParser.DecimalIntegerLiteral - 64)) | (1 << (ZenCodeParser.FloatingPointLiteral - 64)) | (1 << (ZenCodeParser.ZEN_T_AOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_BROPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_DOT - 64)) | (1 << (ZenCodeParser.ZEN_T_SQOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_ADD - 64)) | (1 << (ZenCodeParser.ZEN_T_AND - 64)) | (1 << (ZenCodeParser.ZEN_T_ASSIGN - 64)) | (1 << (ZenCodeParser.ZEN_T_CAT - 64)) | (1 << (ZenCodeParser.ZEN_T_DIV - 64)) | (1 << (ZenCodeParser.ZEN_T_DOLLAR - 64)) | (1 << (ZenCodeParser.ZEN_T_GREATER - 64)) | (1 << (ZenCodeParser.ZEN_T_LESS - 64)) | (1 << (ZenCodeParser.ZEN_T_MOD - 64)) | (1 << (ZenCodeParser.ZEN_T_MUL - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ZenCodeParser.ZEN_T_NOT - 96)) | (1 << (ZenCodeParser.ZEN_T_OR - 96)) | (1 << (ZenCodeParser.ZEN_T_SUB - 96)) | (1 << (ZenCodeParser.ZEN_T_XOR - 96)) | (1 << (ZenCodeParser.StringLiteral - 96)) | (1 << (ZenCodeParser.ZEN_IDENTIFIER - 96)))) !== 0)) {
				{
				this.state = 266;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 264;
					this.zenDefinition();
					}
					break;

				case 2:
					{
					this.state = 265;
					this.zenStatement();
					}
					break;
				}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 271;
			this.match(ZenCodeParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenSHLToken(): ZenSHLTokenContext {
		let _localctx: ZenSHLTokenContext = new ZenSHLTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ZenCodeParser.RULE_zenSHLToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_LESS);
			this.state = 274;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_LESS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenSHRToken(): ZenSHRTokenContext {
		let _localctx: ZenSHRTokenContext = new ZenSHRTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ZenCodeParser.RULE_zenSHRToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_GREATER);
			this.state = 277;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_GREATER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenUSHRToken(): ZenUSHRTokenContext {
		let _localctx: ZenUSHRTokenContext = new ZenUSHRTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ZenCodeParser.RULE_zenUSHRToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_GREATER);
			this.state = 280;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_GREATER);
			this.state = 281;
			_localctx._t3 = this.match(ZenCodeParser.ZEN_T_GREATER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAndAndToken(): ZenAndAndTokenContext {
		let _localctx: ZenAndAndTokenContext = new ZenAndAndTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ZenCodeParser.RULE_zenAndAndToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_AND);
			this.state = 284;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_AND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenCoalesceToken(): ZenCoalesceTokenContext {
		let _localctx: ZenCoalesceTokenContext = new ZenCoalesceTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ZenCodeParser.RULE_zenCoalesceToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_QUEST);
			this.state = 287;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_QUEST);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenDecrementToken(): ZenDecrementTokenContext {
		let _localctx: ZenDecrementTokenContext = new ZenDecrementTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ZenCodeParser.RULE_zenDecrementToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_SUB);
			this.state = 290;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_SUB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenDot2Token(): ZenDot2TokenContext {
		let _localctx: ZenDot2TokenContext = new ZenDot2TokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ZenCodeParser.RULE_zenDot2Token);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_DOT);
			this.state = 293;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenDot3Token(): ZenDot3TokenContext {
		let _localctx: ZenDot3TokenContext = new ZenDot3TokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ZenCodeParser.RULE_zenDot3Token);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_DOT);
			this.state = 296;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_DOT);
			this.state = 297;
			_localctx._t3 = this.match(ZenCodeParser.ZEN_T_DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenEqual2Token(): ZenEqual2TokenContext {
		let _localctx: ZenEqual2TokenContext = new ZenEqual2TokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ZenCodeParser.RULE_zenEqual2Token);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			this.state = 300;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenEqual3Token(): ZenEqual3TokenContext {
		let _localctx: ZenEqual3TokenContext = new ZenEqual3TokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ZenCodeParser.RULE_zenEqual3Token);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			this.state = 303;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			this.state = 304;
			_localctx._t3 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenGreaterEqToken(): ZenGreaterEqTokenContext {
		let _localctx: ZenGreaterEqTokenContext = new ZenGreaterEqTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ZenCodeParser.RULE_zenGreaterEqToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_GREATER);
			this.state = 307;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenIncrementToken(): ZenIncrementTokenContext {
		let _localctx: ZenIncrementTokenContext = new ZenIncrementTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ZenCodeParser.RULE_zenIncrementToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_ADD);
			this.state = 310;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ADD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenLambdaToken(): ZenLambdaTokenContext {
		let _localctx: ZenLambdaTokenContext = new ZenLambdaTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ZenCodeParser.RULE_zenLambdaToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			this.state = 313;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_GREATER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenLessEqToken(): ZenLessEqTokenContext {
		let _localctx: ZenLessEqTokenContext = new ZenLessEqTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ZenCodeParser.RULE_zenLessEqToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_LESS);
			this.state = 316;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenNotEqualToken(): ZenNotEqualTokenContext {
		let _localctx: ZenNotEqualTokenContext = new ZenNotEqualTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ZenCodeParser.RULE_zenNotEqualToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_NOT);
			this.state = 319;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenNotEqual2Token(): ZenNotEqual2TokenContext {
		let _localctx: ZenNotEqual2TokenContext = new ZenNotEqual2TokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ZenCodeParser.RULE_zenNotEqual2Token);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_NOT);
			this.state = 322;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			this.state = 323;
			_localctx._t3 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenOptCallToken(): ZenOptCallTokenContext {
		let _localctx: ZenOptCallTokenContext = new ZenOptCallTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ZenCodeParser.RULE_zenOptCallToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_QUEST);
			this.state = 326;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenOrOrToken(): ZenOrOrTokenContext {
		let _localctx: ZenOrOrTokenContext = new ZenOrOrTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ZenCodeParser.RULE_zenOrOrToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_OR);
			this.state = 329;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_OR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAddAssignToken(): ZenAddAssignTokenContext {
		let _localctx: ZenAddAssignTokenContext = new ZenAddAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ZenCodeParser.RULE_zenAddAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_ADD);
			this.state = 332;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAndAssignToken(): ZenAndAssignTokenContext {
		let _localctx: ZenAndAssignTokenContext = new ZenAndAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ZenCodeParser.RULE_zenAndAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_AND);
			this.state = 335;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenCatAssignToken(): ZenCatAssignTokenContext {
		let _localctx: ZenCatAssignTokenContext = new ZenCatAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ZenCodeParser.RULE_zenCatAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_CAT);
			this.state = 338;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenDivAssignToken(): ZenDivAssignTokenContext {
		let _localctx: ZenDivAssignTokenContext = new ZenDivAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ZenCodeParser.RULE_zenDivAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_DIV);
			this.state = 341;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenModAssignToken(): ZenModAssignTokenContext {
		let _localctx: ZenModAssignTokenContext = new ZenModAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ZenCodeParser.RULE_zenModAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_MOD);
			this.state = 344;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenMulAssignToken(): ZenMulAssignTokenContext {
		let _localctx: ZenMulAssignTokenContext = new ZenMulAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ZenCodeParser.RULE_zenMulAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_MUL);
			this.state = 347;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenOrAssignToken(): ZenOrAssignTokenContext {
		let _localctx: ZenOrAssignTokenContext = new ZenOrAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ZenCodeParser.RULE_zenOrAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_OR);
			this.state = 350;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenSHLAssignToken(): ZenSHLAssignTokenContext {
		let _localctx: ZenSHLAssignTokenContext = new ZenSHLAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ZenCodeParser.RULE_zenSHLAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_LESS);
			this.state = 353;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_LESS);
			this.state = 354;
			_localctx._t3 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenSHRAssignToken(): ZenSHRAssignTokenContext {
		let _localctx: ZenSHRAssignTokenContext = new ZenSHRAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ZenCodeParser.RULE_zenSHRAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_GREATER);
			this.state = 357;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_GREATER);
			this.state = 358;
			_localctx._t3 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenSubAssignToken(): ZenSubAssignTokenContext {
		let _localctx: ZenSubAssignTokenContext = new ZenSubAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ZenCodeParser.RULE_zenSubAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_SUB);
			this.state = 361;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenUSHRAssignToken(): ZenUSHRAssignTokenContext {
		let _localctx: ZenUSHRAssignTokenContext = new ZenUSHRAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ZenCodeParser.RULE_zenUSHRAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_GREATER);
			this.state = 364;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_GREATER);
			this.state = 365;
			_localctx._t3 = this.match(ZenCodeParser.ZEN_T_GREATER);
			this.state = 366;
			_localctx._t4 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenXOrAssignToken(): ZenXOrAssignTokenContext {
		let _localctx: ZenXOrAssignTokenContext = new ZenXOrAssignTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ZenCodeParser.RULE_zenXOrAssignToken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			_localctx._t1 = this.match(ZenCodeParser.ZEN_T_XOR);
			this.state = 369;
			_localctx._t2 = this.match(ZenCodeParser.ZEN_T_ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenType(): ZenTypeContext {
		let _localctx: ZenTypeContext = new ZenTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ZenCodeParser.RULE_zenType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_KW_VOID:
				{
				this.state = 371;
				this.match(ZenCodeParser.ZEN_KW_VOID);
				}
				break;
			case ZenCodeParser.ZEN_KW_BOOL:
				{
				this.state = 372;
				this.match(ZenCodeParser.ZEN_KW_BOOL);
				}
				break;
			case ZenCodeParser.ZEN_KW_BYTE:
				{
				this.state = 373;
				this.match(ZenCodeParser.ZEN_KW_BYTE);
				}
				break;
			case ZenCodeParser.ZEN_KW_SBYTE:
				{
				this.state = 374;
				this.match(ZenCodeParser.ZEN_KW_SBYTE);
				}
				break;
			case ZenCodeParser.ZEN_KW_SHORT:
				{
				this.state = 375;
				this.match(ZenCodeParser.ZEN_KW_SHORT);
				}
				break;
			case ZenCodeParser.ZEN_KW_USHORT:
				{
				this.state = 376;
				this.match(ZenCodeParser.ZEN_KW_USHORT);
				}
				break;
			case ZenCodeParser.ZEN_KW_INT:
				{
				this.state = 377;
				this.match(ZenCodeParser.ZEN_KW_INT);
				}
				break;
			case ZenCodeParser.ZEN_KW_UINT:
				{
				this.state = 378;
				this.match(ZenCodeParser.ZEN_KW_UINT);
				}
				break;
			case ZenCodeParser.ZEN_KW_LONG:
				{
				this.state = 379;
				this.match(ZenCodeParser.ZEN_KW_LONG);
				}
				break;
			case ZenCodeParser.ZEN_KW_ULONG:
				{
				this.state = 380;
				this.match(ZenCodeParser.ZEN_KW_ULONG);
				}
				break;
			case ZenCodeParser.ZEN_KW_USIZE:
				{
				this.state = 381;
				this.match(ZenCodeParser.ZEN_KW_USIZE);
				}
				break;
			case ZenCodeParser.ZEN_KW_FLOAT:
				{
				this.state = 382;
				this.match(ZenCodeParser.ZEN_KW_FLOAT);
				}
				break;
			case ZenCodeParser.ZEN_KW_DOUBLE:
				{
				this.state = 383;
				this.match(ZenCodeParser.ZEN_KW_DOUBLE);
				}
				break;
			case ZenCodeParser.ZEN_KW_CHAR:
				{
				this.state = 384;
				this.match(ZenCodeParser.ZEN_KW_CHAR);
				}
				break;
			case ZenCodeParser.ZEN_KW_STRING:
				{
				this.state = 385;
				this.match(ZenCodeParser.ZEN_KW_STRING);
				}
				break;
			case ZenCodeParser.ZEN_KW_FUNCTION:
				{
				this.state = 386;
				this.match(ZenCodeParser.ZEN_KW_FUNCTION);
				this.state = 387;
				this.zenFunctionHeader();
				}
				break;
			case ZenCodeParser.ZEN_IDENTIFIER:
				{
				{
				this.state = 388;
				this.match(ZenCodeParser.ZEN_IDENTIFIER);
				this.state = 390;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 389;
					this.zenTypeArguments();
					}
					break;
				}
				this.state = 399;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 392;
						this.match(ZenCodeParser.ZEN_T_DOT);
						this.state = 393;
						this.match(ZenCodeParser.ZEN_IDENTIFIER);
						this.state = 395;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
						case 1:
							{
							this.state = 394;
							this.zenTypeArguments();
							}
							break;
						}
						}
						}
					}
					this.state = 401;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 428;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 426;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ZenCodeParser.ZEN_T_DOT:
						{
						{
						this.state = 404;
						this.zenDot2Token();
						this.state = 405;
						this.zenType();
						}
						}
						break;
					case ZenCodeParser.ZEN_T_SQOPEN:
					case ZenCodeParser.ZEN_T_LESS:
						{
						this.state = 423;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
						case 1:
							{
							this.state = 407;
							this.match(ZenCodeParser.ZEN_T_SQOPEN);
							this.state = 411;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === ZenCodeParser.ZEN_T_COMMA) {
								{
								{
								this.state = 408;
								this.match(ZenCodeParser.ZEN_T_COMMA);
								}
								}
								this.state = 413;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 414;
							this.match(ZenCodeParser.ZEN_T_SQCLOSE);
							}
							break;

						case 2:
							{
							this.state = 415;
							this.match(ZenCodeParser.ZEN_T_LESS);
							this.state = 416;
							this.zenTypeParam();
							this.state = 417;
							this.match(ZenCodeParser.ZEN_T_GREATER);
							}
							break;

						case 3:
							{
							this.state = 419;
							this.match(ZenCodeParser.ZEN_T_SQOPEN);
							this.state = 420;
							this.zenType();
							this.state = 421;
							this.match(ZenCodeParser.ZEN_T_SQCLOSE);
							}
							break;
						}
						}
						break;
					case ZenCodeParser.ZEN_T_QUEST:
						{
						this.state = 425;
						this.match(ZenCodeParser.ZEN_T_QUEST);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 430;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenTypeParams(): ZenTypeParamsContext {
		let _localctx: ZenTypeParamsContext = new ZenTypeParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ZenCodeParser.RULE_zenTypeParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(ZenCodeParser.ZEN_T_LESS);
			this.state = 432;
			this.zenTypeParam();
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZenCodeParser.ZEN_T_COMMA) {
				{
				{
				this.state = 433;
				this.match(ZenCodeParser.ZEN_T_COMMA);
				this.state = 434;
				this.zenTypeParam();
				}
				}
				this.state = 439;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 440;
			this.match(ZenCodeParser.ZEN_T_GREATER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenTypeParam(): ZenTypeParamContext {
		let _localctx: ZenTypeParamContext = new ZenTypeParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ZenCodeParser.RULE_zenTypeParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZenCodeParser.ZEN_T_COLON) {
				{
				{
				this.state = 443;
				this.match(ZenCodeParser.ZEN_T_COLON);
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ZenCodeParser.ZEN_KW_SUPER) {
					{
					this.state = 444;
					this.match(ZenCodeParser.ZEN_KW_SUPER);
					}
				}

				this.state = 447;
				this.zenType();
				}
				}
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenTypeArguments(): ZenTypeArgumentsContext {
		let _localctx: ZenTypeArgumentsContext = new ZenTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ZenCodeParser.RULE_zenTypeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(ZenCodeParser.ZEN_T_LESS);
			this.state = 454;
			this.zenType();
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZenCodeParser.ZEN_T_COMMA) {
				{
				{
				this.state = 455;
				this.match(ZenCodeParser.ZEN_T_COMMA);
				this.state = 456;
				this.zenType();
				}
				}
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 462;
			this.match(ZenCodeParser.ZEN_T_GREATER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenCallArguments(): ZenCallArgumentsContext {
		let _localctx: ZenCallArgumentsContext = new ZenCallArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ZenCodeParser.RULE_zenCallArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_LESS) {
				{
				this.state = 464;
				this.zenTypeArgumentsForcall();
				}
			}

			this.state = 467;
			this.match(ZenCodeParser.ZEN_T_BROPEN);
			this.state = 479;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_T_BRCLOSE:
				{
				this.state = 468;
				this.match(ZenCodeParser.ZEN_T_BRCLOSE);
				}
				break;
			case ZenCodeParser.ZEN_KW_FUNCTION:
			case ZenCodeParser.ZEN_KW_VOID:
			case ZenCodeParser.ZEN_KW_BOOL:
			case ZenCodeParser.ZEN_KW_BYTE:
			case ZenCodeParser.ZEN_KW_SBYTE:
			case ZenCodeParser.ZEN_KW_SHORT:
			case ZenCodeParser.ZEN_KW_USHORT:
			case ZenCodeParser.ZEN_KW_INT:
			case ZenCodeParser.ZEN_KW_UINT:
			case ZenCodeParser.ZEN_KW_LONG:
			case ZenCodeParser.ZEN_KW_ULONG:
			case ZenCodeParser.ZEN_KW_USIZE:
			case ZenCodeParser.ZEN_KW_FLOAT:
			case ZenCodeParser.ZEN_KW_DOUBLE:
			case ZenCodeParser.ZEN_KW_CHAR:
			case ZenCodeParser.ZEN_KW_STRING:
			case ZenCodeParser.ZEN_KW_THROW:
			case ZenCodeParser.ZEN_KW_PANIC:
			case ZenCodeParser.ZEN_KW_TRY:
			case ZenCodeParser.ZEN_KW_MATCH:
			case ZenCodeParser.ZEN_KW_SUPER:
			case ZenCodeParser.ZEN_KW_THIS:
			case ZenCodeParser.ZEN_KW_NULL:
			case ZenCodeParser.ZEN_KW_TRUE:
			case ZenCodeParser.ZEN_KW_FALSE:
			case ZenCodeParser.ZEN_KW_NEW:
			case ZenCodeParser.IntegerLiteral:
			case ZenCodeParser.DecimalIntegerLiteral:
			case ZenCodeParser.FloatingPointLiteral:
			case ZenCodeParser.ZEN_T_AOPEN:
			case ZenCodeParser.ZEN_T_BROPEN:
			case ZenCodeParser.ZEN_T_SQOPEN:
			case ZenCodeParser.ZEN_T_ADD:
			case ZenCodeParser.ZEN_T_CAT:
			case ZenCodeParser.ZEN_T_DOLLAR:
			case ZenCodeParser.ZEN_T_LESS:
			case ZenCodeParser.ZEN_T_NOT:
			case ZenCodeParser.ZEN_T_SUB:
			case ZenCodeParser.StringLiteral:
			case ZenCodeParser.ZEN_IDENTIFIER:
				{
				this.state = 469;
				this.zenAssignExpression();
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZenCodeParser.ZEN_T_COMMA) {
					{
					{
					this.state = 470;
					this.match(ZenCodeParser.ZEN_T_COMMA);
					this.state = 471;
					this.zenAssignExpression();
					}
					}
					this.state = 476;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 477;
				this.match(ZenCodeParser.ZEN_T_BRCLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenTypeArgumentsForcall(): ZenTypeArgumentsForcallContext {
		let _localctx: ZenTypeArgumentsForcallContext = new ZenTypeArgumentsForcallContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ZenCodeParser.RULE_zenTypeArgumentsForcall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 481;
			this.match(ZenCodeParser.ZEN_T_LESS);
			this.state = 482;
			this.zenType();
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZenCodeParser.ZEN_T_COMMA) {
				{
				{
				this.state = 483;
				this.match(ZenCodeParser.ZEN_T_COMMA);
				this.state = 484;
				this.zenType();
				}
				}
				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 490;
			this.match(ZenCodeParser.ZEN_T_GREATER);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAnnotationCallArguments(): ZenAnnotationCallArgumentsContext {
		let _localctx: ZenAnnotationCallArgumentsContext = new ZenAnnotationCallArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ZenCodeParser.RULE_zenAnnotationCallArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_LESS) {
				{
				this.state = 492;
				this.zenTypeArgumentsForcall();
				}
			}

			{
			this.state = 495;
			this.match(ZenCodeParser.ZEN_T_BROPEN);
			this.state = 496;
			this.zenAssignExpression();
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZenCodeParser.ZEN_T_COMMA) {
				{
				{
				this.state = 497;
				this.match(ZenCodeParser.ZEN_T_COMMA);
				this.state = 498;
				this.zenAssignExpression();
				}
				}
				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 504;
			this.match(ZenCodeParser.ZEN_T_BRCLOSE);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAnnotations(): ZenAnnotationsContext {
		let _localctx: ZenAnnotationsContext = new ZenAnnotationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ZenCodeParser.RULE_zenAnnotations);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 506;
					this.match(ZenCodeParser.ZEN_T_SQOPEN);
					this.state = 507;
					this.match(ZenCodeParser.ZEN_IDENTIFIER);
					this.state = 509;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ZenCodeParser.ZEN_T_BROPEN || _la === ZenCodeParser.ZEN_T_LESS) {
						{
						this.state = 508;
						this.zenAnnotationCallArguments();
						}
					}

					this.state = 511;
					this.match(ZenCodeParser.ZEN_T_SQCLOSE);
					}
					}
				}
				this.state = 516;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenImport(): ZenImportContext {
		let _localctx: ZenImportContext = new ZenImportContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ZenCodeParser.RULE_zenImport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(ZenCodeParser.ZEN_KW_IMPORT);
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_DOT) {
				{
				this.state = 518;
				this.match(ZenCodeParser.ZEN_T_DOT);
				}
			}

			this.state = 521;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZenCodeParser.ZEN_T_DOT) {
				{
				{
				this.state = 522;
				this.match(ZenCodeParser.ZEN_T_DOT);
				this.state = 523;
				this.match(ZenCodeParser.ZEN_IDENTIFIER);
				}
				}
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_KW_AS) {
				{
				this.state = 529;
				this.match(ZenCodeParser.ZEN_KW_AS);
				this.state = 530;
				this.match(ZenCodeParser.ZEN_IDENTIFIER);
				}
			}

			this.state = 533;
			this.match(ZenCodeParser.ZEN_T_SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenVisibleAccessModifier(): ZenVisibleAccessModifierContext {
		let _localctx: ZenVisibleAccessModifierContext = new ZenVisibleAccessModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ZenCodeParser.RULE_zenVisibleAccessModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			_la = this._input.LA(1);
			if (!(_la === ZenCodeParser.ZEN_KW_PUBLIC || _la === ZenCodeParser.ZEN_KW_PROTECTED)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAccessModifier(): ZenAccessModifierContext {
		let _localctx: ZenAccessModifierContext = new ZenAccessModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ZenCodeParser.RULE_zenAccessModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_KW_PUBLIC:
			case ZenCodeParser.ZEN_KW_PROTECTED:
				{
				this.state = 537;
				this.zenVisibleAccessModifier();
				}
				break;
			case ZenCodeParser.ZEN_KW_PRIVATE:
				{
				this.state = 538;
				this.match(ZenCodeParser.ZEN_KW_PRIVATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenDeclerationModifier(): ZenDeclerationModifierContext {
		let _localctx: ZenDeclerationModifierContext = new ZenDeclerationModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ZenCodeParser.RULE_zenDeclerationModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_KW_PRIVATE:
			case ZenCodeParser.ZEN_KW_PUBLIC:
			case ZenCodeParser.ZEN_KW_PROTECTED:
				{
				this.state = 541;
				this.zenAccessModifier();
				}
				break;
			case ZenCodeParser.ZEN_KW_INTERNAL:
				{
				this.state = 542;
				this.match(ZenCodeParser.ZEN_KW_INTERNAL);
				}
				break;
			case ZenCodeParser.ZEN_KW_EXTERN:
				{
				this.state = 543;
				this.match(ZenCodeParser.ZEN_KW_EXTERN);
				}
				break;
			case ZenCodeParser.ZEN_KW_ABSTRACT:
				{
				this.state = 544;
				this.match(ZenCodeParser.ZEN_KW_ABSTRACT);
				}
				break;
			case ZenCodeParser.ZEN_KW_FINAL:
				{
				this.state = 545;
				this.match(ZenCodeParser.ZEN_KW_FINAL);
				}
				break;
			case ZenCodeParser.ZEN_KW_IMPLICIT:
				{
				this.state = 546;
				this.match(ZenCodeParser.ZEN_KW_IMPLICIT);
				}
				break;
			case ZenCodeParser.ZEN_KW_VIRTUAL:
				{
				this.state = 547;
				this.match(ZenCodeParser.ZEN_KW_VIRTUAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenMemberNonStaticModifier(): ZenMemberNonStaticModifierContext {
		let _localctx: ZenMemberNonStaticModifierContext = new ZenMemberNonStaticModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ZenCodeParser.RULE_zenMemberNonStaticModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_KW_INTERNAL:
				{
				this.state = 550;
				this.match(ZenCodeParser.ZEN_KW_INTERNAL);
				}
				break;
			case ZenCodeParser.ZEN_KW_PRIVATE:
			case ZenCodeParser.ZEN_KW_PUBLIC:
			case ZenCodeParser.ZEN_KW_PROTECTED:
				{
				this.state = 551;
				this.zenAccessModifier();
				}
				break;
			case ZenCodeParser.ZEN_KW_CONST:
				{
				this.state = 552;
				this.match(ZenCodeParser.ZEN_KW_CONST);
				}
				break;
			case ZenCodeParser.ZEN_KW_ABSTRACT:
				{
				this.state = 553;
				this.match(ZenCodeParser.ZEN_KW_ABSTRACT);
				}
				break;
			case ZenCodeParser.ZEN_KW_FINAL:
				{
				this.state = 554;
				this.match(ZenCodeParser.ZEN_KW_FINAL);
				}
				break;
			case ZenCodeParser.ZEN_KW_IMPLICIT:
				{
				this.state = 555;
				this.match(ZenCodeParser.ZEN_KW_IMPLICIT);
				}
				break;
			case ZenCodeParser.ZEN_KW_EXTERN:
				{
				this.state = 556;
				this.match(ZenCodeParser.ZEN_KW_EXTERN);
				}
				break;
			case ZenCodeParser.ZEN_KW_OVERRIDE:
				{
				this.state = 557;
				this.match(ZenCodeParser.ZEN_KW_OVERRIDE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenMemberStaticModifier(): ZenMemberStaticModifierContext {
		let _localctx: ZenMemberStaticModifierContext = new ZenMemberStaticModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ZenCodeParser.RULE_zenMemberStaticModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_KW_INTERNAL:
				{
				this.state = 560;
				this.match(ZenCodeParser.ZEN_KW_INTERNAL);
				}
				break;
			case ZenCodeParser.ZEN_KW_PRIVATE:
			case ZenCodeParser.ZEN_KW_PUBLIC:
			case ZenCodeParser.ZEN_KW_PROTECTED:
				{
				this.state = 561;
				this.zenAccessModifier();
				}
				break;
			case ZenCodeParser.ZEN_KW_CONST:
				{
				this.state = 562;
				this.match(ZenCodeParser.ZEN_KW_CONST);
				}
				break;
			case ZenCodeParser.ZEN_KW_ABSTRACT:
				{
				this.state = 563;
				this.match(ZenCodeParser.ZEN_KW_ABSTRACT);
				}
				break;
			case ZenCodeParser.ZEN_KW_FINAL:
				{
				this.state = 564;
				this.match(ZenCodeParser.ZEN_KW_FINAL);
				}
				break;
			case ZenCodeParser.ZEN_KW_STATIC:
				{
				this.state = 565;
				this.match(ZenCodeParser.ZEN_KW_STATIC);
				}
				break;
			case ZenCodeParser.ZEN_KW_IMPLICIT:
				{
				this.state = 566;
				this.match(ZenCodeParser.ZEN_KW_IMPLICIT);
				}
				break;
			case ZenCodeParser.ZEN_KW_EXTERN:
				{
				this.state = 567;
				this.match(ZenCodeParser.ZEN_KW_EXTERN);
				}
				break;
			case ZenCodeParser.ZEN_KW_OVERRIDE:
				{
				this.state = 568;
				this.match(ZenCodeParser.ZEN_KW_OVERRIDE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenDefinition(): ZenDefinitionContext {
		let _localctx: ZenDefinitionContext = new ZenDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ZenCodeParser.RULE_zenDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this.zenAnnotations();
			this.state = 580;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 572;
				this.zenClass();
				}
				break;

			case 2:
				{
				this.state = 573;
				this.zenInterface();
				}
				break;

			case 3:
				{
				this.state = 574;
				this.zenEnum();
				}
				break;

			case 4:
				{
				this.state = 575;
				this.zenStruct();
				}
				break;

			case 5:
				{
				this.state = 576;
				this.zenAlias();
				}
				break;

			case 6:
				{
				this.state = 577;
				this.zenFunction();
				}
				break;

			case 7:
				{
				this.state = 578;
				this.zenExpansion();
				}
				break;

			case 8:
				{
				this.state = 579;
				this.zenVariant();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenClass(): ZenClassContext {
		let _localctx: ZenClassContext = new ZenClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ZenCodeParser.RULE_zenClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN))) !== 0)) {
				{
				{
				this.state = 582;
				this.zenDeclerationModifier();
				}
				}
				this.state = 587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 588;
			this.match(ZenCodeParser.ZEN_KW_CLASS);
			this.state = 589;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_LESS) {
				{
				this.state = 590;
				this.zenTypeParams();
				}
			}

			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_COLON) {
				{
				this.state = 593;
				this.match(ZenCodeParser.ZEN_T_COLON);
				this.state = 594;
				this.zenType();
				}
			}

			this.state = 597;
			this.match(ZenCodeParser.ZEN_T_AOPEN);
			this.state = 606;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 598;
				this.match(ZenCodeParser.ZEN_T_ACLOSE);
				}
				break;

			case 2:
				{
				this.state = 602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ALIAS) | (1 << ZenCodeParser.ZEN_KW_CLASS) | (1 << ZenCodeParser.ZEN_KW_FUNCTION) | (1 << ZenCodeParser.ZEN_KW_INTERFACE) | (1 << ZenCodeParser.ZEN_KW_ENUM) | (1 << ZenCodeParser.ZEN_KW_STRUCT) | (1 << ZenCodeParser.ZEN_KW_EXPAND) | (1 << ZenCodeParser.ZEN_KW_VARIANT) | (1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_OVERRIDE) | (1 << ZenCodeParser.ZEN_KW_CONST) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_STATIC) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN) | (1 << ZenCodeParser.ZEN_KW_VAL) | (1 << ZenCodeParser.ZEN_KW_VAR) | (1 << ZenCodeParser.ZEN_KW_GET) | (1 << ZenCodeParser.ZEN_KW_IMPLEMENTS) | (1 << ZenCodeParser.ZEN_KW_SET) | (1 << ZenCodeParser.ZEN_KW_VOID) | (1 << ZenCodeParser.ZEN_KW_BOOL) | (1 << ZenCodeParser.ZEN_KW_BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ZenCodeParser.ZEN_KW_SBYTE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_USHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_INT - 32)) | (1 << (ZenCodeParser.ZEN_KW_UINT - 32)) | (1 << (ZenCodeParser.ZEN_KW_LONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_ULONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_USIZE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FLOAT - 32)) | (1 << (ZenCodeParser.ZEN_KW_DOUBLE - 32)) | (1 << (ZenCodeParser.ZEN_KW_CHAR - 32)) | (1 << (ZenCodeParser.ZEN_KW_STRING - 32)) | (1 << (ZenCodeParser.ZEN_KW_IF - 32)) | (1 << (ZenCodeParser.ZEN_KW_DO - 32)) | (1 << (ZenCodeParser.ZEN_KW_WHILE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FOR - 32)) | (1 << (ZenCodeParser.ZEN_KW_THROW - 32)) | (1 << (ZenCodeParser.ZEN_KW_PANIC - 32)) | (1 << (ZenCodeParser.ZEN_KW_LOCK - 32)) | (1 << (ZenCodeParser.ZEN_KW_TRY - 32)) | (1 << (ZenCodeParser.ZEN_KW_RETURN - 32)) | (1 << (ZenCodeParser.ZEN_KW_BREAK - 32)) | (1 << (ZenCodeParser.ZEN_KW_CONTINUE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SWITCH - 32)) | (1 << (ZenCodeParser.ZEN_KW_IN - 32)) | (1 << (ZenCodeParser.ZEN_KW_AS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ZenCodeParser.ZEN_KW_MATCH - 64)) | (1 << (ZenCodeParser.ZEN_KW_SUPER - 64)) | (1 << (ZenCodeParser.ZEN_KW_THIS - 64)) | (1 << (ZenCodeParser.ZEN_KW_NULL - 64)) | (1 << (ZenCodeParser.ZEN_KW_TRUE - 64)) | (1 << (ZenCodeParser.ZEN_KW_FALSE - 64)) | (1 << (ZenCodeParser.ZEN_KW_NEW - 64)) | (1 << (ZenCodeParser.IntegerLiteral - 64)) | (1 << (ZenCodeParser.DecimalIntegerLiteral - 64)) | (1 << (ZenCodeParser.FloatingPointLiteral - 64)) | (1 << (ZenCodeParser.ZEN_T_AOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_BROPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_DOT - 64)) | (1 << (ZenCodeParser.ZEN_T_SQOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_ADD - 64)) | (1 << (ZenCodeParser.ZEN_T_AND - 64)) | (1 << (ZenCodeParser.ZEN_T_ASSIGN - 64)) | (1 << (ZenCodeParser.ZEN_T_CAT - 64)) | (1 << (ZenCodeParser.ZEN_T_DIV - 64)) | (1 << (ZenCodeParser.ZEN_T_DOLLAR - 64)) | (1 << (ZenCodeParser.ZEN_T_GREATER - 64)) | (1 << (ZenCodeParser.ZEN_T_LESS - 64)) | (1 << (ZenCodeParser.ZEN_T_MOD - 64)) | (1 << (ZenCodeParser.ZEN_T_MUL - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ZenCodeParser.ZEN_T_NOT - 96)) | (1 << (ZenCodeParser.ZEN_T_OR - 96)) | (1 << (ZenCodeParser.ZEN_T_SUB - 96)) | (1 << (ZenCodeParser.ZEN_T_XOR - 96)) | (1 << (ZenCodeParser.StringLiteral - 96)) | (1 << (ZenCodeParser.ZEN_IDENTIFIER - 96)))) !== 0)) {
					{
					{
					this.state = 599;
					this.zenDefinitionMember();
					}
					}
					this.state = 604;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 605;
				this.match(ZenCodeParser.ZEN_T_ACLOSE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenInterface(): ZenInterfaceContext {
		let _localctx: ZenInterfaceContext = new ZenInterfaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ZenCodeParser.RULE_zenInterface);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN))) !== 0)) {
				{
				{
				this.state = 608;
				this.zenDeclerationModifier();
				}
				}
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 614;
			this.match(ZenCodeParser.ZEN_KW_INTERFACE);
			this.state = 615;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_LESS) {
				{
				this.state = 616;
				this.zenTypeParams();
				}
			}

			this.state = 628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_COLON) {
				{
				this.state = 619;
				this.match(ZenCodeParser.ZEN_T_COLON);
				this.state = 620;
				this.zenType();
				this.state = 625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZenCodeParser.ZEN_T_COMMA) {
					{
					{
					this.state = 621;
					this.match(ZenCodeParser.ZEN_T_COMMA);
					this.state = 622;
					this.zenType();
					}
					}
					this.state = 627;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 630;
			this.match(ZenCodeParser.ZEN_T_AOPEN);
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ALIAS) | (1 << ZenCodeParser.ZEN_KW_CLASS) | (1 << ZenCodeParser.ZEN_KW_FUNCTION) | (1 << ZenCodeParser.ZEN_KW_INTERFACE) | (1 << ZenCodeParser.ZEN_KW_ENUM) | (1 << ZenCodeParser.ZEN_KW_STRUCT) | (1 << ZenCodeParser.ZEN_KW_EXPAND) | (1 << ZenCodeParser.ZEN_KW_VARIANT) | (1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_OVERRIDE) | (1 << ZenCodeParser.ZEN_KW_CONST) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_STATIC) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN) | (1 << ZenCodeParser.ZEN_KW_VAL) | (1 << ZenCodeParser.ZEN_KW_VAR) | (1 << ZenCodeParser.ZEN_KW_GET) | (1 << ZenCodeParser.ZEN_KW_IMPLEMENTS) | (1 << ZenCodeParser.ZEN_KW_SET) | (1 << ZenCodeParser.ZEN_KW_VOID) | (1 << ZenCodeParser.ZEN_KW_BOOL) | (1 << ZenCodeParser.ZEN_KW_BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ZenCodeParser.ZEN_KW_SBYTE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_USHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_INT - 32)) | (1 << (ZenCodeParser.ZEN_KW_UINT - 32)) | (1 << (ZenCodeParser.ZEN_KW_LONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_ULONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_USIZE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FLOAT - 32)) | (1 << (ZenCodeParser.ZEN_KW_DOUBLE - 32)) | (1 << (ZenCodeParser.ZEN_KW_CHAR - 32)) | (1 << (ZenCodeParser.ZEN_KW_STRING - 32)) | (1 << (ZenCodeParser.ZEN_KW_IF - 32)) | (1 << (ZenCodeParser.ZEN_KW_DO - 32)) | (1 << (ZenCodeParser.ZEN_KW_WHILE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FOR - 32)) | (1 << (ZenCodeParser.ZEN_KW_THROW - 32)) | (1 << (ZenCodeParser.ZEN_KW_PANIC - 32)) | (1 << (ZenCodeParser.ZEN_KW_LOCK - 32)) | (1 << (ZenCodeParser.ZEN_KW_TRY - 32)) | (1 << (ZenCodeParser.ZEN_KW_RETURN - 32)) | (1 << (ZenCodeParser.ZEN_KW_BREAK - 32)) | (1 << (ZenCodeParser.ZEN_KW_CONTINUE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SWITCH - 32)) | (1 << (ZenCodeParser.ZEN_KW_IN - 32)) | (1 << (ZenCodeParser.ZEN_KW_AS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ZenCodeParser.ZEN_KW_MATCH - 64)) | (1 << (ZenCodeParser.ZEN_KW_SUPER - 64)) | (1 << (ZenCodeParser.ZEN_KW_THIS - 64)) | (1 << (ZenCodeParser.ZEN_KW_NULL - 64)) | (1 << (ZenCodeParser.ZEN_KW_TRUE - 64)) | (1 << (ZenCodeParser.ZEN_KW_FALSE - 64)) | (1 << (ZenCodeParser.ZEN_KW_NEW - 64)) | (1 << (ZenCodeParser.IntegerLiteral - 64)) | (1 << (ZenCodeParser.DecimalIntegerLiteral - 64)) | (1 << (ZenCodeParser.FloatingPointLiteral - 64)) | (1 << (ZenCodeParser.ZEN_T_AOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_BROPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_DOT - 64)) | (1 << (ZenCodeParser.ZEN_T_SQOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_ADD - 64)) | (1 << (ZenCodeParser.ZEN_T_AND - 64)) | (1 << (ZenCodeParser.ZEN_T_ASSIGN - 64)) | (1 << (ZenCodeParser.ZEN_T_CAT - 64)) | (1 << (ZenCodeParser.ZEN_T_DIV - 64)) | (1 << (ZenCodeParser.ZEN_T_DOLLAR - 64)) | (1 << (ZenCodeParser.ZEN_T_GREATER - 64)) | (1 << (ZenCodeParser.ZEN_T_LESS - 64)) | (1 << (ZenCodeParser.ZEN_T_MOD - 64)) | (1 << (ZenCodeParser.ZEN_T_MUL - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ZenCodeParser.ZEN_T_NOT - 96)) | (1 << (ZenCodeParser.ZEN_T_OR - 96)) | (1 << (ZenCodeParser.ZEN_T_SUB - 96)) | (1 << (ZenCodeParser.ZEN_T_XOR - 96)) | (1 << (ZenCodeParser.StringLiteral - 96)) | (1 << (ZenCodeParser.ZEN_IDENTIFIER - 96)))) !== 0)) {
				{
				{
				this.state = 631;
				this.zenDefinitionMember();
				}
				}
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 637;
			this.match(ZenCodeParser.ZEN_T_ACLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenEnum(): ZenEnumContext {
		let _localctx: ZenEnumContext = new ZenEnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ZenCodeParser.RULE_zenEnum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN))) !== 0)) {
				{
				{
				this.state = 639;
				this.zenDeclerationModifier();
				}
				}
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 645;
			this.match(ZenCodeParser.ZEN_KW_ENUM);
			this.state = 646;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_KW_AS) {
				{
				this.state = 647;
				this.match(ZenCodeParser.ZEN_KW_AS);
				this.state = 648;
				this.zenType();
				}
			}

			this.state = 651;
			this.match(ZenCodeParser.ZEN_T_AOPEN);
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZenCodeParser.ZEN_T_COMMA || _la === ZenCodeParser.ZEN_IDENTIFIER) {
				{
				{
				this.state = 653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ZenCodeParser.ZEN_T_COMMA) {
					{
					this.state = 652;
					this.match(ZenCodeParser.ZEN_T_COMMA);
					}
				}

				this.state = 655;
				this.zenEnumConstant();
				}
				}
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_SEMICOLON) {
				{
				this.state = 661;
				this.match(ZenCodeParser.ZEN_T_SEMICOLON);
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ALIAS) | (1 << ZenCodeParser.ZEN_KW_CLASS) | (1 << ZenCodeParser.ZEN_KW_FUNCTION) | (1 << ZenCodeParser.ZEN_KW_INTERFACE) | (1 << ZenCodeParser.ZEN_KW_ENUM) | (1 << ZenCodeParser.ZEN_KW_STRUCT) | (1 << ZenCodeParser.ZEN_KW_EXPAND) | (1 << ZenCodeParser.ZEN_KW_VARIANT) | (1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_OVERRIDE) | (1 << ZenCodeParser.ZEN_KW_CONST) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_STATIC) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN) | (1 << ZenCodeParser.ZEN_KW_VAL) | (1 << ZenCodeParser.ZEN_KW_VAR) | (1 << ZenCodeParser.ZEN_KW_GET) | (1 << ZenCodeParser.ZEN_KW_IMPLEMENTS) | (1 << ZenCodeParser.ZEN_KW_SET) | (1 << ZenCodeParser.ZEN_KW_VOID) | (1 << ZenCodeParser.ZEN_KW_BOOL) | (1 << ZenCodeParser.ZEN_KW_BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ZenCodeParser.ZEN_KW_SBYTE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_USHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_INT - 32)) | (1 << (ZenCodeParser.ZEN_KW_UINT - 32)) | (1 << (ZenCodeParser.ZEN_KW_LONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_ULONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_USIZE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FLOAT - 32)) | (1 << (ZenCodeParser.ZEN_KW_DOUBLE - 32)) | (1 << (ZenCodeParser.ZEN_KW_CHAR - 32)) | (1 << (ZenCodeParser.ZEN_KW_STRING - 32)) | (1 << (ZenCodeParser.ZEN_KW_IF - 32)) | (1 << (ZenCodeParser.ZEN_KW_DO - 32)) | (1 << (ZenCodeParser.ZEN_KW_WHILE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FOR - 32)) | (1 << (ZenCodeParser.ZEN_KW_THROW - 32)) | (1 << (ZenCodeParser.ZEN_KW_PANIC - 32)) | (1 << (ZenCodeParser.ZEN_KW_LOCK - 32)) | (1 << (ZenCodeParser.ZEN_KW_TRY - 32)) | (1 << (ZenCodeParser.ZEN_KW_RETURN - 32)) | (1 << (ZenCodeParser.ZEN_KW_BREAK - 32)) | (1 << (ZenCodeParser.ZEN_KW_CONTINUE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SWITCH - 32)) | (1 << (ZenCodeParser.ZEN_KW_IN - 32)) | (1 << (ZenCodeParser.ZEN_KW_AS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ZenCodeParser.ZEN_KW_MATCH - 64)) | (1 << (ZenCodeParser.ZEN_KW_SUPER - 64)) | (1 << (ZenCodeParser.ZEN_KW_THIS - 64)) | (1 << (ZenCodeParser.ZEN_KW_NULL - 64)) | (1 << (ZenCodeParser.ZEN_KW_TRUE - 64)) | (1 << (ZenCodeParser.ZEN_KW_FALSE - 64)) | (1 << (ZenCodeParser.ZEN_KW_NEW - 64)) | (1 << (ZenCodeParser.IntegerLiteral - 64)) | (1 << (ZenCodeParser.DecimalIntegerLiteral - 64)) | (1 << (ZenCodeParser.FloatingPointLiteral - 64)) | (1 << (ZenCodeParser.ZEN_T_AOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_BROPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_DOT - 64)) | (1 << (ZenCodeParser.ZEN_T_SQOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_ADD - 64)) | (1 << (ZenCodeParser.ZEN_T_AND - 64)) | (1 << (ZenCodeParser.ZEN_T_ASSIGN - 64)) | (1 << (ZenCodeParser.ZEN_T_CAT - 64)) | (1 << (ZenCodeParser.ZEN_T_DIV - 64)) | (1 << (ZenCodeParser.ZEN_T_DOLLAR - 64)) | (1 << (ZenCodeParser.ZEN_T_GREATER - 64)) | (1 << (ZenCodeParser.ZEN_T_LESS - 64)) | (1 << (ZenCodeParser.ZEN_T_MOD - 64)) | (1 << (ZenCodeParser.ZEN_T_MUL - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ZenCodeParser.ZEN_T_NOT - 96)) | (1 << (ZenCodeParser.ZEN_T_OR - 96)) | (1 << (ZenCodeParser.ZEN_T_SUB - 96)) | (1 << (ZenCodeParser.ZEN_T_XOR - 96)) | (1 << (ZenCodeParser.StringLiteral - 96)) | (1 << (ZenCodeParser.ZEN_IDENTIFIER - 96)))) !== 0)) {
					{
					{
					this.state = 662;
					this.zenDefinitionMember();
					}
					}
					this.state = 667;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 670;
			this.match(ZenCodeParser.ZEN_T_ACLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStruct(): ZenStructContext {
		let _localctx: ZenStructContext = new ZenStructContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ZenCodeParser.RULE_zenStruct);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN))) !== 0)) {
				{
				{
				this.state = 672;
				this.zenDeclerationModifier();
				}
				}
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 678;
			this.match(ZenCodeParser.ZEN_KW_STRUCT);
			this.state = 679;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_LESS) {
				{
				this.state = 680;
				this.zenTypeParams();
				}
			}

			this.state = 683;
			this.match(ZenCodeParser.ZEN_T_AOPEN);
			this.state = 687;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 684;
					this.zenDefinitionMember();
					}
					}
				}
				this.state = 689;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			this.state = 690;
			this.match(ZenCodeParser.ZEN_T_ACLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAlias(): ZenAliasContext {
		let _localctx: ZenAliasContext = new ZenAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ZenCodeParser.RULE_zenAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN))) !== 0)) {
				{
				{
				this.state = 692;
				this.zenDeclerationModifier();
				}
				}
				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 698;
			this.match(ZenCodeParser.ZEN_KW_ALIAS);
			this.state = 699;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_LESS) {
				{
				this.state = 700;
				this.zenTypeParams();
				}
			}

			this.state = 703;
			this.match(ZenCodeParser.ZEN_KW_AS);
			this.state = 704;
			this.zenType();
			this.state = 705;
			this.match(ZenCodeParser.ZEN_T_SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenFunction(): ZenFunctionContext {
		let _localctx: ZenFunctionContext = new ZenFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ZenCodeParser.RULE_zenFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN))) !== 0)) {
				{
				{
				this.state = 707;
				this.zenDeclerationModifier();
				}
				}
				this.state = 712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 713;
			this.match(ZenCodeParser.ZEN_KW_FUNCTION);
			this.state = 714;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 715;
			this.zenFunctionHeader();
			this.state = 716;
			this.zenFunctionBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenExpansion(): ZenExpansionContext {
		let _localctx: ZenExpansionContext = new ZenExpansionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ZenCodeParser.RULE_zenExpansion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN))) !== 0)) {
				{
				{
				this.state = 718;
				this.zenDeclerationModifier();
				}
				}
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 724;
			this.match(ZenCodeParser.ZEN_KW_EXPAND);
			this.state = 726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_LESS) {
				{
				this.state = 725;
				this.zenTypeParams();
				}
			}

			this.state = 728;
			this.zenType();
			this.state = 729;
			this.match(ZenCodeParser.ZEN_T_AOPEN);
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ALIAS) | (1 << ZenCodeParser.ZEN_KW_CLASS) | (1 << ZenCodeParser.ZEN_KW_FUNCTION) | (1 << ZenCodeParser.ZEN_KW_INTERFACE) | (1 << ZenCodeParser.ZEN_KW_ENUM) | (1 << ZenCodeParser.ZEN_KW_STRUCT) | (1 << ZenCodeParser.ZEN_KW_EXPAND) | (1 << ZenCodeParser.ZEN_KW_VARIANT) | (1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_OVERRIDE) | (1 << ZenCodeParser.ZEN_KW_CONST) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_STATIC) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN) | (1 << ZenCodeParser.ZEN_KW_VAL) | (1 << ZenCodeParser.ZEN_KW_VAR) | (1 << ZenCodeParser.ZEN_KW_GET) | (1 << ZenCodeParser.ZEN_KW_IMPLEMENTS) | (1 << ZenCodeParser.ZEN_KW_SET) | (1 << ZenCodeParser.ZEN_KW_VOID) | (1 << ZenCodeParser.ZEN_KW_BOOL) | (1 << ZenCodeParser.ZEN_KW_BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ZenCodeParser.ZEN_KW_SBYTE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_USHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_INT - 32)) | (1 << (ZenCodeParser.ZEN_KW_UINT - 32)) | (1 << (ZenCodeParser.ZEN_KW_LONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_ULONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_USIZE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FLOAT - 32)) | (1 << (ZenCodeParser.ZEN_KW_DOUBLE - 32)) | (1 << (ZenCodeParser.ZEN_KW_CHAR - 32)) | (1 << (ZenCodeParser.ZEN_KW_STRING - 32)) | (1 << (ZenCodeParser.ZEN_KW_IF - 32)) | (1 << (ZenCodeParser.ZEN_KW_DO - 32)) | (1 << (ZenCodeParser.ZEN_KW_WHILE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FOR - 32)) | (1 << (ZenCodeParser.ZEN_KW_THROW - 32)) | (1 << (ZenCodeParser.ZEN_KW_PANIC - 32)) | (1 << (ZenCodeParser.ZEN_KW_LOCK - 32)) | (1 << (ZenCodeParser.ZEN_KW_TRY - 32)) | (1 << (ZenCodeParser.ZEN_KW_RETURN - 32)) | (1 << (ZenCodeParser.ZEN_KW_BREAK - 32)) | (1 << (ZenCodeParser.ZEN_KW_CONTINUE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SWITCH - 32)) | (1 << (ZenCodeParser.ZEN_KW_IN - 32)) | (1 << (ZenCodeParser.ZEN_KW_AS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ZenCodeParser.ZEN_KW_MATCH - 64)) | (1 << (ZenCodeParser.ZEN_KW_SUPER - 64)) | (1 << (ZenCodeParser.ZEN_KW_THIS - 64)) | (1 << (ZenCodeParser.ZEN_KW_NULL - 64)) | (1 << (ZenCodeParser.ZEN_KW_TRUE - 64)) | (1 << (ZenCodeParser.ZEN_KW_FALSE - 64)) | (1 << (ZenCodeParser.ZEN_KW_NEW - 64)) | (1 << (ZenCodeParser.IntegerLiteral - 64)) | (1 << (ZenCodeParser.DecimalIntegerLiteral - 64)) | (1 << (ZenCodeParser.FloatingPointLiteral - 64)) | (1 << (ZenCodeParser.ZEN_T_AOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_BROPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_DOT - 64)) | (1 << (ZenCodeParser.ZEN_T_SQOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_ADD - 64)) | (1 << (ZenCodeParser.ZEN_T_AND - 64)) | (1 << (ZenCodeParser.ZEN_T_ASSIGN - 64)) | (1 << (ZenCodeParser.ZEN_T_CAT - 64)) | (1 << (ZenCodeParser.ZEN_T_DIV - 64)) | (1 << (ZenCodeParser.ZEN_T_DOLLAR - 64)) | (1 << (ZenCodeParser.ZEN_T_GREATER - 64)) | (1 << (ZenCodeParser.ZEN_T_LESS - 64)) | (1 << (ZenCodeParser.ZEN_T_MOD - 64)) | (1 << (ZenCodeParser.ZEN_T_MUL - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ZenCodeParser.ZEN_T_NOT - 96)) | (1 << (ZenCodeParser.ZEN_T_OR - 96)) | (1 << (ZenCodeParser.ZEN_T_SUB - 96)) | (1 << (ZenCodeParser.ZEN_T_XOR - 96)) | (1 << (ZenCodeParser.StringLiteral - 96)) | (1 << (ZenCodeParser.ZEN_IDENTIFIER - 96)))) !== 0)) {
				{
				{
				this.state = 730;
				this.zenDefinitionMember();
				}
				}
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 736;
			this.match(ZenCodeParser.ZEN_T_ACLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenVariant(): ZenVariantContext {
		let _localctx: ZenVariantContext = new ZenVariantContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ZenCodeParser.RULE_zenVariant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN))) !== 0)) {
				{
				{
				this.state = 738;
				this.zenDeclerationModifier();
				}
				}
				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 744;
			this.match(ZenCodeParser.ZEN_KW_VARIANT);
			this.state = 745;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 747;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_LESS) {
				{
				this.state = 746;
				this.zenTypeParams();
				}
			}

			this.state = 749;
			this.match(ZenCodeParser.ZEN_T_AOPEN);
			this.state = 758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_IDENTIFIER) {
				{
				this.state = 750;
				this.zenVariantOption();
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZenCodeParser.ZEN_T_COMMA) {
					{
					{
					this.state = 751;
					this.match(ZenCodeParser.ZEN_T_COMMA);
					this.state = 752;
					this.zenVariantOption();
					}
					}
					this.state = 757;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_SEMICOLON) {
				{
				this.state = 760;
				this.match(ZenCodeParser.ZEN_T_SEMICOLON);
				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ALIAS) | (1 << ZenCodeParser.ZEN_KW_CLASS) | (1 << ZenCodeParser.ZEN_KW_FUNCTION) | (1 << ZenCodeParser.ZEN_KW_INTERFACE) | (1 << ZenCodeParser.ZEN_KW_ENUM) | (1 << ZenCodeParser.ZEN_KW_STRUCT) | (1 << ZenCodeParser.ZEN_KW_EXPAND) | (1 << ZenCodeParser.ZEN_KW_VARIANT) | (1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_OVERRIDE) | (1 << ZenCodeParser.ZEN_KW_CONST) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_STATIC) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN) | (1 << ZenCodeParser.ZEN_KW_VAL) | (1 << ZenCodeParser.ZEN_KW_VAR) | (1 << ZenCodeParser.ZEN_KW_GET) | (1 << ZenCodeParser.ZEN_KW_IMPLEMENTS) | (1 << ZenCodeParser.ZEN_KW_SET) | (1 << ZenCodeParser.ZEN_KW_VOID) | (1 << ZenCodeParser.ZEN_KW_BOOL) | (1 << ZenCodeParser.ZEN_KW_BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ZenCodeParser.ZEN_KW_SBYTE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_USHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_INT - 32)) | (1 << (ZenCodeParser.ZEN_KW_UINT - 32)) | (1 << (ZenCodeParser.ZEN_KW_LONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_ULONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_USIZE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FLOAT - 32)) | (1 << (ZenCodeParser.ZEN_KW_DOUBLE - 32)) | (1 << (ZenCodeParser.ZEN_KW_CHAR - 32)) | (1 << (ZenCodeParser.ZEN_KW_STRING - 32)) | (1 << (ZenCodeParser.ZEN_KW_IF - 32)) | (1 << (ZenCodeParser.ZEN_KW_DO - 32)) | (1 << (ZenCodeParser.ZEN_KW_WHILE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FOR - 32)) | (1 << (ZenCodeParser.ZEN_KW_THROW - 32)) | (1 << (ZenCodeParser.ZEN_KW_PANIC - 32)) | (1 << (ZenCodeParser.ZEN_KW_LOCK - 32)) | (1 << (ZenCodeParser.ZEN_KW_TRY - 32)) | (1 << (ZenCodeParser.ZEN_KW_RETURN - 32)) | (1 << (ZenCodeParser.ZEN_KW_BREAK - 32)) | (1 << (ZenCodeParser.ZEN_KW_CONTINUE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SWITCH - 32)) | (1 << (ZenCodeParser.ZEN_KW_IN - 32)) | (1 << (ZenCodeParser.ZEN_KW_AS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ZenCodeParser.ZEN_KW_MATCH - 64)) | (1 << (ZenCodeParser.ZEN_KW_SUPER - 64)) | (1 << (ZenCodeParser.ZEN_KW_THIS - 64)) | (1 << (ZenCodeParser.ZEN_KW_NULL - 64)) | (1 << (ZenCodeParser.ZEN_KW_TRUE - 64)) | (1 << (ZenCodeParser.ZEN_KW_FALSE - 64)) | (1 << (ZenCodeParser.ZEN_KW_NEW - 64)) | (1 << (ZenCodeParser.IntegerLiteral - 64)) | (1 << (ZenCodeParser.DecimalIntegerLiteral - 64)) | (1 << (ZenCodeParser.FloatingPointLiteral - 64)) | (1 << (ZenCodeParser.ZEN_T_AOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_BROPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_DOT - 64)) | (1 << (ZenCodeParser.ZEN_T_SQOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_ADD - 64)) | (1 << (ZenCodeParser.ZEN_T_AND - 64)) | (1 << (ZenCodeParser.ZEN_T_ASSIGN - 64)) | (1 << (ZenCodeParser.ZEN_T_CAT - 64)) | (1 << (ZenCodeParser.ZEN_T_DIV - 64)) | (1 << (ZenCodeParser.ZEN_T_DOLLAR - 64)) | (1 << (ZenCodeParser.ZEN_T_GREATER - 64)) | (1 << (ZenCodeParser.ZEN_T_LESS - 64)) | (1 << (ZenCodeParser.ZEN_T_MOD - 64)) | (1 << (ZenCodeParser.ZEN_T_MUL - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ZenCodeParser.ZEN_T_NOT - 96)) | (1 << (ZenCodeParser.ZEN_T_OR - 96)) | (1 << (ZenCodeParser.ZEN_T_SUB - 96)) | (1 << (ZenCodeParser.ZEN_T_XOR - 96)) | (1 << (ZenCodeParser.StringLiteral - 96)) | (1 << (ZenCodeParser.ZEN_IDENTIFIER - 96)))) !== 0)) {
					{
					{
					this.state = 761;
					this.zenDefinitionMember();
					}
					}
					this.state = 766;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 769;
			this.match(ZenCodeParser.ZEN_T_ACLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenVariantOption(): ZenVariantOptionContext {
		let _localctx: ZenVariantOptionContext = new ZenVariantOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ZenCodeParser.RULE_zenVariantOption);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_BROPEN) {
				{
				this.state = 772;
				this.match(ZenCodeParser.ZEN_T_BROPEN);
				this.state = 773;
				this.zenType();
				this.state = 778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZenCodeParser.ZEN_T_COMMA) {
					{
					{
					this.state = 774;
					this.match(ZenCodeParser.ZEN_T_COMMA);
					this.state = 775;
					this.zenType();
					}
					}
					this.state = 780;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 781;
				this.match(ZenCodeParser.ZEN_T_BRCLOSE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenEnumConstant(): ZenEnumConstantContext {
		let _localctx: ZenEnumConstantContext = new ZenEnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ZenCodeParser.RULE_zenEnumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_BROPEN) {
				{
				this.state = 786;
				this.match(ZenCodeParser.ZEN_T_BROPEN);
				this.state = 787;
				this.zenAssignExpression();
				this.state = 792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZenCodeParser.ZEN_T_COMMA) {
					{
					{
					this.state = 788;
					this.match(ZenCodeParser.ZEN_T_COMMA);
					this.state = 789;
					this.zenAssignExpression();
					}
					}
					this.state = 794;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 795;
				this.match(ZenCodeParser.ZEN_T_BRCLOSE);
				}
			}

			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_ASSIGN) {
				{
				this.state = 799;
				this.match(ZenCodeParser.ZEN_T_ASSIGN);
				this.state = 800;
				this.zenAssignExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenDefinitionMember(): ZenDefinitionMemberContext {
		let _localctx: ZenDefinitionMemberContext = new ZenDefinitionMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ZenCodeParser.RULE_zenDefinitionMember);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this.zenAnnotations();
			this.state = 807;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 804;
					this.zenMemberStaticModifier();
					}
					}
				}
				this.state = 809;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			}
			this.state = 825;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 810;
				this.zenFieldMember();
				}
				break;

			case 2:
				{
				this.state = 811;
				this.zenThisMember();
				}
				break;

			case 3:
				{
				this.state = 812;
				this.zenConstOrMethodMember();
				}
				break;

			case 4:
				{
				this.state = 813;
				this.zenSetterMember();
				}
				break;

			case 5:
				{
				this.state = 814;
				this.zenGetterMember();
				}
				break;

			case 6:
				{
				this.state = 815;
				this.zenImplementsMember();
				}
				break;

			case 7:
				{
				this.state = 816;
				this.zenCallerMember();
				}
				break;

			case 8:
				{
				this.state = 817;
				this.zenIndexGetOperator();
				}
				break;

			case 9:
				{
				this.state = 818;
				this.zenDestructor();
				}
				break;

			case 10:
				{
				this.state = 819;
				this.zenOperator();
				}
				break;

			case 11:
				{
				this.state = 820;
				this.zenCaster();
				}
				break;

			case 12:
				{
				this.state = 821;
				this.zenContainsOperator();
				}
				break;

			case 13:
				{
				this.state = 822;
				this.zenInnerDefinition();
				}
				break;

			case 14:
				{
				this.state = 823;
				this.zenIterator();
				}
				break;

			case 15:
				{
				this.state = 824;
				this.zenStaticInitializer();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenFieldMember(): ZenFieldMemberContext {
		let _localctx: ZenFieldMemberContext = new ZenFieldMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ZenCodeParser.RULE_zenFieldMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			_la = this._input.LA(1);
			if (!(_la === ZenCodeParser.ZEN_KW_VAL || _la === ZenCodeParser.ZEN_KW_VAR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 828;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_KW_AS) {
				{
				this.state = 829;
				this.match(ZenCodeParser.ZEN_KW_AS);
				this.state = 830;
				this.zenType();
				}
			}

			this.state = 848;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_COLON) {
				{
				this.state = 833;
				this.match(ZenCodeParser.ZEN_T_COLON);
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ZenCodeParser.ZEN_KW_PUBLIC || _la === ZenCodeParser.ZEN_KW_PROTECTED) {
					{
					this.state = 834;
					this.zenVisibleAccessModifier();
					}
				}

				this.state = 837;
				_la = this._input.LA(1);
				if (!(_la === ZenCodeParser.ZEN_KW_GET || _la === ZenCodeParser.ZEN_KW_SET)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZenCodeParser.ZEN_T_COMMA) {
					{
					{
					this.state = 838;
					this.match(ZenCodeParser.ZEN_T_COMMA);
					this.state = 840;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ZenCodeParser.ZEN_KW_PUBLIC || _la === ZenCodeParser.ZEN_KW_PROTECTED) {
						{
						this.state = 839;
						this.zenVisibleAccessModifier();
						}
					}

					this.state = 842;
					_la = this._input.LA(1);
					if (!(_la === ZenCodeParser.ZEN_KW_GET || _la === ZenCodeParser.ZEN_KW_SET)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 847;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 852;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_ASSIGN) {
				{
				this.state = 850;
				this.match(ZenCodeParser.ZEN_T_ASSIGN);
				this.state = 851;
				this.zenAssignExpression();
				}
			}

			this.state = 854;
			this.match(ZenCodeParser.ZEN_T_SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenThisMember(): ZenThisMemberContext {
		let _localctx: ZenThisMemberContext = new ZenThisMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, ZenCodeParser.RULE_zenThisMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 856;
			this.match(ZenCodeParser.ZEN_KW_THIS);
			this.state = 857;
			this.zenFunctionHeader();
			this.state = 858;
			this.zenFunctionBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenConstOrMethodMember(): ZenConstOrMethodMemberContext {
		let _localctx: ZenConstOrMethodMemberContext = new ZenConstOrMethodMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ZenCodeParser.RULE_zenConstOrMethodMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 860;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 872;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_KW_AS:
			case ZenCodeParser.ZEN_T_ASSIGN:
				{
				{
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ZenCodeParser.ZEN_KW_AS) {
					{
					this.state = 861;
					this.match(ZenCodeParser.ZEN_KW_AS);
					this.state = 862;
					this.zenType();
					}
				}

				this.state = 865;
				this.match(ZenCodeParser.ZEN_T_ASSIGN);
				this.state = 866;
				this.zenAssignExpression();
				this.state = 867;
				this.match(ZenCodeParser.ZEN_T_SEMICOLON);
				}
				}
				break;
			case ZenCodeParser.ZEN_T_BROPEN:
			case ZenCodeParser.ZEN_T_LESS:
				{
				this.state = 869;
				this.zenFunctionHeader();
				this.state = 870;
				this.zenFunctionBodyStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenSetterMember(): ZenSetterMemberContext {
		let _localctx: ZenSetterMemberContext = new ZenSetterMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, ZenCodeParser.RULE_zenSetterMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this.match(ZenCodeParser.ZEN_KW_SET);
			this.state = 875;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 878;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_KW_AS) {
				{
				this.state = 876;
				this.match(ZenCodeParser.ZEN_KW_AS);
				this.state = 877;
				this.zenType();
				}
			}

			this.state = 880;
			this.zenFunctionBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenGetterMember(): ZenGetterMemberContext {
		let _localctx: ZenGetterMemberContext = new ZenGetterMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ZenCodeParser.RULE_zenGetterMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			this.match(ZenCodeParser.ZEN_KW_GET);
			this.state = 883;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 886;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_KW_AS) {
				{
				this.state = 884;
				this.match(ZenCodeParser.ZEN_KW_AS);
				this.state = 885;
				this.zenType();
				}
			}

			this.state = 888;
			this.zenFunctionBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenImplementsMember(): ZenImplementsMemberContext {
		let _localctx: ZenImplementsMemberContext = new ZenImplementsMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ZenCodeParser.RULE_zenImplementsMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 890;
			this.match(ZenCodeParser.ZEN_KW_IMPLEMENTS);
			this.state = 891;
			this.zenType();
			this.state = 904;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_T_SEMICOLON:
				{
				this.state = 892;
				this.match(ZenCodeParser.ZEN_T_SEMICOLON);
				}
				break;
			case ZenCodeParser.ZEN_T_AOPEN:
				{
				this.state = 893;
				this.match(ZenCodeParser.ZEN_T_AOPEN);
				this.state = 902;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 894;
					this.match(ZenCodeParser.ZEN_T_ACLOSE);
					}
					break;

				case 2:
					{
					{
					this.state = 898;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ALIAS) | (1 << ZenCodeParser.ZEN_KW_CLASS) | (1 << ZenCodeParser.ZEN_KW_FUNCTION) | (1 << ZenCodeParser.ZEN_KW_INTERFACE) | (1 << ZenCodeParser.ZEN_KW_ENUM) | (1 << ZenCodeParser.ZEN_KW_STRUCT) | (1 << ZenCodeParser.ZEN_KW_EXPAND) | (1 << ZenCodeParser.ZEN_KW_VARIANT) | (1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_OVERRIDE) | (1 << ZenCodeParser.ZEN_KW_CONST) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_STATIC) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN) | (1 << ZenCodeParser.ZEN_KW_VAL) | (1 << ZenCodeParser.ZEN_KW_VAR) | (1 << ZenCodeParser.ZEN_KW_GET) | (1 << ZenCodeParser.ZEN_KW_IMPLEMENTS) | (1 << ZenCodeParser.ZEN_KW_SET) | (1 << ZenCodeParser.ZEN_KW_VOID) | (1 << ZenCodeParser.ZEN_KW_BOOL) | (1 << ZenCodeParser.ZEN_KW_BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ZenCodeParser.ZEN_KW_SBYTE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_USHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_INT - 32)) | (1 << (ZenCodeParser.ZEN_KW_UINT - 32)) | (1 << (ZenCodeParser.ZEN_KW_LONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_ULONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_USIZE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FLOAT - 32)) | (1 << (ZenCodeParser.ZEN_KW_DOUBLE - 32)) | (1 << (ZenCodeParser.ZEN_KW_CHAR - 32)) | (1 << (ZenCodeParser.ZEN_KW_STRING - 32)) | (1 << (ZenCodeParser.ZEN_KW_IF - 32)) | (1 << (ZenCodeParser.ZEN_KW_DO - 32)) | (1 << (ZenCodeParser.ZEN_KW_WHILE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FOR - 32)) | (1 << (ZenCodeParser.ZEN_KW_THROW - 32)) | (1 << (ZenCodeParser.ZEN_KW_PANIC - 32)) | (1 << (ZenCodeParser.ZEN_KW_LOCK - 32)) | (1 << (ZenCodeParser.ZEN_KW_TRY - 32)) | (1 << (ZenCodeParser.ZEN_KW_RETURN - 32)) | (1 << (ZenCodeParser.ZEN_KW_BREAK - 32)) | (1 << (ZenCodeParser.ZEN_KW_CONTINUE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SWITCH - 32)) | (1 << (ZenCodeParser.ZEN_KW_IN - 32)) | (1 << (ZenCodeParser.ZEN_KW_AS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ZenCodeParser.ZEN_KW_MATCH - 64)) | (1 << (ZenCodeParser.ZEN_KW_SUPER - 64)) | (1 << (ZenCodeParser.ZEN_KW_THIS - 64)) | (1 << (ZenCodeParser.ZEN_KW_NULL - 64)) | (1 << (ZenCodeParser.ZEN_KW_TRUE - 64)) | (1 << (ZenCodeParser.ZEN_KW_FALSE - 64)) | (1 << (ZenCodeParser.ZEN_KW_NEW - 64)) | (1 << (ZenCodeParser.IntegerLiteral - 64)) | (1 << (ZenCodeParser.DecimalIntegerLiteral - 64)) | (1 << (ZenCodeParser.FloatingPointLiteral - 64)) | (1 << (ZenCodeParser.ZEN_T_AOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_BROPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_DOT - 64)) | (1 << (ZenCodeParser.ZEN_T_SQOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_ADD - 64)) | (1 << (ZenCodeParser.ZEN_T_AND - 64)) | (1 << (ZenCodeParser.ZEN_T_ASSIGN - 64)) | (1 << (ZenCodeParser.ZEN_T_CAT - 64)) | (1 << (ZenCodeParser.ZEN_T_DIV - 64)) | (1 << (ZenCodeParser.ZEN_T_DOLLAR - 64)) | (1 << (ZenCodeParser.ZEN_T_GREATER - 64)) | (1 << (ZenCodeParser.ZEN_T_LESS - 64)) | (1 << (ZenCodeParser.ZEN_T_MOD - 64)) | (1 << (ZenCodeParser.ZEN_T_MUL - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ZenCodeParser.ZEN_T_NOT - 96)) | (1 << (ZenCodeParser.ZEN_T_OR - 96)) | (1 << (ZenCodeParser.ZEN_T_SUB - 96)) | (1 << (ZenCodeParser.ZEN_T_XOR - 96)) | (1 << (ZenCodeParser.StringLiteral - 96)) | (1 << (ZenCodeParser.ZEN_IDENTIFIER - 96)))) !== 0)) {
						{
						{
						this.state = 895;
						this.zenDefinitionMember();
						}
						}
						this.state = 900;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 901;
					this.match(ZenCodeParser.ZEN_T_ACLOSE);
					}
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenCallerMember(): ZenCallerMemberContext {
		let _localctx: ZenCallerMemberContext = new ZenCallerMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, ZenCodeParser.RULE_zenCallerMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this.zenFunctionHeader();
			this.state = 907;
			this.zenFunctionBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenIndexGetOperator(): ZenIndexGetOperatorContext {
		let _localctx: ZenIndexGetOperatorContext = new ZenIndexGetOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, ZenCodeParser.RULE_zenIndexGetOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 909;
			this.match(ZenCodeParser.ZEN_T_SQOPEN);
			this.state = 910;
			this.match(ZenCodeParser.ZEN_T_SQCLOSE);
			this.state = 912;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_ASSIGN) {
				{
				this.state = 911;
				this.match(ZenCodeParser.ZEN_T_ASSIGN);
				}
			}

			this.state = 914;
			this.zenFunctionHeader();
			this.state = 915;
			this.zenFunctionBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenDestructor(): ZenDestructorContext {
		let _localctx: ZenDestructorContext = new ZenDestructorContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, ZenCodeParser.RULE_zenDestructor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			this.match(ZenCodeParser.ZEN_T_CAT);
			this.state = 918;
			this.match(ZenCodeParser.ZEN_KW_THIS);
			this.state = 919;
			this.zenFunctionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenOperator(): ZenOperatorContext {
		let _localctx: ZenOperatorContext = new ZenOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ZenCodeParser.RULE_zenOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 921;
				this.match(ZenCodeParser.ZEN_T_CAT);
				}
				break;

			case 2:
				{
				this.state = 925;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 922;
					this.zenEqual2Token();
					}
					break;

				case 2:
					{
					{
					this.state = 923;
					this.match(ZenCodeParser.ZEN_T_ASSIGN);
					this.state = 924;
					this.match(ZenCodeParser.ZEN_T_ASSIGN);
					}
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 927;
				this.match(ZenCodeParser.ZEN_T_ADD);
				}
				break;

			case 4:
				{
				this.state = 928;
				this.match(ZenCodeParser.ZEN_T_SUB);
				}
				break;

			case 5:
				{
				this.state = 929;
				this.match(ZenCodeParser.ZEN_T_MUL);
				}
				break;

			case 6:
				{
				this.state = 930;
				this.match(ZenCodeParser.ZEN_T_DIV);
				}
				break;

			case 7:
				{
				this.state = 931;
				this.match(ZenCodeParser.ZEN_T_MOD);
				}
				break;

			case 8:
				{
				this.state = 932;
				this.match(ZenCodeParser.ZEN_T_AND);
				}
				break;

			case 9:
				{
				this.state = 933;
				this.match(ZenCodeParser.ZEN_T_OR);
				}
				break;

			case 10:
				{
				this.state = 934;
				this.match(ZenCodeParser.ZEN_T_XOR);
				}
				break;

			case 11:
				{
				this.state = 935;
				this.match(ZenCodeParser.ZEN_T_NOT);
				}
				break;

			case 12:
				{
				this.state = 936;
				this.zenAddAssignToken();
				}
				break;

			case 13:
				{
				this.state = 937;
				this.zenSubAssignToken();
				}
				break;

			case 14:
				{
				this.state = 938;
				this.zenCatAssignToken();
				}
				break;

			case 15:
				{
				this.state = 939;
				this.zenMulAssignToken();
				}
				break;

			case 16:
				{
				this.state = 940;
				this.zenDivAssignToken();
				}
				break;

			case 17:
				{
				this.state = 941;
				this.zenModAssignToken();
				}
				break;

			case 18:
				{
				this.state = 942;
				this.zenAndAssignToken();
				}
				break;

			case 19:
				{
				this.state = 943;
				this.zenOrAssignToken();
				}
				break;

			case 20:
				{
				this.state = 944;
				this.zenXOrAssignToken();
				}
				break;

			case 21:
				{
				this.state = 945;
				this.zenIncrementToken();
				}
				break;

			case 22:
				{
				this.state = 946;
				this.zenDecrementToken();
				}
				break;

			case 23:
				{
				this.state = 947;
				this.zenDot2Token();
				}
				break;

			case 24:
				{
				this.state = 948;
				this.zenSHLToken();
				}
				break;

			case 25:
				{
				this.state = 949;
				this.zenSHRToken();
				}
				break;

			case 26:
				{
				this.state = 950;
				this.zenUSHRToken();
				}
				break;

			case 27:
				{
				this.state = 951;
				this.zenSHLAssignToken();
				}
				break;

			case 28:
				{
				this.state = 952;
				this.zenSHRAssignToken();
				}
				break;

			case 29:
				{
				this.state = 953;
				this.zenUSHRAssignToken();
				}
				break;
			}
			this.state = 956;
			this.zenFunctionHeader();
			this.state = 957;
			this.zenFunctionBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenEqualsOperator(): ZenEqualsOperatorContext {
		let _localctx: ZenEqualsOperatorContext = new ZenEqualsOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ZenCodeParser.RULE_zenEqualsOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 959;
			this.zenEqual2Token();
			this.state = 960;
			this.zenFunctionHeader();
			this.state = 961;
			this.zenFunctionBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenCaster(): ZenCasterContext {
		let _localctx: ZenCasterContext = new ZenCasterContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, ZenCodeParser.RULE_zenCaster);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 963;
			this.match(ZenCodeParser.ZEN_KW_AS);
			this.state = 964;
			this.zenType();
			this.state = 965;
			this.zenFunctionBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenContainsOperator(): ZenContainsOperatorContext {
		let _localctx: ZenContainsOperatorContext = new ZenContainsOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ZenCodeParser.RULE_zenContainsOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this.match(ZenCodeParser.ZEN_KW_IN);
			this.state = 968;
			this.zenFunctionHeader();
			this.state = 969;
			this.zenFunctionBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenInnerDefinition(): ZenInnerDefinitionContext {
		let _localctx: ZenInnerDefinitionContext = new ZenInnerDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ZenCodeParser.RULE_zenInnerDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 971;
			this.zenDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenIterator(): ZenIteratorContext {
		let _localctx: ZenIteratorContext = new ZenIteratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ZenCodeParser.RULE_zenIterator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this.match(ZenCodeParser.ZEN_KW_FOR);
			this.state = 974;
			this.zenFunctionHeader();
			this.state = 975;
			this.zenFunctionBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStaticInitializer(): ZenStaticInitializerContext {
		let _localctx: ZenStaticInitializerContext = new ZenStaticInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, ZenCodeParser.RULE_zenStaticInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 977;
			this.match(ZenCodeParser.ZEN_T_AOPEN);
			this.state = 978;
			this.zenStatementBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenFunctionHeader(): ZenFunctionHeaderContext {
		let _localctx: ZenFunctionHeaderContext = new ZenFunctionHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ZenCodeParser.RULE_zenFunctionHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_LESS) {
				{
				this.state = 980;
				this.zenTypeParams();
				}
			}

			this.state = 983;
			this.match(ZenCodeParser.ZEN_T_BROPEN);
			this.state = 995;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_T_BRCLOSE:
				{
				this.state = 984;
				this.match(ZenCodeParser.ZEN_T_BRCLOSE);
				}
				break;
			case ZenCodeParser.ZEN_KW_ALIAS:
			case ZenCodeParser.ZEN_KW_CLASS:
			case ZenCodeParser.ZEN_KW_FUNCTION:
			case ZenCodeParser.ZEN_KW_INTERFACE:
			case ZenCodeParser.ZEN_KW_ENUM:
			case ZenCodeParser.ZEN_KW_STRUCT:
			case ZenCodeParser.ZEN_KW_EXPAND:
			case ZenCodeParser.ZEN_KW_VARIANT:
			case ZenCodeParser.ZEN_KW_ABSTRACT:
			case ZenCodeParser.ZEN_KW_FINAL:
			case ZenCodeParser.ZEN_KW_OVERRIDE:
			case ZenCodeParser.ZEN_KW_CONST:
			case ZenCodeParser.ZEN_KW_PRIVATE:
			case ZenCodeParser.ZEN_KW_PUBLIC:
			case ZenCodeParser.ZEN_KW_INTERNAL:
			case ZenCodeParser.ZEN_KW_STATIC:
			case ZenCodeParser.ZEN_KW_PROTECTED:
			case ZenCodeParser.ZEN_KW_IMPLICIT:
			case ZenCodeParser.ZEN_KW_VIRTUAL:
			case ZenCodeParser.ZEN_KW_EXTERN:
			case ZenCodeParser.ZEN_KW_VAL:
			case ZenCodeParser.ZEN_KW_VAR:
			case ZenCodeParser.ZEN_KW_GET:
			case ZenCodeParser.ZEN_KW_IMPLEMENTS:
			case ZenCodeParser.ZEN_KW_SET:
			case ZenCodeParser.ZEN_KW_VOID:
			case ZenCodeParser.ZEN_KW_BOOL:
			case ZenCodeParser.ZEN_KW_BYTE:
			case ZenCodeParser.ZEN_KW_SBYTE:
			case ZenCodeParser.ZEN_KW_SHORT:
			case ZenCodeParser.ZEN_KW_USHORT:
			case ZenCodeParser.ZEN_KW_INT:
			case ZenCodeParser.ZEN_KW_UINT:
			case ZenCodeParser.ZEN_KW_LONG:
			case ZenCodeParser.ZEN_KW_ULONG:
			case ZenCodeParser.ZEN_KW_USIZE:
			case ZenCodeParser.ZEN_KW_FLOAT:
			case ZenCodeParser.ZEN_KW_DOUBLE:
			case ZenCodeParser.ZEN_KW_CHAR:
			case ZenCodeParser.ZEN_KW_STRING:
			case ZenCodeParser.ZEN_KW_IF:
			case ZenCodeParser.ZEN_KW_DO:
			case ZenCodeParser.ZEN_KW_WHILE:
			case ZenCodeParser.ZEN_KW_FOR:
			case ZenCodeParser.ZEN_KW_THROW:
			case ZenCodeParser.ZEN_KW_PANIC:
			case ZenCodeParser.ZEN_KW_LOCK:
			case ZenCodeParser.ZEN_KW_TRY:
			case ZenCodeParser.ZEN_KW_RETURN:
			case ZenCodeParser.ZEN_KW_BREAK:
			case ZenCodeParser.ZEN_KW_CONTINUE:
			case ZenCodeParser.ZEN_KW_SWITCH:
			case ZenCodeParser.ZEN_KW_IN:
			case ZenCodeParser.ZEN_KW_AS:
			case ZenCodeParser.ZEN_KW_MATCH:
			case ZenCodeParser.ZEN_KW_SUPER:
			case ZenCodeParser.ZEN_KW_THIS:
			case ZenCodeParser.ZEN_KW_NULL:
			case ZenCodeParser.ZEN_KW_TRUE:
			case ZenCodeParser.ZEN_KW_FALSE:
			case ZenCodeParser.ZEN_KW_NEW:
			case ZenCodeParser.IntegerLiteral:
			case ZenCodeParser.DecimalIntegerLiteral:
			case ZenCodeParser.FloatingPointLiteral:
			case ZenCodeParser.ZEN_T_AOPEN:
			case ZenCodeParser.ZEN_T_BROPEN:
			case ZenCodeParser.ZEN_T_DOT:
			case ZenCodeParser.ZEN_T_SQOPEN:
			case ZenCodeParser.ZEN_T_ADD:
			case ZenCodeParser.ZEN_T_AND:
			case ZenCodeParser.ZEN_T_ASSIGN:
			case ZenCodeParser.ZEN_T_CAT:
			case ZenCodeParser.ZEN_T_DIV:
			case ZenCodeParser.ZEN_T_DOLLAR:
			case ZenCodeParser.ZEN_T_GREATER:
			case ZenCodeParser.ZEN_T_LESS:
			case ZenCodeParser.ZEN_T_MOD:
			case ZenCodeParser.ZEN_T_MUL:
			case ZenCodeParser.ZEN_T_NOT:
			case ZenCodeParser.ZEN_T_OR:
			case ZenCodeParser.ZEN_T_SUB:
			case ZenCodeParser.ZEN_T_XOR:
			case ZenCodeParser.StringLiteral:
			case ZenCodeParser.ZEN_IDENTIFIER:
				{
				{
				this.state = 985;
				this.zenFunctionParameter();
				this.state = 990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZenCodeParser.ZEN_T_COMMA) {
					{
					{
					this.state = 986;
					this.match(ZenCodeParser.ZEN_T_COMMA);
					this.state = 987;
					this.zenFunctionParameter();
					}
					}
					this.state = 992;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 993;
				this.match(ZenCodeParser.ZEN_T_BRCLOSE);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 999;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 997;
				_la = this._input.LA(1);
				if (!(_la === ZenCodeParser.ZEN_KW_AS || _la === ZenCodeParser.ZEN_T_COLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 998;
				this.zenType();
				}
				break;
			}
			this.state = 1003;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 1001;
				this.match(ZenCodeParser.ZEN_KW_THROWS);
				this.state = 1002;
				this.zenType();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenFunctionParameter(): ZenFunctionParameterContext {
		let _localctx: ZenFunctionParameterContext = new ZenFunctionParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, ZenCodeParser.RULE_zenFunctionParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1005;
			this.zenAnnotations();
			this.state = 1006;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 1008;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_DOT) {
				{
				this.state = 1007;
				this.zenDot3Token();
				}
			}

			this.state = 1012;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_KW_AS || _la === ZenCodeParser.ZEN_T_COLON) {
				{
				this.state = 1010;
				_la = this._input.LA(1);
				if (!(_la === ZenCodeParser.ZEN_KW_AS || _la === ZenCodeParser.ZEN_T_COLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1011;
				this.zenType();
				}
			}

			this.state = 1016;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_ASSIGN) {
				{
				this.state = 1014;
				this.match(ZenCodeParser.ZEN_T_ASSIGN);
				this.state = 1015;
				this.zenAssignExpression();
				}
			}

			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		let _localctx: ZenFunctionBodyStatementContext = new ZenFunctionBodyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, ZenCodeParser.RULE_zenFunctionBodyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1021;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 1018;
				this.zenFunctionLambda();
				}
				break;

			case 2:
				{
				this.state = 1019;
				this.match(ZenCodeParser.ZEN_T_SEMICOLON);
				}
				break;

			case 3:
				{
				this.state = 1020;
				this.zenFunctionBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenFunctionBody(): ZenFunctionBodyContext {
		let _localctx: ZenFunctionBodyContext = new ZenFunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ZenCodeParser.RULE_zenFunctionBody);
		try {
			this.state = 1025;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_T_AOPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1023;
				this.zenStatementBlock();
				}
				break;
			case ZenCodeParser.ZEN_T_SEMICOLON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1024;
				this.match(ZenCodeParser.ZEN_T_SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenIntExpression(): ZenIntExpressionContext {
		let _localctx: ZenIntExpressionContext = new ZenIntExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, ZenCodeParser.RULE_zenIntExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1027;
			this.match(ZenCodeParser.DecimalIntegerLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenPrefixedIntExpression(): ZenPrefixedIntExpressionContext {
		let _localctx: ZenPrefixedIntExpressionContext = new ZenPrefixedIntExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ZenCodeParser.RULE_zenPrefixedIntExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1029;
			this.match(ZenCodeParser.IntegerLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenFloatExpression(): ZenFloatExpressionContext {
		let _localctx: ZenFloatExpressionContext = new ZenFloatExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, ZenCodeParser.RULE_zenFloatExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1031;
			this.match(ZenCodeParser.FloatingPointLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStringExpression(): ZenStringExpressionContext {
		let _localctx: ZenStringExpressionContext = new ZenStringExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, ZenCodeParser.RULE_zenStringExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1033;
			this.match(ZenCodeParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenVariableExpression(): ZenVariableExpressionContext {
		let _localctx: ZenVariableExpressionContext = new ZenVariableExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, ZenCodeParser.RULE_zenVariableExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1035;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 1037;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 1036;
				this.zenTypeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenLocalExpressionVariable(): ZenLocalExpressionVariableContext {
		let _localctx: ZenLocalExpressionVariableContext = new ZenLocalExpressionVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, ZenCodeParser.RULE_zenLocalExpressionVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1039;
			this.match(ZenCodeParser.ZEN_T_DOLLAR);
			this.state = 1040;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenThisExpression(): ZenThisExpressionContext {
		let _localctx: ZenThisExpressionContext = new ZenThisExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, ZenCodeParser.RULE_zenThisExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1042;
			this.match(ZenCodeParser.ZEN_KW_THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenSuperExpression(): ZenSuperExpressionContext {
		let _localctx: ZenSuperExpressionContext = new ZenSuperExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, ZenCodeParser.RULE_zenSuperExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this.match(ZenCodeParser.ZEN_KW_SUPER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenDollarExpression(): ZenDollarExpressionContext {
		let _localctx: ZenDollarExpressionContext = new ZenDollarExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, ZenCodeParser.RULE_zenDollarExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1046;
			this.match(ZenCodeParser.ZEN_T_DOLLAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenArrayExpression(): ZenArrayExpressionContext {
		let _localctx: ZenArrayExpressionContext = new ZenArrayExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, ZenCodeParser.RULE_zenArrayExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1048;
			this.match(ZenCodeParser.ZEN_T_SQOPEN);
			this.state = 1060;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_T_SQCLOSE:
				{
				this.state = 1049;
				this.match(ZenCodeParser.ZEN_T_SQCLOSE);
				}
				break;
			case ZenCodeParser.ZEN_KW_FUNCTION:
			case ZenCodeParser.ZEN_KW_VOID:
			case ZenCodeParser.ZEN_KW_BOOL:
			case ZenCodeParser.ZEN_KW_BYTE:
			case ZenCodeParser.ZEN_KW_SBYTE:
			case ZenCodeParser.ZEN_KW_SHORT:
			case ZenCodeParser.ZEN_KW_USHORT:
			case ZenCodeParser.ZEN_KW_INT:
			case ZenCodeParser.ZEN_KW_UINT:
			case ZenCodeParser.ZEN_KW_LONG:
			case ZenCodeParser.ZEN_KW_ULONG:
			case ZenCodeParser.ZEN_KW_USIZE:
			case ZenCodeParser.ZEN_KW_FLOAT:
			case ZenCodeParser.ZEN_KW_DOUBLE:
			case ZenCodeParser.ZEN_KW_CHAR:
			case ZenCodeParser.ZEN_KW_STRING:
			case ZenCodeParser.ZEN_KW_THROW:
			case ZenCodeParser.ZEN_KW_PANIC:
			case ZenCodeParser.ZEN_KW_TRY:
			case ZenCodeParser.ZEN_KW_MATCH:
			case ZenCodeParser.ZEN_KW_SUPER:
			case ZenCodeParser.ZEN_KW_THIS:
			case ZenCodeParser.ZEN_KW_NULL:
			case ZenCodeParser.ZEN_KW_TRUE:
			case ZenCodeParser.ZEN_KW_FALSE:
			case ZenCodeParser.ZEN_KW_NEW:
			case ZenCodeParser.IntegerLiteral:
			case ZenCodeParser.DecimalIntegerLiteral:
			case ZenCodeParser.FloatingPointLiteral:
			case ZenCodeParser.ZEN_T_AOPEN:
			case ZenCodeParser.ZEN_T_BROPEN:
			case ZenCodeParser.ZEN_T_SQOPEN:
			case ZenCodeParser.ZEN_T_ADD:
			case ZenCodeParser.ZEN_T_CAT:
			case ZenCodeParser.ZEN_T_DOLLAR:
			case ZenCodeParser.ZEN_T_LESS:
			case ZenCodeParser.ZEN_T_NOT:
			case ZenCodeParser.ZEN_T_SUB:
			case ZenCodeParser.StringLiteral:
			case ZenCodeParser.ZEN_IDENTIFIER:
				{
				this.state = 1050;
				this.zenAssignExpression();
				this.state = 1055;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZenCodeParser.ZEN_T_COMMA) {
					{
					{
					this.state = 1051;
					this.match(ZenCodeParser.ZEN_T_COMMA);
					this.state = 1052;
					this.zenAssignExpression();
					}
					}
					this.state = 1057;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1058;
				this.match(ZenCodeParser.ZEN_T_SQCLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenMapExpression(): ZenMapExpressionContext {
		let _localctx: ZenMapExpressionContext = new ZenMapExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, ZenCodeParser.RULE_zenMapExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1062;
			this.match(ZenCodeParser.ZEN_T_AOPEN);
			this.state = 1082;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_T_ACLOSE:
				{
				this.state = 1063;
				this.match(ZenCodeParser.ZEN_T_ACLOSE);
				}
				break;
			case ZenCodeParser.ZEN_KW_FUNCTION:
			case ZenCodeParser.ZEN_KW_VOID:
			case ZenCodeParser.ZEN_KW_BOOL:
			case ZenCodeParser.ZEN_KW_BYTE:
			case ZenCodeParser.ZEN_KW_SBYTE:
			case ZenCodeParser.ZEN_KW_SHORT:
			case ZenCodeParser.ZEN_KW_USHORT:
			case ZenCodeParser.ZEN_KW_INT:
			case ZenCodeParser.ZEN_KW_UINT:
			case ZenCodeParser.ZEN_KW_LONG:
			case ZenCodeParser.ZEN_KW_ULONG:
			case ZenCodeParser.ZEN_KW_USIZE:
			case ZenCodeParser.ZEN_KW_FLOAT:
			case ZenCodeParser.ZEN_KW_DOUBLE:
			case ZenCodeParser.ZEN_KW_CHAR:
			case ZenCodeParser.ZEN_KW_STRING:
			case ZenCodeParser.ZEN_KW_THROW:
			case ZenCodeParser.ZEN_KW_PANIC:
			case ZenCodeParser.ZEN_KW_TRY:
			case ZenCodeParser.ZEN_KW_MATCH:
			case ZenCodeParser.ZEN_KW_SUPER:
			case ZenCodeParser.ZEN_KW_THIS:
			case ZenCodeParser.ZEN_KW_NULL:
			case ZenCodeParser.ZEN_KW_TRUE:
			case ZenCodeParser.ZEN_KW_FALSE:
			case ZenCodeParser.ZEN_KW_NEW:
			case ZenCodeParser.IntegerLiteral:
			case ZenCodeParser.DecimalIntegerLiteral:
			case ZenCodeParser.FloatingPointLiteral:
			case ZenCodeParser.ZEN_T_AOPEN:
			case ZenCodeParser.ZEN_T_BROPEN:
			case ZenCodeParser.ZEN_T_SQOPEN:
			case ZenCodeParser.ZEN_T_ADD:
			case ZenCodeParser.ZEN_T_CAT:
			case ZenCodeParser.ZEN_T_DOLLAR:
			case ZenCodeParser.ZEN_T_LESS:
			case ZenCodeParser.ZEN_T_NOT:
			case ZenCodeParser.ZEN_T_SUB:
			case ZenCodeParser.StringLiteral:
			case ZenCodeParser.ZEN_IDENTIFIER:
				{
				this.state = 1064;
				this.zenAssignExpression();
				this.state = 1067;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ZenCodeParser.ZEN_T_COLON) {
					{
					this.state = 1065;
					this.match(ZenCodeParser.ZEN_T_COLON);
					this.state = 1066;
					this.zenAssignExpression();
					}
				}

				this.state = 1077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZenCodeParser.ZEN_T_COMMA) {
					{
					{
					this.state = 1069;
					this.match(ZenCodeParser.ZEN_T_COMMA);
					this.state = 1070;
					this.zenAssignExpression();
					this.state = 1073;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ZenCodeParser.ZEN_T_COLON) {
						{
						this.state = 1071;
						this.match(ZenCodeParser.ZEN_T_COLON);
						this.state = 1072;
						this.zenAssignExpression();
						}
					}

					}
					}
					this.state = 1079;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1080;
				this.match(ZenCodeParser.ZEN_T_ACLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenTrueExpression(): ZenTrueExpressionContext {
		let _localctx: ZenTrueExpressionContext = new ZenTrueExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, ZenCodeParser.RULE_zenTrueExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1084;
			this.match(ZenCodeParser.ZEN_KW_TRUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenFalseExpression(): ZenFalseExpressionContext {
		let _localctx: ZenFalseExpressionContext = new ZenFalseExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, ZenCodeParser.RULE_zenFalseExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1086;
			this.match(ZenCodeParser.ZEN_KW_FALSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenNullExpression(): ZenNullExpressionContext {
		let _localctx: ZenNullExpressionContext = new ZenNullExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, ZenCodeParser.RULE_zenNullExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1088;
			this.match(ZenCodeParser.ZEN_KW_NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenBracketExpression(): ZenBracketExpressionContext {
		let _localctx: ZenBracketExpressionContext = new ZenBracketExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, ZenCodeParser.RULE_zenBracketExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			this.match(ZenCodeParser.ZEN_T_BROPEN);
			this.state = 1102;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_T_BRCLOSE:
				{
				this.state = 1091;
				this.match(ZenCodeParser.ZEN_T_BRCLOSE);
				}
				break;
			case ZenCodeParser.ZEN_KW_FUNCTION:
			case ZenCodeParser.ZEN_KW_VOID:
			case ZenCodeParser.ZEN_KW_BOOL:
			case ZenCodeParser.ZEN_KW_BYTE:
			case ZenCodeParser.ZEN_KW_SBYTE:
			case ZenCodeParser.ZEN_KW_SHORT:
			case ZenCodeParser.ZEN_KW_USHORT:
			case ZenCodeParser.ZEN_KW_INT:
			case ZenCodeParser.ZEN_KW_UINT:
			case ZenCodeParser.ZEN_KW_LONG:
			case ZenCodeParser.ZEN_KW_ULONG:
			case ZenCodeParser.ZEN_KW_USIZE:
			case ZenCodeParser.ZEN_KW_FLOAT:
			case ZenCodeParser.ZEN_KW_DOUBLE:
			case ZenCodeParser.ZEN_KW_CHAR:
			case ZenCodeParser.ZEN_KW_STRING:
			case ZenCodeParser.ZEN_KW_THROW:
			case ZenCodeParser.ZEN_KW_PANIC:
			case ZenCodeParser.ZEN_KW_TRY:
			case ZenCodeParser.ZEN_KW_MATCH:
			case ZenCodeParser.ZEN_KW_SUPER:
			case ZenCodeParser.ZEN_KW_THIS:
			case ZenCodeParser.ZEN_KW_NULL:
			case ZenCodeParser.ZEN_KW_TRUE:
			case ZenCodeParser.ZEN_KW_FALSE:
			case ZenCodeParser.ZEN_KW_NEW:
			case ZenCodeParser.IntegerLiteral:
			case ZenCodeParser.DecimalIntegerLiteral:
			case ZenCodeParser.FloatingPointLiteral:
			case ZenCodeParser.ZEN_T_AOPEN:
			case ZenCodeParser.ZEN_T_BROPEN:
			case ZenCodeParser.ZEN_T_SQOPEN:
			case ZenCodeParser.ZEN_T_ADD:
			case ZenCodeParser.ZEN_T_CAT:
			case ZenCodeParser.ZEN_T_DOLLAR:
			case ZenCodeParser.ZEN_T_LESS:
			case ZenCodeParser.ZEN_T_NOT:
			case ZenCodeParser.ZEN_T_SUB:
			case ZenCodeParser.StringLiteral:
			case ZenCodeParser.ZEN_IDENTIFIER:
				{
				this.state = 1092;
				this.zenAssignExpression();
				this.state = 1097;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZenCodeParser.ZEN_T_COMMA) {
					{
					{
					this.state = 1093;
					this.match(ZenCodeParser.ZEN_T_COMMA);
					this.state = 1094;
					this.zenAssignExpression();
					}
					}
					this.state = 1099;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1100;
				this.match(ZenCodeParser.ZEN_T_BRCLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenNewExpression(): ZenNewExpressionContext {
		let _localctx: ZenNewExpressionContext = new ZenNewExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, ZenCodeParser.RULE_zenNewExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1104;
			this.match(ZenCodeParser.ZEN_KW_NEW);
			this.state = 1105;
			this.zenType();
			this.state = 1107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 1106;
				this.zenCallArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenThrowExpression(): ZenThrowExpressionContext {
		let _localctx: ZenThrowExpressionContext = new ZenThrowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, ZenCodeParser.RULE_zenThrowExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1109;
			this.match(ZenCodeParser.ZEN_KW_THROW);
			this.state = 1110;
			this.zenAssignExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenPanicExpression(): ZenPanicExpressionContext {
		let _localctx: ZenPanicExpressionContext = new ZenPanicExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, ZenCodeParser.RULE_zenPanicExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1112;
			this.match(ZenCodeParser.ZEN_KW_PANIC);
			this.state = 1113;
			this.zenAssignExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenMatchExpression(): ZenMatchExpressionContext {
		let _localctx: ZenMatchExpressionContext = new ZenMatchExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, ZenCodeParser.RULE_zenMatchExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1115;
			this.match(ZenCodeParser.ZEN_KW_MATCH);
			this.state = 1116;
			this.zenAssignExpression();
			this.state = 1117;
			this.match(ZenCodeParser.ZEN_T_AOPEN);
			this.state = 1134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 1118;
				this.match(ZenCodeParser.ZEN_T_ACLOSE);
				}
				break;

			case 2:
				{
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_FUNCTION) | (1 << ZenCodeParser.ZEN_KW_VOID) | (1 << ZenCodeParser.ZEN_KW_BOOL) | (1 << ZenCodeParser.ZEN_KW_BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ZenCodeParser.ZEN_KW_SBYTE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_USHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_INT - 32)) | (1 << (ZenCodeParser.ZEN_KW_UINT - 32)) | (1 << (ZenCodeParser.ZEN_KW_LONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_ULONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_USIZE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FLOAT - 32)) | (1 << (ZenCodeParser.ZEN_KW_DOUBLE - 32)) | (1 << (ZenCodeParser.ZEN_KW_CHAR - 32)) | (1 << (ZenCodeParser.ZEN_KW_STRING - 32)) | (1 << (ZenCodeParser.ZEN_KW_THROW - 32)) | (1 << (ZenCodeParser.ZEN_KW_PANIC - 32)) | (1 << (ZenCodeParser.ZEN_KW_TRY - 32)) | (1 << (ZenCodeParser.ZEN_KW_DEFAULT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ZenCodeParser.ZEN_KW_MATCH - 64)) | (1 << (ZenCodeParser.ZEN_KW_SUPER - 64)) | (1 << (ZenCodeParser.ZEN_KW_THIS - 64)) | (1 << (ZenCodeParser.ZEN_KW_NULL - 64)) | (1 << (ZenCodeParser.ZEN_KW_TRUE - 64)) | (1 << (ZenCodeParser.ZEN_KW_FALSE - 64)) | (1 << (ZenCodeParser.ZEN_KW_NEW - 64)) | (1 << (ZenCodeParser.IntegerLiteral - 64)) | (1 << (ZenCodeParser.DecimalIntegerLiteral - 64)) | (1 << (ZenCodeParser.FloatingPointLiteral - 64)) | (1 << (ZenCodeParser.ZEN_T_AOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_BROPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_SQOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_ADD - 64)) | (1 << (ZenCodeParser.ZEN_T_CAT - 64)) | (1 << (ZenCodeParser.ZEN_T_DOLLAR - 64)) | (1 << (ZenCodeParser.ZEN_T_LESS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ZenCodeParser.ZEN_T_NOT - 96)) | (1 << (ZenCodeParser.ZEN_T_SUB - 96)) | (1 << (ZenCodeParser.StringLiteral - 96)) | (1 << (ZenCodeParser.ZEN_IDENTIFIER - 96)))) !== 0)) {
					{
					{
					this.state = 1121;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ZenCodeParser.ZEN_KW_DEFAULT:
						{
						this.state = 1119;
						this.match(ZenCodeParser.ZEN_KW_DEFAULT);
						}
						break;
					case ZenCodeParser.ZEN_KW_FUNCTION:
					case ZenCodeParser.ZEN_KW_VOID:
					case ZenCodeParser.ZEN_KW_BOOL:
					case ZenCodeParser.ZEN_KW_BYTE:
					case ZenCodeParser.ZEN_KW_SBYTE:
					case ZenCodeParser.ZEN_KW_SHORT:
					case ZenCodeParser.ZEN_KW_USHORT:
					case ZenCodeParser.ZEN_KW_INT:
					case ZenCodeParser.ZEN_KW_UINT:
					case ZenCodeParser.ZEN_KW_LONG:
					case ZenCodeParser.ZEN_KW_ULONG:
					case ZenCodeParser.ZEN_KW_USIZE:
					case ZenCodeParser.ZEN_KW_FLOAT:
					case ZenCodeParser.ZEN_KW_DOUBLE:
					case ZenCodeParser.ZEN_KW_CHAR:
					case ZenCodeParser.ZEN_KW_STRING:
					case ZenCodeParser.ZEN_KW_THROW:
					case ZenCodeParser.ZEN_KW_PANIC:
					case ZenCodeParser.ZEN_KW_TRY:
					case ZenCodeParser.ZEN_KW_MATCH:
					case ZenCodeParser.ZEN_KW_SUPER:
					case ZenCodeParser.ZEN_KW_THIS:
					case ZenCodeParser.ZEN_KW_NULL:
					case ZenCodeParser.ZEN_KW_TRUE:
					case ZenCodeParser.ZEN_KW_FALSE:
					case ZenCodeParser.ZEN_KW_NEW:
					case ZenCodeParser.IntegerLiteral:
					case ZenCodeParser.DecimalIntegerLiteral:
					case ZenCodeParser.FloatingPointLiteral:
					case ZenCodeParser.ZEN_T_AOPEN:
					case ZenCodeParser.ZEN_T_BROPEN:
					case ZenCodeParser.ZEN_T_SQOPEN:
					case ZenCodeParser.ZEN_T_ADD:
					case ZenCodeParser.ZEN_T_CAT:
					case ZenCodeParser.ZEN_T_DOLLAR:
					case ZenCodeParser.ZEN_T_LESS:
					case ZenCodeParser.ZEN_T_NOT:
					case ZenCodeParser.ZEN_T_SUB:
					case ZenCodeParser.StringLiteral:
					case ZenCodeParser.ZEN_IDENTIFIER:
						{
						this.state = 1120;
						this.zenAssignExpression();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1123;
					this.zenLambdaToken();
					this.state = 1124;
					this.zenAssignExpression();
					this.state = 1126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ZenCodeParser.ZEN_T_COMMA) {
						{
						this.state = 1125;
						this.match(ZenCodeParser.ZEN_T_COMMA);
						}
					}

					}
					}
					this.state = 1132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1133;
				this.match(ZenCodeParser.ZEN_T_ACLOSE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenBracketHandlerExpression(): ZenBracketHandlerExpressionContext {
		let _localctx: ZenBracketHandlerExpressionContext = new ZenBracketHandlerExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, ZenCodeParser.RULE_zenBracketHandlerExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1136;
			this.match(ZenCodeParser.ZEN_T_LESS);
			this.state = 1143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_IMPORT) | (1 << ZenCodeParser.ZEN_KW_ALIAS) | (1 << ZenCodeParser.ZEN_KW_CLASS) | (1 << ZenCodeParser.ZEN_KW_FUNCTION) | (1 << ZenCodeParser.ZEN_KW_INTERFACE) | (1 << ZenCodeParser.ZEN_KW_ENUM) | (1 << ZenCodeParser.ZEN_KW_STRUCT) | (1 << ZenCodeParser.ZEN_KW_EXPAND) | (1 << ZenCodeParser.ZEN_KW_VARIANT) | (1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_OVERRIDE) | (1 << ZenCodeParser.ZEN_KW_CONST) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_EXPORT) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_STATIC) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN) | (1 << ZenCodeParser.ZEN_KW_IMMUTABLE) | (1 << ZenCodeParser.ZEN_KW_VAL) | (1 << ZenCodeParser.ZEN_KW_VAR) | (1 << ZenCodeParser.ZEN_KW_GET) | (1 << ZenCodeParser.ZEN_KW_IMPLEMENTS) | (1 << ZenCodeParser.ZEN_KW_SET) | (1 << ZenCodeParser.ZEN_KW_VOID) | (1 << ZenCodeParser.ZEN_KW_BOOL) | (1 << ZenCodeParser.ZEN_KW_BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ZenCodeParser.ZEN_KW_SBYTE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_USHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_INT - 32)) | (1 << (ZenCodeParser.ZEN_KW_UINT - 32)) | (1 << (ZenCodeParser.ZEN_KW_LONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_ULONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_USIZE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FLOAT - 32)) | (1 << (ZenCodeParser.ZEN_KW_DOUBLE - 32)) | (1 << (ZenCodeParser.ZEN_KW_CHAR - 32)) | (1 << (ZenCodeParser.ZEN_KW_STRING - 32)) | (1 << (ZenCodeParser.ZEN_KW_IF - 32)) | (1 << (ZenCodeParser.ZEN_KW_ELSE - 32)) | (1 << (ZenCodeParser.ZEN_KW_DO - 32)) | (1 << (ZenCodeParser.ZEN_KW_WHILE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FOR - 32)) | (1 << (ZenCodeParser.ZEN_KW_THROW - 32)) | (1 << (ZenCodeParser.ZEN_KW_PANIC - 32)) | (1 << (ZenCodeParser.ZEN_KW_LOCK - 32)) | (1 << (ZenCodeParser.ZEN_KW_TRY - 32)) | (1 << (ZenCodeParser.ZEN_KW_CATCH - 32)) | (1 << (ZenCodeParser.ZEN_KW_FINALLY - 32)) | (1 << (ZenCodeParser.ZEN_KW_RETURN - 32)) | (1 << (ZenCodeParser.ZEN_KW_BREAK - 32)) | (1 << (ZenCodeParser.ZEN_KW_CONTINUE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SWITCH - 32)) | (1 << (ZenCodeParser.ZEN_KW_CASE - 32)) | (1 << (ZenCodeParser.ZEN_KW_DEFAULT - 32)) | (1 << (ZenCodeParser.ZEN_KW_IN - 32)) | (1 << (ZenCodeParser.ZEN_KW_IS - 32)) | (1 << (ZenCodeParser.ZEN_KW_AS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ZenCodeParser.ZEN_KW_MATCH - 64)) | (1 << (ZenCodeParser.ZEN_KW_THROWS - 64)) | (1 << (ZenCodeParser.ZEN_KW_SUPER - 64)) | (1 << (ZenCodeParser.ZEN_KW_THIS - 64)) | (1 << (ZenCodeParser.ZEN_KW_NULL - 64)) | (1 << (ZenCodeParser.ZEN_KW_TRUE - 64)) | (1 << (ZenCodeParser.ZEN_KW_FALSE - 64)) | (1 << (ZenCodeParser.ZEN_KW_NEW - 64)) | (1 << (ZenCodeParser.IntegerLiteral - 64)) | (1 << (ZenCodeParser.DecimalIntegerLiteral - 64)) | (1 << (ZenCodeParser.FloatingPointLiteral - 64)) | (1 << (ZenCodeParser.ZEN_T_ACLOSE - 64)) | (1 << (ZenCodeParser.ZEN_T_AOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_BRCLOSE - 64)) | (1 << (ZenCodeParser.ZEN_T_BROPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_COMMA - 64)) | (1 << (ZenCodeParser.ZEN_T_DOT - 64)) | (1 << (ZenCodeParser.ZEN_T_SEMICOLON - 64)) | (1 << (ZenCodeParser.ZEN_T_SQCLOSE - 64)) | (1 << (ZenCodeParser.ZEN_T_SQOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_ADD - 64)) | (1 << (ZenCodeParser.ZEN_T_AND - 64)) | (1 << (ZenCodeParser.ZEN_T_ASSIGN - 64)) | (1 << (ZenCodeParser.ZEN_T_BACKTICK - 64)) | (1 << (ZenCodeParser.ZEN_T_CAT - 64)) | (1 << (ZenCodeParser.ZEN_T_COLON - 64)) | (1 << (ZenCodeParser.ZEN_T_DIV - 64)) | (1 << (ZenCodeParser.ZEN_T_DOLLAR - 64)) | (1 << (ZenCodeParser.ZEN_T_LESS - 64)) | (1 << (ZenCodeParser.ZEN_T_MOD - 64)) | (1 << (ZenCodeParser.ZEN_T_MUL - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ZenCodeParser.ZEN_T_NOT - 96)) | (1 << (ZenCodeParser.ZEN_T_OR - 96)) | (1 << (ZenCodeParser.ZEN_T_QUEST - 96)) | (1 << (ZenCodeParser.ZEN_T_SUB - 96)) | (1 << (ZenCodeParser.ZEN_T_XOR - 96)) | (1 << (ZenCodeParser.StringLiteral - 96)) | (1 << (ZenCodeParser.ZEN_IDENTIFIER - 96)) | (1 << (ZenCodeParser.ZEN_WS - 96)) | (1 << (ZenCodeParser.ZEN_COMMENT - 96)) | (1 << (ZenCodeParser.ZEN_LINE_COMMENT - 96)) | (1 << (ZenCodeParser.ZEN_PREPROC_COMMENT - 96)))) !== 0)) {
				{
				{
				this.state = 1137;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === ZenCodeParser.ZEN_T_GREATER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1139;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 1138;
					this.match(ZenCodeParser.ZEN_T_COLON);
					}
					break;
				}
				}
				}
				this.state = 1145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1146;
			this.match(ZenCodeParser.ZEN_T_GREATER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenPrimaryExpression(): ZenPrimaryExpressionContext {
		let _localctx: ZenPrimaryExpressionContext = new ZenPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, ZenCodeParser.RULE_zenPrimaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 1148;
				this.zenIntExpression();
				}
				break;

			case 2:
				{
				this.state = 1149;
				this.zenPrefixedIntExpression();
				}
				break;

			case 3:
				{
				this.state = 1150;
				this.zenFloatExpression();
				}
				break;

			case 4:
				{
				this.state = 1151;
				this.zenStringExpression();
				}
				break;

			case 5:
				{
				this.state = 1152;
				this.zenVariableExpression();
				}
				break;

			case 6:
				{
				this.state = 1153;
				this.zenLocalExpressionVariable();
				}
				break;

			case 7:
				{
				this.state = 1154;
				this.zenThisExpression();
				}
				break;

			case 8:
				{
				this.state = 1155;
				this.zenSuperExpression();
				}
				break;

			case 9:
				{
				this.state = 1156;
				this.zenDollarExpression();
				}
				break;

			case 10:
				{
				this.state = 1157;
				this.zenArrayExpression();
				}
				break;

			case 11:
				{
				this.state = 1158;
				this.zenMapExpression();
				}
				break;

			case 12:
				{
				this.state = 1159;
				this.zenTrueExpression();
				}
				break;

			case 13:
				{
				this.state = 1160;
				this.zenFalseExpression();
				}
				break;

			case 14:
				{
				this.state = 1161;
				this.zenNullExpression();
				}
				break;

			case 15:
				{
				this.state = 1162;
				this.zenBracketExpression();
				}
				break;

			case 16:
				{
				this.state = 1163;
				this.zenNewExpression();
				}
				break;

			case 17:
				{
				this.state = 1164;
				this.zenThrowExpression();
				}
				break;

			case 18:
				{
				this.state = 1165;
				this.zenPanicExpression();
				}
				break;

			case 19:
				{
				this.state = 1166;
				this.zenMatchExpression();
				}
				break;

			case 20:
				{
				this.state = 1167;
				this.zenBracketHandlerExpression();
				}
				break;

			case 21:
				{
				this.state = 1168;
				this.zenType();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenPostfixExpression(): ZenPostfixExpressionContext {
		let _localctx: ZenPostfixExpressionContext = new ZenPostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, ZenCodeParser.RULE_zenPostfixExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1171;
			this.zenPrimaryExpression();
			this.state = 1206;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1204;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
					case 1:
						{
						this.state = 1172;
						this.match(ZenCodeParser.ZEN_T_DOT);
						this.state = 1179;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZenCodeParser.ZEN_IDENTIFIER:
							{
							{
							this.state = 1173;
							this.match(ZenCodeParser.ZEN_IDENTIFIER);
							this.state = 1175;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
							case 1:
								{
								this.state = 1174;
								this.zenTypeArguments();
								}
								break;
							}
							}
							}
							break;
						case ZenCodeParser.ZEN_T_DOLLAR:
							{
							this.state = 1177;
							this.match(ZenCodeParser.ZEN_T_DOLLAR);
							}
							break;
						case ZenCodeParser.StringLiteral:
							{
							this.state = 1178;
							this.match(ZenCodeParser.StringLiteral);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;

					case 2:
						{
						this.state = 1181;
						this.zenDot2Token();
						this.state = 1182;
						this.zenAssignExpression();
						}
						break;

					case 3:
						{
						this.state = 1184;
						this.match(ZenCodeParser.ZEN_T_SQOPEN);
						{
						this.state = 1185;
						this.zenAssignExpression();
						this.state = 1190;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === ZenCodeParser.ZEN_T_COMMA) {
							{
							{
							this.state = 1186;
							this.match(ZenCodeParser.ZEN_T_COMMA);
							this.state = 1187;
							this.zenAssignExpression();
							}
							}
							this.state = 1192;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						this.state = 1193;
						this.match(ZenCodeParser.ZEN_T_SQCLOSE);
						}
						break;

					case 4:
						{
						this.state = 1195;
						this.zenCallArguments();
						}
						break;

					case 5:
						{
						this.state = 1196;
						this.match(ZenCodeParser.ZEN_KW_AS);
						this.state = 1198;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ZenCodeParser.ZEN_T_QUEST) {
							{
							this.state = 1197;
							this.match(ZenCodeParser.ZEN_T_QUEST);
							}
						}

						this.state = 1200;
						this.zenType();
						}
						break;

					case 6:
						{
						this.state = 1201;
						this.zenIncrementToken();
						}
						break;

					case 7:
						{
						this.state = 1202;
						this.zenDecrementToken();
						}
						break;

					case 8:
						{
						this.state = 1203;
						this.zenExpressionLambda();
						}
						break;
					}
					}
				}
				this.state = 1208;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenUnaryExpression(): ZenUnaryExpressionContext {
		let _localctx: ZenUnaryExpressionContext = new ZenUnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, ZenCodeParser.RULE_zenUnaryExpression);
		let _la: number;
		try {
			this.state = 1226;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_KW_TRY:
			case ZenCodeParser.ZEN_T_ADD:
			case ZenCodeParser.ZEN_T_CAT:
			case ZenCodeParser.ZEN_T_NOT:
			case ZenCodeParser.ZEN_T_SUB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1223;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZenCodeParser.ZEN_T_ADD:
				case ZenCodeParser.ZEN_T_CAT:
				case ZenCodeParser.ZEN_T_NOT:
				case ZenCodeParser.ZEN_T_SUB:
					{
					{
					this.state = 1214;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
					case 1:
						{
						this.state = 1209;
						this.match(ZenCodeParser.ZEN_T_NOT);
						}
						break;

					case 2:
						{
						this.state = 1210;
						this.match(ZenCodeParser.ZEN_T_SUB);
						}
						break;

					case 3:
						{
						this.state = 1211;
						this.match(ZenCodeParser.ZEN_T_CAT);
						}
						break;

					case 4:
						{
						this.state = 1212;
						this.zenIncrementToken();
						}
						break;

					case 5:
						{
						this.state = 1213;
						this.zenDecrementToken();
						}
						break;
					}
					this.state = 1216;
					this.zenUnaryExpression();
					}
					}
					break;
				case ZenCodeParser.ZEN_KW_TRY:
					{
					this.state = 1217;
					this.match(ZenCodeParser.ZEN_KW_TRY);
					this.state = 1221;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ZenCodeParser.ZEN_T_NOT:
					case ZenCodeParser.ZEN_T_QUEST:
						{
						this.state = 1218;
						_la = this._input.LA(1);
						if (!(_la === ZenCodeParser.ZEN_T_NOT || _la === ZenCodeParser.ZEN_T_QUEST)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1219;
						this.zenUnaryExpression();
						}
						break;
					case ZenCodeParser.ZEN_KW_FUNCTION:
					case ZenCodeParser.ZEN_KW_VOID:
					case ZenCodeParser.ZEN_KW_BOOL:
					case ZenCodeParser.ZEN_KW_BYTE:
					case ZenCodeParser.ZEN_KW_SBYTE:
					case ZenCodeParser.ZEN_KW_SHORT:
					case ZenCodeParser.ZEN_KW_USHORT:
					case ZenCodeParser.ZEN_KW_INT:
					case ZenCodeParser.ZEN_KW_UINT:
					case ZenCodeParser.ZEN_KW_LONG:
					case ZenCodeParser.ZEN_KW_ULONG:
					case ZenCodeParser.ZEN_KW_USIZE:
					case ZenCodeParser.ZEN_KW_FLOAT:
					case ZenCodeParser.ZEN_KW_DOUBLE:
					case ZenCodeParser.ZEN_KW_CHAR:
					case ZenCodeParser.ZEN_KW_STRING:
					case ZenCodeParser.ZEN_KW_THROW:
					case ZenCodeParser.ZEN_KW_PANIC:
					case ZenCodeParser.ZEN_KW_MATCH:
					case ZenCodeParser.ZEN_KW_SUPER:
					case ZenCodeParser.ZEN_KW_THIS:
					case ZenCodeParser.ZEN_KW_NULL:
					case ZenCodeParser.ZEN_KW_TRUE:
					case ZenCodeParser.ZEN_KW_FALSE:
					case ZenCodeParser.ZEN_KW_NEW:
					case ZenCodeParser.IntegerLiteral:
					case ZenCodeParser.DecimalIntegerLiteral:
					case ZenCodeParser.FloatingPointLiteral:
					case ZenCodeParser.ZEN_T_AOPEN:
					case ZenCodeParser.ZEN_T_BROPEN:
					case ZenCodeParser.ZEN_T_SQOPEN:
					case ZenCodeParser.ZEN_T_DOLLAR:
					case ZenCodeParser.ZEN_T_LESS:
					case ZenCodeParser.StringLiteral:
					case ZenCodeParser.ZEN_IDENTIFIER:
						{
						this.state = 1220;
						this.zenPostfixExpression();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case ZenCodeParser.ZEN_KW_FUNCTION:
			case ZenCodeParser.ZEN_KW_VOID:
			case ZenCodeParser.ZEN_KW_BOOL:
			case ZenCodeParser.ZEN_KW_BYTE:
			case ZenCodeParser.ZEN_KW_SBYTE:
			case ZenCodeParser.ZEN_KW_SHORT:
			case ZenCodeParser.ZEN_KW_USHORT:
			case ZenCodeParser.ZEN_KW_INT:
			case ZenCodeParser.ZEN_KW_UINT:
			case ZenCodeParser.ZEN_KW_LONG:
			case ZenCodeParser.ZEN_KW_ULONG:
			case ZenCodeParser.ZEN_KW_USIZE:
			case ZenCodeParser.ZEN_KW_FLOAT:
			case ZenCodeParser.ZEN_KW_DOUBLE:
			case ZenCodeParser.ZEN_KW_CHAR:
			case ZenCodeParser.ZEN_KW_STRING:
			case ZenCodeParser.ZEN_KW_THROW:
			case ZenCodeParser.ZEN_KW_PANIC:
			case ZenCodeParser.ZEN_KW_MATCH:
			case ZenCodeParser.ZEN_KW_SUPER:
			case ZenCodeParser.ZEN_KW_THIS:
			case ZenCodeParser.ZEN_KW_NULL:
			case ZenCodeParser.ZEN_KW_TRUE:
			case ZenCodeParser.ZEN_KW_FALSE:
			case ZenCodeParser.ZEN_KW_NEW:
			case ZenCodeParser.IntegerLiteral:
			case ZenCodeParser.DecimalIntegerLiteral:
			case ZenCodeParser.FloatingPointLiteral:
			case ZenCodeParser.ZEN_T_AOPEN:
			case ZenCodeParser.ZEN_T_BROPEN:
			case ZenCodeParser.ZEN_T_SQOPEN:
			case ZenCodeParser.ZEN_T_DOLLAR:
			case ZenCodeParser.ZEN_T_LESS:
			case ZenCodeParser.StringLiteral:
			case ZenCodeParser.ZEN_IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1225;
				this.zenPostfixExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenMulExpression(): ZenMulExpressionContext {
		let _localctx: ZenMulExpressionContext = new ZenMulExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, ZenCodeParser.RULE_zenMulExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1228;
			this.zenUnaryExpression();
			this.state = 1233;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1229;
					_la = this._input.LA(1);
					if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (ZenCodeParser.ZEN_T_DIV - 90)) | (1 << (ZenCodeParser.ZEN_T_MOD - 90)) | (1 << (ZenCodeParser.ZEN_T_MUL - 90)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1230;
					this.zenUnaryExpression();
					}
					}
				}
				this.state = 1235;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAddExpression(): ZenAddExpressionContext {
		let _localctx: ZenAddExpressionContext = new ZenAddExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, ZenCodeParser.RULE_zenAddExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1236;
			this.zenMulExpression();
			this.state = 1241;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1237;
					_la = this._input.LA(1);
					if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (ZenCodeParser.ZEN_T_ADD - 84)) | (1 << (ZenCodeParser.ZEN_T_CAT - 84)) | (1 << (ZenCodeParser.ZEN_T_SUB - 84)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1238;
					this.zenMulExpression();
					}
					}
				}
				this.state = 1243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenShiftExpression(): ZenShiftExpressionContext {
		let _localctx: ZenShiftExpressionContext = new ZenShiftExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, ZenCodeParser.RULE_zenShiftExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1244;
			this.zenAddExpression();
			this.state = 1254;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1248;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
					case 1:
						{
						this.state = 1245;
						this.zenSHLToken();
						}
						break;

					case 2:
						{
						this.state = 1246;
						this.zenSHRToken();
						}
						break;

					case 3:
						{
						this.state = 1247;
						this.zenUSHRToken();
						}
						break;
					}
					this.state = 1250;
					this.zenAddExpression();
					}
					}
				}
				this.state = 1256;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenCompareExpression(): ZenCompareExpressionContext {
		let _localctx: ZenCompareExpressionContext = new ZenCompareExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, ZenCodeParser.RULE_zenCompareExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1257;
			this.zenShiftExpression();
			this.state = 1279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				this.state = 1267;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
				case 1:
					{
					this.state = 1258;
					this.zenEqual2Token();
					}
					break;

				case 2:
					{
					this.state = 1259;
					this.zenEqual3Token();
					}
					break;

				case 3:
					{
					this.state = 1260;
					this.zenNotEqualToken();
					}
					break;

				case 4:
					{
					this.state = 1261;
					this.zenNotEqual2Token();
					}
					break;

				case 5:
					{
					this.state = 1262;
					this.match(ZenCodeParser.ZEN_T_LESS);
					}
					break;

				case 6:
					{
					this.state = 1263;
					this.zenLessEqToken();
					}
					break;

				case 7:
					{
					this.state = 1264;
					this.match(ZenCodeParser.ZEN_T_GREATER);
					}
					break;

				case 8:
					{
					this.state = 1265;
					this.zenGreaterEqToken();
					}
					break;

				case 9:
					{
					this.state = 1266;
					this.match(ZenCodeParser.ZEN_KW_IN);
					}
					break;
				}
				this.state = 1269;
				this.zenShiftExpression();
				}
				break;

			case 2:
				{
				{
				this.state = 1270;
				this.match(ZenCodeParser.ZEN_KW_IS);
				this.state = 1271;
				this.zenType();
				}
				}
				break;

			case 3:
				{
				{
				this.state = 1272;
				this.match(ZenCodeParser.ZEN_T_NOT);
				this.state = 1277;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZenCodeParser.ZEN_KW_IN:
					{
					this.state = 1273;
					this.match(ZenCodeParser.ZEN_KW_IN);
					this.state = 1274;
					this.zenShiftExpression();
					}
					break;
				case ZenCodeParser.ZEN_KW_IS:
					{
					this.state = 1275;
					this.match(ZenCodeParser.ZEN_KW_IS);
					this.state = 1276;
					this.zenType();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAndExpression(): ZenAndExpressionContext {
		let _localctx: ZenAndExpressionContext = new ZenAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, ZenCodeParser.RULE_zenAndExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1281;
			this.zenCompareExpression();
			this.state = 1286;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1282;
					this.match(ZenCodeParser.ZEN_T_AND);
					this.state = 1283;
					this.zenCompareExpression();
					}
					}
				}
				this.state = 1288;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenXorExpression(): ZenXorExpressionContext {
		let _localctx: ZenXorExpressionContext = new ZenXorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, ZenCodeParser.RULE_zenXorExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1289;
			this.zenAndExpression();
			this.state = 1294;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1290;
					this.match(ZenCodeParser.ZEN_T_XOR);
					this.state = 1291;
					this.zenAndExpression();
					}
					}
				}
				this.state = 1296;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenOrExpression(): ZenOrExpressionContext {
		let _localctx: ZenOrExpressionContext = new ZenOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, ZenCodeParser.RULE_zenOrExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1297;
			this.zenXorExpression();
			this.state = 1302;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1298;
					this.match(ZenCodeParser.ZEN_T_OR);
					this.state = 1299;
					this.zenXorExpression();
					}
					}
				}
				this.state = 1304;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAndAndExpression(): ZenAndAndExpressionContext {
		let _localctx: ZenAndAndExpressionContext = new ZenAndAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, ZenCodeParser.RULE_zenAndAndExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1305;
			this.zenOrExpression();
			this.state = 1311;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1306;
					this.zenAndAndToken();
					this.state = 1307;
					this.zenOrExpression();
					}
					}
				}
				this.state = 1313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenOrOrExpression(): ZenOrOrExpressionContext {
		let _localctx: ZenOrOrExpressionContext = new ZenOrOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, ZenCodeParser.RULE_zenOrOrExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1314;
			this.zenAndAndExpression();
			this.state = 1320;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1315;
					this.zenOrOrToken();
					this.state = 1316;
					this.zenAndAndExpression();
					}
					}
				}
				this.state = 1322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
			}
			this.state = 1328;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1323;
					this.zenCoalesceToken();
					this.state = 1324;
					this.zenAndAndExpression();
					}
					}
				}
				this.state = 1330;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenConditionalExpression(): ZenConditionalExpressionContext {
		let _localctx: ZenConditionalExpressionContext = new ZenConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, ZenCodeParser.RULE_zenConditionalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1331;
			this.zenOrOrExpression();
			this.state = 1337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1332;
				this.match(ZenCodeParser.ZEN_T_QUEST);
				this.state = 1333;
				this.zenOrOrExpression();
				this.state = 1334;
				this.match(ZenCodeParser.ZEN_T_COLON);
				this.state = 1335;
				this.zenConditionalExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAssignExpression(): ZenAssignExpressionContext {
		let _localctx: ZenAssignExpressionContext = new ZenAssignExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, ZenCodeParser.RULE_zenAssignExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1339;
			this.zenConditionalExpression();
			this.state = 1356;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1353;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
				case 1:
					{
					this.state = 1340;
					this.match(ZenCodeParser.ZEN_T_ASSIGN);
					}
					break;

				case 2:
					{
					this.state = 1341;
					this.zenAddAssignToken();
					}
					break;

				case 3:
					{
					this.state = 1342;
					this.zenSubAssignToken();
					}
					break;

				case 4:
					{
					this.state = 1343;
					this.zenCatAssignToken();
					}
					break;

				case 5:
					{
					this.state = 1344;
					this.zenMulAssignToken();
					}
					break;

				case 6:
					{
					this.state = 1345;
					this.zenDivAssignToken();
					}
					break;

				case 7:
					{
					this.state = 1346;
					this.zenModAssignToken();
					}
					break;

				case 8:
					{
					this.state = 1347;
					this.zenOrAssignToken();
					}
					break;

				case 9:
					{
					this.state = 1348;
					this.zenAndAssignToken();
					}
					break;

				case 10:
					{
					this.state = 1349;
					this.zenXOrAssignToken();
					}
					break;

				case 11:
					{
					this.state = 1350;
					this.zenSHLAssignToken();
					}
					break;

				case 12:
					{
					this.state = 1351;
					this.zenSHRAssignToken();
					}
					break;

				case 13:
					{
					this.state = 1352;
					this.zenUSHRAssignToken();
					}
					break;
				}
				this.state = 1355;
				this.zenAssignExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementBlock(): ZenStatementBlockContext {
		let _localctx: ZenStatementBlockContext = new ZenStatementBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, ZenCodeParser.RULE_zenStatementBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1358;
			this.match(ZenCodeParser.ZEN_T_AOPEN);
			this.state = 1367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1359;
				this.match(ZenCodeParser.ZEN_T_ACLOSE);
				}
				break;

			case 2:
				{
				{
				this.state = 1363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_FUNCTION) | (1 << ZenCodeParser.ZEN_KW_VAL) | (1 << ZenCodeParser.ZEN_KW_VAR) | (1 << ZenCodeParser.ZEN_KW_VOID) | (1 << ZenCodeParser.ZEN_KW_BOOL) | (1 << ZenCodeParser.ZEN_KW_BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ZenCodeParser.ZEN_KW_SBYTE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_USHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_INT - 32)) | (1 << (ZenCodeParser.ZEN_KW_UINT - 32)) | (1 << (ZenCodeParser.ZEN_KW_LONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_ULONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_USIZE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FLOAT - 32)) | (1 << (ZenCodeParser.ZEN_KW_DOUBLE - 32)) | (1 << (ZenCodeParser.ZEN_KW_CHAR - 32)) | (1 << (ZenCodeParser.ZEN_KW_STRING - 32)) | (1 << (ZenCodeParser.ZEN_KW_IF - 32)) | (1 << (ZenCodeParser.ZEN_KW_DO - 32)) | (1 << (ZenCodeParser.ZEN_KW_WHILE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FOR - 32)) | (1 << (ZenCodeParser.ZEN_KW_THROW - 32)) | (1 << (ZenCodeParser.ZEN_KW_PANIC - 32)) | (1 << (ZenCodeParser.ZEN_KW_LOCK - 32)) | (1 << (ZenCodeParser.ZEN_KW_TRY - 32)) | (1 << (ZenCodeParser.ZEN_KW_RETURN - 32)) | (1 << (ZenCodeParser.ZEN_KW_BREAK - 32)) | (1 << (ZenCodeParser.ZEN_KW_CONTINUE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SWITCH - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ZenCodeParser.ZEN_KW_MATCH - 64)) | (1 << (ZenCodeParser.ZEN_KW_SUPER - 64)) | (1 << (ZenCodeParser.ZEN_KW_THIS - 64)) | (1 << (ZenCodeParser.ZEN_KW_NULL - 64)) | (1 << (ZenCodeParser.ZEN_KW_TRUE - 64)) | (1 << (ZenCodeParser.ZEN_KW_FALSE - 64)) | (1 << (ZenCodeParser.ZEN_KW_NEW - 64)) | (1 << (ZenCodeParser.IntegerLiteral - 64)) | (1 << (ZenCodeParser.DecimalIntegerLiteral - 64)) | (1 << (ZenCodeParser.FloatingPointLiteral - 64)) | (1 << (ZenCodeParser.ZEN_T_AOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_BROPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_SQOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_ADD - 64)) | (1 << (ZenCodeParser.ZEN_T_CAT - 64)) | (1 << (ZenCodeParser.ZEN_T_DOLLAR - 64)) | (1 << (ZenCodeParser.ZEN_T_LESS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ZenCodeParser.ZEN_T_NOT - 96)) | (1 << (ZenCodeParser.ZEN_T_SUB - 96)) | (1 << (ZenCodeParser.StringLiteral - 96)) | (1 << (ZenCodeParser.ZEN_IDENTIFIER - 96)))) !== 0)) {
					{
					{
					this.state = 1360;
					this.zenStatement();
					}
					}
					this.state = 1365;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1366;
				this.match(ZenCodeParser.ZEN_T_ACLOSE);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementReturn(): ZenStatementReturnContext {
		let _localctx: ZenStatementReturnContext = new ZenStatementReturnContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, ZenCodeParser.RULE_zenStatementReturn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1369;
			this.match(ZenCodeParser.ZEN_KW_RETURN);
			this.state = 1374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenCodeParser.ZEN_T_SEMICOLON:
				{
				this.state = 1370;
				this.match(ZenCodeParser.ZEN_T_SEMICOLON);
				}
				break;
			case ZenCodeParser.ZEN_KW_FUNCTION:
			case ZenCodeParser.ZEN_KW_VOID:
			case ZenCodeParser.ZEN_KW_BOOL:
			case ZenCodeParser.ZEN_KW_BYTE:
			case ZenCodeParser.ZEN_KW_SBYTE:
			case ZenCodeParser.ZEN_KW_SHORT:
			case ZenCodeParser.ZEN_KW_USHORT:
			case ZenCodeParser.ZEN_KW_INT:
			case ZenCodeParser.ZEN_KW_UINT:
			case ZenCodeParser.ZEN_KW_LONG:
			case ZenCodeParser.ZEN_KW_ULONG:
			case ZenCodeParser.ZEN_KW_USIZE:
			case ZenCodeParser.ZEN_KW_FLOAT:
			case ZenCodeParser.ZEN_KW_DOUBLE:
			case ZenCodeParser.ZEN_KW_CHAR:
			case ZenCodeParser.ZEN_KW_STRING:
			case ZenCodeParser.ZEN_KW_THROW:
			case ZenCodeParser.ZEN_KW_PANIC:
			case ZenCodeParser.ZEN_KW_TRY:
			case ZenCodeParser.ZEN_KW_MATCH:
			case ZenCodeParser.ZEN_KW_SUPER:
			case ZenCodeParser.ZEN_KW_THIS:
			case ZenCodeParser.ZEN_KW_NULL:
			case ZenCodeParser.ZEN_KW_TRUE:
			case ZenCodeParser.ZEN_KW_FALSE:
			case ZenCodeParser.ZEN_KW_NEW:
			case ZenCodeParser.IntegerLiteral:
			case ZenCodeParser.DecimalIntegerLiteral:
			case ZenCodeParser.FloatingPointLiteral:
			case ZenCodeParser.ZEN_T_AOPEN:
			case ZenCodeParser.ZEN_T_BROPEN:
			case ZenCodeParser.ZEN_T_SQOPEN:
			case ZenCodeParser.ZEN_T_ADD:
			case ZenCodeParser.ZEN_T_CAT:
			case ZenCodeParser.ZEN_T_DOLLAR:
			case ZenCodeParser.ZEN_T_LESS:
			case ZenCodeParser.ZEN_T_NOT:
			case ZenCodeParser.ZEN_T_SUB:
			case ZenCodeParser.StringLiteral:
			case ZenCodeParser.ZEN_IDENTIFIER:
				{
				this.state = 1371;
				this.zenAssignExpression();
				this.state = 1372;
				this.match(ZenCodeParser.ZEN_T_SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementVar(): ZenStatementVarContext {
		let _localctx: ZenStatementVarContext = new ZenStatementVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, ZenCodeParser.RULE_zenStatementVar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1376;
			_la = this._input.LA(1);
			if (!(_la === ZenCodeParser.ZEN_KW_VAL || _la === ZenCodeParser.ZEN_KW_VAR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1377;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 1380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_KW_AS || _la === ZenCodeParser.ZEN_T_COLON) {
				{
				this.state = 1378;
				_la = this._input.LA(1);
				if (!(_la === ZenCodeParser.ZEN_KW_AS || _la === ZenCodeParser.ZEN_T_COLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1379;
				this.zenType();
				}
			}

			this.state = 1384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_ASSIGN) {
				{
				this.state = 1382;
				this.match(ZenCodeParser.ZEN_T_ASSIGN);
				this.state = 1383;
				this.zenAssignExpression();
				}
			}

			this.state = 1386;
			this.match(ZenCodeParser.ZEN_T_SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementIf(): ZenStatementIfContext {
		let _localctx: ZenStatementIfContext = new ZenStatementIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, ZenCodeParser.RULE_zenStatementIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1388;
			this.match(ZenCodeParser.ZEN_KW_IF);
			this.state = 1389;
			this.zenAssignExpression();
			this.state = 1390;
			this.zenAnnotatedStatement();
			this.state = 1393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1391;
				this.match(ZenCodeParser.ZEN_KW_ELSE);
				this.state = 1392;
				this.zenAnnotatedStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementFor(): ZenStatementForContext {
		let _localctx: ZenStatementForContext = new ZenStatementForContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, ZenCodeParser.RULE_zenStatementFor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1395;
			this.match(ZenCodeParser.ZEN_KW_FOR);
			this.state = 1396;
			this.match(ZenCodeParser.ZEN_IDENTIFIER);
			this.state = 1401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZenCodeParser.ZEN_T_COMMA) {
				{
				{
				this.state = 1397;
				this.match(ZenCodeParser.ZEN_T_COMMA);
				this.state = 1398;
				this.match(ZenCodeParser.ZEN_IDENTIFIER);
				}
				}
				this.state = 1403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1404;
			this.match(ZenCodeParser.ZEN_KW_IN);
			this.state = 1405;
			this.zenAssignExpression();
			this.state = 1406;
			this.zenAnnotatedStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementDo(): ZenStatementDoContext {
		let _localctx: ZenStatementDoContext = new ZenStatementDoContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, ZenCodeParser.RULE_zenStatementDo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1408;
			this.match(ZenCodeParser.ZEN_KW_DO);
			this.state = 1411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_COLON) {
				{
				this.state = 1409;
				this.match(ZenCodeParser.ZEN_T_COLON);
				this.state = 1410;
				this.match(ZenCodeParser.ZEN_IDENTIFIER);
				}
			}

			this.state = 1413;
			this.zenAnnotatedStatement();
			this.state = 1414;
			this.match(ZenCodeParser.ZEN_KW_WHILE);
			this.state = 1415;
			this.zenAssignExpression();
			this.state = 1416;
			this.match(ZenCodeParser.ZEN_T_SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementWhile(): ZenStatementWhileContext {
		let _localctx: ZenStatementWhileContext = new ZenStatementWhileContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, ZenCodeParser.RULE_zenStatementWhile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1418;
			this.match(ZenCodeParser.ZEN_KW_WHILE);
			this.state = 1421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_COLON) {
				{
				this.state = 1419;
				this.match(ZenCodeParser.ZEN_T_COLON);
				this.state = 1420;
				this.match(ZenCodeParser.ZEN_IDENTIFIER);
				}
			}

			this.state = 1423;
			this.zenAssignExpression();
			this.state = 1424;
			this.zenAnnotatedStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementLock(): ZenStatementLockContext {
		let _localctx: ZenStatementLockContext = new ZenStatementLockContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, ZenCodeParser.RULE_zenStatementLock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1426;
			this.match(ZenCodeParser.ZEN_KW_LOCK);
			this.state = 1427;
			this.zenAssignExpression();
			this.state = 1428;
			this.zenAnnotatedStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementThrow(): ZenStatementThrowContext {
		let _localctx: ZenStatementThrowContext = new ZenStatementThrowContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, ZenCodeParser.RULE_zenStatementThrow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1430;
			this.match(ZenCodeParser.ZEN_KW_THROW);
			this.state = 1431;
			this.zenAssignExpression();
			this.state = 1432;
			this.match(ZenCodeParser.ZEN_T_SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementTry(): ZenStatementTryContext {
		let _localctx: ZenStatementTryContext = new ZenStatementTryContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, ZenCodeParser.RULE_zenStatementTry);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1434;
			this.match(ZenCodeParser.ZEN_KW_TRY);
			this.state = 1438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1435;
				this.match(ZenCodeParser.ZEN_IDENTIFIER);
				this.state = 1436;
				this.match(ZenCodeParser.ZEN_T_ASSIGN);
				this.state = 1437;
				this.zenAssignExpression();
				}
				break;
			}
			this.state = 1440;
			this.zenAnnotatedStatement();
			this.state = 1452;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1441;
					this.match(ZenCodeParser.ZEN_KW_CATCH);
					this.state = 1443;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
					case 1:
						{
						this.state = 1442;
						this.match(ZenCodeParser.ZEN_IDENTIFIER);
						}
						break;
					}
					this.state = 1447;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
					case 1:
						{
						this.state = 1445;
						this.match(ZenCodeParser.ZEN_KW_AS);
						this.state = 1446;
						this.zenType();
						}
						break;
					}
					this.state = 1449;
					this.zenAnnotatedStatement();
					}
					}
				}
				this.state = 1454;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			}
			this.state = 1457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				{
				this.state = 1455;
				this.match(ZenCodeParser.ZEN_KW_FINALLY);
				this.state = 1456;
				this.zenAnnotatedStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementContinue(): ZenStatementContinueContext {
		let _localctx: ZenStatementContinueContext = new ZenStatementContinueContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, ZenCodeParser.RULE_zenStatementContinue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1459;
			this.match(ZenCodeParser.ZEN_KW_CONTINUE);
			this.state = 1461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_IDENTIFIER) {
				{
				this.state = 1460;
				this.match(ZenCodeParser.ZEN_IDENTIFIER);
				}
			}

			this.state = 1463;
			this.match(ZenCodeParser.ZEN_T_SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatementBreak(): ZenStatementBreakContext {
		let _localctx: ZenStatementBreakContext = new ZenStatementBreakContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, ZenCodeParser.RULE_zenStatementBreak);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1465;
			this.match(ZenCodeParser.ZEN_KW_BREAK);
			this.state = 1467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_IDENTIFIER) {
				{
				this.state = 1466;
				this.match(ZenCodeParser.ZEN_IDENTIFIER);
				}
			}

			this.state = 1469;
			this.match(ZenCodeParser.ZEN_T_SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenSwitchCaseStatement(): ZenSwitchCaseStatementContext {
		let _localctx: ZenSwitchCaseStatementContext = new ZenSwitchCaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, ZenCodeParser.RULE_zenSwitchCaseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1471;
			this.match(ZenCodeParser.ZEN_KW_CASE);
			this.state = 1472;
			this.zenAssignExpression();
			this.state = 1473;
			this.match(ZenCodeParser.ZEN_T_COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenSwitchStatement(): ZenSwitchStatementContext {
		let _localctx: ZenSwitchStatementContext = new ZenSwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, ZenCodeParser.RULE_zenSwitchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1475;
			this.match(ZenCodeParser.ZEN_KW_SWITCH);
			this.state = 1478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZenCodeParser.ZEN_T_COLON) {
				{
				this.state = 1476;
				this.match(ZenCodeParser.ZEN_T_COLON);
				this.state = 1477;
				this.match(ZenCodeParser.ZEN_IDENTIFIER);
				}
			}

			this.state = 1480;
			this.zenAssignExpression();
			this.state = 1481;
			this.match(ZenCodeParser.ZEN_T_AOPEN);
			this.state = 1493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				{
				this.state = 1482;
				this.match(ZenCodeParser.ZEN_T_ACLOSE);
				}
				break;

			case 2:
				{
				this.state = 1489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZenCodeParser.ZEN_KW_ALIAS) | (1 << ZenCodeParser.ZEN_KW_CLASS) | (1 << ZenCodeParser.ZEN_KW_FUNCTION) | (1 << ZenCodeParser.ZEN_KW_INTERFACE) | (1 << ZenCodeParser.ZEN_KW_ENUM) | (1 << ZenCodeParser.ZEN_KW_STRUCT) | (1 << ZenCodeParser.ZEN_KW_EXPAND) | (1 << ZenCodeParser.ZEN_KW_VARIANT) | (1 << ZenCodeParser.ZEN_KW_ABSTRACT) | (1 << ZenCodeParser.ZEN_KW_FINAL) | (1 << ZenCodeParser.ZEN_KW_OVERRIDE) | (1 << ZenCodeParser.ZEN_KW_CONST) | (1 << ZenCodeParser.ZEN_KW_PRIVATE) | (1 << ZenCodeParser.ZEN_KW_PUBLIC) | (1 << ZenCodeParser.ZEN_KW_INTERNAL) | (1 << ZenCodeParser.ZEN_KW_STATIC) | (1 << ZenCodeParser.ZEN_KW_PROTECTED) | (1 << ZenCodeParser.ZEN_KW_IMPLICIT) | (1 << ZenCodeParser.ZEN_KW_VIRTUAL) | (1 << ZenCodeParser.ZEN_KW_EXTERN) | (1 << ZenCodeParser.ZEN_KW_VAL) | (1 << ZenCodeParser.ZEN_KW_VAR) | (1 << ZenCodeParser.ZEN_KW_GET) | (1 << ZenCodeParser.ZEN_KW_IMPLEMENTS) | (1 << ZenCodeParser.ZEN_KW_SET) | (1 << ZenCodeParser.ZEN_KW_VOID) | (1 << ZenCodeParser.ZEN_KW_BOOL) | (1 << ZenCodeParser.ZEN_KW_BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ZenCodeParser.ZEN_KW_SBYTE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_USHORT - 32)) | (1 << (ZenCodeParser.ZEN_KW_INT - 32)) | (1 << (ZenCodeParser.ZEN_KW_UINT - 32)) | (1 << (ZenCodeParser.ZEN_KW_LONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_ULONG - 32)) | (1 << (ZenCodeParser.ZEN_KW_USIZE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FLOAT - 32)) | (1 << (ZenCodeParser.ZEN_KW_DOUBLE - 32)) | (1 << (ZenCodeParser.ZEN_KW_CHAR - 32)) | (1 << (ZenCodeParser.ZEN_KW_STRING - 32)) | (1 << (ZenCodeParser.ZEN_KW_IF - 32)) | (1 << (ZenCodeParser.ZEN_KW_DO - 32)) | (1 << (ZenCodeParser.ZEN_KW_WHILE - 32)) | (1 << (ZenCodeParser.ZEN_KW_FOR - 32)) | (1 << (ZenCodeParser.ZEN_KW_THROW - 32)) | (1 << (ZenCodeParser.ZEN_KW_PANIC - 32)) | (1 << (ZenCodeParser.ZEN_KW_LOCK - 32)) | (1 << (ZenCodeParser.ZEN_KW_TRY - 32)) | (1 << (ZenCodeParser.ZEN_KW_RETURN - 32)) | (1 << (ZenCodeParser.ZEN_KW_BREAK - 32)) | (1 << (ZenCodeParser.ZEN_KW_CONTINUE - 32)) | (1 << (ZenCodeParser.ZEN_KW_SWITCH - 32)) | (1 << (ZenCodeParser.ZEN_KW_CASE - 32)) | (1 << (ZenCodeParser.ZEN_KW_DEFAULT - 32)) | (1 << (ZenCodeParser.ZEN_KW_IN - 32)) | (1 << (ZenCodeParser.ZEN_KW_AS - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ZenCodeParser.ZEN_KW_MATCH - 64)) | (1 << (ZenCodeParser.ZEN_KW_SUPER - 64)) | (1 << (ZenCodeParser.ZEN_KW_THIS - 64)) | (1 << (ZenCodeParser.ZEN_KW_NULL - 64)) | (1 << (ZenCodeParser.ZEN_KW_TRUE - 64)) | (1 << (ZenCodeParser.ZEN_KW_FALSE - 64)) | (1 << (ZenCodeParser.ZEN_KW_NEW - 64)) | (1 << (ZenCodeParser.IntegerLiteral - 64)) | (1 << (ZenCodeParser.DecimalIntegerLiteral - 64)) | (1 << (ZenCodeParser.FloatingPointLiteral - 64)) | (1 << (ZenCodeParser.ZEN_T_AOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_BROPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_DOT - 64)) | (1 << (ZenCodeParser.ZEN_T_SQOPEN - 64)) | (1 << (ZenCodeParser.ZEN_T_ADD - 64)) | (1 << (ZenCodeParser.ZEN_T_AND - 64)) | (1 << (ZenCodeParser.ZEN_T_ASSIGN - 64)) | (1 << (ZenCodeParser.ZEN_T_CAT - 64)) | (1 << (ZenCodeParser.ZEN_T_DIV - 64)) | (1 << (ZenCodeParser.ZEN_T_DOLLAR - 64)) | (1 << (ZenCodeParser.ZEN_T_GREATER - 64)) | (1 << (ZenCodeParser.ZEN_T_LESS - 64)) | (1 << (ZenCodeParser.ZEN_T_MOD - 64)) | (1 << (ZenCodeParser.ZEN_T_MUL - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ZenCodeParser.ZEN_T_NOT - 96)) | (1 << (ZenCodeParser.ZEN_T_OR - 96)) | (1 << (ZenCodeParser.ZEN_T_SUB - 96)) | (1 << (ZenCodeParser.ZEN_T_XOR - 96)) | (1 << (ZenCodeParser.StringLiteral - 96)) | (1 << (ZenCodeParser.ZEN_IDENTIFIER - 96)))) !== 0)) {
					{
					this.state = 1487;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ZenCodeParser.ZEN_KW_CASE:
						{
						this.state = 1483;
						this.zenSwitchCaseStatement();
						}
						break;
					case ZenCodeParser.ZEN_KW_DEFAULT:
						{
						{
						this.state = 1484;
						this.match(ZenCodeParser.ZEN_KW_DEFAULT);
						this.state = 1485;
						this.match(ZenCodeParser.ZEN_T_COLON);
						}
						}
						break;
					case ZenCodeParser.ZEN_KW_ALIAS:
					case ZenCodeParser.ZEN_KW_CLASS:
					case ZenCodeParser.ZEN_KW_FUNCTION:
					case ZenCodeParser.ZEN_KW_INTERFACE:
					case ZenCodeParser.ZEN_KW_ENUM:
					case ZenCodeParser.ZEN_KW_STRUCT:
					case ZenCodeParser.ZEN_KW_EXPAND:
					case ZenCodeParser.ZEN_KW_VARIANT:
					case ZenCodeParser.ZEN_KW_ABSTRACT:
					case ZenCodeParser.ZEN_KW_FINAL:
					case ZenCodeParser.ZEN_KW_OVERRIDE:
					case ZenCodeParser.ZEN_KW_CONST:
					case ZenCodeParser.ZEN_KW_PRIVATE:
					case ZenCodeParser.ZEN_KW_PUBLIC:
					case ZenCodeParser.ZEN_KW_INTERNAL:
					case ZenCodeParser.ZEN_KW_STATIC:
					case ZenCodeParser.ZEN_KW_PROTECTED:
					case ZenCodeParser.ZEN_KW_IMPLICIT:
					case ZenCodeParser.ZEN_KW_VIRTUAL:
					case ZenCodeParser.ZEN_KW_EXTERN:
					case ZenCodeParser.ZEN_KW_VAL:
					case ZenCodeParser.ZEN_KW_VAR:
					case ZenCodeParser.ZEN_KW_GET:
					case ZenCodeParser.ZEN_KW_IMPLEMENTS:
					case ZenCodeParser.ZEN_KW_SET:
					case ZenCodeParser.ZEN_KW_VOID:
					case ZenCodeParser.ZEN_KW_BOOL:
					case ZenCodeParser.ZEN_KW_BYTE:
					case ZenCodeParser.ZEN_KW_SBYTE:
					case ZenCodeParser.ZEN_KW_SHORT:
					case ZenCodeParser.ZEN_KW_USHORT:
					case ZenCodeParser.ZEN_KW_INT:
					case ZenCodeParser.ZEN_KW_UINT:
					case ZenCodeParser.ZEN_KW_LONG:
					case ZenCodeParser.ZEN_KW_ULONG:
					case ZenCodeParser.ZEN_KW_USIZE:
					case ZenCodeParser.ZEN_KW_FLOAT:
					case ZenCodeParser.ZEN_KW_DOUBLE:
					case ZenCodeParser.ZEN_KW_CHAR:
					case ZenCodeParser.ZEN_KW_STRING:
					case ZenCodeParser.ZEN_KW_IF:
					case ZenCodeParser.ZEN_KW_DO:
					case ZenCodeParser.ZEN_KW_WHILE:
					case ZenCodeParser.ZEN_KW_FOR:
					case ZenCodeParser.ZEN_KW_THROW:
					case ZenCodeParser.ZEN_KW_PANIC:
					case ZenCodeParser.ZEN_KW_LOCK:
					case ZenCodeParser.ZEN_KW_TRY:
					case ZenCodeParser.ZEN_KW_RETURN:
					case ZenCodeParser.ZEN_KW_BREAK:
					case ZenCodeParser.ZEN_KW_CONTINUE:
					case ZenCodeParser.ZEN_KW_SWITCH:
					case ZenCodeParser.ZEN_KW_IN:
					case ZenCodeParser.ZEN_KW_AS:
					case ZenCodeParser.ZEN_KW_MATCH:
					case ZenCodeParser.ZEN_KW_SUPER:
					case ZenCodeParser.ZEN_KW_THIS:
					case ZenCodeParser.ZEN_KW_NULL:
					case ZenCodeParser.ZEN_KW_TRUE:
					case ZenCodeParser.ZEN_KW_FALSE:
					case ZenCodeParser.ZEN_KW_NEW:
					case ZenCodeParser.IntegerLiteral:
					case ZenCodeParser.DecimalIntegerLiteral:
					case ZenCodeParser.FloatingPointLiteral:
					case ZenCodeParser.ZEN_T_AOPEN:
					case ZenCodeParser.ZEN_T_BROPEN:
					case ZenCodeParser.ZEN_T_DOT:
					case ZenCodeParser.ZEN_T_SQOPEN:
					case ZenCodeParser.ZEN_T_ADD:
					case ZenCodeParser.ZEN_T_AND:
					case ZenCodeParser.ZEN_T_ASSIGN:
					case ZenCodeParser.ZEN_T_CAT:
					case ZenCodeParser.ZEN_T_DIV:
					case ZenCodeParser.ZEN_T_DOLLAR:
					case ZenCodeParser.ZEN_T_GREATER:
					case ZenCodeParser.ZEN_T_LESS:
					case ZenCodeParser.ZEN_T_MOD:
					case ZenCodeParser.ZEN_T_MUL:
					case ZenCodeParser.ZEN_T_NOT:
					case ZenCodeParser.ZEN_T_OR:
					case ZenCodeParser.ZEN_T_SUB:
					case ZenCodeParser.ZEN_T_XOR:
					case ZenCodeParser.StringLiteral:
					case ZenCodeParser.ZEN_IDENTIFIER:
						{
						this.state = 1486;
						this.zenAnnotatedStatement();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 1491;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1492;
				this.match(ZenCodeParser.ZEN_T_ACLOSE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenStatement(): ZenStatementContext {
		let _localctx: ZenStatementContext = new ZenStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, ZenCodeParser.RULE_zenStatement);
		try {
			this.state = 1513;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1508;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZenCodeParser.ZEN_T_AOPEN:
					{
					this.state = 1495;
					this.zenStatementBlock();
					}
					break;
				case ZenCodeParser.ZEN_KW_RETURN:
					{
					this.state = 1496;
					this.zenStatementReturn();
					}
					break;
				case ZenCodeParser.ZEN_KW_VAL:
				case ZenCodeParser.ZEN_KW_VAR:
					{
					this.state = 1497;
					this.zenStatementVar();
					}
					break;
				case ZenCodeParser.ZEN_KW_IF:
					{
					this.state = 1498;
					this.zenStatementIf();
					}
					break;
				case ZenCodeParser.ZEN_KW_FOR:
					{
					this.state = 1499;
					this.zenStatementFor();
					}
					break;
				case ZenCodeParser.ZEN_KW_DO:
					{
					this.state = 1500;
					this.zenStatementDo();
					}
					break;
				case ZenCodeParser.ZEN_KW_WHILE:
					{
					this.state = 1501;
					this.zenStatementWhile();
					}
					break;
				case ZenCodeParser.ZEN_KW_LOCK:
					{
					this.state = 1502;
					this.zenStatementLock();
					}
					break;
				case ZenCodeParser.ZEN_KW_THROW:
					{
					this.state = 1503;
					this.zenStatementThrow();
					}
					break;
				case ZenCodeParser.ZEN_KW_TRY:
					{
					this.state = 1504;
					this.zenStatementTry();
					}
					break;
				case ZenCodeParser.ZEN_KW_CONTINUE:
					{
					this.state = 1505;
					this.zenStatementContinue();
					}
					break;
				case ZenCodeParser.ZEN_KW_BREAK:
					{
					this.state = 1506;
					this.zenStatementBreak();
					}
					break;
				case ZenCodeParser.ZEN_KW_SWITCH:
					{
					this.state = 1507;
					this.zenSwitchStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1510;
				this.zenAssignExpression();
				this.state = 1511;
				this.match(ZenCodeParser.ZEN_T_SEMICOLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenAnnotatedStatement(): ZenAnnotatedStatementContext {
		let _localctx: ZenAnnotatedStatementContext = new ZenAnnotatedStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, ZenCodeParser.RULE_zenAnnotatedStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1515;
			this.zenAnnotations();
			this.state = 1534;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				{
				this.state = 1529;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZenCodeParser.ZEN_T_AOPEN:
					{
					this.state = 1516;
					this.zenStatementBlock();
					}
					break;
				case ZenCodeParser.ZEN_KW_RETURN:
					{
					this.state = 1517;
					this.zenStatementReturn();
					}
					break;
				case ZenCodeParser.ZEN_KW_VAL:
				case ZenCodeParser.ZEN_KW_VAR:
					{
					this.state = 1518;
					this.zenStatementVar();
					}
					break;
				case ZenCodeParser.ZEN_KW_IF:
					{
					this.state = 1519;
					this.zenStatementIf();
					}
					break;
				case ZenCodeParser.ZEN_KW_FOR:
					{
					this.state = 1520;
					this.zenStatementFor();
					}
					break;
				case ZenCodeParser.ZEN_KW_DO:
					{
					this.state = 1521;
					this.zenStatementDo();
					}
					break;
				case ZenCodeParser.ZEN_KW_WHILE:
					{
					this.state = 1522;
					this.zenStatementWhile();
					}
					break;
				case ZenCodeParser.ZEN_KW_LOCK:
					{
					this.state = 1523;
					this.zenStatementLock();
					}
					break;
				case ZenCodeParser.ZEN_KW_THROW:
					{
					this.state = 1524;
					this.zenStatementThrow();
					}
					break;
				case ZenCodeParser.ZEN_KW_TRY:
					{
					this.state = 1525;
					this.zenStatementTry();
					}
					break;
				case ZenCodeParser.ZEN_KW_CONTINUE:
					{
					this.state = 1526;
					this.zenStatementContinue();
					}
					break;
				case ZenCodeParser.ZEN_KW_BREAK:
					{
					this.state = 1527;
					this.zenStatementBreak();
					}
					break;
				case ZenCodeParser.ZEN_KW_SWITCH:
					{
					this.state = 1528;
					this.zenSwitchStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				{
				this.state = 1531;
				this.zenAssignExpression();
				this.state = 1532;
				this.match(ZenCodeParser.ZEN_T_SEMICOLON);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenExpressionLambda(): ZenExpressionLambdaContext {
		let _localctx: ZenExpressionLambdaContext = new ZenExpressionLambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, ZenCodeParser.RULE_zenExpressionLambda);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1536;
			this.zenLambdaToken();
			this.state = 1539;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				{
				this.state = 1537;
				this.zenStatementBlock();
				}
				break;

			case 2:
				{
				this.state = 1538;
				this.zenAssignExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zenFunctionLambda(): ZenFunctionLambdaContext {
		let _localctx: ZenFunctionLambdaContext = new ZenFunctionLambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, ZenCodeParser.RULE_zenFunctionLambda);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1541;
			this.zenLambdaToken();
			this.state = 1544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				{
				this.state = 1542;
				this.zenStatementBlock();
				}
				break;

			case 2:
				{
				this.state = 1543;
				this.zenAssignExpression();
				}
				break;
			}
			this.state = 1546;
			this.match(ZenCodeParser.ZEN_T_SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03l\u060F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x03\x02\x07\x02\u0106\n\x02\f\x02\x0E\x02\u0109\v\x02\x03" +
		"\x02\x03\x02\x07\x02\u010D\n\x02\f\x02\x0E\x02\u0110\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0189\n!\x03!\x03" +
		"!\x03!\x05!\u018E\n!\x07!\u0190\n!\f!\x0E!\u0193\v!\x05!\u0195\n!\x03" +
		"!\x03!\x03!\x03!\x03!\x07!\u019C\n!\f!\x0E!\u019F\v!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x05!\u01AA\n!\x03!\x07!\u01AD\n!\f!\x0E!\u01B0" +
		"\v!\x03\"\x03\"\x03\"\x03\"\x07\"\u01B6\n\"\f\"\x0E\"\u01B9\v\"\x03\"" +
		"\x03\"\x03#\x03#\x03#\x05#\u01C0\n#\x03#\x07#\u01C3\n#\f#\x0E#\u01C6\v" +
		"#\x03$\x03$\x03$\x03$\x07$\u01CC\n$\f$\x0E$\u01CF\v$\x03$\x03$\x03%\x05" +
		"%\u01D4\n%\x03%\x03%\x03%\x03%\x03%\x07%\u01DB\n%\f%\x0E%\u01DE\v%\x03" +
		"%\x03%\x05%\u01E2\n%\x03&\x03&\x03&\x03&\x07&\u01E8\n&\f&\x0E&\u01EB\v" +
		"&\x03&\x03&\x03\'\x05\'\u01F0\n\'\x03\'\x03\'\x03\'\x03\'\x07\'\u01F6" +
		"\n\'\f\'\x0E\'\u01F9\v\'\x03\'\x03\'\x03(\x03(\x03(\x05(\u0200\n(\x03" +
		"(\x07(\u0203\n(\f(\x0E(\u0206\v(\x03)\x03)\x05)\u020A\n)\x03)\x03)\x03" +
		")\x07)\u020F\n)\f)\x0E)\u0212\v)\x03)\x03)\x05)\u0216\n)\x03)\x03)\x03" +
		"*\x03*\x03+\x03+\x05+\u021E\n+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05" +
		",\u0227\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0231\n-\x03." +
		"\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u023C\n.\x03/\x03/\x03/" +
		"\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0247\n/\x030\x070\u024A\n0\f0\x0E" +
		"0\u024D\v0\x030\x030\x030\x050\u0252\n0\x030\x030\x050\u0256\n0\x030\x03" +
		"0\x030\x070\u025B\n0\f0\x0E0\u025E\v0\x030\x050\u0261\n0\x031\x071\u0264" +
		"\n1\f1\x0E1\u0267\v1\x031\x031\x031\x051\u026C\n1\x031\x031\x031\x031" +
		"\x071\u0272\n1\f1\x0E1\u0275\v1\x051\u0277\n1\x031\x031\x071\u027B\n1" +
		"\f1\x0E1\u027E\v1\x031\x031\x032\x072\u0283\n2\f2\x0E2\u0286\v2\x032\x03" +
		"2\x032\x032\x052\u028C\n2\x032\x032\x052\u0290\n2\x032\x072\u0293\n2\f" +
		"2\x0E2\u0296\v2\x032\x032\x072\u029A\n2\f2\x0E2\u029D\v2\x052\u029F\n" +
		"2\x032\x032\x033\x073\u02A4\n3\f3\x0E3\u02A7\v3\x033\x033\x033\x053\u02AC" +
		"\n3\x033\x033\x073\u02B0\n3\f3\x0E3\u02B3\v3\x033\x033\x034\x074\u02B8" +
		"\n4\f4\x0E4\u02BB\v4\x034\x034\x034\x054\u02C0\n4\x034\x034\x034\x034" +
		"\x035\x075\u02C7\n5\f5\x0E5\u02CA\v5\x035\x035\x035\x035\x035\x036\x07" +
		"6\u02D2\n6\f6\x0E6\u02D5\v6\x036\x036\x056\u02D9\n6\x036\x036\x036\x07" +
		"6\u02DE\n6\f6\x0E6\u02E1\v6\x036\x036\x037\x077\u02E6\n7\f7\x0E7\u02E9" +
		"\v7\x037\x037\x037\x057\u02EE\n7\x037\x037\x037\x037\x077\u02F4\n7\f7" +
		"\x0E7\u02F7\v7\x057\u02F9\n7\x037\x037\x077\u02FD\n7\f7\x0E7\u0300\v7" +
		"\x057\u0302\n7\x037\x037\x038\x038\x038\x038\x038\x078\u030B\n8\f8\x0E" +
		"8\u030E\v8\x038\x038\x058\u0312\n8\x039\x039\x039\x039\x039\x079\u0319" +
		"\n9\f9\x0E9\u031C\v9\x039\x039\x059\u0320\n9\x039\x039\x059\u0324\n9\x03" +
		":\x03:\x07:\u0328\n:\f:\x0E:\u032B\v:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u033C\n:\x03;\x03;\x03" +
		";\x03;\x05;\u0342\n;\x03;\x03;\x05;\u0346\n;\x03;\x03;\x03;\x05;\u034B" +
		"\n;\x03;\x07;\u034E\n;\f;\x0E;\u0351\v;\x05;\u0353\n;\x03;\x03;\x05;\u0357" +
		"\n;\x03;\x03;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x05=\u0362\n=\x03=\x03" +
		"=\x03=\x03=\x03=\x03=\x03=\x05=\u036B\n=\x03>\x03>\x03>\x03>\x05>\u0371" +
		"\n>\x03>\x03>\x03?\x03?\x03?\x03?\x05?\u0379\n?\x03?\x03?\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x07@\u0383\n@\f@\x0E@\u0386\v@\x03@\x05@\u0389\n@\x05" +
		"@\u038B\n@\x03A\x03A\x03A\x03B\x03B\x03B\x05B\u0393\nB\x03B\x03B\x03B" +
		"\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x05D\u03A0\nD\x03D\x03D\x03D" +
		"\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u03BD\nD\x03" +
		"D\x03D\x03D\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03G\x03G\x03G\x03" +
		"G\x03H\x03H\x03I\x03I\x03I\x03I\x03J\x03J\x03J\x03K\x05K\u03D8\nK\x03" +
		"K\x03K\x03K\x03K\x03K\x07K\u03DF\nK\fK\x0EK\u03E2\vK\x03K\x03K\x05K\u03E6" +
		"\nK\x03K\x03K\x05K\u03EA\nK\x03K\x03K\x05K\u03EE\nK\x03L\x03L\x03L\x05" +
		"L\u03F3\nL\x03L\x03L\x05L\u03F7\nL\x03L\x03L\x05L\u03FB\nL\x03M\x03M\x03" +
		"M\x05M\u0400\nM\x03N\x03N\x05N\u0404\nN\x03O\x03O\x03P\x03P\x03Q\x03Q" +
		"\x03R\x03R\x03S\x03S\x05S\u0410\nS\x03T\x03T\x03T\x03U\x03U\x03V\x03V" +
		"\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x07X\u0420\nX\fX\x0EX\u0423\vX\x03" +
		"X\x03X\x05X\u0427\nX\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u042E\nY\x03Y\x03Y" +
		"\x03Y\x03Y\x05Y\u0434\nY\x07Y\u0436\nY\fY\x0EY\u0439\vY\x03Y\x03Y\x05" +
		"Y\u043D\nY\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03]\x03]\x03]\x03]\x03]\x07" +
		"]\u044A\n]\f]\x0E]\u044D\v]\x03]\x03]\x05]\u0451\n]\x03^\x03^\x03^\x05" +
		"^\u0456\n^\x03_\x03_\x03_\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x05a\u0464\na\x03a\x03a\x03a\x05a\u0469\na\x07a\u046B\na\fa\x0Ea\u046E" +
		"\va\x03a\x05a\u0471\na\x03b\x03b\x03b\x05b\u0476\nb\x07b\u0478\nb\fb\x0E" +
		"b\u047B\vb\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03" +
		"c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u0494\n" +
		"c\x03d\x03d\x03d\x03d\x05d\u049A\nd\x03d\x03d\x05d\u049E\nd\x03d\x03d" +
		"\x03d\x03d\x03d\x03d\x03d\x07d\u04A7\nd\fd\x0Ed\u04AA\vd\x03d\x03d\x03" +
		"d\x03d\x03d\x05d\u04B1\nd\x03d\x03d\x03d\x03d\x07d\u04B7\nd\fd\x0Ed\u04BA" +
		"\vd\x03e\x03e\x03e\x03e\x03e\x05e\u04C1\ne\x03e\x03e\x03e\x03e\x03e\x05" +
		"e\u04C8\ne\x05e\u04CA\ne\x03e\x05e\u04CD\ne\x03f\x03f\x03f\x07f\u04D2" +
		"\nf\ff\x0Ef\u04D5\vf\x03g\x03g\x03g\x07g\u04DA\ng\fg\x0Eg\u04DD\vg\x03" +
		"h\x03h\x03h\x03h\x05h\u04E3\nh\x03h\x03h\x07h\u04E7\nh\fh\x0Eh\u04EA\v" +
		"h\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x05i\u04F6\ni\x03" +
		"i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x05i\u0500\ni\x05i\u0502\ni\x03j" +
		"\x03j\x03j\x07j\u0507\nj\fj\x0Ej\u050A\vj\x03k\x03k\x03k\x07k\u050F\n" +
		"k\fk\x0Ek\u0512\vk\x03l\x03l\x03l\x07l\u0517\nl\fl\x0El\u051A\vl\x03m" +
		"\x03m\x03m\x03m\x07m\u0520\nm\fm\x0Em\u0523\vm\x03n\x03n\x03n\x03n\x07" +
		"n\u0529\nn\fn\x0En\u052C\vn\x03n\x03n\x03n\x07n\u0531\nn\fn\x0En\u0534" +
		"\vn\x03o\x03o\x03o\x03o\x03o\x03o\x05o\u053C\no\x03p\x03p\x03p\x03p\x03" +
		"p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x05p\u054C\np\x03p\x05" +
		"p\u054F\np\x03q\x03q\x03q\x07q\u0554\nq\fq\x0Eq\u0557\vq\x03q\x05q\u055A" +
		"\nq\x03r\x03r\x03r\x03r\x03r\x05r\u0561\nr\x03s\x03s\x03s\x03s\x05s\u0567" +
		"\ns\x03s\x03s\x05s\u056B\ns\x03s\x03s\x03t\x03t\x03t\x03t\x03t\x05t\u0574" +
		"\nt\x03u\x03u\x03u\x03u\x07u\u057A\nu\fu\x0Eu\u057D\vu\x03u\x03u\x03u" +
		"\x03u\x03v\x03v\x03v\x05v\u0586\nv\x03v\x03v\x03v\x03v\x03v\x03w\x03w" +
		"\x03w\x05w\u0590\nw\x03w\x03w\x03w\x03x\x03x\x03x\x03x\x03y\x03y\x03y" +
		"\x03y\x03z\x03z\x03z\x03z\x05z\u05A1\nz\x03z\x03z\x03z\x05z\u05A6\nz\x03" +
		"z\x03z\x05z\u05AA\nz\x03z\x07z\u05AD\nz\fz\x0Ez\u05B0\vz\x03z\x03z\x05" +
		"z\u05B4\nz\x03{\x03{\x05{\u05B8\n{\x03{\x03{\x03|\x03|\x05|\u05BE\n|\x03" +
		"|\x03|\x03}\x03}\x03}\x03}\x03~\x03~\x03~\x05~\u05C9\n~\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x03~\x07~\u05D2\n~\f~\x0E~\u05D5\v~\x03~\x05~\u05D8\n" +
		"~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03" +
		"\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u05E7\n\x7F\x03\x7F\x03\x7F" +
		"\x03\x7F\x05\x7F\u05EC\n\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03" +
		"\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x05" +
		"\x80\u05FC\n\x80\x03\x80\x03\x80\x03\x80\x05\x80\u0601\n\x80\x03\x81\x03" +
		"\x81\x03\x81\x05\x81\u0606\n\x81\x03\x82\x03\x82\x03\x82\x05\x82\u060B" +
		"\n\x82\x03\x82\x03\x82\x03\x82\x03\u02B1\x02\x02\x83\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
		"\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02" +
		"\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02" +
		"\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02" +
		"\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02" +
		"\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02" +
		"\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100" +
		"\x02\u0102\x02\x02\n\x04\x02\x11\x11\x15\x15\x03\x02\x1A\x1B\x04\x02\x1C" +
		"\x1C\x1E\x1E\x04\x02AA[[\x03\x02^^\x04\x02bbdd\x04\x02\\\\`a\x05\x02V" +
		"VZZee\x02\u06CC\x02\u0107\x03\x02\x02\x02\x04\u0113\x03\x02\x02\x02\x06" +
		"\u0116\x03\x02\x02\x02\b\u0119\x03\x02\x02\x02\n\u011D\x03\x02\x02\x02" +
		"\f\u0120\x03\x02\x02\x02\x0E\u0123\x03\x02\x02\x02\x10\u0126\x03\x02\x02" +
		"\x02\x12\u0129\x03\x02\x02\x02\x14\u012D\x03\x02\x02\x02\x16\u0130\x03" +
		"\x02\x02\x02\x18\u0134\x03\x02\x02\x02\x1A\u0137\x03\x02\x02\x02\x1C\u013A" +
		"\x03\x02\x02\x02\x1E\u013D\x03\x02\x02\x02 \u0140\x03\x02\x02\x02\"\u0143" +
		"\x03\x02\x02\x02$\u0147\x03\x02\x02\x02&\u014A\x03\x02\x02\x02(\u014D" +
		"\x03\x02\x02\x02*\u0150\x03\x02\x02\x02,\u0153\x03\x02\x02\x02.\u0156" +
		"\x03\x02\x02\x020\u0159\x03\x02\x02\x022\u015C\x03\x02\x02\x024\u015F" +
		"\x03\x02\x02\x026\u0162\x03\x02\x02\x028\u0166\x03\x02\x02\x02:\u016A" +
		"\x03\x02\x02\x02<\u016D\x03\x02\x02\x02>\u0172\x03\x02\x02\x02@\u0194" +
		"\x03\x02\x02\x02B\u01B1\x03\x02\x02\x02D\u01BC\x03\x02\x02\x02F\u01C7" +
		"\x03\x02\x02\x02H\u01D3\x03\x02\x02\x02J\u01E3\x03\x02\x02\x02L\u01EF" +
		"\x03\x02\x02\x02N\u0204\x03\x02\x02\x02P\u0207\x03\x02\x02\x02R\u0219" +
		"\x03\x02\x02\x02T\u021D\x03\x02\x02\x02V\u0226\x03\x02\x02\x02X\u0230" +
		"\x03\x02\x02\x02Z\u023B\x03\x02\x02\x02\\\u023D\x03\x02\x02\x02^\u024B" +
		"\x03\x02\x02\x02`\u0265\x03\x02\x02\x02b\u0284\x03\x02\x02\x02d\u02A5" +
		"\x03\x02\x02\x02f\u02B9\x03\x02\x02\x02h\u02C8\x03\x02\x02\x02j\u02D3" +
		"\x03\x02\x02\x02l\u02E7\x03\x02\x02\x02n\u0305\x03\x02\x02\x02p\u0313" +
		"\x03\x02\x02\x02r\u0325\x03\x02\x02\x02t\u033D\x03\x02\x02\x02v\u035A" +
		"\x03\x02\x02\x02x\u035E\x03\x02\x02\x02z\u036C\x03\x02\x02\x02|\u0374" +
		"\x03\x02\x02\x02~\u037C\x03\x02\x02\x02\x80\u038C\x03\x02\x02\x02\x82" +
		"\u038F\x03\x02\x02\x02\x84\u0397\x03\x02\x02\x02\x86\u03BC\x03\x02\x02" +
		"\x02\x88\u03C1\x03\x02\x02\x02\x8A\u03C5\x03\x02\x02\x02\x8C\u03C9\x03" +
		"\x02\x02\x02\x8E\u03CD\x03\x02\x02\x02\x90\u03CF\x03\x02\x02\x02\x92\u03D3" +
		"\x03\x02\x02\x02\x94\u03D7\x03\x02\x02\x02\x96\u03EF\x03\x02\x02\x02\x98" +
		"\u03FF\x03\x02\x02\x02\x9A\u0403\x03\x02\x02\x02\x9C\u0405\x03\x02\x02" +
		"\x02\x9E\u0407\x03\x02\x02\x02\xA0\u0409\x03\x02\x02\x02\xA2\u040B\x03" +
		"\x02\x02\x02\xA4\u040D\x03\x02\x02\x02\xA6\u0411\x03\x02\x02\x02\xA8\u0414" +
		"\x03\x02\x02\x02\xAA\u0416\x03\x02\x02\x02\xAC\u0418\x03\x02\x02\x02\xAE" +
		"\u041A\x03\x02\x02\x02\xB0\u0428\x03\x02\x02\x02\xB2\u043E\x03\x02\x02" +
		"\x02\xB4\u0440\x03\x02\x02\x02\xB6\u0442\x03\x02\x02\x02\xB8\u0444\x03" +
		"\x02\x02\x02\xBA\u0452\x03\x02\x02\x02\xBC\u0457\x03\x02\x02\x02\xBE\u045A" +
		"\x03\x02\x02\x02\xC0\u045D\x03\x02\x02\x02\xC2\u0472\x03\x02\x02\x02\xC4" +
		"\u0493\x03\x02\x02\x02\xC6\u0495\x03\x02\x02\x02\xC8\u04CC\x03\x02\x02" +
		"\x02\xCA\u04CE\x03\x02\x02\x02\xCC\u04D6\x03\x02\x02\x02\xCE\u04DE\x03" +
		"\x02\x02\x02\xD0\u04EB\x03\x02\x02\x02\xD2\u0503\x03\x02\x02\x02\xD4\u050B" +
		"\x03\x02\x02\x02\xD6\u0513\x03\x02\x02\x02\xD8\u051B\x03\x02\x02\x02\xDA" +
		"\u0524\x03\x02\x02\x02\xDC\u0535\x03\x02\x02\x02\xDE\u053D\x03\x02\x02" +
		"\x02\xE0\u0550\x03\x02\x02\x02\xE2\u055B\x03\x02\x02\x02\xE4\u0562\x03" +
		"\x02\x02\x02\xE6\u056E\x03\x02\x02\x02\xE8\u0575\x03\x02\x02\x02\xEA\u0582" +
		"\x03\x02\x02\x02\xEC\u058C\x03\x02\x02\x02\xEE\u0594\x03\x02\x02\x02\xF0" +
		"\u0598\x03\x02\x02\x02\xF2\u059C\x03\x02\x02\x02\xF4\u05B5\x03\x02\x02" +
		"\x02\xF6\u05BB\x03\x02\x02\x02\xF8\u05C1\x03\x02\x02\x02\xFA\u05C5\x03" +
		"\x02\x02\x02\xFC\u05EB\x03\x02\x02\x02\xFE\u05ED\x03\x02\x02\x02\u0100" +
		"\u0602\x03\x02\x02\x02\u0102\u0607\x03\x02\x02\x02\u0104\u0106\x05P)\x02" +
		"\u0105\u0104\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03" +
		"\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010E\x03\x02\x02\x02\u0109" +
		"\u0107\x03\x02\x02\x02\u010A\u010D\x05\\/\x02\u010B\u010D\x05\xFC\x7F" +
		"\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010B\x03\x02\x02\x02\u010D\u0110" +
		"\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02" +
		"\u010F\u0111\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0112\x07" +
		"\x02\x02\x03\u0112\x03\x03\x02\x02\x02\u0113\u0114\x07_\x02\x02\u0114" +
		"\u0115\x07_\x02\x02\u0115\x05\x03\x02\x02\x02\u0116\u0117\x07^\x02\x02" +
		"\u0117\u0118\x07^\x02\x02\u0118\x07\x03\x02\x02\x02\u0119\u011A\x07^\x02" +
		"\x02\u011A\u011B\x07^\x02\x02\u011B\u011C\x07^\x02\x02\u011C\t\x03\x02" +
		"\x02\x02\u011D\u011E\x07W\x02\x02\u011E\u011F\x07W\x02\x02\u011F\v\x03" +
		"\x02\x02\x02\u0120\u0121\x07d\x02\x02\u0121\u0122\x07d\x02\x02\u0122\r" +
		"\x03\x02\x02\x02\u0123\u0124\x07e\x02\x02\u0124\u0125\x07e\x02\x02\u0125" +
		"\x0F\x03\x02\x02\x02\u0126\u0127\x07R\x02\x02\u0127\u0128\x07R\x02\x02" +
		"\u0128\x11\x03\x02\x02\x02\u0129\u012A\x07R\x02\x02\u012A\u012B\x07R\x02" +
		"\x02\u012B\u012C\x07R\x02\x02\u012C\x13\x03\x02\x02\x02\u012D\u012E\x07" +
		"X\x02\x02\u012E\u012F\x07X\x02\x02\u012F\x15\x03\x02\x02\x02\u0130\u0131" +
		"\x07X\x02\x02\u0131\u0132\x07X\x02\x02\u0132\u0133\x07X\x02\x02\u0133" +
		"\x17\x03\x02\x02\x02\u0134\u0135\x07^\x02\x02\u0135\u0136\x07X\x02\x02" +
		"\u0136\x19\x03\x02\x02\x02\u0137\u0138\x07V\x02\x02\u0138\u0139\x07V\x02" +
		"\x02\u0139\x1B\x03\x02\x02\x02\u013A\u013B\x07X\x02\x02\u013B\u013C\x07" +
		"^\x02\x02\u013C\x1D\x03\x02\x02\x02\u013D\u013E\x07_\x02\x02\u013E\u013F" +
		"\x07X\x02\x02\u013F\x1F\x03\x02\x02\x02\u0140\u0141\x07b\x02\x02\u0141" +
		"\u0142\x07X\x02\x02\u0142!\x03\x02\x02\x02\u0143\u0144\x07b\x02\x02\u0144" +
		"\u0145\x07X\x02\x02\u0145\u0146\x07X\x02\x02\u0146#\x03\x02\x02\x02\u0147" +
		"\u0148\x07d\x02\x02\u0148\u0149\x07R\x02\x02\u0149%\x03\x02\x02\x02\u014A" +
		"\u014B\x07c\x02\x02\u014B\u014C\x07c\x02\x02\u014C\'\x03\x02\x02\x02\u014D" +
		"\u014E\x07V\x02\x02\u014E\u014F\x07X\x02\x02\u014F)\x03\x02\x02\x02\u0150" +
		"\u0151\x07W\x02\x02\u0151\u0152\x07X\x02\x02\u0152+\x03\x02\x02\x02\u0153" +
		"\u0154\x07Z\x02\x02\u0154\u0155\x07X\x02\x02\u0155-\x03\x02\x02\x02\u0156" +
		"\u0157\x07\\\x02\x02\u0157\u0158\x07X\x02\x02\u0158/\x03\x02\x02\x02\u0159" +
		"\u015A\x07`\x02\x02\u015A\u015B\x07X\x02\x02\u015B1\x03\x02\x02\x02\u015C" +
		"\u015D\x07a\x02\x02\u015D\u015E\x07X\x02\x02\u015E3\x03\x02\x02\x02\u015F" +
		"\u0160\x07c\x02\x02\u0160\u0161\x07X\x02\x02\u01615\x03\x02\x02\x02\u0162" +
		"\u0163\x07_\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0163\u0164\x07_\x02\x02\u0164\u0165\x07X\x02\x02\u01657\x03\x02" +
		"\x02\x02\u0166\u0167\x07^\x02\x02\u0167\u0168\x07^\x02\x02\u0168\u0169" +
		"\x07X\x02\x02\u01699\x03\x02\x02\x02\u016A\u016B\x07e\x02\x02\u016B\u016C" +
		"\x07X\x02\x02\u016C;\x03\x02\x02\x02\u016D\u016E\x07^\x02\x02\u016E\u016F" +
		"\x07^\x02\x02\u016F\u0170\x07^\x02\x02\u0170\u0171\x07X\x02\x02\u0171" +
		"=\x03\x02\x02\x02\u0172\u0173\x07f\x02\x02\u0173\u0174\x07X\x02\x02\u0174" +
		"?\x03\x02\x02\x02\u0175\u0195\x07\x1F\x02\x02\u0176\u0195\x07 \x02\x02" +
		"\u0177\u0195\x07!\x02\x02\u0178\u0195\x07\"\x02\x02\u0179\u0195\x07#\x02" +
		"\x02\u017A\u0195\x07$\x02\x02\u017B\u0195\x07%\x02\x02\u017C\u0195\x07" +
		"&\x02\x02\u017D\u0195\x07\'\x02\x02\u017E\u0195\x07(\x02\x02\u017F\u0195" +
		"\x07)\x02\x02\u0180\u0195\x07*\x02\x02\u0181\u0195\x07+\x02\x02\u0182" +
		"\u0195\x07,\x02\x02\u0183\u0195\x07-\x02\x02\u0184\u0185\x07\x06\x02\x02" +
		"\u0185\u0195\x05\x94K\x02\u0186\u0188\x07h\x02\x02\u0187\u0189\x05F$\x02" +
		"\u0188\u0187\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u0191\x03" +
		"\x02\x02\x02\u018A\u018B\x07R\x02\x02\u018B\u018D\x07h\x02\x02\u018C\u018E" +
		"\x05F$\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E" +
		"\u0190\x03\x02\x02\x02\u018F\u018A\x03\x02\x02\x02\u0190\u0193\x03\x02" +
		"\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192" +
		"\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194\u0175\x03\x02" +
		"\x02\x02\u0194\u0176\x03\x02\x02\x02\u0194\u0177\x03\x02\x02\x02\u0194" +
		"\u0178\x03\x02\x02\x02\u0194\u0179\x03\x02\x02\x02\u0194\u017A\x03\x02" +
		"\x02\x02\u0194\u017B\x03\x02\x02\x02\u0194\u017C\x03\x02\x02\x02\u0194" +
		"\u017D\x03\x02\x02\x02\u0194\u017E\x03\x02\x02\x02\u0194\u017F\x03\x02" +
		"\x02\x02\u0194\u0180\x03\x02\x02\x02\u0194\u0181\x03\x02\x02\x02\u0194" +
		"\u0182\x03\x02\x02\x02\u0194\u0183\x03\x02\x02\x02\u0194\u0184\x03\x02" +
		"\x02\x02\u0194\u0186\x03\x02\x02\x02\u0195\u01AE\x03\x02\x02\x02\u0196" +
		"\u0197\x05\x10\t\x02\u0197\u0198\x05@!\x02\u0198\u01AD\x03\x02\x02\x02" +
		"\u0199\u019D\x07U\x02\x02\u019A\u019C\x07Q\x02\x02\u019B\u019A\x03\x02" +
		"\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D" +
		"\u019E\x03\x02\x02\x02\u019E\u01A0\x03\x02\x02\x02\u019F\u019D\x03\x02" +
		"\x02\x02\u01A0\u01AA\x07T\x02\x02\u01A1\u01A2\x07_\x02\x02\u01A2\u01A3" +
		"\x05D#\x02\u01A3\u01A4\x07^\x02\x02\u01A4\u01AA\x03\x02\x02\x02\u01A5" +
		"\u01A6\x07U\x02\x02\u01A6\u01A7\x05@!\x02\u01A7\u01A8\x07T\x02\x02\u01A8" +
		"\u01AA\x03\x02\x02\x02\u01A9\u0199\x03\x02\x02\x02\u01A9\u01A1\x03\x02" +
		"\x02\x02\u01A9\u01A5\x03\x02\x02\x02\u01AA\u01AD\x03\x02\x02\x02\u01AB" +
		"\u01AD\x07d\x02\x02\u01AC\u0196\x03\x02\x02\x02\u01AC\u01A9\x03\x02\x02" +
		"\x02\u01AC\u01AB\x03\x02\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01AC" +
		"\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AFA\x03\x02\x02\x02\u01B0" +
		"\u01AE\x03\x02\x02\x02\u01B1\u01B2\x07_\x02\x02\u01B2\u01B7\x05D#\x02" +
		"\u01B3\u01B4\x07Q\x02\x02\u01B4\u01B6\x05D#\x02\u01B5\u01B3\x03\x02\x02" +
		"\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7\u01B8" +
		"\x03\x02\x02\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02" +
		"\u01BA\u01BB\x07^\x02\x02\u01BBC\x03\x02\x02\x02\u01BC\u01C4\x07h\x02" +
		"\x02\u01BD\u01BF\x07[\x02\x02\u01BE\u01C0\x07D\x02\x02\u01BF\u01BE\x03" +
		"\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1" +
		"\u01C3\x05@!\x02\u01C2\u01BD\x03\x02\x02\x02\u01C3\u01C6\x03\x02\x02\x02" +
		"\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5E\x03\x02" +
		"\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7\u01C8\x07_\x02\x02\u01C8\u01CD" +
		"\x05@!\x02\u01C9\u01CA\x07Q\x02\x02\u01CA\u01CC\x05@!\x02\u01CB\u01C9" +
		"\x03\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02" +
		"\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF\u01CD\x03" +
		"\x02\x02\x02\u01D0\u01D1\x07^\x02\x02\u01D1G\x03\x02\x02\x02\u01D2\u01D4" +
		"\x05J&\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4" +
		"\u01D5\x03\x02\x02\x02\u01D5\u01E1\x07P\x02\x02\u01D6\u01E2\x07O\x02\x02" +
		"\u01D7\u01DC\x05\xDEp\x02\u01D8\u01D9\x07Q\x02\x02\u01D9\u01DB\x05\xDE" +
		"p\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DE\x03\x02\x02\x02\u01DC\u01DA" +
		"\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DF\x03\x02\x02\x02" +
		"\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E0\x07O\x02\x02\u01E0\u01E2\x03" +
		"\x02\x02\x02\u01E1\u01D6\x03\x02\x02\x02\u01E1\u01D7\x03\x02\x02\x02\u01E2" +
		"I\x03\x02\x02\x02\u01E3\u01E4\x07_\x02\x02\u01E4\u01E9\x05@!\x02\u01E5" +
		"\u01E6\x07Q\x02\x02\u01E6\u01E8\x05@!\x02\u01E7\u01E5\x03\x02\x02\x02" +
		"\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03" +
		"\x02\x02\x02\u01EA\u01EC\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EC" +
		"\u01ED\x07^\x02\x02\u01EDK\x03\x02\x02\x02\u01EE\u01F0\x05J&\x02\u01EF" +
		"\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\x03\x02" +
		"\x02\x02\u01F1\u01F2\x07P\x02\x02\u01F2\u01F7\x05\xDEp\x02\u01F3\u01F4" +
		"\x07Q\x02\x02\u01F4\u01F6\x05\xDEp\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6" +
		"\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02" +
		"\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01FA" +
		"\u01FB\x07O\x02\x02\u01FBM\x03\x02\x02\x02\u01FC\u01FD\x07U\x02\x02\u01FD" +
		"\u01FF\x07h\x02\x02\u01FE\u0200\x05L\'\x02\u01FF\u01FE\x03\x02\x02\x02" +
		"\u01FF\u0200\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0203\x07" +
		"T\x02\x02\u0202\u01FC\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204" +
		"\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205O\x03\x02\x02" +
		"\x02\u0206\u0204\x03\x02\x02\x02\u0207\u0209\x07\x03\x02\x02\u0208\u020A" +
		"\x07R\x02\x02\u0209\u0208\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02" +
		"\u020A\u020B\x03\x02\x02\x02\u020B\u0210\x07h\x02\x02\u020C\u020D\x07" +
		"R\x02\x02\u020D\u020F\x07h\x02\x02\u020E\u020C\x03\x02\x02\x02\u020F\u0212" +
		"\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02" +
		"\u0211\u0215\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0213\u0214\x07" +
		"A\x02\x02\u0214\u0216\x07h\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216" +
		"\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x07S\x02\x02" +
		"\u0218Q\x03\x02\x02\x02\u0219\u021A\t\x02\x02\x02\u021AS\x03\x02\x02\x02" +
		"\u021B\u021E\x05R*\x02\u021C\u021E\x07\x10\x02\x02\u021D\u021B\x03\x02" +
		"\x02\x02\u021D\u021C\x03\x02\x02\x02\u021EU\x03\x02\x02\x02\u021F\u0227" +
		"\x05T+\x02\u0220\u0227\x07\x13\x02\x02\u0221\u0227\x07\x18\x02\x02\u0222" +
		"\u0227\x07\f\x02\x02\u0223\u0227\x07\r\x02\x02\u0224\u0227\x07\x16\x02" +
		"\x02\u0225\u0227\x07\x17\x02\x02\u0226\u021F\x03\x02\x02\x02\u0226\u0220" +
		"\x03\x02\x02\x02\u0226\u0221\x03\x02\x02\x02\u0226\u0222\x03\x02\x02\x02" +
		"\u0226\u0223\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0225\x03" +
		"\x02\x02\x02\u0227W\x03\x02\x02\x02\u0228\u0231\x07\x13\x02\x02\u0229" +
		"\u0231\x05T+\x02\u022A\u0231\x07\x0F\x02\x02\u022B\u0231\x07\f\x02\x02" +
		"\u022C\u0231\x07\r\x02\x02\u022D\u0231\x07\x16\x02\x02\u022E\u0231\x07" +
		"\x18\x02\x02\u022F\u0231\x07\x0E\x02\x02\u0230\u0228\x03\x02\x02\x02\u0230" +
		"\u0229\x03\x02\x02\x02\u0230\u022A\x03\x02\x02\x02\u0230\u022B\x03\x02" +
		"\x02\x02\u0230\u022C\x03\x02\x02\x02\u0230\u022D\x03\x02\x02\x02\u0230" +
		"\u022E\x03\x02\x02\x02\u0230\u022F\x03\x02\x02\x02\u0231Y\x03\x02\x02" +
		"\x02\u0232\u023C\x07\x13\x02\x02\u0233\u023C\x05T+\x02\u0234\u023C\x07" +
		"\x0F\x02\x02\u0235\u023C\x07\f\x02\x02\u0236\u023C\x07\r\x02\x02\u0237" +
		"\u023C\x07\x14\x02\x02\u0238\u023C\x07\x16\x02\x02\u0239\u023C\x07\x18" +
		"\x02\x02\u023A\u023C\x07\x0E\x02\x02\u023B\u0232\x03\x02\x02\x02\u023B" +
		"\u0233\x03\x02\x02\x02\u023B\u0234\x03\x02\x02\x02\u023B\u0235\x03\x02" +
		"\x02\x02\u023B\u0236\x03\x02\x02\x02\u023B\u0237\x03\x02\x02\x02\u023B" +
		"\u0238\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023A\x03\x02" +
		"\x02\x02\u023C[\x03\x02\x02\x02\u023D\u0246\x05N(\x02\u023E\u0247\x05" +
		"^0\x02\u023F\u0247\x05`1\x02\u0240\u0247\x05b2\x02\u0241\u0247\x05d3\x02" +
		"\u0242\u0247\x05f4\x02\u0243\u0247\x05h5\x02\u0244\u0247\x05j6\x02\u0245" +
		"\u0247\x05l7\x02\u0246\u023E\x03\x02\x02\x02\u0246\u023F\x03\x02\x02\x02" +
		"\u0246\u0240\x03\x02\x02\x02\u0246\u0241\x03\x02\x02\x02\u0246\u0242\x03" +
		"\x02\x02\x02\u0246\u0243\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0246" +
		"\u0245\x03\x02\x02\x02\u0247]\x03\x02\x02\x02\u0248\u024A\x05V,\x02\u0249" +
		"\u0248\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02" +
		"\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024E\x03\x02\x02\x02\u024D" +
		"\u024B\x03\x02\x02\x02\u024E\u024F\x07\x05\x02\x02\u024F\u0251\x07h\x02" +
		"\x02\u0250\u0252\x05B\"\x02\u0251\u0250\x03\x02\x02\x02\u0251\u0252\x03" +
		"\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253\u0254\x07[\x02\x02\u0254" +
		"\u0256\x05@!\x02\u0255\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02" +
		"\u0256\u0257\x03\x02\x02\x02\u0257\u0260\x07N\x02\x02\u0258\u0261\x07" +
		"M\x02\x02\u0259\u025B\x05r:\x02\u025A\u0259\x03\x02\x02\x02\u025B\u025E" +
		"\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02" +
		"\u025D\u025F\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0261\x07" +
		"M\x02\x02\u0260\u0258\x03\x02\x02\x02\u0260\u025C\x03\x02\x02\x02\u0261" +
		"_\x03\x02\x02\x02\u0262\u0264\x05V,\x02\u0263\u0262\x03\x02\x02\x02\u0264" +
		"\u0267\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02" +
		"\x02\x02\u0266\u0268\x03\x02\x02\x02\u0267\u0265\x03\x02\x02\x02\u0268" +
		"\u0269\x07\x07\x02\x02\u0269\u026B\x07h\x02\x02\u026A\u026C\x05B\"\x02" +
		"\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u0276\x03" +
		"\x02\x02\x02\u026D\u026E\x07[\x02\x02\u026E\u0273\x05@!\x02\u026F\u0270" +
		"\x07Q\x02\x02\u0270\u0272\x05@!\x02\u0271\u026F\x03\x02\x02\x02\u0272" +
		"\u0275\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0274\x03\x02" +
		"\x02\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0276" +
		"\u026D\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278\x03\x02" +
		"\x02\x02\u0278\u027C\x07N\x02\x02\u0279\u027B\x05r:\x02\u027A\u0279\x03" +
		"\x02\x02\x02\u027B\u027E\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C" +
		"\u027D\x03\x02\x02\x02\u027D\u027F\x03\x02\x02\x02\u027E\u027C\x03\x02" +
		"\x02\x02\u027F\u0280\x07M\x02\x02\u0280a\x03\x02\x02\x02\u0281\u0283\x05" +
		"V,\x02\u0282\u0281\x03\x02\x02\x02\u0283\u0286\x03\x02\x02\x02\u0284\u0282" +
		"\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0287\x03\x02\x02\x02" +
		"\u0286\u0284\x03\x02\x02\x02\u0287\u0288\x07\b\x02\x02\u0288\u028B\x07" +
		"h\x02\x02\u0289\u028A\x07A\x02\x02\u028A\u028C\x05@!\x02\u028B\u0289\x03" +
		"\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D" +
		"\u0294\x07N\x02\x02\u028E\u0290\x07Q\x02\x02\u028F\u028E\x03\x02\x02\x02" +
		"\u028F\u0290\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291\u0293\x05" +
		"p9\x02\u0292\u028F\x03\x02\x02\x02\u0293\u0296\x03\x02\x02\x02\u0294\u0292" +
		"\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u029E\x03\x02\x02\x02" +
		"\u0296\u0294\x03\x02\x02\x02\u0297\u029B\x07S\x02\x02\u0298\u029A\x05" +
		"r:\x02\u0299\u0298\x03\x02\x02\x02\u029A\u029D\x03\x02\x02\x02\u029B\u0299" +
		"\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u029F\x03\x02\x02\x02" +
		"\u029D\u029B\x03\x02\x02\x02\u029E\u0297\x03\x02\x02\x02\u029E\u029F\x03" +
		"\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A1\x07M\x02\x02\u02A1" +
		"c\x03\x02\x02\x02\u02A2\u02A4\x05V,\x02\u02A3\u02A2\x03\x02\x02\x02\u02A4" +
		"\u02A7\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5\u02A6\x03\x02" +
		"\x02\x02\u02A6\u02A8\x03\x02\x02\x02\u02A7\u02A5\x03\x02\x02\x02\u02A8" +
		"\u02A9\x07\t\x02\x02\u02A9\u02AB\x07h\x02\x02\u02AA\u02AC\x05B\"\x02\u02AB" +
		"\u02AA\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD\x03\x02" +
		"\x02\x02\u02AD\u02B1\x07N\x02\x02\u02AE\u02B0\x05r:\x02\u02AF\u02AE\x03" +
		"\x02\x02\x02\u02B0\u02B3\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B1" +
		"\u02AF\x03\x02\x02\x02\u02B2\u02B4\x03\x02\x02\x02\u02B3\u02B1\x03\x02" +
		"\x02\x02\u02B4\u02B5\x07M\x02\x02\u02B5e\x03\x02\x02\x02\u02B6\u02B8\x05" +
		"V,\x02\u02B7\u02B6\x03\x02\x02\x02\u02B8\u02BB\x03\x02\x02\x02\u02B9\u02B7" +
		"\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BC\x03\x02\x02\x02" +
		"\u02BB\u02B9\x03\x02\x02\x02\u02BC\u02BD\x07\x04\x02\x02\u02BD\u02BF\x07" +
		"h\x02\x02\u02BE\u02C0\x05B\"\x02\u02BF\u02BE\x03\x02\x02\x02\u02BF\u02C0" +
		"\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C2\x07A\x02\x02" +
		"\u02C2\u02C3\x05@!\x02\u02C3\u02C4\x07S\x02\x02\u02C4g\x03\x02\x02\x02" +
		"\u02C5\u02C7\x05V,\x02\u02C6\u02C5\x03\x02\x02\x02\u02C7\u02CA\x03\x02" +
		"\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9" +
		"\u02CB\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CB\u02CC\x07\x06" +
		"\x02\x02\u02CC\u02CD\x07h\x02\x02\u02CD\u02CE\x05\x94K\x02\u02CE\u02CF" +
		"\x05\x98M\x02\u02CFi\x03\x02\x02\x02\u02D0\u02D2\x05V,\x02\u02D1\u02D0" +
		"\x03\x02\x02\x02\u02D2\u02D5\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02" +
		"\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D6\x03\x02\x02\x02\u02D5\u02D3\x03" +
		"\x02\x02\x02\u02D6\u02D8\x07\n\x02\x02\u02D7\u02D9\x05B\"\x02\u02D8\u02D7" +
		"\x03\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02" +
		"\u02DA\u02DB\x05@!\x02\u02DB\u02DF\x07N\x02\x02\u02DC\u02DE\x05r:\x02" +
		"\u02DD\u02DC\x03\x02\x02\x02\u02DE\u02E1\x03\x02\x02\x02\u02DF\u02DD\x03" +
		"\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E2\x03\x02\x02\x02\u02E1" +
		"\u02DF\x03\x02\x02\x02\u02E2\u02E3\x07M\x02\x02\u02E3k\x03\x02\x02\x02" +
		"\u02E4\u02E6\x05V,\x02\u02E5\u02E4\x03\x02\x02\x02\u02E6\u02E9\x03\x02" +
		"\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8" +
		"\u02EA\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02EA\u02EB\x07\v\x02" +
		"\x02\u02EB\u02ED\x07h\x02\x02\u02EC\u02EE\x05B\"\x02\u02ED\u02EC\x03\x02" +
		"\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF" +
		"\u02F8\x07N\x02\x02\u02F0\u02F5\x05n8\x02\u02F1\u02F2\x07Q\x02\x02\u02F2" +
		"\u02F4\x05n8\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4\u02F7\x03\x02\x02\x02" +
		"\u02F5\u02F3\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F9\x03" +
		"\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F8\u02F0\x03\x02\x02\x02\u02F8" +
		"\u02F9\x03\x02\x02\x02\u02F9\u0301\x03\x02\x02\x02\u02FA\u02FE\x07S\x02" +
		"\x02\u02FB\u02FD\x05r:\x02\u02FC\u02FB\x03\x02\x02\x02\u02FD\u0300\x03" +
		"\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF" +
		"\u0302\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0301\u02FA\x03\x02" +
		"\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303" +
		"\u0304\x07M\x02\x02\u0304m\x03\x02\x02\x02\u0305\u0311\x07h\x02\x02\u0306" +
		"\u0307\x07P\x02\x02\u0307\u030C\x05@!\x02\u0308\u0309\x07Q\x02\x02\u0309" +
		"\u030B\x05@!\x02\u030A\u0308\x03\x02\x02\x02\u030B\u030E\x03\x02\x02\x02" +
		"\u030C\u030A\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u030F\x03" +
		"\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030F\u0310\x07O\x02\x02\u0310" +
		"\u0312\x03\x02\x02\x02\u0311\u0306\x03\x02\x02\x02\u0311\u0312\x03\x02" +
		"\x02\x02\u0312o\x03\x02\x02\x02\u0313\u031F\x07h\x02\x02\u0314\u0315\x07" +
		"P\x02\x02\u0315\u031A\x05\xDEp\x02\u0316\u0317\x07Q\x02\x02\u0317\u0319" +
		"\x05\xDEp\x02\u0318\u0316\x03\x02\x02\x02\u0319\u031C\x03\x02\x02\x02" +
		"\u031A\u0318\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031D\x03" +
		"\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031D\u031E\x07O\x02\x02\u031E" +
		"\u0320\x03\x02\x02\x02\u031F\u0314\x03\x02\x02\x02\u031F\u0320\x03\x02" +
		"\x02\x02\u0320\u0323\x03\x02\x02\x02\u0321\u0322\x07X\x02\x02\u0322\u0324" +
		"\x05\xDEp\x02\u0323\u0321\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02" +
		"\u0324q\x03\x02\x02\x02\u0325\u0329\x05N(\x02\u0326\u0328\x05Z.\x02\u0327" +
		"\u0326\x03\x02\x02\x02\u0328\u032B\x03\x02\x02\x02\u0329\u0327\x03\x02" +
		"\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u033B\x03\x02\x02\x02\u032B" +
		"\u0329\x03\x02\x02\x02\u032C\u033C\x05t;\x02\u032D\u033C\x05v<\x02\u032E" +
		"\u033C\x05x=\x02\u032F\u033C\x05z>\x02\u0330\u033C\x05|?\x02\u0331\u033C" +
		"\x05~@\x02\u0332\u033C\x05\x80A\x02\u0333\u033C\x05\x82B\x02\u0334\u033C" +
		"\x05\x84C\x02\u0335\u033C\x05\x86D\x02\u0336\u033C\x05\x8AF\x02\u0337" +
		"\u033C\x05\x8CG\x02\u0338\u033C\x05\x8EH\x02\u0339\u033C\x05\x90I\x02" +
		"\u033A\u033C\x05\x92J\x02\u033B\u032C\x03\x02\x02\x02\u033B\u032D\x03" +
		"\x02\x02\x02\u033B\u032E\x03\x02\x02\x02\u033B\u032F\x03\x02\x02\x02\u033B" +
		"\u0330\x03\x02\x02\x02\u033B\u0331\x03\x02\x02\x02\u033B\u0332\x03\x02" +
		"\x02\x02\u033B\u0333\x03\x02\x02\x02\u033B\u0334\x03\x02\x02\x02\u033B" +
		"\u0335\x03\x02\x02\x02\u033B\u0336\x03\x02\x02\x02\u033B\u0337\x03\x02" +
		"\x02\x02\u033B\u0338\x03\x02\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B" +
		"\u033A\x03\x02\x02\x02\u033Cs\x03\x02\x02\x02\u033D\u033E\t\x03\x02\x02" +
		"\u033E\u0341\x07h\x02\x02\u033F\u0340\x07A\x02\x02\u0340\u0342\x05@!\x02" +
		"\u0341\u033F\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0352\x03" +
		"\x02\x02\x02\u0343\u0345\x07[\x02\x02\u0344\u0346\x05R*\x02\u0345\u0344" +
		"\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02" +
		"\u0347\u034F\t\x04\x02\x02\u0348\u034A\x07Q\x02\x02\u0349\u034B\x05R*" +
		"\x02\u034A\u0349\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B\u034C" +
		"\x03\x02\x02\x02\u034C\u034E\t\x04\x02\x02\u034D\u0348\x03\x02\x02\x02" +
		"\u034E\u0351\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u034F\u0350\x03" +
		"\x02\x02\x02\u0350\u0353\x03\x02\x02\x02\u0351\u034F\x03\x02\x02\x02\u0352" +
		"\u0343\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0356\x03\x02" +
		"\x02\x02\u0354\u0355\x07X\x02\x02\u0355\u0357\x05\xDEp\x02\u0356\u0354" +
		"\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02" +
		"\u0358\u0359\x07S\x02\x02\u0359u\x03\x02\x02\x02\u035A\u035B\x07E\x02" +
		"\x02\u035B\u035C\x05\x94K\x02\u035C\u035D\x05\x98M\x02\u035Dw\x03\x02" +
		"\x02\x02\u035E\u036A\x07h\x02\x02\u035F\u0360\x07A\x02\x02\u0360\u0362" +
		"\x05@!\x02\u0361\u035F\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362" +
		"\u0363\x03\x02\x02\x02\u0363\u0364\x07X\x02\x02\u0364\u0365\x05\xDEp\x02" +
		"\u0365\u0366\x07S\x02\x02\u0366\u036B\x03\x02\x02\x02\u0367\u0368\x05" +
		"\x94K\x02\u0368\u0369\x05\x98M\x02\u0369\u036B\x03\x02\x02\x02\u036A\u0361" +
		"\x03\x02\x02\x02\u036A\u0367\x03\x02\x02\x02\u036By\x03\x02\x02\x02\u036C" +
		"\u036D\x07\x1E\x02\x02\u036D\u0370\x07h\x02\x02\u036E\u036F\x07A\x02\x02" +
		"\u036F\u0371\x05@!\x02\u0370\u036E\x03\x02\x02\x02\u0370\u0371\x03\x02" +
		"\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372\u0373\x05\x98M\x02\u0373{\x03" +
		"\x02\x02\x02\u0374\u0375\x07\x1C\x02\x02\u0375\u0378\x07h\x02\x02\u0376" +
		"\u0377\x07A\x02\x02\u0377\u0379\x05@!\x02\u0378\u0376\x03\x02\x02\x02" +
		"\u0378\u0379\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037B\x05" +
		"\x98M\x02\u037B}\x03\x02\x02\x02\u037C\u037D\x07\x1D\x02\x02\u037D\u038A" +
		"\x05@!\x02\u037E\u038B\x07S\x02\x02\u037F\u0388\x07N\x02\x02\u0380\u0389" +
		"\x07M\x02\x02\u0381\u0383\x05r:\x02\u0382\u0381\x03\x02\x02\x02\u0383" +
		"\u0386\x03\x02\x02\x02\u0384\u0382\x03\x02\x02\x02\u0384\u0385\x03\x02" +
		"\x02\x02\u0385\u0387\x03\x02\x02\x02\u0386\u0384\x03\x02\x02\x02\u0387" +
		"\u0389\x07M\x02\x02\u0388\u0380\x03\x02\x02\x02\u0388\u0384\x03\x02\x02" +
		"\x02\u0389\u038B\x03\x02\x02\x02\u038A\u037E\x03\x02\x02\x02\u038A\u037F" +
		"\x03\x02\x02\x02\u038B\x7F\x03\x02\x02\x02\u038C\u038D\x05\x94K\x02\u038D" +
		"\u038E\x05\x98M\x02\u038E\x81\x03\x02\x02\x02\u038F\u0390\x07U\x02\x02" +
		"\u0390\u0392\x07T\x02\x02\u0391\u0393\x07X\x02\x02\u0392\u0391\x03\x02" +
		"\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394" +
		"\u0395\x05\x94K\x02\u0395\u0396\x05\x98M\x02\u0396\x83\x03\x02\x02\x02" +
		"\u0397\u0398\x07Z\x02\x02\u0398\u0399\x07E\x02\x02\u0399\u039A\x05\x9A" +
		"N\x02\u039A\x85\x03\x02\x02\x02\u039B\u03BD\x07Z\x02\x02\u039C\u03A0\x05" +
		"\x14\v\x02\u039D\u039E\x07X\x02\x02\u039E\u03A0\x07X\x02\x02\u039F\u039C" +
		"\x03\x02\x02\x02\u039F\u039D\x03\x02\x02\x02\u03A0\u03BD\x03\x02\x02\x02" +
		"\u03A1\u03BD\x07V\x02\x02\u03A2\u03BD\x07e\x02\x02\u03A3\u03BD\x07a\x02" +
		"\x02\u03A4\u03BD\x07\\\x02\x02\u03A5\u03BD\x07`\x02\x02\u03A6\u03BD\x07" +
		"W\x02\x02\u03A7\u03BD\x07c\x02\x02\u03A8\u03BD\x07f\x02\x02\u03A9\u03BD" +
		"\x07b\x02\x02\u03AA\u03BD\x05(\x15\x02\u03AB\u03BD\x05:\x1E\x02\u03AC" +
		"\u03BD\x05,\x17\x02\u03AD\u03BD\x052\x1A\x02\u03AE\u03BD\x05.\x18\x02" +
		"\u03AF\u03BD\x050\x19\x02\u03B0\u03BD\x05*\x16\x02\u03B1\u03BD\x054\x1B" +
		"\x02\u03B2\u03BD\x05> \x02\u03B3\u03BD\x05\x1A\x0E\x02\u03B4\u03BD\x05" +
		"\x0E\b\x02\u03B5\u03BD\x05\x10\t\x02\u03B6\u03BD\x05\x04\x03\x02\u03B7" +
		"\u03BD\x05\x06\x04\x02\u03B8\u03BD\x05\b\x05\x02\u03B9\u03BD\x056\x1C" +
		"\x02\u03BA\u03BD\x058\x1D\x02\u03BB\u03BD\x05<\x1F\x02\u03BC\u039B\x03" +
		"\x02\x02\x02\u03BC\u039F\x03\x02\x02\x02\u03BC\u03A1\x03\x02\x02\x02\u03BC" +
		"\u03A2\x03\x02\x02\x02\u03BC\u03A3\x03\x02\x02\x02\u03BC\u03A4\x03\x02" +
		"\x02\x02\u03BC\u03A5\x03\x02\x02\x02\u03BC\u03A6\x03\x02\x02\x02\u03BC" +
		"\u03A7\x03\x02\x02\x02\u03BC\u03A8\x03\x02\x02\x02\u03BC\u03A9\x03\x02" +
		"\x02\x02\u03BC\u03AA\x03\x02\x02\x02\u03BC\u03AB\x03\x02\x02\x02\u03BC" +
		"\u03AC\x03\x02\x02\x02\u03BC\u03AD\x03\x02\x02\x02\u03BC\u03AE\x03\x02" +
		"\x02\x02\u03BC\u03AF\x03\x02\x02\x02\u03BC\u03B0\x03\x02\x02\x02\u03BC" +
		"\u03B1\x03\x02\x02\x02\u03BC\u03B2\x03\x02\x02\x02\u03BC\u03B3\x03\x02" +
		"\x02\x02\u03BC\u03B4\x03\x02\x02\x02\u03BC\u03B5\x03\x02\x02\x02\u03BC" +
		"\u03B6\x03\x02\x02\x02\u03BC\u03B7\x03\x02\x02\x02\u03BC\u03B8\x03\x02" +
		"\x02\x02\u03BC\u03B9\x03\x02\x02\x02\u03BC\u03BA\x03\x02\x02\x02\u03BC" +
		"\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03BF\x05\x94" +
		"K\x02\u03BF\u03C0\x05\x98M\x02\u03C0\x87\x03\x02\x02\x02\u03C1\u03C2\x05" +
		"\x14\v\x02\u03C2\u03C3\x05\x94K\x02\u03C3\u03C4\x05\x98M\x02\u03C4\x89" +
		"\x03\x02\x02\x02\u03C5\u03C6\x07A\x02\x02\u03C6\u03C7\x05@!\x02\u03C7" +
		"\u03C8\x05\x98M\x02\u03C8\x8B\x03\x02\x02\x02\u03C9\u03CA\x07?\x02\x02" +
		"\u03CA\u03CB\x05\x94K\x02\u03CB\u03CC\x05\x98M\x02\u03CC\x8D\x03\x02\x02" +
		"\x02\u03CD\u03CE\x05\\/\x02\u03CE\x8F\x03\x02\x02\x02\u03CF\u03D0\x07" +
		"2\x02\x02\u03D0\u03D1\x05\x94K\x02\u03D1\u03D2\x05\x98M\x02\u03D2\x91" +
		"\x03\x02\x02\x02\u03D3\u03D4\x07N\x02\x02\u03D4\u03D5\x05\xE0q\x02\u03D5" +
		"\x93\x03\x02\x02\x02\u03D6\u03D8\x05B\"\x02\u03D7\u03D6\x03\x02\x02\x02" +
		"\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03E5\x07" +
		"P\x02\x02\u03DA\u03E6\x07O\x02\x02\u03DB\u03E0\x05\x96L\x02\u03DC\u03DD" +
		"\x07Q\x02\x02\u03DD\u03DF\x05\x96L\x02\u03DE\u03DC\x03\x02\x02\x02\u03DF" +
		"\u03E2\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E0\u03E1\x03\x02" +
		"\x02\x02\u03E1\u03E3\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02\u03E3" +
		"\u03E4\x07O\x02\x02\u03E4\u03E6\x03\x02\x02\x02\u03E5\u03DA\x03\x02\x02" +
		"\x02\u03E5\u03DB\x03\x02\x02\x02\u03E6\u03E9\x03\x02\x02\x02\u03E7\u03E8" +
		"\t\x05\x02\x02\u03E8\u03EA\x05@!\x02\u03E9\u03E7\x03\x02\x02\x02\u03E9" +
		"\u03EA\x03\x02\x02\x02\u03EA\u03ED\x03\x02\x02\x02\u03EB\u03EC\x07C\x02" +
		"\x02\u03EC\u03EE\x05@!\x02\u03ED\u03EB\x03\x02\x02\x02\u03ED\u03EE\x03" +
		"\x02\x02\x02\u03EE\x95\x03\x02\x02\x02\u03EF\u03F0\x05N(\x02\u03F0\u03F2" +
		"\x07h\x02\x02\u03F1\u03F3\x05\x12\n\x02\u03F2\u03F1\x03\x02\x02\x02\u03F2" +
		"\u03F3\x03\x02\x02\x02\u03F3\u03F6\x03\x02\x02\x02\u03F4\u03F5\t\x05\x02" +
		"\x02\u03F5\u03F7\x05@!\x02\u03F6\u03F4\x03\x02\x02\x02\u03F6\u03F7\x03" +
		"\x02\x02\x02\u03F7\u03FA\x03\x02\x02\x02\u03F8\u03F9\x07X\x02\x02\u03F9" +
		"\u03FB\x05\xDEp\x02\u03FA";
	private static readonly _serializedATNSegment2: string =
		"\u03F8\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\x97\x03\x02\x02" +
		"\x02\u03FC\u0400\x05\u0102\x82\x02\u03FD\u0400\x07S\x02\x02\u03FE\u0400" +
		"\x05\x9AN\x02\u03FF\u03FC\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02" +
		"\u03FF\u03FE\x03\x02\x02\x02\u0400\x99\x03\x02\x02\x02\u0401\u0404\x05" +
		"\xE0q\x02\u0402\u0404\x07S\x02\x02\u0403\u0401\x03\x02\x02\x02\u0403\u0402" +
		"\x03\x02\x02\x02\u0404\x9B\x03\x02\x02\x02\u0405\u0406\x07K\x02\x02\u0406" +
		"\x9D\x03\x02\x02\x02\u0407\u0408\x07J\x02\x02\u0408\x9F\x03\x02\x02\x02" +
		"\u0409\u040A\x07L\x02\x02\u040A\xA1\x03\x02\x02\x02\u040B\u040C\x07g\x02" +
		"\x02\u040C\xA3\x03\x02\x02\x02\u040D\u040F\x07h\x02\x02\u040E\u0410\x05" +
		"F$\x02\u040F\u040E\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\xA5" +
		"\x03\x02\x02\x02\u0411\u0412\x07]\x02\x02\u0412\u0413\x07h\x02\x02\u0413" +
		"\xA7\x03\x02\x02\x02\u0414\u0415\x07E\x02\x02\u0415\xA9\x03\x02\x02\x02" +
		"\u0416\u0417\x07D\x02\x02\u0417\xAB\x03\x02\x02\x02\u0418\u0419\x07]\x02" +
		"\x02\u0419\xAD\x03\x02\x02\x02\u041A\u0426\x07U\x02\x02\u041B\u0427\x07" +
		"T\x02\x02\u041C\u0421\x05\xDEp\x02\u041D\u041E\x07Q\x02\x02\u041E\u0420" +
		"\x05\xDEp\x02\u041F\u041D\x03\x02\x02\x02\u0420\u0423\x03\x02\x02\x02" +
		"\u0421\u041F\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422\u0424\x03" +
		"\x02\x02\x02\u0423\u0421\x03\x02\x02\x02\u0424\u0425\x07T\x02\x02\u0425" +
		"\u0427\x03\x02\x02\x02\u0426\u041B\x03\x02\x02\x02\u0426\u041C\x03\x02" +
		"\x02\x02\u0427\xAF\x03\x02\x02\x02\u0428\u043C\x07N\x02\x02\u0429\u043D" +
		"\x07M\x02\x02\u042A\u042D\x05\xDEp\x02\u042B\u042C\x07[\x02\x02\u042C" +
		"\u042E\x05\xDEp\x02\u042D\u042B\x03\x02\x02\x02\u042D\u042E\x03\x02\x02" +
		"\x02\u042E\u0437\x03\x02\x02\x02\u042F\u0430\x07Q\x02\x02\u0430\u0433" +
		"\x05\xDEp\x02\u0431\u0432\x07[\x02\x02\u0432\u0434\x05\xDEp\x02\u0433" +
		"\u0431\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0436\x03\x02" +
		"\x02\x02\u0435\u042F\x03\x02\x02\x02\u0436\u0439\x03\x02\x02\x02\u0437" +
		"\u0435\x03\x02\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438\u043A\x03\x02" +
		"\x02\x02\u0439\u0437\x03\x02\x02\x02\u043A\u043B\x07M\x02\x02\u043B\u043D" +
		"\x03\x02\x02\x02\u043C\u0429\x03\x02\x02\x02\u043C\u042A\x03\x02\x02\x02" +
		"\u043D\xB1\x03\x02\x02\x02\u043E\u043F\x07G\x02\x02\u043F\xB3\x03\x02" +
		"\x02\x02\u0440\u0441\x07H\x02\x02\u0441\xB5\x03\x02\x02\x02\u0442\u0443" +
		"\x07F\x02\x02\u0443\xB7\x03\x02\x02\x02\u0444\u0450\x07P\x02\x02\u0445" +
		"\u0451\x07O\x02\x02\u0446\u044B\x05\xDEp\x02\u0447\u0448\x07Q\x02\x02" +
		"\u0448\u044A\x05\xDEp\x02\u0449\u0447\x03\x02\x02\x02\u044A\u044D\x03" +
		"\x02\x02\x02\u044B\u0449\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C" +
		"\u044E\x03\x02\x02\x02\u044D\u044B\x03\x02\x02\x02\u044E\u044F\x07O\x02" +
		"\x02\u044F\u0451\x03\x02\x02\x02\u0450\u0445\x03\x02\x02\x02\u0450\u0446" +
		"\x03\x02\x02\x02\u0451\xB9\x03\x02\x02\x02\u0452\u0453\x07I\x02\x02\u0453" +
		"\u0455\x05@!\x02\u0454\u0456\x05H%\x02\u0455\u0454\x03\x02\x02\x02\u0455" +
		"\u0456\x03\x02\x02\x02\u0456\xBB\x03\x02\x02\x02\u0457\u0458\x073\x02" +
		"\x02\u0458\u0459\x05\xDEp\x02\u0459\xBD\x03\x02\x02\x02\u045A\u045B\x07" +
		"4\x02\x02\u045B\u045C\x05\xDEp\x02\u045C\xBF\x03\x02\x02\x02\u045D\u045E" +
		"\x07B\x02\x02\u045E\u045F\x05\xDEp\x02\u045F\u0470\x07N\x02\x02\u0460" +
		"\u0471\x07M\x02\x02\u0461\u0464\x07>\x02\x02\u0462\u0464\x05\xDEp\x02" +
		"\u0463\u0461\x03\x02\x02\x02\u0463\u0462\x03\x02\x02\x02\u0464\u0465\x03" +
		"\x02\x02\x02\u0465\u0466\x05\x1C\x0F\x02\u0466\u0468\x05\xDEp\x02\u0467" +
		"\u0469\x07Q\x02\x02\u0468\u0467\x03\x02\x02\x02\u0468\u0469\x03\x02\x02" +
		"\x02\u0469\u046B\x03\x02\x02\x02\u046A\u0463\x03\x02\x02\x02\u046B\u046E" +
		"\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02" +
		"\u046D\u046F\x03\x02\x02\x02\u046E\u046C\x03\x02\x02\x02\u046F\u0471\x07" +
		"M\x02\x02\u0470\u0460\x03\x02\x02\x02\u0470\u046C\x03\x02\x02\x02\u0471" +
		"\xC1\x03\x02\x02\x02\u0472\u0479\x07_\x02\x02\u0473\u0475\n\x06\x02\x02" +
		"\u0474\u0476\x07[\x02\x02\u0475\u0474\x03\x02\x02\x02\u0475\u0476\x03" +
		"\x02\x02\x02\u0476\u0478\x03\x02\x02\x02\u0477\u0473\x03\x02\x02\x02\u0478" +
		"\u047B\x03\x02\x02\x02\u0479\u0477\x03\x02\x02\x02\u0479\u047A\x03\x02" +
		"\x02\x02\u047A\u047C\x03\x02\x02\x02\u047B\u0479\x03\x02\x02\x02\u047C" +
		"\u047D\x07^\x02\x02\u047D\xC3\x03\x02\x02\x02\u047E\u0494\x05\x9CO\x02" +
		"\u047F\u0494\x05\x9EP\x02\u0480\u0494\x05\xA0Q\x02\u0481\u0494\x05\xA2" +
		"R\x02\u0482\u0494\x05\xA4S\x02\u0483\u0494\x05\xA6T\x02\u0484\u0494\x05" +
		"\xA8U\x02\u0485\u0494\x05\xAAV\x02\u0486\u0494\x05\xACW\x02\u0487\u0494" +
		"\x05\xAEX\x02\u0488\u0494\x05\xB0Y\x02\u0489\u0494\x05\xB2Z\x02\u048A" +
		"\u0494\x05\xB4[\x02\u048B\u0494\x05\xB6\\\x02\u048C\u0494\x05\xB8]\x02" +
		"\u048D\u0494\x05\xBA^\x02\u048E\u0494\x05\xBC_\x02\u048F\u0494\x05\xBE" +
		"`\x02\u0490\u0494\x05\xC0a\x02\u0491\u0494\x05\xC2b\x02\u0492\u0494\x05" +
		"@!\x02\u0493\u047E\x03\x02\x02\x02\u0493\u047F\x03\x02\x02\x02\u0493\u0480" +
		"\x03\x02\x02\x02\u0493\u0481\x03\x02\x02\x02\u0493\u0482\x03\x02\x02\x02" +
		"\u0493\u0483\x03\x02\x02\x02\u0493\u0484\x03\x02\x02\x02\u0493\u0485\x03" +
		"\x02\x02\x02\u0493\u0486\x03\x02\x02\x02\u0493\u0487\x03\x02\x02\x02\u0493" +
		"\u0488\x03\x02\x02\x02\u0493\u0489\x03\x02\x02\x02\u0493\u048A\x03\x02" +
		"\x02\x02\u0493\u048B\x03\x02\x02\x02\u0493\u048C\x03\x02\x02\x02\u0493" +
		"\u048D\x03\x02\x02\x02\u0493\u048E\x03\x02\x02\x02\u0493\u048F\x03\x02" +
		"\x02\x02\u0493\u0490\x03\x02\x02\x02\u0493\u0491\x03\x02\x02\x02\u0493" +
		"\u0492\x03\x02\x02\x02\u0494\xC5\x03\x02\x02\x02\u0495\u04B8\x05\xC4c" +
		"\x02\u0496\u049D\x07R\x02\x02\u0497\u0499\x07h\x02\x02\u0498\u049A\x05" +
		"F$\x02\u0499\u0498\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049E" +
		"\x03\x02\x02\x02\u049B\u049E\x07]\x02\x02\u049C\u049E\x07g\x02\x02\u049D" +
		"\u0497\x03\x02\x02\x02\u049D\u049B\x03\x02\x02\x02\u049D\u049C\x03\x02" +
		"\x02\x02\u049E\u04B7\x03\x02\x02\x02\u049F\u04A0\x05\x10\t\x02\u04A0\u04A1" +
		"\x05\xDEp\x02\u04A1\u04B7\x03\x02\x02\x02\u04A2\u04A3\x07U\x02\x02\u04A3" +
		"\u04A8\x05\xDEp\x02\u04A4\u04A5\x07Q\x02\x02\u04A5\u04A7\x05\xDEp\x02" +
		"\u04A6\u04A4\x03\x02\x02\x02\u04A7\u04AA\x03\x02\x02\x02\u04A8\u04A6\x03" +
		"\x02\x02\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04AB\x03\x02\x02\x02\u04AA" +
		"\u04A8\x03\x02\x02\x02\u04AB\u04AC\x07T\x02\x02\u04AC\u04B7\x03\x02\x02" +
		"\x02\u04AD\u04B7\x05H%\x02\u04AE\u04B0\x07A\x02\x02\u04AF\u04B1\x07d\x02" +
		"\x02\u04B0\u04AF\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B2" +
		"\x03\x02\x02\x02\u04B2\u04B7\x05@!\x02\u04B3\u04B7\x05\x1A\x0E\x02\u04B4" +
		"\u04B7\x05\x0E\b\x02\u04B5\u04B7\x05\u0100\x81\x02\u04B6\u0496\x03\x02" +
		"\x02\x02\u04B6\u049F\x03\x02\x02\x02\u04B6\u04A2\x03\x02\x02\x02\u04B6" +
		"\u04AD\x03\x02\x02\x02\u04B6\u04AE\x03\x02\x02\x02\u04B6\u04B3\x03\x02" +
		"\x02\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6\u04B5\x03\x02\x02\x02\u04B7" +
		"\u04BA\x03\x02\x02\x02\u04B8\u04B6\x03\x02\x02\x02\u04B8\u04B9\x03\x02" +
		"\x02\x02\u04B9\xC7\x03\x02\x02\x02\u04BA\u04B8\x03\x02\x02\x02\u04BB\u04C1" +
		"\x07b\x02\x02\u04BC\u04C1\x07e\x02\x02\u04BD\u04C1\x07Z\x02\x02\u04BE" +
		"\u04C1\x05\x1A\x0E\x02\u04BF\u04C1\x05\x0E\b\x02\u04C0\u04BB\x03\x02\x02" +
		"\x02\u04C0\u04BC\x03\x02\x02\x02\u04C0\u04BD\x03\x02\x02\x02\u04C0\u04BE" +
		"\x03\x02\x02\x02\u04C0\u04BF\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02" +
		"\u04C2\u04CA\x05\xC8e\x02\u04C3\u04C7\x076\x02\x02\u04C4\u04C5\t\x07\x02" +
		"\x02\u04C5\u04C8\x05\xC8e\x02\u04C6\u04C8\x05\xC6d\x02\u04C7\u04C4\x03" +
		"\x02\x02\x02\u04C7\u04C6\x03\x02\x02\x02\u04C8\u04CA\x03\x02\x02\x02\u04C9" +
		"\u04C0\x03\x02\x02\x02\u04C9\u04C3\x03\x02\x02\x02\u04CA\u04CD\x03\x02" +
		"\x02\x02\u04CB\u04CD\x05\xC6d\x02\u04CC\u04C9\x03\x02\x02\x02\u04CC\u04CB" +
		"\x03\x02\x02\x02\u04CD\xC9\x03\x02\x02\x02\u04CE\u04D3\x05\xC8e\x02\u04CF" +
		"\u04D0\t\b\x02\x02\u04D0\u04D2\x05\xC8e\x02\u04D1\u04CF\x03\x02\x02\x02" +
		"\u04D2\u04D5\x03\x02\x02\x02\u04D3\u04D1\x03\x02\x02\x02\u04D3\u04D4\x03" +
		"\x02\x02\x02\u04D4\xCB\x03\x02\x02\x02\u04D5\u04D3\x03\x02\x02\x02\u04D6" +
		"\u04DB\x05\xCAf\x02\u04D7\u04D8\t\t\x02\x02\u04D8\u04DA\x05\xCAf\x02\u04D9" +
		"\u04D7\x03\x02\x02\x02\u04DA\u04DD\x03\x02\x02\x02\u04DB\u04D9\x03\x02" +
		"\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\xCD\x03\x02\x02\x02\u04DD\u04DB" +
		"\x03\x02\x02\x02\u04DE\u04E8\x05\xCCg\x02\u04DF\u04E3\x05\x04\x03\x02" +
		"\u04E0\u04E3\x05\x06\x04\x02\u04E1\u04E3\x05\b\x05\x02\u04E2\u04DF\x03" +
		"\x02\x02\x02\u04E2\u04E0\x03\x02\x02\x02\u04E2\u04E1\x03\x02\x02\x02\u04E3" +
		"\u04E4\x03\x02\x02\x02\u04E4\u04E5\x05\xCCg\x02\u04E5\u04E7\x03\x02\x02" +
		"\x02\u04E6\u04E2\x03\x02\x02\x02\u04E7\u04EA\x03\x02\x02\x02\u04E8\u04E6" +
		"\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\xCF\x03\x02\x02\x02" +
		"\u04EA\u04E8\x03\x02\x02\x02\u04EB\u0501\x05\xCEh\x02\u04EC\u04F6\x05" +
		"\x14\v\x02\u04ED\u04F6\x05\x16\f\x02\u04EE\u04F6\x05 \x11\x02\u04EF\u04F6" +
		"\x05\"\x12\x02\u04F0\u04F6\x07_\x02\x02\u04F1\u04F6\x05\x1E\x10\x02\u04F2" +
		"\u04F6\x07^\x02\x02\u04F3\u04F6\x05\x18\r\x02\u04F4\u04F6\x07?\x02\x02" +
		"\u04F5\u04EC\x03\x02\x02\x02\u04F5\u04ED\x03\x02\x02\x02\u04F5\u04EE\x03" +
		"\x02\x02\x02\u04F5\u04EF\x03\x02\x02\x02\u04F5\u04F0\x03\x02\x02\x02\u04F5" +
		"\u04F1\x03\x02\x02\x02\u04F5\u04F2\x03\x02\x02\x02\u04F5\u04F3\x03\x02" +
		"\x02\x02\u04F5\u04F4\x03\x02\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7" +
		"\u0502\x05\xCEh\x02\u04F8\u04F9\x07@\x02\x02\u04F9\u0502\x05@!\x02\u04FA" +
		"\u04FF\x07b\x02\x02\u04FB\u04FC\x07?\x02\x02\u04FC\u0500\x05\xCEh\x02" +
		"\u04FD\u04FE\x07@\x02\x02\u04FE\u0500\x05@!\x02\u04FF\u04FB\x03\x02\x02" +
		"\x02\u04FF\u04FD\x03\x02\x02\x02\u0500\u0502\x03\x02\x02\x02\u0501\u04F5" +
		"\x03\x02\x02\x02\u0501\u04F8\x03\x02\x02\x02\u0501\u04FA\x03\x02\x02\x02" +
		"\u0501\u0502\x03\x02\x02\x02\u0502\xD1\x03\x02\x02\x02\u0503\u0508\x05" +
		"\xD0i\x02\u0504\u0505\x07W\x02\x02\u0505\u0507\x05\xD0i\x02\u0506\u0504" +
		"\x03\x02\x02\x02\u0507\u050A\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02" +
		"\u0508\u0509\x03\x02\x02\x02\u0509\xD3\x03\x02\x02\x02\u050A\u0508\x03" +
		"\x02\x02\x02\u050B\u0510\x05\xD2j\x02\u050C\u050D\x07f\x02\x02\u050D\u050F" +
		"\x05\xD2j\x02\u050E\u050C\x03\x02\x02\x02\u050F\u0512\x03\x02\x02\x02" +
		"\u0510\u050E\x03\x02\x02\x02\u0510\u0511\x03\x02\x02\x02\u0511\xD5\x03" +
		"\x02\x02\x02\u0512\u0510\x03\x02\x02\x02\u0513\u0518\x05\xD4k\x02\u0514" +
		"\u0515\x07c\x02\x02\u0515\u0517\x05\xD4k\x02\u0516\u0514\x03\x02\x02\x02" +
		"\u0517\u051A\x03\x02\x02\x02\u0518\u0516\x03\x02\x02\x02\u0518\u0519\x03" +
		"\x02\x02\x02\u0519\xD7\x03\x02\x02\x02\u051A\u0518\x03\x02\x02\x02\u051B" +
		"\u0521\x05\xD6l\x02\u051C\u051D\x05\n\x06\x02\u051D\u051E\x05\xD6l\x02" +
		"\u051E\u0520\x03\x02\x02\x02\u051F\u051C\x03\x02\x02\x02\u0520\u0523\x03" +
		"\x02\x02\x02\u0521\u051F\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522" +
		"\xD9\x03\x02\x02\x02\u0523\u0521\x03\x02\x02\x02\u0524\u052A\x05\xD8m" +
		"\x02\u0525\u0526\x05&\x14\x02\u0526\u0527\x05\xD8m\x02\u0527\u0529\x03" +
		"\x02\x02\x02\u0528\u0525\x03\x02\x02\x02\u0529\u052C\x03\x02\x02\x02\u052A" +
		"\u0528\x03\x02\x02\x02\u052A\u052B\x03\x02\x02\x02\u052B\u0532\x03\x02" +
		"\x02\x02\u052C\u052A\x03\x02\x02\x02\u052D\u052E\x05\f\x07\x02\u052E\u052F" +
		"\x05\xD8m\x02\u052F\u0531\x03\x02\x02\x02\u0530\u052D\x03\x02\x02\x02" +
		"\u0531\u0534\x03\x02\x02\x02\u0532\u0530\x03\x02\x02\x02\u0532\u0533\x03" +
		"\x02\x02\x02\u0533\xDB\x03\x02\x02\x02\u0534\u0532\x03\x02\x02\x02\u0535" +
		"\u053B\x05\xDAn\x02\u0536\u0537\x07d\x02\x02\u0537\u0538\x05\xDAn\x02" +
		"\u0538\u0539\x07[\x02\x02\u0539\u053A\x05\xDCo\x02\u053A\u053C\x03\x02" +
		"\x02\x02\u053B\u0536\x03\x02\x02\x02\u053B\u053C\x03\x02\x02\x02\u053C" +
		"\xDD\x03\x02\x02\x02\u053D\u054E\x05\xDCo\x02\u053E\u054C\x07X\x02\x02" +
		"\u053F\u054C\x05(\x15\x02\u0540\u054C\x05:\x1E\x02\u0541\u054C\x05,\x17" +
		"\x02\u0542\u054C\x052\x1A\x02\u0543\u054C\x05.\x18\x02\u0544\u054C\x05" +
		"0\x19\x02\u0545\u054C\x054\x1B\x02\u0546\u054C\x05*\x16\x02\u0547\u054C" +
		"\x05> \x02\u0548\u054C\x056\x1C\x02\u0549\u054C\x058\x1D\x02\u054A\u054C" +
		"\x05<\x1F\x02\u054B\u053E\x03\x02\x02\x02\u054B\u053F\x03\x02\x02\x02" +
		"\u054B\u0540\x03\x02\x02\x02\u054B\u0541\x03\x02\x02\x02\u054B\u0542\x03" +
		"\x02\x02\x02\u054B\u0543\x03\x02\x02\x02\u054B\u0544\x03\x02\x02\x02\u054B" +
		"\u0545\x03\x02\x02\x02\u054B\u0546\x03\x02\x02\x02\u054B\u0547\x03\x02" +
		"\x02\x02\u054B\u0548\x03\x02\x02\x02\u054B\u0549\x03\x02\x02\x02\u054B" +
		"\u054A\x03\x02\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D\u054F\x05\xDE" +
		"p\x02\u054E\u054B\x03\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F\xDF" +
		"\x03\x02\x02\x02\u0550\u0559\x07N\x02\x02\u0551\u055A\x07M\x02\x02\u0552" +
		"\u0554\x05\xFC\x7F\x02\u0553\u0552\x03\x02\x02\x02\u0554\u0557\x03\x02" +
		"\x02\x02\u0555\u0553\x03\x02\x02\x02\u0555\u0556\x03\x02\x02\x02\u0556" +
		"\u0558\x03\x02\x02\x02\u0557\u0555\x03\x02\x02\x02\u0558\u055A\x07M\x02" +
		"\x02\u0559\u0551\x03\x02\x02\x02\u0559\u0555\x03\x02\x02\x02\u055A\xE1" +
		"\x03\x02\x02\x02\u055B\u0560\x079\x02\x02\u055C\u0561\x07S\x02\x02\u055D" +
		"\u055E\x05\xDEp\x02\u055E\u055F\x07S\x02\x02\u055F\u0561\x03\x02\x02\x02" +
		"\u0560\u055C\x03\x02\x02\x02\u0560\u055D\x03\x02\x02\x02\u0561\xE3\x03" +
		"\x02\x02\x02\u0562\u0563\t\x03\x02\x02\u0563\u0566\x07h\x02\x02\u0564" +
		"\u0565\t\x05\x02\x02\u0565\u0567\x05@!\x02\u0566\u0564\x03\x02\x02\x02" +
		"\u0566\u0567\x03\x02\x02\x02\u0567\u056A\x03\x02\x02\x02\u0568\u0569\x07" +
		"X\x02\x02\u0569\u056B\x05\xDEp\x02\u056A\u0568\x03\x02\x02\x02\u056A\u056B" +
		"\x03\x02\x02\x02\u056B\u056C\x03\x02\x02\x02\u056C\u056D\x07S\x02\x02" +
		"\u056D\xE5\x03\x02\x02\x02\u056E\u056F\x07.\x02\x02\u056F\u0570\x05\xDE" +
		"p\x02\u0570\u0573\x05\xFE\x80\x02\u0571\u0572\x07/\x02\x02\u0572\u0574" +
		"\x05\xFE\x80\x02\u0573\u0571\x03\x02\x02\x02\u0573\u0574\x03\x02\x02\x02" +
		"\u0574\xE7\x03\x02\x02\x02\u0575\u0576\x072\x02\x02\u0576\u057B\x07h\x02" +
		"\x02\u0577\u0578\x07Q\x02\x02\u0578\u057A\x07h\x02\x02\u0579\u0577\x03" +
		"\x02\x02\x02\u057A\u057D\x03\x02\x02\x02\u057B\u0579\x03\x02\x02\x02\u057B" +
		"\u057C\x03\x02\x02\x02\u057C\u057E\x03\x02\x02\x02\u057D\u057B\x03\x02" +
		"\x02\x02\u057E\u057F\x07?\x02\x02\u057F\u0580\x05\xDEp\x02\u0580\u0581" +
		"\x05\xFE\x80\x02\u0581\xE9\x03\x02\x02\x02\u0582\u0585\x070\x02\x02\u0583" +
		"\u0584\x07[\x02\x02\u0584\u0586\x07h\x02\x02\u0585\u0583\x03\x02\x02\x02" +
		"\u0585\u0586\x03\x02\x02\x02\u0586\u0587\x03\x02\x02\x02\u0587\u0588\x05" +
		"\xFE\x80\x02\u0588\u0589\x071\x02\x02\u0589\u058A\x05\xDEp\x02\u058A\u058B" +
		"\x07S\x02\x02\u058B\xEB\x03\x02\x02\x02\u058C\u058F\x071\x02\x02\u058D" +
		"\u058E\x07[\x02\x02\u058E\u0590\x07h\x02\x02\u058F\u058D\x03\x02\x02\x02" +
		"\u058F\u0590\x03\x02\x02\x02\u0590\u0591\x03\x02\x02\x02\u0591\u0592\x05" +
		"\xDEp\x02\u0592\u0593\x05\xFE\x80\x02\u0593\xED\x03\x02\x02\x02\u0594" +
		"\u0595\x075\x02\x02\u0595\u0596\x05\xDEp\x02\u0596\u0597\x05\xFE\x80\x02" +
		"\u0597\xEF\x03\x02\x02\x02\u0598\u0599\x073\x02\x02\u0599\u059A\x05\xDE" +
		"p\x02\u059A\u059B\x07S\x02\x02\u059B\xF1\x03\x02\x02\x02\u059C\u05A0\x07" +
		"6\x02\x02\u059D\u059E\x07h\x02\x02\u059E\u059F\x07X\x02\x02\u059F\u05A1" +
		"\x05\xDEp\x02\u05A0\u059D\x03\x02\x02\x02\u05A0\u05A1\x03\x02\x02\x02" +
		"\u05A1\u05A2\x03\x02\x02\x02\u05A2\u05AE\x05\xFE\x80\x02\u05A3\u05A5\x07" +
		"7\x02\x02\u05A4\u05A6\x07h\x02\x02\u05A5\u05A4\x03\x02\x02\x02\u05A5\u05A6" +
		"\x03\x02\x02\x02\u05A6\u05A9\x03\x02\x02\x02\u05A7\u05A8\x07A\x02\x02" +
		"\u05A8\u05AA\x05@!\x02\u05A9\u05A7\x03\x02\x02\x02\u05A9\u05AA\x03\x02" +
		"\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05AD\x05\xFE\x80\x02\u05AC" +
		"\u05A3\x03\x02\x02\x02\u05AD\u05B0\x03\x02\x02\x02\u05AE\u05AC\x03\x02" +
		"\x02\x02\u05AE\u05AF\x03\x02\x02\x02\u05AF\u05B3\x03\x02\x02\x02\u05B0" +
		"\u05AE\x03\x02\x02\x02\u05B1\u05B2\x078\x02\x02\u05B2\u05B4\x05\xFE\x80" +
		"\x02\u05B3\u05B1\x03\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02\u05B4\xF3" +
		"\x03\x02\x02\x02\u05B5\u05B7\x07;\x02\x02\u05B6\u05B8\x07h\x02\x02\u05B7" +
		"\u05B6\x03\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8\u05B9\x03\x02" +
		"\x02\x02\u05B9\u05BA\x07S\x02\x02\u05BA\xF5\x03\x02\x02\x02\u05BB\u05BD" +
		"\x07:\x02\x02\u05BC\u05BE\x07h\x02\x02\u05BD\u05BC\x03\x02\x02\x02\u05BD" +
		"\u05BE\x03\x02\x02\x02\u05BE\u05BF\x03\x02\x02\x02\u05BF\u05C0\x07S\x02" +
		"\x02\u05C0\xF7\x03\x02\x02\x02\u05C1\u05C2\x07=\x02\x02\u05C2\u05C3\x05" +
		"\xDEp\x02\u05C3\u05C4\x07[\x02\x02\u05C4\xF9\x03\x02\x02\x02\u05C5\u05C8" +
		"\x07<\x02\x02\u05C6\u05C7\x07[\x02\x02\u05C7\u05C9\x07h\x02\x02\u05C8" +
		"\u05C6\x03\x02\x02\x02\u05C8\u05C9\x03\x02\x02\x02\u05C9\u05CA\x03\x02" +
		"\x02\x02\u05CA\u05CB\x05\xDEp\x02\u05CB\u05D7\x07N\x02\x02\u05CC\u05D8" +
		"\x07M\x02\x02\u05CD\u05D2\x05\xF8}\x02\u05CE\u05CF\x07>\x02\x02\u05CF" +
		"\u05D2\x07[\x02\x02\u05D0\u05D2\x05\xFE\x80\x02\u05D1\u05CD\x03\x02\x02" +
		"\x02\u05D1\u05CE\x03\x02\x02\x02\u05D1\u05D0\x03\x02\x02\x02\u05D2\u05D5" +
		"\x03\x02\x02\x02\u05D3\u05D1\x03\x02\x02\x02\u05D3\u05D4\x03\x02\x02\x02" +
		"\u05D4\u05D6\x03\x02\x02\x02\u05D5\u05D3\x03\x02\x02\x02\u05D6\u05D8\x07" +
		"M\x02\x02\u05D7\u05CC\x03\x02\x02\x02\u05D7\u05D3\x03\x02\x02\x02\u05D8" +
		"\xFB\x03\x02\x02\x02\u05D9\u05E7\x05\xE0q\x02\u05DA\u05E7\x05\xE2r\x02" +
		"\u05DB\u05E7\x05\xE4s\x02\u05DC\u05E7\x05\xE6t\x02\u05DD\u05E7\x05\xE8" +
		"u\x02\u05DE\u05E7\x05\xEAv\x02\u05DF\u05E7\x05\xECw\x02\u05E0\u05E7\x05" +
		"\xEEx\x02\u05E1\u05E7\x05\xF0y\x02\u05E2\u05E7\x05\xF2z\x02\u05E3\u05E7" +
		"\x05\xF4{\x02\u05E4\u05E7\x05\xF6|\x02\u05E5\u05E7\x05\xFA~\x02\u05E6" +
		"\u05D9\x03\x02\x02\x02\u05E6\u05DA\x03\x02\x02\x02\u05E6\u05DB\x03\x02" +
		"\x02\x02\u05E6\u05DC\x03\x02\x02\x02\u05E6\u05DD\x03\x02\x02\x02\u05E6" +
		"\u05DE\x03\x02\x02\x02\u05E6\u05DF\x03\x02\x02\x02\u05E6\u05E0\x03\x02" +
		"\x02\x02\u05E6\u05E1\x03\x02\x02\x02\u05E6\u05E2\x03\x02\x02\x02\u05E6" +
		"\u05E3\x03\x02\x02\x02\u05E6\u05E4\x03\x02\x02\x02\u05E6\u05E5\x03\x02" +
		"\x02\x02\u05E7\u05EC\x03\x02\x02\x02\u05E8\u05E9\x05\xDEp\x02\u05E9\u05EA" +
		"\x07S\x02\x02\u05EA\u05EC\x03\x02\x02\x02\u05EB\u05E6\x03\x02\x02\x02" +
		"\u05EB\u05E8\x03\x02\x02\x02\u05EC\xFD\x03\x02\x02\x02\u05ED\u0600\x05" +
		"N(\x02\u05EE\u05FC\x05\xE0q\x02\u05EF\u05FC\x05\xE2r\x02\u05F0\u05FC\x05" +
		"\xE4s\x02\u05F1\u05FC\x05\xE6t\x02\u05F2\u05FC\x05\xE8u\x02\u05F3\u05FC" +
		"\x05\xEAv\x02\u05F4\u05FC\x05\xECw\x02\u05F5\u05FC\x05\xEEx\x02\u05F6" +
		"\u05FC\x05\xF0y\x02\u05F7\u05FC\x05\xF2z\x02\u05F8\u05FC\x05\xF4{\x02" +
		"\u05F9\u05FC\x05\xF6|\x02\u05FA\u05FC\x05\xFA~\x02\u05FB\u05EE\x03\x02" +
		"\x02\x02\u05FB\u05EF\x03\x02\x02\x02\u05FB\u05F0\x03\x02\x02\x02\u05FB" +
		"\u05F1\x03\x02\x02\x02\u05FB\u05F2\x03\x02\x02\x02\u05FB\u05F3\x03\x02" +
		"\x02\x02\u05FB\u05F4\x03\x02\x02\x02\u05FB\u05F5\x03\x02\x02\x02\u05FB" +
		"\u05F6\x03\x02\x02\x02\u05FB\u05F7\x03\x02\x02\x02\u05FB\u05F8\x03\x02" +
		"\x02\x02\u05FB\u05F9\x03\x02\x02\x02\u05FB\u05FA\x03\x02\x02\x02\u05FC" +
		"\u0601\x03\x02\x02\x02\u05FD\u05FE\x05\xDEp\x02\u05FE\u05FF\x07S\x02\x02" +
		"\u05FF\u0601\x03\x02\x02\x02\u0600\u05FB\x03\x02\x02\x02\u0600\u05FD\x03" +
		"\x02\x02\x02\u0601\xFF\x03\x02\x02\x02\u0602\u0605\x05\x1C\x0F\x02\u0603" +
		"\u0606\x05\xE0q\x02\u0604\u0606\x05\xDEp\x02\u0605\u0603\x03\x02\x02\x02" +
		"\u0605\u0604\x03\x02\x02\x02\u0606\u0101\x03\x02\x02\x02\u0607\u060A\x05" +
		"\x1C\x0F\x02\u0608\u060B\x05\xE0q\x02\u0609\u060B\x05\xDEp\x02\u060A\u0608" +
		"\x03\x02\x02\x02\u060A\u0609\x03\x02\x02\x02\u060B\u060C\x03\x02\x02\x02" +
		"\u060C\u060D\x07S\x02\x02\u060D\u0103\x03\x02\x02\x02\xA6\u0107\u010C" +
		"\u010E\u0188\u018D\u0191\u0194\u019D\u01A9\u01AC\u01AE\u01B7\u01BF\u01C4" +
		"\u01CD\u01D3\u01DC\u01E1\u01E9\u01EF\u01F7\u01FF\u0204\u0209\u0210\u0215" +
		"\u021D\u0226\u0230\u023B\u0246\u024B\u0251\u0255\u025C\u0260\u0265\u026B" +
		"\u0273\u0276\u027C\u0284\u028B\u028F\u0294\u029B\u029E\u02A5\u02AB\u02B1" +
		"\u02B9\u02BF\u02C8\u02D3\u02D8\u02DF\u02E7\u02ED\u02F5\u02F8\u02FE\u0301" +
		"\u030C\u0311\u031A\u031F\u0323\u0329\u033B\u0341\u0345\u034A\u034F\u0352" +
		"\u0356\u0361\u036A\u0370\u0378\u0384\u0388\u038A\u0392\u039F\u03BC\u03D7" +
		"\u03E0\u03E5\u03E9\u03ED\u03F2\u03F6\u03FA\u03FF\u0403\u040F\u0421\u0426" +
		"\u042D\u0433\u0437\u043C\u044B\u0450\u0455\u0463\u0468\u046C\u0470\u0475" +
		"\u0479\u0493\u0499\u049D\u04A8\u04B0\u04B6\u04B8\u04C0\u04C7\u04C9\u04CC" +
		"\u04D3\u04DB\u04E2\u04E8\u04F5\u04FF\u0501\u0508\u0510\u0518\u0521\u052A" +
		"\u0532\u053B\u054B\u054E\u0555\u0559\u0560\u0566\u056A\u0573\u057B\u0585" +
		"\u058F\u05A0\u05A5\u05A9\u05AE\u05B3\u05B7\u05BD\u05C8\u05D1\u05D3\u05D7" +
		"\u05E6\u05EB\u05FB\u0600\u0605\u060A";
	public static readonly _serializedATN: string = Utils.join(
		[
			ZenCodeParser._serializedATNSegment0,
			ZenCodeParser._serializedATNSegment1,
			ZenCodeParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ZenCodeParser.__ATN) {
			ZenCodeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ZenCodeParser._serializedATN));
		}

		return ZenCodeParser.__ATN;
	}

}

export class ZenFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ZenCodeParser.EOF, 0); }
	public zenImport(): ZenImportContext[];
	public zenImport(i: number): ZenImportContext;
	public zenImport(i?: number): ZenImportContext | ZenImportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenImportContext);
		} else {
			return this.getRuleContext(i, ZenImportContext);
		}
	}
	public zenDefinition(): ZenDefinitionContext[];
	public zenDefinition(i: number): ZenDefinitionContext;
	public zenDefinition(i?: number): ZenDefinitionContext | ZenDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDefinitionContext);
		} else {
			return this.getRuleContext(i, ZenDefinitionContext);
		}
	}
	public zenStatement(): ZenStatementContext[];
	public zenStatement(i: number): ZenStatementContext;
	public zenStatement(i?: number): ZenStatementContext | ZenStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenStatementContext);
		} else {
			return this.getRuleContext(i, ZenStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenFile; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenFile) {
			listener.enterZenFile(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenFile) {
			listener.exitZenFile(this);
		}
	}
}


export class ZenSHLTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_LESS(): TerminalNode[];
	public ZEN_T_LESS(i: number): TerminalNode;
	public ZEN_T_LESS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_LESS);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_LESS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenSHLToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenSHLToken) {
			listener.enterZenSHLToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenSHLToken) {
			listener.exitZenSHLToken(this);
		}
	}
}


export class ZenSHRTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_GREATER(): TerminalNode[];
	public ZEN_T_GREATER(i: number): TerminalNode;
	public ZEN_T_GREATER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_GREATER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_GREATER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenSHRToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenSHRToken) {
			listener.enterZenSHRToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenSHRToken) {
			listener.exitZenSHRToken(this);
		}
	}
}


export class ZenUSHRTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public _t3!: Token;
	public ZEN_T_GREATER(): TerminalNode[];
	public ZEN_T_GREATER(i: number): TerminalNode;
	public ZEN_T_GREATER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_GREATER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_GREATER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenUSHRToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenUSHRToken) {
			listener.enterZenUSHRToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenUSHRToken) {
			listener.exitZenUSHRToken(this);
		}
	}
}


export class ZenAndAndTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_AND(): TerminalNode[];
	public ZEN_T_AND(i: number): TerminalNode;
	public ZEN_T_AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_AND);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAndAndToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAndAndToken) {
			listener.enterZenAndAndToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAndAndToken) {
			listener.exitZenAndAndToken(this);
		}
	}
}


export class ZenCoalesceTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_QUEST(): TerminalNode[];
	public ZEN_T_QUEST(i: number): TerminalNode;
	public ZEN_T_QUEST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_QUEST);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_QUEST, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenCoalesceToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenCoalesceToken) {
			listener.enterZenCoalesceToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenCoalesceToken) {
			listener.exitZenCoalesceToken(this);
		}
	}
}


export class ZenDecrementTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_SUB(): TerminalNode[];
	public ZEN_T_SUB(i: number): TerminalNode;
	public ZEN_T_SUB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_SUB);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_SUB, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenDecrementToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenDecrementToken) {
			listener.enterZenDecrementToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenDecrementToken) {
			listener.exitZenDecrementToken(this);
		}
	}
}


export class ZenDot2TokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_DOT(): TerminalNode[];
	public ZEN_T_DOT(i: number): TerminalNode;
	public ZEN_T_DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_DOT);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenDot2Token; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenDot2Token) {
			listener.enterZenDot2Token(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenDot2Token) {
			listener.exitZenDot2Token(this);
		}
	}
}


export class ZenDot3TokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public _t3!: Token;
	public ZEN_T_DOT(): TerminalNode[];
	public ZEN_T_DOT(i: number): TerminalNode;
	public ZEN_T_DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_DOT);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenDot3Token; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenDot3Token) {
			listener.enterZenDot3Token(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenDot3Token) {
			listener.exitZenDot3Token(this);
		}
	}
}


export class ZenEqual2TokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_ASSIGN(): TerminalNode[];
	public ZEN_T_ASSIGN(i: number): TerminalNode;
	public ZEN_T_ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_ASSIGN);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenEqual2Token; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenEqual2Token) {
			listener.enterZenEqual2Token(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenEqual2Token) {
			listener.exitZenEqual2Token(this);
		}
	}
}


export class ZenEqual3TokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public _t3!: Token;
	public ZEN_T_ASSIGN(): TerminalNode[];
	public ZEN_T_ASSIGN(i: number): TerminalNode;
	public ZEN_T_ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_ASSIGN);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenEqual3Token; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenEqual3Token) {
			listener.enterZenEqual3Token(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenEqual3Token) {
			listener.exitZenEqual3Token(this);
		}
	}
}


export class ZenGreaterEqTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_GREATER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_GREATER, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenGreaterEqToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenGreaterEqToken) {
			listener.enterZenGreaterEqToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenGreaterEqToken) {
			listener.exitZenGreaterEqToken(this);
		}
	}
}


export class ZenIncrementTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_ADD(): TerminalNode[];
	public ZEN_T_ADD(i: number): TerminalNode;
	public ZEN_T_ADD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_ADD);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_ADD, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenIncrementToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenIncrementToken) {
			listener.enterZenIncrementToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenIncrementToken) {
			listener.exitZenIncrementToken(this);
		}
	}
}


export class ZenLambdaTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	public ZEN_T_GREATER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_GREATER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenLambdaToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenLambdaToken) {
			listener.enterZenLambdaToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenLambdaToken) {
			listener.exitZenLambdaToken(this);
		}
	}
}


export class ZenLessEqTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_LESS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_LESS, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenLessEqToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenLessEqToken) {
			listener.enterZenLessEqToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenLessEqToken) {
			listener.exitZenLessEqToken(this);
		}
	}
}


export class ZenNotEqualTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_NOT(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_NOT, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenNotEqualToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenNotEqualToken) {
			listener.enterZenNotEqualToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenNotEqualToken) {
			listener.exitZenNotEqualToken(this);
		}
	}
}


export class ZenNotEqual2TokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public _t3!: Token;
	public ZEN_T_NOT(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_NOT, 0); }
	public ZEN_T_ASSIGN(): TerminalNode[];
	public ZEN_T_ASSIGN(i: number): TerminalNode;
	public ZEN_T_ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_ASSIGN);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenNotEqual2Token; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenNotEqual2Token) {
			listener.enterZenNotEqual2Token(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenNotEqual2Token) {
			listener.exitZenNotEqual2Token(this);
		}
	}
}


export class ZenOptCallTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_QUEST(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_QUEST, 0); }
	public ZEN_T_DOT(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenOptCallToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenOptCallToken) {
			listener.enterZenOptCallToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenOptCallToken) {
			listener.exitZenOptCallToken(this);
		}
	}
}


export class ZenOrOrTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_OR(): TerminalNode[];
	public ZEN_T_OR(i: number): TerminalNode;
	public ZEN_T_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_OR);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenOrOrToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenOrOrToken) {
			listener.enterZenOrOrToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenOrOrToken) {
			listener.exitZenOrOrToken(this);
		}
	}
}


export class ZenAddAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_ADD(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ADD, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAddAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAddAssignToken) {
			listener.enterZenAddAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAddAssignToken) {
			listener.exitZenAddAssignToken(this);
		}
	}
}


export class ZenAndAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_AND(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AND, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAndAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAndAssignToken) {
			listener.enterZenAndAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAndAssignToken) {
			listener.exitZenAndAssignToken(this);
		}
	}
}


export class ZenCatAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_CAT(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_CAT, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenCatAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenCatAssignToken) {
			listener.enterZenCatAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenCatAssignToken) {
			listener.exitZenCatAssignToken(this);
		}
	}
}


export class ZenDivAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_DIV(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_DIV, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenDivAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenDivAssignToken) {
			listener.enterZenDivAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenDivAssignToken) {
			listener.exitZenDivAssignToken(this);
		}
	}
}


export class ZenModAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_MOD(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_MOD, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenModAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenModAssignToken) {
			listener.enterZenModAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenModAssignToken) {
			listener.exitZenModAssignToken(this);
		}
	}
}


export class ZenMulAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_MUL(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_MUL, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenMulAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenMulAssignToken) {
			listener.enterZenMulAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenMulAssignToken) {
			listener.exitZenMulAssignToken(this);
		}
	}
}


export class ZenOrAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_OR(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_OR, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenOrAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenOrAssignToken) {
			listener.enterZenOrAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenOrAssignToken) {
			listener.exitZenOrAssignToken(this);
		}
	}
}


export class ZenSHLAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public _t3!: Token;
	public ZEN_T_LESS(): TerminalNode[];
	public ZEN_T_LESS(i: number): TerminalNode;
	public ZEN_T_LESS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_LESS);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_LESS, i);
		}
	}
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenSHLAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenSHLAssignToken) {
			listener.enterZenSHLAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenSHLAssignToken) {
			listener.exitZenSHLAssignToken(this);
		}
	}
}


export class ZenSHRAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public _t3!: Token;
	public ZEN_T_GREATER(): TerminalNode[];
	public ZEN_T_GREATER(i: number): TerminalNode;
	public ZEN_T_GREATER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_GREATER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_GREATER, i);
		}
	}
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenSHRAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenSHRAssignToken) {
			listener.enterZenSHRAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenSHRAssignToken) {
			listener.exitZenSHRAssignToken(this);
		}
	}
}


export class ZenSubAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_SUB(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SUB, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenSubAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenSubAssignToken) {
			listener.enterZenSubAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenSubAssignToken) {
			listener.exitZenSubAssignToken(this);
		}
	}
}


export class ZenUSHRAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public _t3!: Token;
	public _t4!: Token;
	public ZEN_T_GREATER(): TerminalNode[];
	public ZEN_T_GREATER(i: number): TerminalNode;
	public ZEN_T_GREATER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_GREATER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_GREATER, i);
		}
	}
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenUSHRAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenUSHRAssignToken) {
			listener.enterZenUSHRAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenUSHRAssignToken) {
			listener.exitZenUSHRAssignToken(this);
		}
	}
}


export class ZenXOrAssignTokenContext extends ParserRuleContext {
	public _t1!: Token;
	public _t2!: Token;
	public ZEN_T_XOR(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_XOR, 0); }
	public ZEN_T_ASSIGN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenXOrAssignToken; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenXOrAssignToken) {
			listener.enterZenXOrAssignToken(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenXOrAssignToken) {
			listener.exitZenXOrAssignToken(this);
		}
	}
}


export class ZenTypeContext extends ParserRuleContext {
	public ZEN_KW_VOID(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_VOID, 0); }
	public ZEN_KW_BOOL(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_BOOL, 0); }
	public ZEN_KW_BYTE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_BYTE, 0); }
	public ZEN_KW_SBYTE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_SBYTE, 0); }
	public ZEN_KW_SHORT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_SHORT, 0); }
	public ZEN_KW_USHORT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_USHORT, 0); }
	public ZEN_KW_INT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_INT, 0); }
	public ZEN_KW_UINT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_UINT, 0); }
	public ZEN_KW_LONG(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_LONG, 0); }
	public ZEN_KW_ULONG(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_ULONG, 0); }
	public ZEN_KW_USIZE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_USIZE, 0); }
	public ZEN_KW_FLOAT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_FLOAT, 0); }
	public ZEN_KW_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_DOUBLE, 0); }
	public ZEN_KW_CHAR(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_CHAR, 0); }
	public ZEN_KW_STRING(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_STRING, 0); }
	public ZEN_KW_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_FUNCTION, 0); }
	public zenFunctionHeader(): ZenFunctionHeaderContext | undefined {
		return this.tryGetRuleContext(0, ZenFunctionHeaderContext);
	}
	public ZEN_T_QUEST(): TerminalNode[];
	public ZEN_T_QUEST(i: number): TerminalNode;
	public ZEN_T_QUEST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_QUEST);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_QUEST, i);
		}
	}
	public ZEN_IDENTIFIER(): TerminalNode[];
	public ZEN_IDENTIFIER(i: number): TerminalNode;
	public ZEN_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_IDENTIFIER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, i);
		}
	}
	public zenDot2Token(): ZenDot2TokenContext[];
	public zenDot2Token(i: number): ZenDot2TokenContext;
	public zenDot2Token(i?: number): ZenDot2TokenContext | ZenDot2TokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDot2TokenContext);
		} else {
			return this.getRuleContext(i, ZenDot2TokenContext);
		}
	}
	public zenType(): ZenTypeContext[];
	public zenType(i: number): ZenTypeContext;
	public zenType(i?: number): ZenTypeContext | ZenTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeContext);
		} else {
			return this.getRuleContext(i, ZenTypeContext);
		}
	}
	public ZEN_T_SQOPEN(): TerminalNode[];
	public ZEN_T_SQOPEN(i: number): TerminalNode;
	public ZEN_T_SQOPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_SQOPEN);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_SQOPEN, i);
		}
	}
	public ZEN_T_SQCLOSE(): TerminalNode[];
	public ZEN_T_SQCLOSE(i: number): TerminalNode;
	public ZEN_T_SQCLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_SQCLOSE);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_SQCLOSE, i);
		}
	}
	public ZEN_T_LESS(): TerminalNode[];
	public ZEN_T_LESS(i: number): TerminalNode;
	public ZEN_T_LESS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_LESS);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_LESS, i);
		}
	}
	public zenTypeParam(): ZenTypeParamContext[];
	public zenTypeParam(i: number): ZenTypeParamContext;
	public zenTypeParam(i?: number): ZenTypeParamContext | ZenTypeParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeParamContext);
		} else {
			return this.getRuleContext(i, ZenTypeParamContext);
		}
	}
	public ZEN_T_GREATER(): TerminalNode[];
	public ZEN_T_GREATER(i: number): TerminalNode;
	public ZEN_T_GREATER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_GREATER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_GREATER, i);
		}
	}
	public zenTypeArguments(): ZenTypeArgumentsContext[];
	public zenTypeArguments(i: number): ZenTypeArgumentsContext;
	public zenTypeArguments(i?: number): ZenTypeArgumentsContext | ZenTypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeArgumentsContext);
		} else {
			return this.getRuleContext(i, ZenTypeArgumentsContext);
		}
	}
	public ZEN_T_DOT(): TerminalNode[];
	public ZEN_T_DOT(i: number): TerminalNode;
	public ZEN_T_DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_DOT);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_DOT, i);
		}
	}
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenType; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenType) {
			listener.enterZenType(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenType) {
			listener.exitZenType(this);
		}
	}
}


export class ZenTypeParamsContext extends ParserRuleContext {
	public ZEN_T_LESS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_LESS, 0); }
	public zenTypeParam(): ZenTypeParamContext[];
	public zenTypeParam(i: number): ZenTypeParamContext;
	public zenTypeParam(i?: number): ZenTypeParamContext | ZenTypeParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeParamContext);
		} else {
			return this.getRuleContext(i, ZenTypeParamContext);
		}
	}
	public ZEN_T_GREATER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_GREATER, 0); }
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenTypeParams; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenTypeParams) {
			listener.enterZenTypeParams(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenTypeParams) {
			listener.exitZenTypeParams(this);
		}
	}
}


export class ZenTypeParamContext extends ParserRuleContext {
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public ZEN_T_COLON(): TerminalNode[];
	public ZEN_T_COLON(i: number): TerminalNode;
	public ZEN_T_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COLON);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COLON, i);
		}
	}
	public zenType(): ZenTypeContext[];
	public zenType(i: number): ZenTypeContext;
	public zenType(i?: number): ZenTypeContext | ZenTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeContext);
		} else {
			return this.getRuleContext(i, ZenTypeContext);
		}
	}
	public ZEN_KW_SUPER(): TerminalNode[];
	public ZEN_KW_SUPER(i: number): TerminalNode;
	public ZEN_KW_SUPER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_KW_SUPER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_KW_SUPER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenTypeParam; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenTypeParam) {
			listener.enterZenTypeParam(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenTypeParam) {
			listener.exitZenTypeParam(this);
		}
	}
}


export class ZenTypeArgumentsContext extends ParserRuleContext {
	public ZEN_T_LESS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_LESS, 0); }
	public zenType(): ZenTypeContext[];
	public zenType(i: number): ZenTypeContext;
	public zenType(i?: number): ZenTypeContext | ZenTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeContext);
		} else {
			return this.getRuleContext(i, ZenTypeContext);
		}
	}
	public ZEN_T_GREATER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_GREATER, 0); }
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenTypeArguments; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenTypeArguments) {
			listener.enterZenTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenTypeArguments) {
			listener.exitZenTypeArguments(this);
		}
	}
}


export class ZenCallArgumentsContext extends ParserRuleContext {
	public ZEN_T_BROPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_BROPEN, 0); }
	public ZEN_T_BRCLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_BRCLOSE, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext[];
	public zenAssignExpression(i: number): ZenAssignExpressionContext;
	public zenAssignExpression(i?: number): ZenAssignExpressionContext | ZenAssignExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAssignExpressionContext);
		} else {
			return this.getRuleContext(i, ZenAssignExpressionContext);
		}
	}
	public zenTypeArgumentsForcall(): ZenTypeArgumentsForcallContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeArgumentsForcallContext);
	}
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenCallArguments; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenCallArguments) {
			listener.enterZenCallArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenCallArguments) {
			listener.exitZenCallArguments(this);
		}
	}
}


export class ZenTypeArgumentsForcallContext extends ParserRuleContext {
	public ZEN_T_LESS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_LESS, 0); }
	public zenType(): ZenTypeContext[];
	public zenType(i: number): ZenTypeContext;
	public zenType(i?: number): ZenTypeContext | ZenTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeContext);
		} else {
			return this.getRuleContext(i, ZenTypeContext);
		}
	}
	public ZEN_T_GREATER(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_GREATER, 0); }
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenTypeArgumentsForcall; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenTypeArgumentsForcall) {
			listener.enterZenTypeArgumentsForcall(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenTypeArgumentsForcall) {
			listener.exitZenTypeArgumentsForcall(this);
		}
	}
}


export class ZenAnnotationCallArgumentsContext extends ParserRuleContext {
	public ZEN_T_BROPEN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_BROPEN, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext[];
	public zenAssignExpression(i: number): ZenAssignExpressionContext;
	public zenAssignExpression(i?: number): ZenAssignExpressionContext | ZenAssignExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAssignExpressionContext);
		} else {
			return this.getRuleContext(i, ZenAssignExpressionContext);
		}
	}
	public ZEN_T_BRCLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_BRCLOSE, 0); }
	public zenTypeArgumentsForcall(): ZenTypeArgumentsForcallContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeArgumentsForcallContext);
	}
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAnnotationCallArguments; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAnnotationCallArguments) {
			listener.enterZenAnnotationCallArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAnnotationCallArguments) {
			listener.exitZenAnnotationCallArguments(this);
		}
	}
}


export class ZenAnnotationsContext extends ParserRuleContext {
	public ZEN_T_SQOPEN(): TerminalNode[];
	public ZEN_T_SQOPEN(i: number): TerminalNode;
	public ZEN_T_SQOPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_SQOPEN);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_SQOPEN, i);
		}
	}
	public ZEN_IDENTIFIER(): TerminalNode[];
	public ZEN_IDENTIFIER(i: number): TerminalNode;
	public ZEN_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_IDENTIFIER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, i);
		}
	}
	public ZEN_T_SQCLOSE(): TerminalNode[];
	public ZEN_T_SQCLOSE(i: number): TerminalNode;
	public ZEN_T_SQCLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_SQCLOSE);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_SQCLOSE, i);
		}
	}
	public zenAnnotationCallArguments(): ZenAnnotationCallArgumentsContext[];
	public zenAnnotationCallArguments(i: number): ZenAnnotationCallArgumentsContext;
	public zenAnnotationCallArguments(i?: number): ZenAnnotationCallArgumentsContext | ZenAnnotationCallArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAnnotationCallArgumentsContext);
		} else {
			return this.getRuleContext(i, ZenAnnotationCallArgumentsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAnnotations; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAnnotations) {
			listener.enterZenAnnotations(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAnnotations) {
			listener.exitZenAnnotations(this);
		}
	}
}


export class ZenImportContext extends ParserRuleContext {
	public ZEN_KW_IMPORT(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_IMPORT, 0); }
	public ZEN_IDENTIFIER(): TerminalNode[];
	public ZEN_IDENTIFIER(i: number): TerminalNode;
	public ZEN_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_IDENTIFIER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, i);
		}
	}
	public ZEN_T_SEMICOLON(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public ZEN_T_DOT(): TerminalNode[];
	public ZEN_T_DOT(i: number): TerminalNode;
	public ZEN_T_DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_DOT);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_DOT, i);
		}
	}
	public ZEN_KW_AS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenImport; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenImport) {
			listener.enterZenImport(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenImport) {
			listener.exitZenImport(this);
		}
	}
}


export class ZenVisibleAccessModifierContext extends ParserRuleContext {
	public ZEN_KW_PUBLIC(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_PUBLIC, 0); }
	public ZEN_KW_PROTECTED(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_PROTECTED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenVisibleAccessModifier; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenVisibleAccessModifier) {
			listener.enterZenVisibleAccessModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenVisibleAccessModifier) {
			listener.exitZenVisibleAccessModifier(this);
		}
	}
}


export class ZenAccessModifierContext extends ParserRuleContext {
	public zenVisibleAccessModifier(): ZenVisibleAccessModifierContext | undefined {
		return this.tryGetRuleContext(0, ZenVisibleAccessModifierContext);
	}
	public ZEN_KW_PRIVATE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAccessModifier; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAccessModifier) {
			listener.enterZenAccessModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAccessModifier) {
			listener.exitZenAccessModifier(this);
		}
	}
}


export class ZenDeclerationModifierContext extends ParserRuleContext {
	public zenAccessModifier(): ZenAccessModifierContext | undefined {
		return this.tryGetRuleContext(0, ZenAccessModifierContext);
	}
	public ZEN_KW_INTERNAL(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_INTERNAL, 0); }
	public ZEN_KW_EXTERN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_EXTERN, 0); }
	public ZEN_KW_ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_ABSTRACT, 0); }
	public ZEN_KW_FINAL(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_FINAL, 0); }
	public ZEN_KW_IMPLICIT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_IMPLICIT, 0); }
	public ZEN_KW_VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_VIRTUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenDeclerationModifier; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenDeclerationModifier) {
			listener.enterZenDeclerationModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenDeclerationModifier) {
			listener.exitZenDeclerationModifier(this);
		}
	}
}


export class ZenMemberNonStaticModifierContext extends ParserRuleContext {
	public ZEN_KW_INTERNAL(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_INTERNAL, 0); }
	public zenAccessModifier(): ZenAccessModifierContext | undefined {
		return this.tryGetRuleContext(0, ZenAccessModifierContext);
	}
	public ZEN_KW_CONST(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_CONST, 0); }
	public ZEN_KW_ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_ABSTRACT, 0); }
	public ZEN_KW_FINAL(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_FINAL, 0); }
	public ZEN_KW_IMPLICIT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_IMPLICIT, 0); }
	public ZEN_KW_EXTERN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_EXTERN, 0); }
	public ZEN_KW_OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_OVERRIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenMemberNonStaticModifier; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenMemberNonStaticModifier) {
			listener.enterZenMemberNonStaticModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenMemberNonStaticModifier) {
			listener.exitZenMemberNonStaticModifier(this);
		}
	}
}


export class ZenMemberStaticModifierContext extends ParserRuleContext {
	public ZEN_KW_INTERNAL(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_INTERNAL, 0); }
	public zenAccessModifier(): ZenAccessModifierContext | undefined {
		return this.tryGetRuleContext(0, ZenAccessModifierContext);
	}
	public ZEN_KW_CONST(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_CONST, 0); }
	public ZEN_KW_ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_ABSTRACT, 0); }
	public ZEN_KW_FINAL(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_FINAL, 0); }
	public ZEN_KW_STATIC(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_STATIC, 0); }
	public ZEN_KW_IMPLICIT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_IMPLICIT, 0); }
	public ZEN_KW_EXTERN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_EXTERN, 0); }
	public ZEN_KW_OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_OVERRIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenMemberStaticModifier; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenMemberStaticModifier) {
			listener.enterZenMemberStaticModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenMemberStaticModifier) {
			listener.exitZenMemberStaticModifier(this);
		}
	}
}


export class ZenDefinitionContext extends ParserRuleContext {
	public zenAnnotations(): ZenAnnotationsContext {
		return this.getRuleContext(0, ZenAnnotationsContext);
	}
	public zenClass(): ZenClassContext | undefined {
		return this.tryGetRuleContext(0, ZenClassContext);
	}
	public zenInterface(): ZenInterfaceContext | undefined {
		return this.tryGetRuleContext(0, ZenInterfaceContext);
	}
	public zenEnum(): ZenEnumContext | undefined {
		return this.tryGetRuleContext(0, ZenEnumContext);
	}
	public zenStruct(): ZenStructContext | undefined {
		return this.tryGetRuleContext(0, ZenStructContext);
	}
	public zenAlias(): ZenAliasContext | undefined {
		return this.tryGetRuleContext(0, ZenAliasContext);
	}
	public zenFunction(): ZenFunctionContext | undefined {
		return this.tryGetRuleContext(0, ZenFunctionContext);
	}
	public zenExpansion(): ZenExpansionContext | undefined {
		return this.tryGetRuleContext(0, ZenExpansionContext);
	}
	public zenVariant(): ZenVariantContext | undefined {
		return this.tryGetRuleContext(0, ZenVariantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenDefinition; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenDefinition) {
			listener.enterZenDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenDefinition) {
			listener.exitZenDefinition(this);
		}
	}
}


export class ZenClassContext extends ParserRuleContext {
	public ZEN_KW_CLASS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_CLASS, 0); }
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public ZEN_T_AOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public ZEN_T_ACLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ACLOSE, 0); }
	public zenDeclerationModifier(): ZenDeclerationModifierContext[];
	public zenDeclerationModifier(i: number): ZenDeclerationModifierContext;
	public zenDeclerationModifier(i?: number): ZenDeclerationModifierContext | ZenDeclerationModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDeclerationModifierContext);
		} else {
			return this.getRuleContext(i, ZenDeclerationModifierContext);
		}
	}
	public zenTypeParams(): ZenTypeParamsContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeParamsContext);
	}
	public ZEN_T_COLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_COLON, 0); }
	public zenType(): ZenTypeContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeContext);
	}
	public zenDefinitionMember(): ZenDefinitionMemberContext[];
	public zenDefinitionMember(i: number): ZenDefinitionMemberContext;
	public zenDefinitionMember(i?: number): ZenDefinitionMemberContext | ZenDefinitionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDefinitionMemberContext);
		} else {
			return this.getRuleContext(i, ZenDefinitionMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenClass; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenClass) {
			listener.enterZenClass(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenClass) {
			listener.exitZenClass(this);
		}
	}
}


export class ZenInterfaceContext extends ParserRuleContext {
	public ZEN_KW_INTERFACE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_INTERFACE, 0); }
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public ZEN_T_AOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public ZEN_T_ACLOSE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ACLOSE, 0); }
	public zenDeclerationModifier(): ZenDeclerationModifierContext[];
	public zenDeclerationModifier(i: number): ZenDeclerationModifierContext;
	public zenDeclerationModifier(i?: number): ZenDeclerationModifierContext | ZenDeclerationModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDeclerationModifierContext);
		} else {
			return this.getRuleContext(i, ZenDeclerationModifierContext);
		}
	}
	public zenTypeParams(): ZenTypeParamsContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeParamsContext);
	}
	public ZEN_T_COLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_COLON, 0); }
	public zenType(): ZenTypeContext[];
	public zenType(i: number): ZenTypeContext;
	public zenType(i?: number): ZenTypeContext | ZenTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeContext);
		} else {
			return this.getRuleContext(i, ZenTypeContext);
		}
	}
	public zenDefinitionMember(): ZenDefinitionMemberContext[];
	public zenDefinitionMember(i: number): ZenDefinitionMemberContext;
	public zenDefinitionMember(i?: number): ZenDefinitionMemberContext | ZenDefinitionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDefinitionMemberContext);
		} else {
			return this.getRuleContext(i, ZenDefinitionMemberContext);
		}
	}
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenInterface; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenInterface) {
			listener.enterZenInterface(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenInterface) {
			listener.exitZenInterface(this);
		}
	}
}


export class ZenEnumContext extends ParserRuleContext {
	public ZEN_KW_ENUM(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_ENUM, 0); }
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public ZEN_T_AOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public ZEN_T_ACLOSE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ACLOSE, 0); }
	public zenDeclerationModifier(): ZenDeclerationModifierContext[];
	public zenDeclerationModifier(i: number): ZenDeclerationModifierContext;
	public zenDeclerationModifier(i?: number): ZenDeclerationModifierContext | ZenDeclerationModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDeclerationModifierContext);
		} else {
			return this.getRuleContext(i, ZenDeclerationModifierContext);
		}
	}
	public ZEN_KW_AS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_AS, 0); }
	public zenType(): ZenTypeContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeContext);
	}
	public zenEnumConstant(): ZenEnumConstantContext[];
	public zenEnumConstant(i: number): ZenEnumConstantContext;
	public zenEnumConstant(i?: number): ZenEnumConstantContext | ZenEnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenEnumConstantContext);
		} else {
			return this.getRuleContext(i, ZenEnumConstantContext);
		}
	}
	public ZEN_T_SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	public zenDefinitionMember(): ZenDefinitionMemberContext[];
	public zenDefinitionMember(i: number): ZenDefinitionMemberContext;
	public zenDefinitionMember(i?: number): ZenDefinitionMemberContext | ZenDefinitionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDefinitionMemberContext);
		} else {
			return this.getRuleContext(i, ZenDefinitionMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenEnum; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenEnum) {
			listener.enterZenEnum(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenEnum) {
			listener.exitZenEnum(this);
		}
	}
}


export class ZenStructContext extends ParserRuleContext {
	public ZEN_KW_STRUCT(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_STRUCT, 0); }
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public ZEN_T_AOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public ZEN_T_ACLOSE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ACLOSE, 0); }
	public zenDeclerationModifier(): ZenDeclerationModifierContext[];
	public zenDeclerationModifier(i: number): ZenDeclerationModifierContext;
	public zenDeclerationModifier(i?: number): ZenDeclerationModifierContext | ZenDeclerationModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDeclerationModifierContext);
		} else {
			return this.getRuleContext(i, ZenDeclerationModifierContext);
		}
	}
	public zenTypeParams(): ZenTypeParamsContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeParamsContext);
	}
	public zenDefinitionMember(): ZenDefinitionMemberContext[];
	public zenDefinitionMember(i: number): ZenDefinitionMemberContext;
	public zenDefinitionMember(i?: number): ZenDefinitionMemberContext | ZenDefinitionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDefinitionMemberContext);
		} else {
			return this.getRuleContext(i, ZenDefinitionMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStruct; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStruct) {
			listener.enterZenStruct(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStruct) {
			listener.exitZenStruct(this);
		}
	}
}


export class ZenAliasContext extends ParserRuleContext {
	public ZEN_KW_ALIAS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_ALIAS, 0); }
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public ZEN_KW_AS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_AS, 0); }
	public zenType(): ZenTypeContext {
		return this.getRuleContext(0, ZenTypeContext);
	}
	public ZEN_T_SEMICOLON(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public zenDeclerationModifier(): ZenDeclerationModifierContext[];
	public zenDeclerationModifier(i: number): ZenDeclerationModifierContext;
	public zenDeclerationModifier(i?: number): ZenDeclerationModifierContext | ZenDeclerationModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDeclerationModifierContext);
		} else {
			return this.getRuleContext(i, ZenDeclerationModifierContext);
		}
	}
	public zenTypeParams(): ZenTypeParamsContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAlias; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAlias) {
			listener.enterZenAlias(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAlias) {
			listener.exitZenAlias(this);
		}
	}
}


export class ZenFunctionContext extends ParserRuleContext {
	public ZEN_KW_FUNCTION(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_FUNCTION, 0); }
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public zenFunctionHeader(): ZenFunctionHeaderContext {
		return this.getRuleContext(0, ZenFunctionHeaderContext);
	}
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		return this.getRuleContext(0, ZenFunctionBodyStatementContext);
	}
	public zenDeclerationModifier(): ZenDeclerationModifierContext[];
	public zenDeclerationModifier(i: number): ZenDeclerationModifierContext;
	public zenDeclerationModifier(i?: number): ZenDeclerationModifierContext | ZenDeclerationModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDeclerationModifierContext);
		} else {
			return this.getRuleContext(i, ZenDeclerationModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenFunction; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenFunction) {
			listener.enterZenFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenFunction) {
			listener.exitZenFunction(this);
		}
	}
}


export class ZenExpansionContext extends ParserRuleContext {
	public ZEN_KW_EXPAND(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_EXPAND, 0); }
	public zenType(): ZenTypeContext {
		return this.getRuleContext(0, ZenTypeContext);
	}
	public ZEN_T_AOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public ZEN_T_ACLOSE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ACLOSE, 0); }
	public zenDeclerationModifier(): ZenDeclerationModifierContext[];
	public zenDeclerationModifier(i: number): ZenDeclerationModifierContext;
	public zenDeclerationModifier(i?: number): ZenDeclerationModifierContext | ZenDeclerationModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDeclerationModifierContext);
		} else {
			return this.getRuleContext(i, ZenDeclerationModifierContext);
		}
	}
	public zenTypeParams(): ZenTypeParamsContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeParamsContext);
	}
	public zenDefinitionMember(): ZenDefinitionMemberContext[];
	public zenDefinitionMember(i: number): ZenDefinitionMemberContext;
	public zenDefinitionMember(i?: number): ZenDefinitionMemberContext | ZenDefinitionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDefinitionMemberContext);
		} else {
			return this.getRuleContext(i, ZenDefinitionMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenExpansion; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenExpansion) {
			listener.enterZenExpansion(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenExpansion) {
			listener.exitZenExpansion(this);
		}
	}
}


export class ZenVariantContext extends ParserRuleContext {
	public ZEN_KW_VARIANT(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_VARIANT, 0); }
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public ZEN_T_AOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public ZEN_T_ACLOSE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_ACLOSE, 0); }
	public zenDeclerationModifier(): ZenDeclerationModifierContext[];
	public zenDeclerationModifier(i: number): ZenDeclerationModifierContext;
	public zenDeclerationModifier(i?: number): ZenDeclerationModifierContext | ZenDeclerationModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDeclerationModifierContext);
		} else {
			return this.getRuleContext(i, ZenDeclerationModifierContext);
		}
	}
	public zenTypeParams(): ZenTypeParamsContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeParamsContext);
	}
	public zenVariantOption(): ZenVariantOptionContext[];
	public zenVariantOption(i: number): ZenVariantOptionContext;
	public zenVariantOption(i?: number): ZenVariantOptionContext | ZenVariantOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenVariantOptionContext);
		} else {
			return this.getRuleContext(i, ZenVariantOptionContext);
		}
	}
	public ZEN_T_SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	public zenDefinitionMember(): ZenDefinitionMemberContext[];
	public zenDefinitionMember(i: number): ZenDefinitionMemberContext;
	public zenDefinitionMember(i?: number): ZenDefinitionMemberContext | ZenDefinitionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDefinitionMemberContext);
		} else {
			return this.getRuleContext(i, ZenDefinitionMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenVariant; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenVariant) {
			listener.enterZenVariant(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenVariant) {
			listener.exitZenVariant(this);
		}
	}
}


export class ZenVariantOptionContext extends ParserRuleContext {
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public ZEN_T_BROPEN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_BROPEN, 0); }
	public zenType(): ZenTypeContext[];
	public zenType(i: number): ZenTypeContext;
	public zenType(i?: number): ZenTypeContext | ZenTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeContext);
		} else {
			return this.getRuleContext(i, ZenTypeContext);
		}
	}
	public ZEN_T_BRCLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_BRCLOSE, 0); }
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenVariantOption; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenVariantOption) {
			listener.enterZenVariantOption(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenVariantOption) {
			listener.exitZenVariantOption(this);
		}
	}
}


export class ZenEnumConstantContext extends ParserRuleContext {
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public ZEN_T_BROPEN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_BROPEN, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext[];
	public zenAssignExpression(i: number): ZenAssignExpressionContext;
	public zenAssignExpression(i?: number): ZenAssignExpressionContext | ZenAssignExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAssignExpressionContext);
		} else {
			return this.getRuleContext(i, ZenAssignExpressionContext);
		}
	}
	public ZEN_T_BRCLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_BRCLOSE, 0); }
	public ZEN_T_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenEnumConstant; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenEnumConstant) {
			listener.enterZenEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenEnumConstant) {
			listener.exitZenEnumConstant(this);
		}
	}
}


export class ZenDefinitionMemberContext extends ParserRuleContext {
	public zenAnnotations(): ZenAnnotationsContext {
		return this.getRuleContext(0, ZenAnnotationsContext);
	}
	public zenFieldMember(): ZenFieldMemberContext | undefined {
		return this.tryGetRuleContext(0, ZenFieldMemberContext);
	}
	public zenThisMember(): ZenThisMemberContext | undefined {
		return this.tryGetRuleContext(0, ZenThisMemberContext);
	}
	public zenConstOrMethodMember(): ZenConstOrMethodMemberContext | undefined {
		return this.tryGetRuleContext(0, ZenConstOrMethodMemberContext);
	}
	public zenSetterMember(): ZenSetterMemberContext | undefined {
		return this.tryGetRuleContext(0, ZenSetterMemberContext);
	}
	public zenGetterMember(): ZenGetterMemberContext | undefined {
		return this.tryGetRuleContext(0, ZenGetterMemberContext);
	}
	public zenImplementsMember(): ZenImplementsMemberContext | undefined {
		return this.tryGetRuleContext(0, ZenImplementsMemberContext);
	}
	public zenCallerMember(): ZenCallerMemberContext | undefined {
		return this.tryGetRuleContext(0, ZenCallerMemberContext);
	}
	public zenIndexGetOperator(): ZenIndexGetOperatorContext | undefined {
		return this.tryGetRuleContext(0, ZenIndexGetOperatorContext);
	}
	public zenDestructor(): ZenDestructorContext | undefined {
		return this.tryGetRuleContext(0, ZenDestructorContext);
	}
	public zenOperator(): ZenOperatorContext | undefined {
		return this.tryGetRuleContext(0, ZenOperatorContext);
	}
	public zenCaster(): ZenCasterContext | undefined {
		return this.tryGetRuleContext(0, ZenCasterContext);
	}
	public zenContainsOperator(): ZenContainsOperatorContext | undefined {
		return this.tryGetRuleContext(0, ZenContainsOperatorContext);
	}
	public zenInnerDefinition(): ZenInnerDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ZenInnerDefinitionContext);
	}
	public zenIterator(): ZenIteratorContext | undefined {
		return this.tryGetRuleContext(0, ZenIteratorContext);
	}
	public zenStaticInitializer(): ZenStaticInitializerContext | undefined {
		return this.tryGetRuleContext(0, ZenStaticInitializerContext);
	}
	public zenMemberStaticModifier(): ZenMemberStaticModifierContext[];
	public zenMemberStaticModifier(i: number): ZenMemberStaticModifierContext;
	public zenMemberStaticModifier(i?: number): ZenMemberStaticModifierContext | ZenMemberStaticModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenMemberStaticModifierContext);
		} else {
			return this.getRuleContext(i, ZenMemberStaticModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenDefinitionMember; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenDefinitionMember) {
			listener.enterZenDefinitionMember(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenDefinitionMember) {
			listener.exitZenDefinitionMember(this);
		}
	}
}


export class ZenFieldMemberContext extends ParserRuleContext {
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public ZEN_T_SEMICOLON(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public ZEN_KW_VAR(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_VAR, 0); }
	public ZEN_KW_VAL(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_VAL, 0); }
	public ZEN_KW_AS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_AS, 0); }
	public zenType(): ZenTypeContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeContext);
	}
	public ZEN_T_COLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_COLON, 0); }
	public ZEN_T_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_KW_GET(): TerminalNode[];
	public ZEN_KW_GET(i: number): TerminalNode;
	public ZEN_KW_GET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_KW_GET);
		} else {
			return this.getToken(ZenCodeParser.ZEN_KW_GET, i);
		}
	}
	public ZEN_KW_SET(): TerminalNode[];
	public ZEN_KW_SET(i: number): TerminalNode;
	public ZEN_KW_SET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_KW_SET);
		} else {
			return this.getToken(ZenCodeParser.ZEN_KW_SET, i);
		}
	}
	public zenVisibleAccessModifier(): ZenVisibleAccessModifierContext[];
	public zenVisibleAccessModifier(i: number): ZenVisibleAccessModifierContext;
	public zenVisibleAccessModifier(i?: number): ZenVisibleAccessModifierContext | ZenVisibleAccessModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenVisibleAccessModifierContext);
		} else {
			return this.getRuleContext(i, ZenVisibleAccessModifierContext);
		}
	}
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenFieldMember; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenFieldMember) {
			listener.enterZenFieldMember(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenFieldMember) {
			listener.exitZenFieldMember(this);
		}
	}
}


export class ZenThisMemberContext extends ParserRuleContext {
	public ZEN_KW_THIS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_THIS, 0); }
	public zenFunctionHeader(): ZenFunctionHeaderContext {
		return this.getRuleContext(0, ZenFunctionHeaderContext);
	}
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		return this.getRuleContext(0, ZenFunctionBodyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenThisMember; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenThisMember) {
			listener.enterZenThisMember(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenThisMember) {
			listener.exitZenThisMember(this);
		}
	}
}


export class ZenConstOrMethodMemberContext extends ParserRuleContext {
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public zenFunctionHeader(): ZenFunctionHeaderContext | undefined {
		return this.tryGetRuleContext(0, ZenFunctionHeaderContext);
	}
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext | undefined {
		return this.tryGetRuleContext(0, ZenFunctionBodyStatementContext);
	}
	public ZEN_T_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_T_SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public ZEN_KW_AS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_AS, 0); }
	public zenType(): ZenTypeContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenConstOrMethodMember; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenConstOrMethodMember) {
			listener.enterZenConstOrMethodMember(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenConstOrMethodMember) {
			listener.exitZenConstOrMethodMember(this);
		}
	}
}


export class ZenSetterMemberContext extends ParserRuleContext {
	public ZEN_KW_SET(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_SET, 0); }
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		return this.getRuleContext(0, ZenFunctionBodyStatementContext);
	}
	public ZEN_KW_AS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_AS, 0); }
	public zenType(): ZenTypeContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenSetterMember; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenSetterMember) {
			listener.enterZenSetterMember(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenSetterMember) {
			listener.exitZenSetterMember(this);
		}
	}
}


export class ZenGetterMemberContext extends ParserRuleContext {
	public ZEN_KW_GET(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_GET, 0); }
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		return this.getRuleContext(0, ZenFunctionBodyStatementContext);
	}
	public ZEN_KW_AS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_AS, 0); }
	public zenType(): ZenTypeContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenGetterMember; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenGetterMember) {
			listener.enterZenGetterMember(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenGetterMember) {
			listener.exitZenGetterMember(this);
		}
	}
}


export class ZenImplementsMemberContext extends ParserRuleContext {
	public ZEN_KW_IMPLEMENTS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_IMPLEMENTS, 0); }
	public zenType(): ZenTypeContext {
		return this.getRuleContext(0, ZenTypeContext);
	}
	public ZEN_T_SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public ZEN_T_AOPEN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public ZEN_T_ACLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ACLOSE, 0); }
	public zenDefinitionMember(): ZenDefinitionMemberContext[];
	public zenDefinitionMember(i: number): ZenDefinitionMemberContext;
	public zenDefinitionMember(i?: number): ZenDefinitionMemberContext | ZenDefinitionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDefinitionMemberContext);
		} else {
			return this.getRuleContext(i, ZenDefinitionMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenImplementsMember; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenImplementsMember) {
			listener.enterZenImplementsMember(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenImplementsMember) {
			listener.exitZenImplementsMember(this);
		}
	}
}


export class ZenCallerMemberContext extends ParserRuleContext {
	public zenFunctionHeader(): ZenFunctionHeaderContext {
		return this.getRuleContext(0, ZenFunctionHeaderContext);
	}
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		return this.getRuleContext(0, ZenFunctionBodyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenCallerMember; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenCallerMember) {
			listener.enterZenCallerMember(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenCallerMember) {
			listener.exitZenCallerMember(this);
		}
	}
}


export class ZenIndexGetOperatorContext extends ParserRuleContext {
	public ZEN_T_SQOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SQOPEN, 0); }
	public ZEN_T_SQCLOSE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SQCLOSE, 0); }
	public zenFunctionHeader(): ZenFunctionHeaderContext {
		return this.getRuleContext(0, ZenFunctionHeaderContext);
	}
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		return this.getRuleContext(0, ZenFunctionBodyStatementContext);
	}
	public ZEN_T_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenIndexGetOperator; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenIndexGetOperator) {
			listener.enterZenIndexGetOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenIndexGetOperator) {
			listener.exitZenIndexGetOperator(this);
		}
	}
}


export class ZenDestructorContext extends ParserRuleContext {
	public ZEN_T_CAT(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_CAT, 0); }
	public ZEN_KW_THIS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_THIS, 0); }
	public zenFunctionBody(): ZenFunctionBodyContext {
		return this.getRuleContext(0, ZenFunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenDestructor; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenDestructor) {
			listener.enterZenDestructor(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenDestructor) {
			listener.exitZenDestructor(this);
		}
	}
}


export class ZenOperatorContext extends ParserRuleContext {
	public zenFunctionHeader(): ZenFunctionHeaderContext {
		return this.getRuleContext(0, ZenFunctionHeaderContext);
	}
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		return this.getRuleContext(0, ZenFunctionBodyStatementContext);
	}
	public ZEN_T_CAT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_CAT, 0); }
	public ZEN_T_ADD(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ADD, 0); }
	public ZEN_T_SUB(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SUB, 0); }
	public ZEN_T_MUL(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_MUL, 0); }
	public ZEN_T_DIV(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_DIV, 0); }
	public ZEN_T_MOD(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_MOD, 0); }
	public ZEN_T_AND(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_AND, 0); }
	public ZEN_T_OR(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_OR, 0); }
	public ZEN_T_XOR(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_XOR, 0); }
	public ZEN_T_NOT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_NOT, 0); }
	public zenAddAssignToken(): ZenAddAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenAddAssignTokenContext);
	}
	public zenSubAssignToken(): ZenSubAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenSubAssignTokenContext);
	}
	public zenCatAssignToken(): ZenCatAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenCatAssignTokenContext);
	}
	public zenMulAssignToken(): ZenMulAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenMulAssignTokenContext);
	}
	public zenDivAssignToken(): ZenDivAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenDivAssignTokenContext);
	}
	public zenModAssignToken(): ZenModAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenModAssignTokenContext);
	}
	public zenAndAssignToken(): ZenAndAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenAndAssignTokenContext);
	}
	public zenOrAssignToken(): ZenOrAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenOrAssignTokenContext);
	}
	public zenXOrAssignToken(): ZenXOrAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenXOrAssignTokenContext);
	}
	public zenIncrementToken(): ZenIncrementTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenIncrementTokenContext);
	}
	public zenDecrementToken(): ZenDecrementTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenDecrementTokenContext);
	}
	public zenDot2Token(): ZenDot2TokenContext | undefined {
		return this.tryGetRuleContext(0, ZenDot2TokenContext);
	}
	public zenSHLToken(): ZenSHLTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenSHLTokenContext);
	}
	public zenSHRToken(): ZenSHRTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenSHRTokenContext);
	}
	public zenUSHRToken(): ZenUSHRTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenUSHRTokenContext);
	}
	public zenSHLAssignToken(): ZenSHLAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenSHLAssignTokenContext);
	}
	public zenSHRAssignToken(): ZenSHRAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenSHRAssignTokenContext);
	}
	public zenUSHRAssignToken(): ZenUSHRAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenUSHRAssignTokenContext);
	}
	public zenEqual2Token(): ZenEqual2TokenContext | undefined {
		return this.tryGetRuleContext(0, ZenEqual2TokenContext);
	}
	public ZEN_T_ASSIGN(): TerminalNode[];
	public ZEN_T_ASSIGN(i: number): TerminalNode;
	public ZEN_T_ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_ASSIGN);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_ASSIGN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenOperator; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenOperator) {
			listener.enterZenOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenOperator) {
			listener.exitZenOperator(this);
		}
	}
}


export class ZenEqualsOperatorContext extends ParserRuleContext {
	public zenEqual2Token(): ZenEqual2TokenContext {
		return this.getRuleContext(0, ZenEqual2TokenContext);
	}
	public zenFunctionHeader(): ZenFunctionHeaderContext {
		return this.getRuleContext(0, ZenFunctionHeaderContext);
	}
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		return this.getRuleContext(0, ZenFunctionBodyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenEqualsOperator; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenEqualsOperator) {
			listener.enterZenEqualsOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenEqualsOperator) {
			listener.exitZenEqualsOperator(this);
		}
	}
}


export class ZenCasterContext extends ParserRuleContext {
	public ZEN_KW_AS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_AS, 0); }
	public zenType(): ZenTypeContext {
		return this.getRuleContext(0, ZenTypeContext);
	}
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		return this.getRuleContext(0, ZenFunctionBodyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenCaster; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenCaster) {
			listener.enterZenCaster(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenCaster) {
			listener.exitZenCaster(this);
		}
	}
}


export class ZenContainsOperatorContext extends ParserRuleContext {
	public ZEN_KW_IN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_IN, 0); }
	public zenFunctionHeader(): ZenFunctionHeaderContext {
		return this.getRuleContext(0, ZenFunctionHeaderContext);
	}
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		return this.getRuleContext(0, ZenFunctionBodyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenContainsOperator; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenContainsOperator) {
			listener.enterZenContainsOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenContainsOperator) {
			listener.exitZenContainsOperator(this);
		}
	}
}


export class ZenInnerDefinitionContext extends ParserRuleContext {
	public zenDefinition(): ZenDefinitionContext {
		return this.getRuleContext(0, ZenDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenInnerDefinition; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenInnerDefinition) {
			listener.enterZenInnerDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenInnerDefinition) {
			listener.exitZenInnerDefinition(this);
		}
	}
}


export class ZenIteratorContext extends ParserRuleContext {
	public ZEN_KW_FOR(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_FOR, 0); }
	public zenFunctionHeader(): ZenFunctionHeaderContext {
		return this.getRuleContext(0, ZenFunctionHeaderContext);
	}
	public zenFunctionBodyStatement(): ZenFunctionBodyStatementContext {
		return this.getRuleContext(0, ZenFunctionBodyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenIterator; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenIterator) {
			listener.enterZenIterator(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenIterator) {
			listener.exitZenIterator(this);
		}
	}
}


export class ZenStaticInitializerContext extends ParserRuleContext {
	public ZEN_T_AOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public zenStatementBlock(): ZenStatementBlockContext {
		return this.getRuleContext(0, ZenStatementBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStaticInitializer; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStaticInitializer) {
			listener.enterZenStaticInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStaticInitializer) {
			listener.exitZenStaticInitializer(this);
		}
	}
}


export class ZenFunctionHeaderContext extends ParserRuleContext {
	public ZEN_T_BROPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_BROPEN, 0); }
	public ZEN_T_BRCLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_BRCLOSE, 0); }
	public zenTypeParams(): ZenTypeParamsContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeParamsContext);
	}
	public zenType(): ZenTypeContext[];
	public zenType(i: number): ZenTypeContext;
	public zenType(i?: number): ZenTypeContext | ZenTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeContext);
		} else {
			return this.getRuleContext(i, ZenTypeContext);
		}
	}
	public ZEN_KW_THROWS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_THROWS, 0); }
	public zenFunctionParameter(): ZenFunctionParameterContext[];
	public zenFunctionParameter(i: number): ZenFunctionParameterContext;
	public zenFunctionParameter(i?: number): ZenFunctionParameterContext | ZenFunctionParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenFunctionParameterContext);
		} else {
			return this.getRuleContext(i, ZenFunctionParameterContext);
		}
	}
	public ZEN_KW_AS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_AS, 0); }
	public ZEN_T_COLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_COLON, 0); }
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenFunctionHeader; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenFunctionHeader) {
			listener.enterZenFunctionHeader(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenFunctionHeader) {
			listener.exitZenFunctionHeader(this);
		}
	}
}


export class ZenFunctionParameterContext extends ParserRuleContext {
	public zenAnnotations(): ZenAnnotationsContext | undefined {
		return this.tryGetRuleContext(0, ZenAnnotationsContext);
	}
	public ZEN_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public zenDot3Token(): ZenDot3TokenContext | undefined {
		return this.tryGetRuleContext(0, ZenDot3TokenContext);
	}
	public zenType(): ZenTypeContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeContext);
	}
	public ZEN_T_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_KW_AS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_AS, 0); }
	public ZEN_T_COLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenFunctionParameter; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenFunctionParameter) {
			listener.enterZenFunctionParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenFunctionParameter) {
			listener.exitZenFunctionParameter(this);
		}
	}
}


export class ZenFunctionBodyStatementContext extends ParserRuleContext {
	public zenFunctionLambda(): ZenFunctionLambdaContext | undefined {
		return this.tryGetRuleContext(0, ZenFunctionLambdaContext);
	}
	public ZEN_T_SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public zenFunctionBody(): ZenFunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, ZenFunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenFunctionBodyStatement; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenFunctionBodyStatement) {
			listener.enterZenFunctionBodyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenFunctionBodyStatement) {
			listener.exitZenFunctionBodyStatement(this);
		}
	}
}


export class ZenFunctionBodyContext extends ParserRuleContext {
	public zenStatementBlock(): ZenStatementBlockContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementBlockContext);
	}
	public ZEN_T_SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenFunctionBody; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenFunctionBody) {
			listener.enterZenFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenFunctionBody) {
			listener.exitZenFunctionBody(this);
		}
	}
}


export class ZenIntExpressionContext extends ParserRuleContext {
	public DecimalIntegerLiteral(): TerminalNode { return this.getToken(ZenCodeParser.DecimalIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenIntExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenIntExpression) {
			listener.enterZenIntExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenIntExpression) {
			listener.exitZenIntExpression(this);
		}
	}
}


export class ZenPrefixedIntExpressionContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(ZenCodeParser.IntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenPrefixedIntExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenPrefixedIntExpression) {
			listener.enterZenPrefixedIntExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenPrefixedIntExpression) {
			listener.exitZenPrefixedIntExpression(this);
		}
	}
}


export class ZenFloatExpressionContext extends ParserRuleContext {
	public FloatingPointLiteral(): TerminalNode { return this.getToken(ZenCodeParser.FloatingPointLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenFloatExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenFloatExpression) {
			listener.enterZenFloatExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenFloatExpression) {
			listener.exitZenFloatExpression(this);
		}
	}
}


export class ZenStringExpressionContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(ZenCodeParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStringExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStringExpression) {
			listener.enterZenStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStringExpression) {
			listener.exitZenStringExpression(this);
		}
	}
}


export class ZenVariableExpressionContext extends ParserRuleContext {
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public zenTypeArguments(): ZenTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenVariableExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenVariableExpression) {
			listener.enterZenVariableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenVariableExpression) {
			listener.exitZenVariableExpression(this);
		}
	}
}


export class ZenLocalExpressionVariableContext extends ParserRuleContext {
	public ZEN_T_DOLLAR(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_DOLLAR, 0); }
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenLocalExpressionVariable; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenLocalExpressionVariable) {
			listener.enterZenLocalExpressionVariable(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenLocalExpressionVariable) {
			listener.exitZenLocalExpressionVariable(this);
		}
	}
}


export class ZenThisExpressionContext extends ParserRuleContext {
	public ZEN_KW_THIS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_THIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenThisExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenThisExpression) {
			listener.enterZenThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenThisExpression) {
			listener.exitZenThisExpression(this);
		}
	}
}


export class ZenSuperExpressionContext extends ParserRuleContext {
	public ZEN_KW_SUPER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenSuperExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenSuperExpression) {
			listener.enterZenSuperExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenSuperExpression) {
			listener.exitZenSuperExpression(this);
		}
	}
}


export class ZenDollarExpressionContext extends ParserRuleContext {
	public ZEN_T_DOLLAR(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_DOLLAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenDollarExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenDollarExpression) {
			listener.enterZenDollarExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenDollarExpression) {
			listener.exitZenDollarExpression(this);
		}
	}
}


export class ZenArrayExpressionContext extends ParserRuleContext {
	public ZEN_T_SQOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SQOPEN, 0); }
	public ZEN_T_SQCLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SQCLOSE, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext[];
	public zenAssignExpression(i: number): ZenAssignExpressionContext;
	public zenAssignExpression(i?: number): ZenAssignExpressionContext | ZenAssignExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAssignExpressionContext);
		} else {
			return this.getRuleContext(i, ZenAssignExpressionContext);
		}
	}
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenArrayExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenArrayExpression) {
			listener.enterZenArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenArrayExpression) {
			listener.exitZenArrayExpression(this);
		}
	}
}


export class ZenMapExpressionContext extends ParserRuleContext {
	public ZEN_T_AOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public ZEN_T_ACLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ACLOSE, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext[];
	public zenAssignExpression(i: number): ZenAssignExpressionContext;
	public zenAssignExpression(i?: number): ZenAssignExpressionContext | ZenAssignExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAssignExpressionContext);
		} else {
			return this.getRuleContext(i, ZenAssignExpressionContext);
		}
	}
	public ZEN_T_COLON(): TerminalNode[];
	public ZEN_T_COLON(i: number): TerminalNode;
	public ZEN_T_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COLON);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COLON, i);
		}
	}
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenMapExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenMapExpression) {
			listener.enterZenMapExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenMapExpression) {
			listener.exitZenMapExpression(this);
		}
	}
}


export class ZenTrueExpressionContext extends ParserRuleContext {
	public ZEN_KW_TRUE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_TRUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenTrueExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenTrueExpression) {
			listener.enterZenTrueExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenTrueExpression) {
			listener.exitZenTrueExpression(this);
		}
	}
}


export class ZenFalseExpressionContext extends ParserRuleContext {
	public ZEN_KW_FALSE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenFalseExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenFalseExpression) {
			listener.enterZenFalseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenFalseExpression) {
			listener.exitZenFalseExpression(this);
		}
	}
}


export class ZenNullExpressionContext extends ParserRuleContext {
	public ZEN_KW_NULL(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenNullExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenNullExpression) {
			listener.enterZenNullExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenNullExpression) {
			listener.exitZenNullExpression(this);
		}
	}
}


export class ZenBracketExpressionContext extends ParserRuleContext {
	public ZEN_T_BROPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_BROPEN, 0); }
	public ZEN_T_BRCLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_BRCLOSE, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext[];
	public zenAssignExpression(i: number): ZenAssignExpressionContext;
	public zenAssignExpression(i?: number): ZenAssignExpressionContext | ZenAssignExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAssignExpressionContext);
		} else {
			return this.getRuleContext(i, ZenAssignExpressionContext);
		}
	}
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenBracketExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenBracketExpression) {
			listener.enterZenBracketExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenBracketExpression) {
			listener.exitZenBracketExpression(this);
		}
	}
}


export class ZenNewExpressionContext extends ParserRuleContext {
	public ZEN_KW_NEW(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_NEW, 0); }
	public zenType(): ZenTypeContext {
		return this.getRuleContext(0, ZenTypeContext);
	}
	public zenCallArguments(): ZenCallArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ZenCallArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenNewExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenNewExpression) {
			listener.enterZenNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenNewExpression) {
			listener.exitZenNewExpression(this);
		}
	}
}


export class ZenThrowExpressionContext extends ParserRuleContext {
	public ZEN_KW_THROW(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_THROW, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext {
		return this.getRuleContext(0, ZenAssignExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenThrowExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenThrowExpression) {
			listener.enterZenThrowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenThrowExpression) {
			listener.exitZenThrowExpression(this);
		}
	}
}


export class ZenPanicExpressionContext extends ParserRuleContext {
	public ZEN_KW_PANIC(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_PANIC, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext {
		return this.getRuleContext(0, ZenAssignExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenPanicExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenPanicExpression) {
			listener.enterZenPanicExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenPanicExpression) {
			listener.exitZenPanicExpression(this);
		}
	}
}


export class ZenMatchExpressionContext extends ParserRuleContext {
	public ZEN_KW_MATCH(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_MATCH, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext[];
	public zenAssignExpression(i: number): ZenAssignExpressionContext;
	public zenAssignExpression(i?: number): ZenAssignExpressionContext | ZenAssignExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAssignExpressionContext);
		} else {
			return this.getRuleContext(i, ZenAssignExpressionContext);
		}
	}
	public ZEN_T_AOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public ZEN_T_ACLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ACLOSE, 0); }
	public zenLambdaToken(): ZenLambdaTokenContext[];
	public zenLambdaToken(i: number): ZenLambdaTokenContext;
	public zenLambdaToken(i?: number): ZenLambdaTokenContext | ZenLambdaTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenLambdaTokenContext);
		} else {
			return this.getRuleContext(i, ZenLambdaTokenContext);
		}
	}
	public ZEN_KW_DEFAULT(): TerminalNode[];
	public ZEN_KW_DEFAULT(i: number): TerminalNode;
	public ZEN_KW_DEFAULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_KW_DEFAULT);
		} else {
			return this.getToken(ZenCodeParser.ZEN_KW_DEFAULT, i);
		}
	}
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenMatchExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenMatchExpression) {
			listener.enterZenMatchExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenMatchExpression) {
			listener.exitZenMatchExpression(this);
		}
	}
}


export class ZenBracketHandlerExpressionContext extends ParserRuleContext {
	public ZEN_T_LESS(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_LESS, 0); }
	public ZEN_T_GREATER(): TerminalNode[];
	public ZEN_T_GREATER(i: number): TerminalNode;
	public ZEN_T_GREATER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_GREATER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_GREATER, i);
		}
	}
	public ZEN_T_COLON(): TerminalNode[];
	public ZEN_T_COLON(i: number): TerminalNode;
	public ZEN_T_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COLON);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenBracketHandlerExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenBracketHandlerExpression) {
			listener.enterZenBracketHandlerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenBracketHandlerExpression) {
			listener.exitZenBracketHandlerExpression(this);
		}
	}
}


export class ZenPrimaryExpressionContext extends ParserRuleContext {
	public zenIntExpression(): ZenIntExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenIntExpressionContext);
	}
	public zenPrefixedIntExpression(): ZenPrefixedIntExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenPrefixedIntExpressionContext);
	}
	public zenFloatExpression(): ZenFloatExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenFloatExpressionContext);
	}
	public zenStringExpression(): ZenStringExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenStringExpressionContext);
	}
	public zenVariableExpression(): ZenVariableExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenVariableExpressionContext);
	}
	public zenLocalExpressionVariable(): ZenLocalExpressionVariableContext | undefined {
		return this.tryGetRuleContext(0, ZenLocalExpressionVariableContext);
	}
	public zenThisExpression(): ZenThisExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenThisExpressionContext);
	}
	public zenSuperExpression(): ZenSuperExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenSuperExpressionContext);
	}
	public zenDollarExpression(): ZenDollarExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenDollarExpressionContext);
	}
	public zenArrayExpression(): ZenArrayExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenArrayExpressionContext);
	}
	public zenMapExpression(): ZenMapExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenMapExpressionContext);
	}
	public zenTrueExpression(): ZenTrueExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenTrueExpressionContext);
	}
	public zenFalseExpression(): ZenFalseExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenFalseExpressionContext);
	}
	public zenNullExpression(): ZenNullExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenNullExpressionContext);
	}
	public zenBracketExpression(): ZenBracketExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenBracketExpressionContext);
	}
	public zenNewExpression(): ZenNewExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenNewExpressionContext);
	}
	public zenThrowExpression(): ZenThrowExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenThrowExpressionContext);
	}
	public zenPanicExpression(): ZenPanicExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenPanicExpressionContext);
	}
	public zenMatchExpression(): ZenMatchExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenMatchExpressionContext);
	}
	public zenBracketHandlerExpression(): ZenBracketHandlerExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenBracketHandlerExpressionContext);
	}
	public zenType(): ZenTypeContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenPrimaryExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenPrimaryExpression) {
			listener.enterZenPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenPrimaryExpression) {
			listener.exitZenPrimaryExpression(this);
		}
	}
}


export class ZenPostfixExpressionContext extends ParserRuleContext {
	public zenPrimaryExpression(): ZenPrimaryExpressionContext {
		return this.getRuleContext(0, ZenPrimaryExpressionContext);
	}
	public ZEN_T_DOT(): TerminalNode[];
	public ZEN_T_DOT(i: number): TerminalNode;
	public ZEN_T_DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_DOT);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_DOT, i);
		}
	}
	public zenDot2Token(): ZenDot2TokenContext[];
	public zenDot2Token(i: number): ZenDot2TokenContext;
	public zenDot2Token(i?: number): ZenDot2TokenContext | ZenDot2TokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDot2TokenContext);
		} else {
			return this.getRuleContext(i, ZenDot2TokenContext);
		}
	}
	public zenAssignExpression(): ZenAssignExpressionContext[];
	public zenAssignExpression(i: number): ZenAssignExpressionContext;
	public zenAssignExpression(i?: number): ZenAssignExpressionContext | ZenAssignExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAssignExpressionContext);
		} else {
			return this.getRuleContext(i, ZenAssignExpressionContext);
		}
	}
	public ZEN_T_SQOPEN(): TerminalNode[];
	public ZEN_T_SQOPEN(i: number): TerminalNode;
	public ZEN_T_SQOPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_SQOPEN);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_SQOPEN, i);
		}
	}
	public ZEN_T_SQCLOSE(): TerminalNode[];
	public ZEN_T_SQCLOSE(i: number): TerminalNode;
	public ZEN_T_SQCLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_SQCLOSE);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_SQCLOSE, i);
		}
	}
	public zenCallArguments(): ZenCallArgumentsContext[];
	public zenCallArguments(i: number): ZenCallArgumentsContext;
	public zenCallArguments(i?: number): ZenCallArgumentsContext | ZenCallArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenCallArgumentsContext);
		} else {
			return this.getRuleContext(i, ZenCallArgumentsContext);
		}
	}
	public ZEN_KW_AS(): TerminalNode[];
	public ZEN_KW_AS(i: number): TerminalNode;
	public ZEN_KW_AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_KW_AS);
		} else {
			return this.getToken(ZenCodeParser.ZEN_KW_AS, i);
		}
	}
	public zenType(): ZenTypeContext[];
	public zenType(i: number): ZenTypeContext;
	public zenType(i?: number): ZenTypeContext | ZenTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeContext);
		} else {
			return this.getRuleContext(i, ZenTypeContext);
		}
	}
	public zenIncrementToken(): ZenIncrementTokenContext[];
	public zenIncrementToken(i: number): ZenIncrementTokenContext;
	public zenIncrementToken(i?: number): ZenIncrementTokenContext | ZenIncrementTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenIncrementTokenContext);
		} else {
			return this.getRuleContext(i, ZenIncrementTokenContext);
		}
	}
	public zenDecrementToken(): ZenDecrementTokenContext[];
	public zenDecrementToken(i: number): ZenDecrementTokenContext;
	public zenDecrementToken(i?: number): ZenDecrementTokenContext | ZenDecrementTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenDecrementTokenContext);
		} else {
			return this.getRuleContext(i, ZenDecrementTokenContext);
		}
	}
	public zenExpressionLambda(): ZenExpressionLambdaContext[];
	public zenExpressionLambda(i: number): ZenExpressionLambdaContext;
	public zenExpressionLambda(i?: number): ZenExpressionLambdaContext | ZenExpressionLambdaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenExpressionLambdaContext);
		} else {
			return this.getRuleContext(i, ZenExpressionLambdaContext);
		}
	}
	public ZEN_T_DOLLAR(): TerminalNode[];
	public ZEN_T_DOLLAR(i: number): TerminalNode;
	public ZEN_T_DOLLAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_DOLLAR);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_DOLLAR, i);
		}
	}
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.StringLiteral);
		} else {
			return this.getToken(ZenCodeParser.StringLiteral, i);
		}
	}
	public ZEN_T_QUEST(): TerminalNode[];
	public ZEN_T_QUEST(i: number): TerminalNode;
	public ZEN_T_QUEST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_QUEST);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_QUEST, i);
		}
	}
	public ZEN_IDENTIFIER(): TerminalNode[];
	public ZEN_IDENTIFIER(i: number): TerminalNode;
	public ZEN_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_IDENTIFIER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, i);
		}
	}
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	public zenTypeArguments(): ZenTypeArgumentsContext[];
	public zenTypeArguments(i: number): ZenTypeArgumentsContext;
	public zenTypeArguments(i?: number): ZenTypeArgumentsContext | ZenTypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeArgumentsContext);
		} else {
			return this.getRuleContext(i, ZenTypeArgumentsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenPostfixExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenPostfixExpression) {
			listener.enterZenPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenPostfixExpression) {
			listener.exitZenPostfixExpression(this);
		}
	}
}


export class ZenUnaryExpressionContext extends ParserRuleContext {
	public ZEN_KW_TRY(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_TRY, 0); }
	public zenUnaryExpression(): ZenUnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenUnaryExpressionContext);
	}
	public zenPostfixExpression(): ZenPostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenPostfixExpressionContext);
	}
	public ZEN_T_QUEST(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_QUEST, 0); }
	public ZEN_T_NOT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_NOT, 0); }
	public ZEN_T_SUB(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SUB, 0); }
	public ZEN_T_CAT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_CAT, 0); }
	public zenIncrementToken(): ZenIncrementTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenIncrementTokenContext);
	}
	public zenDecrementToken(): ZenDecrementTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenDecrementTokenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenUnaryExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenUnaryExpression) {
			listener.enterZenUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenUnaryExpression) {
			listener.exitZenUnaryExpression(this);
		}
	}
}


export class ZenMulExpressionContext extends ParserRuleContext {
	public zenUnaryExpression(): ZenUnaryExpressionContext[];
	public zenUnaryExpression(i: number): ZenUnaryExpressionContext;
	public zenUnaryExpression(i?: number): ZenUnaryExpressionContext | ZenUnaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenUnaryExpressionContext);
		} else {
			return this.getRuleContext(i, ZenUnaryExpressionContext);
		}
	}
	public ZEN_T_MUL(): TerminalNode[];
	public ZEN_T_MUL(i: number): TerminalNode;
	public ZEN_T_MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_MUL);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_MUL, i);
		}
	}
	public ZEN_T_DIV(): TerminalNode[];
	public ZEN_T_DIV(i: number): TerminalNode;
	public ZEN_T_DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_DIV);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_DIV, i);
		}
	}
	public ZEN_T_MOD(): TerminalNode[];
	public ZEN_T_MOD(i: number): TerminalNode;
	public ZEN_T_MOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_MOD);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_MOD, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenMulExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenMulExpression) {
			listener.enterZenMulExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenMulExpression) {
			listener.exitZenMulExpression(this);
		}
	}
}


export class ZenAddExpressionContext extends ParserRuleContext {
	public zenMulExpression(): ZenMulExpressionContext[];
	public zenMulExpression(i: number): ZenMulExpressionContext;
	public zenMulExpression(i?: number): ZenMulExpressionContext | ZenMulExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenMulExpressionContext);
		} else {
			return this.getRuleContext(i, ZenMulExpressionContext);
		}
	}
	public ZEN_T_ADD(): TerminalNode[];
	public ZEN_T_ADD(i: number): TerminalNode;
	public ZEN_T_ADD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_ADD);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_ADD, i);
		}
	}
	public ZEN_T_SUB(): TerminalNode[];
	public ZEN_T_SUB(i: number): TerminalNode;
	public ZEN_T_SUB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_SUB);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_SUB, i);
		}
	}
	public ZEN_T_CAT(): TerminalNode[];
	public ZEN_T_CAT(i: number): TerminalNode;
	public ZEN_T_CAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_CAT);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_CAT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAddExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAddExpression) {
			listener.enterZenAddExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAddExpression) {
			listener.exitZenAddExpression(this);
		}
	}
}


export class ZenShiftExpressionContext extends ParserRuleContext {
	public zenAddExpression(): ZenAddExpressionContext[];
	public zenAddExpression(i: number): ZenAddExpressionContext;
	public zenAddExpression(i?: number): ZenAddExpressionContext | ZenAddExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAddExpressionContext);
		} else {
			return this.getRuleContext(i, ZenAddExpressionContext);
		}
	}
	public zenSHLToken(): ZenSHLTokenContext[];
	public zenSHLToken(i: number): ZenSHLTokenContext;
	public zenSHLToken(i?: number): ZenSHLTokenContext | ZenSHLTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenSHLTokenContext);
		} else {
			return this.getRuleContext(i, ZenSHLTokenContext);
		}
	}
	public zenSHRToken(): ZenSHRTokenContext[];
	public zenSHRToken(i: number): ZenSHRTokenContext;
	public zenSHRToken(i?: number): ZenSHRTokenContext | ZenSHRTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenSHRTokenContext);
		} else {
			return this.getRuleContext(i, ZenSHRTokenContext);
		}
	}
	public zenUSHRToken(): ZenUSHRTokenContext[];
	public zenUSHRToken(i: number): ZenUSHRTokenContext;
	public zenUSHRToken(i?: number): ZenUSHRTokenContext | ZenUSHRTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenUSHRTokenContext);
		} else {
			return this.getRuleContext(i, ZenUSHRTokenContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenShiftExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenShiftExpression) {
			listener.enterZenShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenShiftExpression) {
			listener.exitZenShiftExpression(this);
		}
	}
}


export class ZenCompareExpressionContext extends ParserRuleContext {
	public zenShiftExpression(): ZenShiftExpressionContext[];
	public zenShiftExpression(i: number): ZenShiftExpressionContext;
	public zenShiftExpression(i?: number): ZenShiftExpressionContext | ZenShiftExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenShiftExpressionContext);
		} else {
			return this.getRuleContext(i, ZenShiftExpressionContext);
		}
	}
	public zenEqual2Token(): ZenEqual2TokenContext | undefined {
		return this.tryGetRuleContext(0, ZenEqual2TokenContext);
	}
	public zenEqual3Token(): ZenEqual3TokenContext | undefined {
		return this.tryGetRuleContext(0, ZenEqual3TokenContext);
	}
	public zenNotEqualToken(): ZenNotEqualTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenNotEqualTokenContext);
	}
	public zenNotEqual2Token(): ZenNotEqual2TokenContext | undefined {
		return this.tryGetRuleContext(0, ZenNotEqual2TokenContext);
	}
	public ZEN_T_LESS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_LESS, 0); }
	public zenLessEqToken(): ZenLessEqTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenLessEqTokenContext);
	}
	public ZEN_T_GREATER(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_GREATER, 0); }
	public zenGreaterEqToken(): ZenGreaterEqTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenGreaterEqTokenContext);
	}
	public ZEN_KW_IN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_IN, 0); }
	public ZEN_KW_IS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_IS, 0); }
	public zenType(): ZenTypeContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeContext);
	}
	public ZEN_T_NOT(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenCompareExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenCompareExpression) {
			listener.enterZenCompareExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenCompareExpression) {
			listener.exitZenCompareExpression(this);
		}
	}
}


export class ZenAndExpressionContext extends ParserRuleContext {
	public zenCompareExpression(): ZenCompareExpressionContext[];
	public zenCompareExpression(i: number): ZenCompareExpressionContext;
	public zenCompareExpression(i?: number): ZenCompareExpressionContext | ZenCompareExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenCompareExpressionContext);
		} else {
			return this.getRuleContext(i, ZenCompareExpressionContext);
		}
	}
	public ZEN_T_AND(): TerminalNode[];
	public ZEN_T_AND(i: number): TerminalNode;
	public ZEN_T_AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_AND);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAndExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAndExpression) {
			listener.enterZenAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAndExpression) {
			listener.exitZenAndExpression(this);
		}
	}
}


export class ZenXorExpressionContext extends ParserRuleContext {
	public zenAndExpression(): ZenAndExpressionContext[];
	public zenAndExpression(i: number): ZenAndExpressionContext;
	public zenAndExpression(i?: number): ZenAndExpressionContext | ZenAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAndExpressionContext);
		} else {
			return this.getRuleContext(i, ZenAndExpressionContext);
		}
	}
	public ZEN_T_XOR(): TerminalNode[];
	public ZEN_T_XOR(i: number): TerminalNode;
	public ZEN_T_XOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_XOR);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_XOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenXorExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenXorExpression) {
			listener.enterZenXorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenXorExpression) {
			listener.exitZenXorExpression(this);
		}
	}
}


export class ZenOrExpressionContext extends ParserRuleContext {
	public zenXorExpression(): ZenXorExpressionContext[];
	public zenXorExpression(i: number): ZenXorExpressionContext;
	public zenXorExpression(i?: number): ZenXorExpressionContext | ZenXorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenXorExpressionContext);
		} else {
			return this.getRuleContext(i, ZenXorExpressionContext);
		}
	}
	public ZEN_T_OR(): TerminalNode[];
	public ZEN_T_OR(i: number): TerminalNode;
	public ZEN_T_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_OR);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenOrExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenOrExpression) {
			listener.enterZenOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenOrExpression) {
			listener.exitZenOrExpression(this);
		}
	}
}


export class ZenAndAndExpressionContext extends ParserRuleContext {
	public zenOrExpression(): ZenOrExpressionContext[];
	public zenOrExpression(i: number): ZenOrExpressionContext;
	public zenOrExpression(i?: number): ZenOrExpressionContext | ZenOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenOrExpressionContext);
		} else {
			return this.getRuleContext(i, ZenOrExpressionContext);
		}
	}
	public zenAndAndToken(): ZenAndAndTokenContext[];
	public zenAndAndToken(i: number): ZenAndAndTokenContext;
	public zenAndAndToken(i?: number): ZenAndAndTokenContext | ZenAndAndTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAndAndTokenContext);
		} else {
			return this.getRuleContext(i, ZenAndAndTokenContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAndAndExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAndAndExpression) {
			listener.enterZenAndAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAndAndExpression) {
			listener.exitZenAndAndExpression(this);
		}
	}
}


export class ZenOrOrExpressionContext extends ParserRuleContext {
	public zenAndAndExpression(): ZenAndAndExpressionContext[];
	public zenAndAndExpression(i: number): ZenAndAndExpressionContext;
	public zenAndAndExpression(i?: number): ZenAndAndExpressionContext | ZenAndAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAndAndExpressionContext);
		} else {
			return this.getRuleContext(i, ZenAndAndExpressionContext);
		}
	}
	public zenOrOrToken(): ZenOrOrTokenContext[];
	public zenOrOrToken(i: number): ZenOrOrTokenContext;
	public zenOrOrToken(i?: number): ZenOrOrTokenContext | ZenOrOrTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenOrOrTokenContext);
		} else {
			return this.getRuleContext(i, ZenOrOrTokenContext);
		}
	}
	public zenCoalesceToken(): ZenCoalesceTokenContext[];
	public zenCoalesceToken(i: number): ZenCoalesceTokenContext;
	public zenCoalesceToken(i?: number): ZenCoalesceTokenContext | ZenCoalesceTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenCoalesceTokenContext);
		} else {
			return this.getRuleContext(i, ZenCoalesceTokenContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenOrOrExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenOrOrExpression) {
			listener.enterZenOrOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenOrOrExpression) {
			listener.exitZenOrOrExpression(this);
		}
	}
}


export class ZenConditionalExpressionContext extends ParserRuleContext {
	public zenOrOrExpression(): ZenOrOrExpressionContext[];
	public zenOrOrExpression(i: number): ZenOrOrExpressionContext;
	public zenOrOrExpression(i?: number): ZenOrOrExpressionContext | ZenOrOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenOrOrExpressionContext);
		} else {
			return this.getRuleContext(i, ZenOrOrExpressionContext);
		}
	}
	public ZEN_T_QUEST(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_QUEST, 0); }
	public ZEN_T_COLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_COLON, 0); }
	public zenConditionalExpression(): ZenConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenConditionalExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenConditionalExpression) {
			listener.enterZenConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenConditionalExpression) {
			listener.exitZenConditionalExpression(this);
		}
	}
}


export class ZenAssignExpressionContext extends ParserRuleContext {
	public zenConditionalExpression(): ZenConditionalExpressionContext {
		return this.getRuleContext(0, ZenConditionalExpressionContext);
	}
	public zenAssignExpression(): ZenAssignExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_T_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	public zenAddAssignToken(): ZenAddAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenAddAssignTokenContext);
	}
	public zenSubAssignToken(): ZenSubAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenSubAssignTokenContext);
	}
	public zenCatAssignToken(): ZenCatAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenCatAssignTokenContext);
	}
	public zenMulAssignToken(): ZenMulAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenMulAssignTokenContext);
	}
	public zenDivAssignToken(): ZenDivAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenDivAssignTokenContext);
	}
	public zenModAssignToken(): ZenModAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenModAssignTokenContext);
	}
	public zenOrAssignToken(): ZenOrAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenOrAssignTokenContext);
	}
	public zenAndAssignToken(): ZenAndAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenAndAssignTokenContext);
	}
	public zenXOrAssignToken(): ZenXOrAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenXOrAssignTokenContext);
	}
	public zenSHLAssignToken(): ZenSHLAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenSHLAssignTokenContext);
	}
	public zenSHRAssignToken(): ZenSHRAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenSHRAssignTokenContext);
	}
	public zenUSHRAssignToken(): ZenUSHRAssignTokenContext | undefined {
		return this.tryGetRuleContext(0, ZenUSHRAssignTokenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAssignExpression; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAssignExpression) {
			listener.enterZenAssignExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAssignExpression) {
			listener.exitZenAssignExpression(this);
		}
	}
}


export class ZenStatementBlockContext extends ParserRuleContext {
	public ZEN_T_AOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public ZEN_T_ACLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ACLOSE, 0); }
	public zenStatement(): ZenStatementContext[];
	public zenStatement(i: number): ZenStatementContext;
	public zenStatement(i?: number): ZenStatementContext | ZenStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenStatementContext);
		} else {
			return this.getRuleContext(i, ZenStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementBlock; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementBlock) {
			listener.enterZenStatementBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementBlock) {
			listener.exitZenStatementBlock(this);
		}
	}
}


export class ZenStatementReturnContext extends ParserRuleContext {
	public ZEN_KW_RETURN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_RETURN, 0); }
	public ZEN_T_SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenAssignExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementReturn; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementReturn) {
			listener.enterZenStatementReturn(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementReturn) {
			listener.exitZenStatementReturn(this);
		}
	}
}


export class ZenStatementVarContext extends ParserRuleContext {
	public ZEN_IDENTIFIER(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public ZEN_T_SEMICOLON(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public ZEN_KW_VAR(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_VAR, 0); }
	public ZEN_KW_VAL(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_VAL, 0); }
	public zenType(): ZenTypeContext | undefined {
		return this.tryGetRuleContext(0, ZenTypeContext);
	}
	public ZEN_T_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_KW_AS(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_AS, 0); }
	public ZEN_T_COLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementVar; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementVar) {
			listener.enterZenStatementVar(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementVar) {
			listener.exitZenStatementVar(this);
		}
	}
}


export class ZenStatementIfContext extends ParserRuleContext {
	public ZEN_KW_IF(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_IF, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext {
		return this.getRuleContext(0, ZenAssignExpressionContext);
	}
	public zenAnnotatedStatement(): ZenAnnotatedStatementContext[];
	public zenAnnotatedStatement(i: number): ZenAnnotatedStatementContext;
	public zenAnnotatedStatement(i?: number): ZenAnnotatedStatementContext | ZenAnnotatedStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAnnotatedStatementContext);
		} else {
			return this.getRuleContext(i, ZenAnnotatedStatementContext);
		}
	}
	public ZEN_KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementIf; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementIf) {
			listener.enterZenStatementIf(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementIf) {
			listener.exitZenStatementIf(this);
		}
	}
}


export class ZenStatementForContext extends ParserRuleContext {
	public ZEN_KW_FOR(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_FOR, 0); }
	public ZEN_IDENTIFIER(): TerminalNode[];
	public ZEN_IDENTIFIER(i: number): TerminalNode;
	public ZEN_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_IDENTIFIER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, i);
		}
	}
	public ZEN_KW_IN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_IN, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext {
		return this.getRuleContext(0, ZenAssignExpressionContext);
	}
	public zenAnnotatedStatement(): ZenAnnotatedStatementContext {
		return this.getRuleContext(0, ZenAnnotatedStatementContext);
	}
	public ZEN_T_COMMA(): TerminalNode[];
	public ZEN_T_COMMA(i: number): TerminalNode;
	public ZEN_T_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COMMA);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementFor; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementFor) {
			listener.enterZenStatementFor(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementFor) {
			listener.exitZenStatementFor(this);
		}
	}
}


export class ZenStatementDoContext extends ParserRuleContext {
	public ZEN_KW_DO(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_DO, 0); }
	public zenAnnotatedStatement(): ZenAnnotatedStatementContext {
		return this.getRuleContext(0, ZenAnnotatedStatementContext);
	}
	public ZEN_KW_WHILE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_WHILE, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext {
		return this.getRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_T_SEMICOLON(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public ZEN_T_COLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_COLON, 0); }
	public ZEN_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementDo; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementDo) {
			listener.enterZenStatementDo(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementDo) {
			listener.exitZenStatementDo(this);
		}
	}
}


export class ZenStatementWhileContext extends ParserRuleContext {
	public ZEN_KW_WHILE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_WHILE, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext {
		return this.getRuleContext(0, ZenAssignExpressionContext);
	}
	public zenAnnotatedStatement(): ZenAnnotatedStatementContext {
		return this.getRuleContext(0, ZenAnnotatedStatementContext);
	}
	public ZEN_T_COLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_COLON, 0); }
	public ZEN_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementWhile; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementWhile) {
			listener.enterZenStatementWhile(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementWhile) {
			listener.exitZenStatementWhile(this);
		}
	}
}


export class ZenStatementLockContext extends ParserRuleContext {
	public ZEN_KW_LOCK(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_LOCK, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext {
		return this.getRuleContext(0, ZenAssignExpressionContext);
	}
	public zenAnnotatedStatement(): ZenAnnotatedStatementContext {
		return this.getRuleContext(0, ZenAnnotatedStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementLock; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementLock) {
			listener.enterZenStatementLock(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementLock) {
			listener.exitZenStatementLock(this);
		}
	}
}


export class ZenStatementThrowContext extends ParserRuleContext {
	public ZEN_KW_THROW(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_THROW, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext {
		return this.getRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_T_SEMICOLON(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementThrow; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementThrow) {
			listener.enterZenStatementThrow(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementThrow) {
			listener.exitZenStatementThrow(this);
		}
	}
}


export class ZenStatementTryContext extends ParserRuleContext {
	public ZEN_KW_TRY(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_TRY, 0); }
	public zenAnnotatedStatement(): ZenAnnotatedStatementContext[];
	public zenAnnotatedStatement(i: number): ZenAnnotatedStatementContext;
	public zenAnnotatedStatement(i?: number): ZenAnnotatedStatementContext | ZenAnnotatedStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAnnotatedStatementContext);
		} else {
			return this.getRuleContext(i, ZenAnnotatedStatementContext);
		}
	}
	public ZEN_IDENTIFIER(): TerminalNode[];
	public ZEN_IDENTIFIER(i: number): TerminalNode;
	public ZEN_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_IDENTIFIER);
		} else {
			return this.getToken(ZenCodeParser.ZEN_IDENTIFIER, i);
		}
	}
	public ZEN_T_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ASSIGN, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_KW_CATCH(): TerminalNode[];
	public ZEN_KW_CATCH(i: number): TerminalNode;
	public ZEN_KW_CATCH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_KW_CATCH);
		} else {
			return this.getToken(ZenCodeParser.ZEN_KW_CATCH, i);
		}
	}
	public ZEN_KW_FINALLY(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_KW_FINALLY, 0); }
	public ZEN_KW_AS(): TerminalNode[];
	public ZEN_KW_AS(i: number): TerminalNode;
	public ZEN_KW_AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_KW_AS);
		} else {
			return this.getToken(ZenCodeParser.ZEN_KW_AS, i);
		}
	}
	public zenType(): ZenTypeContext[];
	public zenType(i: number): ZenTypeContext;
	public zenType(i?: number): ZenTypeContext | ZenTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenTypeContext);
		} else {
			return this.getRuleContext(i, ZenTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementTry; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementTry) {
			listener.enterZenStatementTry(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementTry) {
			listener.exitZenStatementTry(this);
		}
	}
}


export class ZenStatementContinueContext extends ParserRuleContext {
	public ZEN_KW_CONTINUE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_CONTINUE, 0); }
	public ZEN_T_SEMICOLON(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public ZEN_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementContinue; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementContinue) {
			listener.enterZenStatementContinue(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementContinue) {
			listener.exitZenStatementContinue(this);
		}
	}
}


export class ZenStatementBreakContext extends ParserRuleContext {
	public ZEN_KW_BREAK(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_BREAK, 0); }
	public ZEN_T_SEMICOLON(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public ZEN_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatementBreak; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatementBreak) {
			listener.enterZenStatementBreak(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatementBreak) {
			listener.exitZenStatementBreak(this);
		}
	}
}


export class ZenSwitchCaseStatementContext extends ParserRuleContext {
	public ZEN_KW_CASE(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_CASE, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext {
		return this.getRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_T_COLON(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenSwitchCaseStatement; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenSwitchCaseStatement) {
			listener.enterZenSwitchCaseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenSwitchCaseStatement) {
			listener.exitZenSwitchCaseStatement(this);
		}
	}
}


export class ZenSwitchStatementContext extends ParserRuleContext {
	public ZEN_KW_SWITCH(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_KW_SWITCH, 0); }
	public zenAssignExpression(): ZenAssignExpressionContext {
		return this.getRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_T_AOPEN(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_AOPEN, 0); }
	public ZEN_T_ACLOSE(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_ACLOSE, 0); }
	public ZEN_T_COLON(): TerminalNode[];
	public ZEN_T_COLON(i: number): TerminalNode;
	public ZEN_T_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_T_COLON);
		} else {
			return this.getToken(ZenCodeParser.ZEN_T_COLON, i);
		}
	}
	public ZEN_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_IDENTIFIER, 0); }
	public zenSwitchCaseStatement(): ZenSwitchCaseStatementContext[];
	public zenSwitchCaseStatement(i: number): ZenSwitchCaseStatementContext;
	public zenSwitchCaseStatement(i?: number): ZenSwitchCaseStatementContext | ZenSwitchCaseStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenSwitchCaseStatementContext);
		} else {
			return this.getRuleContext(i, ZenSwitchCaseStatementContext);
		}
	}
	public zenAnnotatedStatement(): ZenAnnotatedStatementContext[];
	public zenAnnotatedStatement(i: number): ZenAnnotatedStatementContext;
	public zenAnnotatedStatement(i?: number): ZenAnnotatedStatementContext | ZenAnnotatedStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZenAnnotatedStatementContext);
		} else {
			return this.getRuleContext(i, ZenAnnotatedStatementContext);
		}
	}
	public ZEN_KW_DEFAULT(): TerminalNode[];
	public ZEN_KW_DEFAULT(i: number): TerminalNode;
	public ZEN_KW_DEFAULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenCodeParser.ZEN_KW_DEFAULT);
		} else {
			return this.getToken(ZenCodeParser.ZEN_KW_DEFAULT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenSwitchStatement; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenSwitchStatement) {
			listener.enterZenSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenSwitchStatement) {
			listener.exitZenSwitchStatement(this);
		}
	}
}


export class ZenStatementContext extends ParserRuleContext {
	public zenStatementBlock(): ZenStatementBlockContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementBlockContext);
	}
	public zenStatementReturn(): ZenStatementReturnContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementReturnContext);
	}
	public zenStatementVar(): ZenStatementVarContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementVarContext);
	}
	public zenStatementIf(): ZenStatementIfContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementIfContext);
	}
	public zenStatementFor(): ZenStatementForContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementForContext);
	}
	public zenStatementDo(): ZenStatementDoContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementDoContext);
	}
	public zenStatementWhile(): ZenStatementWhileContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementWhileContext);
	}
	public zenStatementLock(): ZenStatementLockContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementLockContext);
	}
	public zenStatementThrow(): ZenStatementThrowContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementThrowContext);
	}
	public zenStatementTry(): ZenStatementTryContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementTryContext);
	}
	public zenStatementContinue(): ZenStatementContinueContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementContinueContext);
	}
	public zenStatementBreak(): ZenStatementBreakContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementBreakContext);
	}
	public zenSwitchStatement(): ZenSwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, ZenSwitchStatementContext);
	}
	public zenAssignExpression(): ZenAssignExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_T_SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenStatement; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenStatement) {
			listener.enterZenStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenStatement) {
			listener.exitZenStatement(this);
		}
	}
}


export class ZenAnnotatedStatementContext extends ParserRuleContext {
	public zenAnnotations(): ZenAnnotationsContext {
		return this.getRuleContext(0, ZenAnnotationsContext);
	}
	public zenAssignExpression(): ZenAssignExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenAssignExpressionContext);
	}
	public ZEN_T_SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public zenStatementBlock(): ZenStatementBlockContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementBlockContext);
	}
	public zenStatementReturn(): ZenStatementReturnContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementReturnContext);
	}
	public zenStatementVar(): ZenStatementVarContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementVarContext);
	}
	public zenStatementIf(): ZenStatementIfContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementIfContext);
	}
	public zenStatementFor(): ZenStatementForContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementForContext);
	}
	public zenStatementDo(): ZenStatementDoContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementDoContext);
	}
	public zenStatementWhile(): ZenStatementWhileContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementWhileContext);
	}
	public zenStatementLock(): ZenStatementLockContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementLockContext);
	}
	public zenStatementThrow(): ZenStatementThrowContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementThrowContext);
	}
	public zenStatementTry(): ZenStatementTryContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementTryContext);
	}
	public zenStatementContinue(): ZenStatementContinueContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementContinueContext);
	}
	public zenStatementBreak(): ZenStatementBreakContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementBreakContext);
	}
	public zenSwitchStatement(): ZenSwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, ZenSwitchStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenAnnotatedStatement; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenAnnotatedStatement) {
			listener.enterZenAnnotatedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenAnnotatedStatement) {
			listener.exitZenAnnotatedStatement(this);
		}
	}
}


export class ZenExpressionLambdaContext extends ParserRuleContext {
	public zenLambdaToken(): ZenLambdaTokenContext {
		return this.getRuleContext(0, ZenLambdaTokenContext);
	}
	public zenStatementBlock(): ZenStatementBlockContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementBlockContext);
	}
	public zenAssignExpression(): ZenAssignExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenAssignExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenExpressionLambda; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenExpressionLambda) {
			listener.enterZenExpressionLambda(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenExpressionLambda) {
			listener.exitZenExpressionLambda(this);
		}
	}
}


export class ZenFunctionLambdaContext extends ParserRuleContext {
	public zenLambdaToken(): ZenLambdaTokenContext {
		return this.getRuleContext(0, ZenLambdaTokenContext);
	}
	public ZEN_T_SEMICOLON(): TerminalNode { return this.getToken(ZenCodeParser.ZEN_T_SEMICOLON, 0); }
	public zenStatementBlock(): ZenStatementBlockContext | undefined {
		return this.tryGetRuleContext(0, ZenStatementBlockContext);
	}
	public zenAssignExpression(): ZenAssignExpressionContext | undefined {
		return this.tryGetRuleContext(0, ZenAssignExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenCodeParser.RULE_zenFunctionLambda; }
	// @Override
	public enterRule(listener: ZenCodeParserListener): void {
		if (listener.enterZenFunctionLambda) {
			listener.enterZenFunctionLambda(this);
		}
	}
	// @Override
	public exitRule(listener: ZenCodeParserListener): void {
		if (listener.exitZenFunctionLambda) {
			listener.exitZenFunctionLambda(this);
		}
	}
}


