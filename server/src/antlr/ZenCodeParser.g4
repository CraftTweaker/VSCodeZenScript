parser grammar ZenCodeParser;

options {
	tokenVocab = ZenCodeLexer;
}

zenFile: zenImport* (zenDefinition | zenStatement)* EOF;

zenSHLToken: t1 = '<' t2 = '<';
zenSHRToken: t1 = '>' t2 = '>';
zenUSHRToken: t1 = '>' t2 = '>' t3 = '>';
zenAndAndToken: t1 = '&' t2 = '&';
zenCoalesceToken: t1 = '?' t2 = '?';
zenDecrementToken: t1 = '-' t2 = '-';
zenDot2Token: t1 = '.' t2 = '.';
zenDot3Token: t1 = '.' t2 = '.' t3 = '.';
zenEqual2Token: t1 = '=' t2 = '=';
zenEqual3Token: t1 = '=' t2 = '=' t3 = '=';
zenGreaterEqToken: t1 = '>' t2 = '=';
zenIncrementToken: t1 = '+' t2 = '+';
zenLambdaToken: t1 = '=' t2 = '>';
zenLessEqToken: t1 = '<' t2 = '=';
zenNotEqualToken: t1 = '!' t2 = '=';
zenNotEqual2Token: t1 = '!' t2 = '=' t3 = '=';
zenOptCallToken: t1 = '?' t2 = '.';
zenOrOrToken: t1 = '|' t2 = '|';

zenAddAssignToken: t1 = '+' t2 = '=';
zenAndAssignToken: t1 = '&' t2 = '=';
zenCatAssignToken: t1 = '~' t2 = '=';
zenDivAssignToken: t1 = '/' t2 = '=';
zenModAssignToken: t1 = '%' t2 = '=';
zenMulAssignToken: t1 = '*' t2 = '=';

zenOrAssignToken: t1 = '|' t2 = '=';
zenSHLAssignToken: t1 = '<' t2 = '<' t3 = '=';
zenSHRAssignToken: t1 = '>' t2 = '>' t3 = '=';
zenSubAssignToken: t1 = '-' t2 = '=';
zenUSHRAssignToken: t1 = '>' t2 = '>' t3 = '>' t4 = '=';
zenXOrAssignToken: t1 = '^' t2 = '=';

// Types
zenType:
	(
		ZEN_KW_VOID
		| ZEN_KW_BOOL
		| ZEN_KW_BYTE
		| ZEN_KW_SBYTE
		| ZEN_KW_SHORT
		| ZEN_KW_USHORT
		| ZEN_KW_INT
		| ZEN_KW_UINT
		| ZEN_KW_LONG
		| ZEN_KW_ULONG
		| ZEN_KW_USIZE
		| ZEN_KW_FLOAT
		| ZEN_KW_DOUBLE
		| ZEN_KW_CHAR
		| ZEN_KW_STRING
		| ZEN_KW_FUNCTION zenFunctionHeader
		| (
			ZEN_IDENTIFIER zenTypeArguments? (
				ZEN_T_DOT ZEN_IDENTIFIER zenTypeArguments?
			)*
		)
	) (
		(zenDot2Token zenType)
		| (
			ZEN_T_SQOPEN (ZEN_T_COMMA)* ZEN_T_SQCLOSE
			| ZEN_T_LESS zenTypeParam ZEN_T_GREATER
			| ZEN_T_SQOPEN zenType ZEN_T_SQCLOSE
		)
		| ZEN_T_QUEST
	)*;

// The code breaks after finding a single dot2 and making a range, I'm not sure how to convert that to antlr

// Type Params / Args

zenTypeParams:
	ZEN_T_LESS zenTypeParam (ZEN_T_COMMA zenTypeParam)* ZEN_T_GREATER;

zenTypeParam:
	ZEN_IDENTIFIER (ZEN_T_COLON ZEN_KW_SUPER? zenType)*;

// The actual code has some special handling such as if the end token is T_SHRASSIGN, it replaces it with T_GREATER. I don't think that is needed here.

zenTypeArguments:
	ZEN_T_LESS zenType (ZEN_T_COMMA zenType)* ZEN_T_GREATER;

zenCallArguments:
	zenTypeArgumentsForcall? ZEN_T_BROPEN (
		ZEN_T_BRCLOSE
		| zenAssignExpression (ZEN_T_COMMA zenAssignExpression)* ZEN_T_BRCLOSE
	);

