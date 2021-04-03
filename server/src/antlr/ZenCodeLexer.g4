lexer grammar ZenCodeLexer;

// Keywords

ZEN_KW_IMPORT: 'import';
ZEN_KW_ALIAS: 'alias';
ZEN_KW_CLASS: 'class';
ZEN_KW_FUNCTION: 'function';
ZEN_KW_INTERFACE: 'interface';
ZEN_KW_ENUM: 'enum';
ZEN_KW_STRUCT: 'struct';
ZEN_KW_EXPAND: 'expand';
ZEN_KW_VARIANT: 'variant';
ZEN_KW_ABSTRACT: 'abstract';
ZEN_KW_FINAL: 'final';
ZEN_KW_OVERRIDE: 'override';
ZEN_KW_CONST: 'const';
ZEN_KW_PRIVATE: 'private';
ZEN_KW_PUBLIC: 'public';
ZEN_KW_EXPORT: 'export';
ZEN_KW_INTERNAL: 'internal';
ZEN_KW_STATIC: 'static';
ZEN_KW_PROTECTED: 'protected';
ZEN_KW_IMPLICIT: 'implicit';
ZEN_KW_VIRTUAL: 'virtual';
ZEN_KW_EXTERN: 'extern';
ZEN_KW_IMMUTABLE: 'immutable';
ZEN_KW_VAL: 'val';
ZEN_KW_VAR: 'var';
ZEN_KW_GET: 'get';
ZEN_KW_IMPLEMENTS: 'implements';
ZEN_KW_SET: 'set';
ZEN_KW_VOID: 'void';
ZEN_KW_BOOL: 'bool';
ZEN_KW_BYTE: 'byte';
ZEN_KW_SBYTE: 'sbyte';
ZEN_KW_SHORT: 'short';
ZEN_KW_USHORT: 'ushort';
ZEN_KW_INT: 'int';
ZEN_KW_UINT: 'uint';
ZEN_KW_LONG: 'long';
ZEN_KW_ULONG: 'ulong';
ZEN_KW_USIZE: 'usize';
ZEN_KW_FLOAT: 'float';
ZEN_KW_DOUBLE: 'double';
ZEN_KW_CHAR: 'char';
ZEN_KW_STRING: 'string';
ZEN_KW_IF: 'if';
ZEN_KW_ELSE: 'else';
ZEN_KW_DO: 'do';
ZEN_KW_WHILE: 'while';
ZEN_KW_FOR: 'for';
ZEN_KW_THROW: 'throw';
ZEN_KW_PANIC: 'panic';
ZEN_KW_LOCK: 'lock';
ZEN_KW_TRY: 'try';
ZEN_KW_CATCH: 'catch';
ZEN_KW_FINALLY: 'finally';
ZEN_KW_RETURN: 'return';
ZEN_KW_BREAK: 'break';
ZEN_KW_CONTINUE: 'continue';
ZEN_KW_SWITCH: 'switch';
ZEN_KW_CASE: 'case';
ZEN_KW_DEFAULT: 'default';
ZEN_KW_IN: 'in';
ZEN_KW_IS: 'is';
ZEN_KW_AS: 'as';
ZEN_KW_MATCH: 'match';
ZEN_KW_THROWS: 'throws';
ZEN_KW_SUPER: 'super';
ZEN_KW_THIS: 'this';
ZEN_KW_NULL: 'null';
ZEN_KW_TRUE: 'true';
ZEN_KW_FALSE: 'false';
ZEN_KW_NEW: 'new';

// Integer Literals

IntegerLiteral:
	DecimalIntegerLiteral
	| HexIntegerLiteral
	| OctalIntegerLiteral
	| BinaryIntegerLiteral;

DecimalIntegerLiteral: DecimalNumeral IntegerTypeSuffix?;

fragment HexIntegerLiteral: HexNumeral IntegerTypeSuffix?;

fragment OctalIntegerLiteral: OctalNumeral IntegerTypeSuffix?;

fragment BinaryIntegerLiteral: BinaryNumeral IntegerTypeSuffix?;

fragment IntegerTypeSuffix: [lL] | 'UL' | 'ul';

fragment DecimalNumeral:
	'0'
	| NonZeroDigit (Digits? | Underscores Digits);

fragment Digits: Digit (DigitsAndUnderscores? Digit)?;

fragment Digit: '0' | NonZeroDigit;

fragment NonZeroDigit: [1-9];

fragment DigitsAndUnderscores: DigitOrUnderscore+;

fragment DigitOrUnderscore: Digit | '_';

fragment Underscores: '_'+;

fragment HexNumeral: '0' [xX] HexDigits;