// This is the same as zenTypeArguments, but defined differently in code. Should be looked into
zenTypeArgumentsForcall: (
		ZEN_T_LESS zenType (ZEN_T_COMMA zenType)* ZEN_T_GREATER
	);

zenAnnotationCallArguments:
	zenTypeArgumentsForcall? (
		ZEN_T_BROPEN zenAssignExpression (
			ZEN_T_COMMA zenAssignExpression
		)* ZEN_T_BRCLOSE
	);

zenAnnotations: (
		ZEN_T_SQOPEN ZEN_IDENTIFIER zenAnnotationCallArguments? ZEN_T_SQCLOSE
	)*; // Super unsure about this one

// Imports

zenImport:
	ZEN_KW_IMPORT ZEN_T_DOT? ZEN_IDENTIFIER (
		ZEN_T_DOT ZEN_IDENTIFIER
	)* (ZEN_KW_AS ZEN_IDENTIFIER)? ZEN_T_SEMICOLON;

// Modifiers

// Need these without private sometimes...
zenVisibleAccessModifier: (ZEN_KW_PUBLIC | ZEN_KW_PROTECTED);

zenAccessModifier: (zenVisibleAccessModifier | ZEN_KW_PRIVATE);

zenDeclerationModifier: (
		zenAccessModifier
		| ZEN_KW_INTERNAL
		| ZEN_KW_EXTERN
		| ZEN_KW_ABSTRACT
		| ZEN_KW_FINAL
		| ZEN_KW_IMPLICIT
		| ZEN_KW_VIRTUAL
	);

zenMemberNonStaticModifier: (
		ZEN_KW_INTERNAL
		| zenAccessModifier
		| ZEN_KW_CONST
		| ZEN_KW_ABSTRACT
		| ZEN_KW_FINAL
		| ZEN_KW_IMPLICIT
		| ZEN_KW_EXTERN
		| ZEN_KW_OVERRIDE
	);

zenMemberStaticModifier: (
		ZEN_KW_INTERNAL
		| zenAccessModifier
		| ZEN_KW_CONST
		| ZEN_KW_ABSTRACT
		| ZEN_KW_FINAL
		| ZEN_KW_STATIC
		| ZEN_KW_IMPLICIT
		| ZEN_KW_EXTERN
		| ZEN_KW_OVERRIDE
	);

zenDefinition:
	zenAnnotations (
		zenClass
		| zenInterface
		| zenEnum
		| zenStruct
		| zenAlias
		| zenFunction
		| zenExpansion
		| zenVariant
	);

// Definitions
zenClass:
	zenDeclerationModifier* ZEN_KW_CLASS ZEN_IDENTIFIER zenTypeParams? (
		ZEN_T_COLON zenType
	)? ZEN_T_AOPEN (
		ZEN_T_ACLOSE
		| zenDefinitionMember* ZEN_T_ACLOSE
	);

zenInterface:
	zenDeclerationModifier* ZEN_KW_INTERFACE ZEN_IDENTIFIER zenTypeParams? (
		ZEN_T_COLON zenType (ZEN_T_COMMA zenType)*
	)? ZEN_T_AOPEN (zenDefinitionMember)* ZEN_T_ACLOSE;

// I think the comma being first works - also not sure about the ending aclose
zenEnum:
	zenDeclerationModifier* ZEN_KW_ENUM ZEN_IDENTIFIER (
		ZEN_KW_AS zenType
	)? ZEN_T_AOPEN (ZEN_T_COMMA? zenEnumConstant)* (
		ZEN_T_SEMICOLON (zenDefinitionMember)*
	)? ZEN_T_ACLOSE;

zenStruct:
	zenDeclerationModifier* ZEN_KW_STRUCT ZEN_IDENTIFIER zenTypeParams? ZEN_T_AOPEN (
		zenDefinitionMember
	)*? ZEN_T_ACLOSE;

zenAlias:
	zenDeclerationModifier* ZEN_KW_ALIAS ZEN_IDENTIFIER zenTypeParams? ZEN_KW_AS zenType
		ZEN_T_SEMICOLON;

zenFunction:
	zenDeclerationModifier* ZEN_KW_FUNCTION ZEN_IDENTIFIER zenFunctionHeader
		zenFunctionBodyStatement;

zenExpansion:
	zenDeclerationModifier* ZEN_KW_EXPAND zenTypeParams? zenType ZEN_T_AOPEN (
		zenDefinitionMember
	)* ZEN_T_ACLOSE;

// I believe this is right
zenVariant:
	zenDeclerationModifier* ZEN_KW_VARIANT ZEN_IDENTIFIER zenTypeParams? ZEN_T_AOPEN (
		zenVariantOption (ZEN_T_COMMA zenVariantOption)*
	)? (ZEN_T_SEMICOLON (zenDefinitionMember)*)? ZEN_T_ACLOSE;

zenVariantOption:
	ZEN_IDENTIFIER (
		ZEN_T_BROPEN zenType (ZEN_T_COMMA zenType)* ZEN_T_BRCLOSE
	)?;

zenEnumConstant:
	ZEN_IDENTIFIER (
		ZEN_T_BROPEN zenAssignExpression (
			ZEN_T_COMMA zenAssignExpression
		)* ZEN_T_BRCLOSE
	)? (ZEN_T_ASSIGN zenAssignExpression)?;

// Members

zenDefinitionMember:
	zenAnnotations zenMemberStaticModifier* (
		zenFieldMember
		| zenThisMember
		| zenConstOrMethodMember
		| zenSetterMember
		| zenGetterMember
		| zenImplementsMember
		| zenCallerMember
		| zenIndexGetOperator
		| zenDestructor
		| zenOperator
		| zenCaster
		| zenContainsOperator
		| zenInnerDefinition
		| zenIterator
		| zenStaticInitializer
	);
// TODO I have no idea how this is meant to handle the static before the zenStaticInitializer

zenFieldMember:
	(ZEN_KW_VAR | ZEN_KW_VAL) ZEN_IDENTIFIER (ZEN_KW_AS zenType)? (
		ZEN_T_COLON zenVisibleAccessModifier? (
			ZEN_KW_GET
			| ZEN_KW_SET
		) (
			ZEN_T_COMMA zenVisibleAccessModifier? (
				ZEN_KW_GET
				| ZEN_KW_SET
			)
		)*
	)? (ZEN_T_ASSIGN zenAssignExpression)? ZEN_T_SEMICOLON;

zenThisMember:
	ZEN_KW_THIS zenFunctionHeader zenFunctionBodyStatement;

// This one is so scuffed. I doubt it works
zenConstOrMethodMember:
	ZEN_IDENTIFIER (
		(
			(ZEN_KW_AS zenType)? ZEN_T_ASSIGN zenAssignExpression ZEN_T_SEMICOLON
		)
		| zenFunctionHeader zenFunctionBodyStatement
	);

zenSetterMember:
	ZEN_KW_SET ZEN_IDENTIFIER (ZEN_KW_AS zenType)? zenFunctionBodyStatement;

zenGetterMember:
	ZEN_KW_GET ZEN_IDENTIFIER (ZEN_KW_AS zenType)? zenFunctionBodyStatement;

zenImplementsMember:
	ZEN_KW_IMPLEMENTS zenType (
		ZEN_T_SEMICOLON
		| ZEN_T_AOPEN (
			ZEN_T_ACLOSE
			| (zenDefinitionMember* ZEN_T_ACLOSE)
		)
	);

zenCallerMember: zenFunctionHeader zenFunctionBodyStatement;

zenIndexGetOperator:
	ZEN_T_SQOPEN ZEN_T_SQCLOSE ZEN_T_ASSIGN? zenFunctionHeader zenFunctionBodyStatement;

zenDestructor: ZEN_T_CAT ZEN_KW_THIS zenFunctionBody;

zenOperator: (
		ZEN_T_CAT
		| (zenEqual2Token | (ZEN_T_ASSIGN ZEN_T_ASSIGN))
		| ZEN_T_ADD
		| ZEN_T_SUB
		| ZEN_T_MUL
		| ZEN_T_DIV
		| ZEN_T_MOD
		| ZEN_T_AND
		| ZEN_T_OR
		| ZEN_T_XOR
		| ZEN_T_NOT
		| zenAddAssignToken
		| zenSubAssignToken
		| zenCatAssignToken
		| zenMulAssignToken
		| zenDivAssignToken
		| zenModAssignToken
		| zenAndAssignToken
		| zenOrAssignToken
		| zenXOrAssignToken
		| zenIncrementToken
		| zenDecrementToken
		| zenDot2Token
		| zenSHLToken
		| zenSHRToken
		| zenUSHRToken
		| zenSHLAssignToken
		| zenSHRAssignToken
		| zenUSHRAssignToken
	) zenFunctionHeader zenFunctionBodyStatement;