fragment HexDigits:
	HexDigit (HexDigitsAndUnderscores? HexDigit)?;

fragment HexDigit: [0-9a-fA-F];

fragment HexDigitsAndUnderscores: HexDigitOrUnderscore+;

fragment HexDigitOrUnderscore: HexDigit | '_';

fragment OctalNumeral: '0' Underscores? OctalDigits;

fragment OctalDigits:
	OctalDigit (OctalDigitsAndUnderscores? OctalDigit)?;

fragment OctalDigit: [0-7];

fragment OctalDigitsAndUnderscores: OctalDigitOrUnderscore+;

fragment OctalDigitOrUnderscore: OctalDigit | '_';

fragment BinaryNumeral: '0' [bB] BinaryDigits;

fragment BinaryDigits:
	BinaryDigit (BinaryDigitsAndUnderscores? BinaryDigit)?;

fragment BinaryDigit: [01];

fragment BinaryDigitsAndUnderscores: BinaryDigitOrUnderscore+;

fragment BinaryDigitOrUnderscore: BinaryDigit | '_';

// Floating-Point Literals

FloatingPointLiteral:
	DecimalFloatingPointLiteral
	| HexadecimalFloatingPointLiteral;

fragment DecimalFloatingPointLiteral:
	Digits '.' Digits? ExponentPart? FloatTypeSuffix?
	| '.' Digits ExponentPart? FloatTypeSuffix?
	| Digits ExponentPart FloatTypeSuffix?
	| Digits FloatTypeSuffix;

fragment ExponentPart: ExponentIndicator SignedInteger;

fragment ExponentIndicator: [eE];

fragment SignedInteger: Sign? Digits;

fragment Sign: [+-];

fragment FloatTypeSuffix: [fFdD];

fragment HexadecimalFloatingPointLiteral:
	HexSignificand BinaryExponent FloatTypeSuffix?;

fragment HexSignificand:
	HexNumeral '.'?
	| '0' [xX] HexDigits? '.' HexDigits;

fragment BinaryExponent: BinaryExponentIndicator SignedInteger;

fragment BinaryExponentIndicator: [pP];

// Separators

ZEN_T_ACLOSE: '}';
ZEN_T_AOPEN: '{';
ZEN_T_BRCLOSE: ')';
ZEN_T_BROPEN: '(';
ZEN_T_COMMA: ',';
ZEN_T_DOT: '.';
ZEN_T_SEMICOLON: ';';
ZEN_T_SQCLOSE: ']';
ZEN_T_SQOPEN: '[';

// Operators

ZEN_T_ADD: '+';
ZEN_T_AND: '&';
ZEN_T_ASSIGN: '=';
ZEN_T_BACKTICK: '`';
ZEN_T_CAT: '~';
ZEN_T_COLON: ':';
ZEN_T_DIV: '/';
ZEN_T_DOLLAR: '$';
ZEN_T_GREATER: '>';
ZEN_T_LESS: '<';
ZEN_T_MOD: '%';
ZEN_T_MUL: '*';
ZEN_T_NOT: '!';
ZEN_T_OR: '|';
ZEN_T_QUEST: '?';
ZEN_T_SUB: '-';
ZEN_T_XOR: '^';

// String Literals

StringLiteral: (
		'"' StringCharacters? '"'
		| '\'' StringCharacters? '\''
	);

fragment StringCharacters: StringCharacter+;

fragment StringCharacter: ~["\\\r\n] | EscapeSequence;

// Escape Sequences for Character and String Literals

fragment EscapeSequence: '\\' [btnfr"'\\] | OctalEscape;

fragment OctalEscape:
	'\\' OctalDigit
	| '\\' OctalDigit OctalDigit
	| '\\' ZeroToThree OctalDigit OctalDigit;

fragment ZeroToThree: [0-3];

// Identifier

fragment ZEN_UPPER_LETTER: [A-Z];

fragment ZEN_LOWER_LETTER: [a-z];

fragment ZEN_LETTER: ( ZEN_UPPER_LETTER | ZEN_LOWER_LETTER);

fragment ZEN_IDENTIFIER_START: '@' | ZEN_LETTER | '_';
fragment ZEN_IDENTIFIER_PART: ZEN_LETTER | Digits | '_';

ZEN_IDENTIFIER: ZEN_IDENTIFIER_START ZEN_IDENTIFIER_PART*;

// Whitespace and comments

ZEN_WS: [ \t\r\n]+ -> skip;
ZEN_COMMENT: '/*' .*? '*/' -> skip;
ZEN_LINE_COMMENT: '//' ~[\r\n]* -> skip;

ZEN_PREPROC_COMMENT: '#' ~[\r\n]* -> skip;