zenEqualsOperator:
	zenEqual2Token zenFunctionHeader zenFunctionBodyStatement;

zenCaster: ZEN_KW_AS zenType zenFunctionBodyStatement;

zenContainsOperator:
	ZEN_KW_IN zenFunctionHeader zenFunctionBodyStatement;

zenInnerDefinition: zenDefinition;
/*
 This used to read:
 zenInnerDefinition:
 (
 ZEN_KW_CLASS
 | ZEN_KW_INTERFACE
 | ZEN_KW_ALIAS
 |
 ZEN_KW_STRUCT
 | ZEN_KW_ENUM
 ) zenDefinition;
 But that would fail since it would expect `private
 struct struct Node`, also I feel that it only accepting these and not something such as expand /
 variant is a bug in the code
 */

zenIterator:
	ZEN_KW_FOR zenFunctionHeader zenFunctionBodyStatement;

// Doesn't handle the static part before it...
zenStaticInitializer: ZEN_T_AOPEN zenStatementBlock;

// Functions

zenFunctionHeader:
	zenTypeParams? ZEN_T_BROPEN (
		ZEN_T_BRCLOSE
		| (
			zenFunctionParameter (
				ZEN_T_COMMA zenFunctionParameter
			)* ZEN_T_BRCLOSE
		)
	) ((ZEN_KW_AS | ZEN_T_COLON) zenType)? (
		ZEN_KW_THROWS zenType
	)?;

zenFunctionParameter: (
		zenAnnotations ZEN_IDENTIFIER zenDot3Token? (
			(ZEN_KW_AS | ZEN_T_COLON) zenType
		)? (ZEN_T_ASSIGN zenAssignExpression)?
	);

zenFunctionBodyStatement: (
		zenFunctionLambda
		| ZEN_T_SEMICOLON
		| zenFunctionBody
	);

zenFunctionBody: zenStatementBlock | ZEN_T_SEMICOLON;

// Expressions

zenIntExpression: DecimalIntegerLiteral;

zenPrefixedIntExpression: IntegerLiteral;

zenFloatExpression: FloatingPointLiteral;

zenStringExpression: StringLiteral;

// Doesn't handle the @ part
zenVariableExpression: ZEN_IDENTIFIER zenTypeArguments?;

zenLocalExpressionVariable: ZEN_T_DOLLAR ZEN_IDENTIFIER;

zenThisExpression: ZEN_KW_THIS;

zenSuperExpression: ZEN_KW_SUPER;

zenDollarExpression: ZEN_T_DOLLAR;

zenArrayExpression:
	ZEN_T_SQOPEN (
		ZEN_T_SQCLOSE
		| zenAssignExpression (ZEN_T_COMMA zenAssignExpression)* ZEN_T_SQCLOSE
	);

zenMapExpression:
	ZEN_T_AOPEN (
		ZEN_T_ACLOSE
		| zenAssignExpression (ZEN_T_COLON zenAssignExpression)? (
			ZEN_T_COMMA zenAssignExpression (
				ZEN_T_COLON zenAssignExpression
			)?
		)* ZEN_T_ACLOSE
	);

zenTrueExpression: ZEN_KW_TRUE;

zenFalseExpression: ZEN_KW_FALSE;

zenNullExpression: ZEN_KW_NULL;

zenBracketExpression:
	ZEN_T_BROPEN (
		ZEN_T_BRCLOSE
		| zenAssignExpression (ZEN_T_COMMA zenAssignExpression)* ZEN_T_BRCLOSE
	);

// TODO the code says that if it is either `(` or `<` then do the call arguments, feels a bit
zenNewExpression: ZEN_KW_NEW zenType zenCallArguments?;

zenThrowExpression: ZEN_KW_THROW zenAssignExpression;

zenPanicExpression: ZEN_KW_PANIC zenAssignExpression;

zenMatchExpression:
	ZEN_KW_MATCH zenAssignExpression ZEN_T_AOPEN (
		ZEN_T_ACLOSE
		| (
			(ZEN_KW_DEFAULT | zenAssignExpression) zenLambdaToken zenAssignExpression ZEN_T_COMMA?
		)* ZEN_T_ACLOSE
	);

zenBracketHandlerExpression:
	ZEN_T_LESS (~ZEN_T_GREATER ZEN_T_COLON?)* ZEN_T_GREATER;

zenPrimaryExpression: (
		zenIntExpression
		| zenPrefixedIntExpression
		| zenFloatExpression
		| zenStringExpression
		| zenVariableExpression
		| zenLocalExpressionVariable
		| zenThisExpression
		| zenSuperExpression
		| zenDollarExpression
		| zenArrayExpression
		| zenMapExpression
		| zenTrueExpression
		| zenFalseExpression
		| zenNullExpression
		| zenBracketExpression
		| zenNewExpression
		| zenThrowExpression
		| zenPanicExpression
		| zenMatchExpression
		| zenBracketHandlerExpression
		| zenType
	);

zenPostfixExpression:
	zenPrimaryExpression (
		ZEN_T_DOT (
			(ZEN_IDENTIFIER zenTypeArguments?)
			| ZEN_T_DOLLAR
			| StringLiteral
		)
		| zenDot2Token zenAssignExpression
		| ZEN_T_SQOPEN (
			zenAssignExpression (ZEN_T_COMMA zenAssignExpression)*
		) ZEN_T_SQCLOSE
		| zenCallArguments
		| ZEN_KW_AS ZEN_T_QUEST? zenType
		| zenIncrementToken
		| zenDecrementToken
		| zenExpressionLambda
	)*;

zenUnaryExpression: (
		(
			(
				ZEN_T_NOT
				| ZEN_T_SUB
				| ZEN_T_CAT
				| zenIncrementToken
				| zenDecrementToken
			) zenUnaryExpression
		)
		| ZEN_KW_TRY (
			(ZEN_T_QUEST | ZEN_T_NOT) zenUnaryExpression
			| zenPostfixExpression
		)
	)
	| zenPostfixExpression;

zenMulExpression:
	zenUnaryExpression (
		(ZEN_T_MUL | ZEN_T_DIV | ZEN_T_MOD) zenUnaryExpression
	)*;

zenAddExpression:
	zenMulExpression (
		(ZEN_T_ADD | ZEN_T_SUB | ZEN_T_CAT) zenMulExpression
	)*;

zenShiftExpression:
	zenAddExpression (
		(zenSHLToken | zenSHRToken | zenUSHRToken) zenAddExpression
	)*;

zenCompareExpression:
	zenShiftExpression (
		(
			zenEqual2Token
			| zenEqual3Token
			| zenNotEqualToken
			| zenNotEqual2Token
			| ZEN_T_LESS
			| zenLessEqToken
			| ZEN_T_GREATER
			| zenGreaterEqToken
			| ZEN_KW_IN
		) zenShiftExpression
		| (ZEN_KW_IS zenType)
		| (
			ZEN_T_NOT (
				ZEN_KW_IN zenShiftExpression
				| ZEN_KW_IS zenType
			)
		)
	)?;

zenAndExpression:
	zenCompareExpression (ZEN_T_AND zenCompareExpression)*;

zenXorExpression:
	zenAndExpression (ZEN_T_XOR zenAndExpression)*;

zenOrExpression: zenXorExpression (ZEN_T_OR zenXorExpression)*;

zenAndAndExpression:
	zenOrExpression (zenAndAndToken zenOrExpression)*;

zenOrOrExpression:
	zenAndAndExpression (zenOrOrToken zenAndAndExpression)* (
		zenCoalesceToken zenAndAndExpression
	)*;

zenConditionalExpression:
	zenOrOrExpression (
		ZEN_T_QUEST zenOrOrExpression ZEN_T_COLON zenConditionalExpression
	)?;

zenAssignExpression:
	zenConditionalExpression (
		(
			ZEN_T_ASSIGN
			| zenAddAssignToken
			| zenSubAssignToken
			| zenCatAssignToken
			| zenMulAssignToken
			| zenDivAssignToken
			| zenModAssignToken
			| zenOrAssignToken
			| zenAndAssignToken
			| zenXOrAssignToken
			| zenSHLAssignToken
			| zenSHRAssignToken
			| zenUSHRAssignToken
		) zenAssignExpression
	)?;

zenStatementBlock:
	ZEN_T_AOPEN (ZEN_T_ACLOSE | (zenStatement* ZEN_T_ACLOSE));
// Fairly sure if you don't close your statement it will never finish parsing....

zenStatementReturn:
	ZEN_KW_RETURN (
		ZEN_T_SEMICOLON
		| zenAssignExpression ZEN_T_SEMICOLON
	);

zenStatementVar: (ZEN_KW_VAR | ZEN_KW_VAL) ZEN_IDENTIFIER (
		(ZEN_KW_AS | ZEN_T_COLON) zenType
	)? (ZEN_T_ASSIGN zenAssignExpression)? ZEN_T_SEMICOLON;

zenStatementIf:
	ZEN_KW_IF zenAssignExpression zenAnnotatedStatement (
		ZEN_KW_ELSE zenAnnotatedStatement
	)?;

zenStatementFor:
	ZEN_KW_FOR ZEN_IDENTIFIER (ZEN_T_COMMA ZEN_IDENTIFIER)* ZEN_KW_IN zenAssignExpression
		zenAnnotatedStatement;

zenStatementDo:
	ZEN_KW_DO (ZEN_T_COLON ZEN_IDENTIFIER)? zenAnnotatedStatement ZEN_KW_WHILE zenAssignExpression
		ZEN_T_SEMICOLON;

zenStatementWhile:
	ZEN_KW_WHILE (ZEN_T_COLON ZEN_IDENTIFIER)? zenAssignExpression zenAnnotatedStatement;

zenStatementLock:
	ZEN_KW_LOCK zenAssignExpression zenAnnotatedStatement;

zenStatementThrow:
	ZEN_KW_THROW zenAssignExpression ZEN_T_SEMICOLON;

zenStatementTry:
	ZEN_KW_TRY (ZEN_IDENTIFIER ZEN_T_ASSIGN zenAssignExpression)? zenAnnotatedStatement (
		ZEN_KW_CATCH ZEN_IDENTIFIER? (ZEN_KW_AS zenType)? zenAnnotatedStatement
	)* (ZEN_KW_FINALLY zenAnnotatedStatement)?;
// There is literally no way that this actually works - also doesn't even acknowledge try? or try!

zenStatementContinue:
	ZEN_KW_CONTINUE ZEN_IDENTIFIER? ZEN_T_SEMICOLON;

zenStatementBreak: ZEN_KW_BREAK ZEN_IDENTIFIER? ZEN_T_SEMICOLON;

zenSwitchCaseStatement:
	ZEN_KW_CASE zenAssignExpression ZEN_T_COLON;

zenSwitchStatement:
	ZEN_KW_SWITCH (ZEN_T_COLON ZEN_IDENTIFIER)? zenAssignExpression ZEN_T_AOPEN (
		ZEN_T_ACLOSE
		| (
			zenSwitchCaseStatement
			| (ZEN_KW_DEFAULT ZEN_T_COLON)
			| zenAnnotatedStatement
		)* ZEN_T_ACLOSE
	);

zenStatement:
	(
		zenStatementBlock
		| zenStatementReturn
		| zenStatementVar
		| zenStatementIf
		| zenStatementFor
		| zenStatementDo
		| zenStatementWhile
		| zenStatementLock
		| zenStatementThrow
		| zenStatementTry
		| zenStatementContinue
		| zenStatementBreak
		| zenSwitchStatement
	)
	| zenAssignExpression ZEN_T_SEMICOLON;

zenAnnotatedStatement:
	zenAnnotations (
		(
			zenStatementBlock
			| zenStatementReturn
			| zenStatementVar
			| zenStatementIf
			| zenStatementFor
			| zenStatementDo
			| zenStatementWhile
			| zenStatementLock
			| zenStatementThrow
			| zenStatementTry
			| zenStatementContinue
			| zenStatementBreak
			| zenSwitchStatement
		)
		| zenAssignExpression ZEN_T_SEMICOLON
	);

zenExpressionLambda:
	zenLambdaToken (zenStatementBlock | zenAssignExpression);

zenFunctionLambda:
	zenLambdaToken (zenStatementBlock | zenAssignExpression) ZEN_T_SEMICOLON;

// TODO I fear that we may need to duplicate all the expressions due to the allowLambda parsing
// option