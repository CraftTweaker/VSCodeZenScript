// Generated from ./server/src/antlr/ZenCodeParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ZenFileContext } from "./ZenCodeParser";
import { ZenSHLTokenContext } from "./ZenCodeParser";
import { ZenSHRTokenContext } from "./ZenCodeParser";
import { ZenUSHRTokenContext } from "./ZenCodeParser";
import { ZenAndAndTokenContext } from "./ZenCodeParser";
import { ZenCoalesceTokenContext } from "./ZenCodeParser";
import { ZenDecrementTokenContext } from "./ZenCodeParser";
import { ZenDot2TokenContext } from "./ZenCodeParser";
import { ZenDot3TokenContext } from "./ZenCodeParser";
import { ZenEqual2TokenContext } from "./ZenCodeParser";
import { ZenEqual3TokenContext } from "./ZenCodeParser";
import { ZenGreaterEqTokenContext } from "./ZenCodeParser";
import { ZenIncrementTokenContext } from "./ZenCodeParser";
import { ZenLambdaTokenContext } from "./ZenCodeParser";
import { ZenLessEqTokenContext } from "./ZenCodeParser";
import { ZenNotEqualTokenContext } from "./ZenCodeParser";
import { ZenNotEqual2TokenContext } from "./ZenCodeParser";
import { ZenOptCallTokenContext } from "./ZenCodeParser";
import { ZenOrOrTokenContext } from "./ZenCodeParser";
import { ZenAddAssignTokenContext } from "./ZenCodeParser";
import { ZenAndAssignTokenContext } from "./ZenCodeParser";
import { ZenCatAssignTokenContext } from "./ZenCodeParser";
import { ZenDivAssignTokenContext } from "./ZenCodeParser";
import { ZenModAssignTokenContext } from "./ZenCodeParser";
import { ZenMulAssignTokenContext } from "./ZenCodeParser";
import { ZenOrAssignTokenContext } from "./ZenCodeParser";
import { ZenSHLAssignTokenContext } from "./ZenCodeParser";
import { ZenSHRAssignTokenContext } from "./ZenCodeParser";
import { ZenSubAssignTokenContext } from "./ZenCodeParser";
import { ZenUSHRAssignTokenContext } from "./ZenCodeParser";
import { ZenXOrAssignTokenContext } from "./ZenCodeParser";
import { ZenTypeContext } from "./ZenCodeParser";
import { ZenTypeParamsContext } from "./ZenCodeParser";
import { ZenTypeParamContext } from "./ZenCodeParser";
import { ZenTypeArgumentsContext } from "./ZenCodeParser";
import { ZenCallArgumentsContext } from "./ZenCodeParser";
import { ZenTypeArgumentsForcallContext } from "./ZenCodeParser";
import { ZenAnnotationCallArgumentsContext } from "./ZenCodeParser";
import { ZenAnnotationsContext } from "./ZenCodeParser";
import { ZenImportContext } from "./ZenCodeParser";
import { ZenVisibleAccessModifierContext } from "./ZenCodeParser";
import { ZenAccessModifierContext } from "./ZenCodeParser";
import { ZenDeclerationModifierContext } from "./ZenCodeParser";
import { ZenMemberNonStaticModifierContext } from "./ZenCodeParser";
import { ZenMemberStaticModifierContext } from "./ZenCodeParser";
import { ZenDefinitionContext } from "./ZenCodeParser";
import { ZenClassContext } from "./ZenCodeParser";
import { ZenInterfaceContext } from "./ZenCodeParser";
import { ZenEnumContext } from "./ZenCodeParser";
import { ZenStructContext } from "./ZenCodeParser";
import { ZenAliasContext } from "./ZenCodeParser";
import { ZenFunctionContext } from "./ZenCodeParser";
import { ZenExpansionContext } from "./ZenCodeParser";
import { ZenVariantContext } from "./ZenCodeParser";
import { ZenVariantOptionContext } from "./ZenCodeParser";
import { ZenEnumConstantContext } from "./ZenCodeParser";
import { ZenDefinitionMemberContext } from "./ZenCodeParser";
import { ZenFieldMemberContext } from "./ZenCodeParser";
import { ZenThisMemberContext } from "./ZenCodeParser";
import { ZenConstOrMethodMemberContext } from "./ZenCodeParser";
import { ZenSetterMemberContext } from "./ZenCodeParser";
import { ZenGetterMemberContext } from "./ZenCodeParser";
import { ZenImplementsMemberContext } from "./ZenCodeParser";
import { ZenCallerMemberContext } from "./ZenCodeParser";
import { ZenIndexGetOperatorContext } from "./ZenCodeParser";
import { ZenDestructorContext } from "./ZenCodeParser";
import { ZenOperatorContext } from "./ZenCodeParser";
import { ZenEqualsOperatorContext } from "./ZenCodeParser";
import { ZenCasterContext } from "./ZenCodeParser";
import { ZenContainsOperatorContext } from "./ZenCodeParser";
import { ZenInnerDefinitionContext } from "./ZenCodeParser";
import { ZenIteratorContext } from "./ZenCodeParser";
import { ZenStaticInitializerContext } from "./ZenCodeParser";
import { ZenFunctionHeaderContext } from "./ZenCodeParser";
import { ZenFunctionParameterContext } from "./ZenCodeParser";
import { ZenFunctionBodyStatementContext } from "./ZenCodeParser";
import { ZenFunctionBodyContext } from "./ZenCodeParser";
import { ZenIntExpressionContext } from "./ZenCodeParser";
import { ZenPrefixedIntExpressionContext } from "./ZenCodeParser";
import { ZenFloatExpressionContext } from "./ZenCodeParser";
import { ZenStringExpressionContext } from "./ZenCodeParser";
import { ZenVariableExpressionContext } from "./ZenCodeParser";
import { ZenLocalExpressionVariableContext } from "./ZenCodeParser";
import { ZenThisExpressionContext } from "./ZenCodeParser";
import { ZenSuperExpressionContext } from "./ZenCodeParser";
import { ZenDollarExpressionContext } from "./ZenCodeParser";
import { ZenArrayExpressionContext } from "./ZenCodeParser";
import { ZenMapExpressionContext } from "./ZenCodeParser";
import { ZenTrueExpressionContext } from "./ZenCodeParser";
import { ZenFalseExpressionContext } from "./ZenCodeParser";
import { ZenNullExpressionContext } from "./ZenCodeParser";
import { ZenBracketExpressionContext } from "./ZenCodeParser";
import { ZenNewExpressionContext } from "./ZenCodeParser";
import { ZenThrowExpressionContext } from "./ZenCodeParser";
import { ZenPanicExpressionContext } from "./ZenCodeParser";
import { ZenMatchExpressionContext } from "./ZenCodeParser";
import { ZenBracketHandlerExpressionContext } from "./ZenCodeParser";
import { ZenPrimaryExpressionContext } from "./ZenCodeParser";
import { ZenPostfixExpressionContext } from "./ZenCodeParser";
import { ZenUnaryExpressionContext } from "./ZenCodeParser";
import { ZenMulExpressionContext } from "./ZenCodeParser";
import { ZenAddExpressionContext } from "./ZenCodeParser";
import { ZenShiftExpressionContext } from "./ZenCodeParser";
import { ZenCompareExpressionContext } from "./ZenCodeParser";
import { ZenAndExpressionContext } from "./ZenCodeParser";
import { ZenXorExpressionContext } from "./ZenCodeParser";
import { ZenOrExpressionContext } from "./ZenCodeParser";
import { ZenAndAndExpressionContext } from "./ZenCodeParser";
import { ZenOrOrExpressionContext } from "./ZenCodeParser";
import { ZenConditionalExpressionContext } from "./ZenCodeParser";
import { ZenAssignExpressionContext } from "./ZenCodeParser";
import { ZenStatementBlockContext } from "./ZenCodeParser";
import { ZenStatementReturnContext } from "./ZenCodeParser";
import { ZenStatementVarContext } from "./ZenCodeParser";
import { ZenStatementIfContext } from "./ZenCodeParser";
import { ZenStatementForContext } from "./ZenCodeParser";
import { ZenStatementDoContext } from "./ZenCodeParser";
import { ZenStatementWhileContext } from "./ZenCodeParser";
import { ZenStatementLockContext } from "./ZenCodeParser";
import { ZenStatementThrowContext } from "./ZenCodeParser";
import { ZenStatementTryContext } from "./ZenCodeParser";
import { ZenStatementContinueContext } from "./ZenCodeParser";
import { ZenStatementBreakContext } from "./ZenCodeParser";
import { ZenSwitchCaseStatementContext } from "./ZenCodeParser";
import { ZenSwitchStatementContext } from "./ZenCodeParser";
import { ZenStatementContext } from "./ZenCodeParser";
import { ZenAnnotatedStatementContext } from "./ZenCodeParser";
import { ZenExpressionLambdaContext } from "./ZenCodeParser";
import { ZenFunctionLambdaContext } from "./ZenCodeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ZenCodeParser`.
 */
export interface ZenCodeParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenFile`.
	 * @param ctx the parse tree
	 */
	enterZenFile?: (ctx: ZenFileContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenFile`.
	 * @param ctx the parse tree
	 */
	exitZenFile?: (ctx: ZenFileContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenSHLToken`.
	 * @param ctx the parse tree
	 */
	enterZenSHLToken?: (ctx: ZenSHLTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenSHLToken`.
	 * @param ctx the parse tree
	 */
	exitZenSHLToken?: (ctx: ZenSHLTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenSHRToken`.
	 * @param ctx the parse tree
	 */
	enterZenSHRToken?: (ctx: ZenSHRTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenSHRToken`.
	 * @param ctx the parse tree
	 */
	exitZenSHRToken?: (ctx: ZenSHRTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenUSHRToken`.
	 * @param ctx the parse tree
	 */
	enterZenUSHRToken?: (ctx: ZenUSHRTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenUSHRToken`.
	 * @param ctx the parse tree
	 */
	exitZenUSHRToken?: (ctx: ZenUSHRTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAndAndToken`.
	 * @param ctx the parse tree
	 */
	enterZenAndAndToken?: (ctx: ZenAndAndTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAndAndToken`.
	 * @param ctx the parse tree
	 */
	exitZenAndAndToken?: (ctx: ZenAndAndTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenCoalesceToken`.
	 * @param ctx the parse tree
	 */
	enterZenCoalesceToken?: (ctx: ZenCoalesceTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenCoalesceToken`.
	 * @param ctx the parse tree
	 */
	exitZenCoalesceToken?: (ctx: ZenCoalesceTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenDecrementToken`.
	 * @param ctx the parse tree
	 */
	enterZenDecrementToken?: (ctx: ZenDecrementTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenDecrementToken`.
	 * @param ctx the parse tree
	 */
	exitZenDecrementToken?: (ctx: ZenDecrementTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenDot2Token`.
	 * @param ctx the parse tree
	 */
	enterZenDot2Token?: (ctx: ZenDot2TokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenDot2Token`.
	 * @param ctx the parse tree
	 */
	exitZenDot2Token?: (ctx: ZenDot2TokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenDot3Token`.
	 * @param ctx the parse tree
	 */
	enterZenDot3Token?: (ctx: ZenDot3TokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenDot3Token`.
	 * @param ctx the parse tree
	 */
	exitZenDot3Token?: (ctx: ZenDot3TokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenEqual2Token`.
	 * @param ctx the parse tree
	 */
	enterZenEqual2Token?: (ctx: ZenEqual2TokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenEqual2Token`.
	 * @param ctx the parse tree
	 */
	exitZenEqual2Token?: (ctx: ZenEqual2TokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenEqual3Token`.
	 * @param ctx the parse tree
	 */
	enterZenEqual3Token?: (ctx: ZenEqual3TokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenEqual3Token`.
	 * @param ctx the parse tree
	 */
	exitZenEqual3Token?: (ctx: ZenEqual3TokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenGreaterEqToken`.
	 * @param ctx the parse tree
	 */
	enterZenGreaterEqToken?: (ctx: ZenGreaterEqTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenGreaterEqToken`.
	 * @param ctx the parse tree
	 */
	exitZenGreaterEqToken?: (ctx: ZenGreaterEqTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenIncrementToken`.
	 * @param ctx the parse tree
	 */
	enterZenIncrementToken?: (ctx: ZenIncrementTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenIncrementToken`.
	 * @param ctx the parse tree
	 */
	exitZenIncrementToken?: (ctx: ZenIncrementTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenLambdaToken`.
	 * @param ctx the parse tree
	 */
	enterZenLambdaToken?: (ctx: ZenLambdaTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenLambdaToken`.
	 * @param ctx the parse tree
	 */
	exitZenLambdaToken?: (ctx: ZenLambdaTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenLessEqToken`.
	 * @param ctx the parse tree
	 */
	enterZenLessEqToken?: (ctx: ZenLessEqTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenLessEqToken`.
	 * @param ctx the parse tree
	 */
	exitZenLessEqToken?: (ctx: ZenLessEqTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenNotEqualToken`.
	 * @param ctx the parse tree
	 */
	enterZenNotEqualToken?: (ctx: ZenNotEqualTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenNotEqualToken`.
	 * @param ctx the parse tree
	 */
	exitZenNotEqualToken?: (ctx: ZenNotEqualTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenNotEqual2Token`.
	 * @param ctx the parse tree
	 */
	enterZenNotEqual2Token?: (ctx: ZenNotEqual2TokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenNotEqual2Token`.
	 * @param ctx the parse tree
	 */
	exitZenNotEqual2Token?: (ctx: ZenNotEqual2TokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenOptCallToken`.
	 * @param ctx the parse tree
	 */
	enterZenOptCallToken?: (ctx: ZenOptCallTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenOptCallToken`.
	 * @param ctx the parse tree
	 */
	exitZenOptCallToken?: (ctx: ZenOptCallTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenOrOrToken`.
	 * @param ctx the parse tree
	 */
	enterZenOrOrToken?: (ctx: ZenOrOrTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenOrOrToken`.
	 * @param ctx the parse tree
	 */
	exitZenOrOrToken?: (ctx: ZenOrOrTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAddAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenAddAssignToken?: (ctx: ZenAddAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAddAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenAddAssignToken?: (ctx: ZenAddAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAndAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenAndAssignToken?: (ctx: ZenAndAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAndAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenAndAssignToken?: (ctx: ZenAndAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenCatAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenCatAssignToken?: (ctx: ZenCatAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenCatAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenCatAssignToken?: (ctx: ZenCatAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenDivAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenDivAssignToken?: (ctx: ZenDivAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenDivAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenDivAssignToken?: (ctx: ZenDivAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenModAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenModAssignToken?: (ctx: ZenModAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenModAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenModAssignToken?: (ctx: ZenModAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenMulAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenMulAssignToken?: (ctx: ZenMulAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenMulAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenMulAssignToken?: (ctx: ZenMulAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenOrAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenOrAssignToken?: (ctx: ZenOrAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenOrAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenOrAssignToken?: (ctx: ZenOrAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenSHLAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenSHLAssignToken?: (ctx: ZenSHLAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenSHLAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenSHLAssignToken?: (ctx: ZenSHLAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenSHRAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenSHRAssignToken?: (ctx: ZenSHRAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenSHRAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenSHRAssignToken?: (ctx: ZenSHRAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenSubAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenSubAssignToken?: (ctx: ZenSubAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenSubAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenSubAssignToken?: (ctx: ZenSubAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenUSHRAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenUSHRAssignToken?: (ctx: ZenUSHRAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenUSHRAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenUSHRAssignToken?: (ctx: ZenUSHRAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenXOrAssignToken`.
	 * @param ctx the parse tree
	 */
	enterZenXOrAssignToken?: (ctx: ZenXOrAssignTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenXOrAssignToken`.
	 * @param ctx the parse tree
	 */
	exitZenXOrAssignToken?: (ctx: ZenXOrAssignTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenType`.
	 * @param ctx the parse tree
	 */
	enterZenType?: (ctx: ZenTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenType`.
	 * @param ctx the parse tree
	 */
	exitZenType?: (ctx: ZenTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenTypeParams`.
	 * @param ctx the parse tree
	 */
	enterZenTypeParams?: (ctx: ZenTypeParamsContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenTypeParams`.
	 * @param ctx the parse tree
	 */
	exitZenTypeParams?: (ctx: ZenTypeParamsContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenTypeParam`.
	 * @param ctx the parse tree
	 */
	enterZenTypeParam?: (ctx: ZenTypeParamContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenTypeParam`.
	 * @param ctx the parse tree
	 */
	exitZenTypeParam?: (ctx: ZenTypeParamContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenTypeArguments`.
	 * @param ctx the parse tree
	 */
	enterZenTypeArguments?: (ctx: ZenTypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenTypeArguments`.
	 * @param ctx the parse tree
	 */
	exitZenTypeArguments?: (ctx: ZenTypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenCallArguments`.
	 * @param ctx the parse tree
	 */
	enterZenCallArguments?: (ctx: ZenCallArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenCallArguments`.
	 * @param ctx the parse tree
	 */
	exitZenCallArguments?: (ctx: ZenCallArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenTypeArgumentsForcall`.
	 * @param ctx the parse tree
	 */
	enterZenTypeArgumentsForcall?: (ctx: ZenTypeArgumentsForcallContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenTypeArgumentsForcall`.
	 * @param ctx the parse tree
	 */
	exitZenTypeArgumentsForcall?: (ctx: ZenTypeArgumentsForcallContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAnnotationCallArguments`.
	 * @param ctx the parse tree
	 */
	enterZenAnnotationCallArguments?: (ctx: ZenAnnotationCallArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAnnotationCallArguments`.
	 * @param ctx the parse tree
	 */
	exitZenAnnotationCallArguments?: (ctx: ZenAnnotationCallArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAnnotations`.
	 * @param ctx the parse tree
	 */
	enterZenAnnotations?: (ctx: ZenAnnotationsContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAnnotations`.
	 * @param ctx the parse tree
	 */
	exitZenAnnotations?: (ctx: ZenAnnotationsContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenImport`.
	 * @param ctx the parse tree
	 */
	enterZenImport?: (ctx: ZenImportContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenImport`.
	 * @param ctx the parse tree
	 */
	exitZenImport?: (ctx: ZenImportContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenVisibleAccessModifier`.
	 * @param ctx the parse tree
	 */
	enterZenVisibleAccessModifier?: (ctx: ZenVisibleAccessModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenVisibleAccessModifier`.
	 * @param ctx the parse tree
	 */
	exitZenVisibleAccessModifier?: (ctx: ZenVisibleAccessModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAccessModifier`.
	 * @param ctx the parse tree
	 */
	enterZenAccessModifier?: (ctx: ZenAccessModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAccessModifier`.
	 * @param ctx the parse tree
	 */
	exitZenAccessModifier?: (ctx: ZenAccessModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenDeclerationModifier`.
	 * @param ctx the parse tree
	 */
	enterZenDeclerationModifier?: (ctx: ZenDeclerationModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenDeclerationModifier`.
	 * @param ctx the parse tree
	 */
	exitZenDeclerationModifier?: (ctx: ZenDeclerationModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenMemberNonStaticModifier`.
	 * @param ctx the parse tree
	 */
	enterZenMemberNonStaticModifier?: (ctx: ZenMemberNonStaticModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenMemberNonStaticModifier`.
	 * @param ctx the parse tree
	 */
	exitZenMemberNonStaticModifier?: (ctx: ZenMemberNonStaticModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenMemberStaticModifier`.
	 * @param ctx the parse tree
	 */
	enterZenMemberStaticModifier?: (ctx: ZenMemberStaticModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenMemberStaticModifier`.
	 * @param ctx the parse tree
	 */
	exitZenMemberStaticModifier?: (ctx: ZenMemberStaticModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenDefinition`.
	 * @param ctx the parse tree
	 */
	enterZenDefinition?: (ctx: ZenDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenDefinition`.
	 * @param ctx the parse tree
	 */
	exitZenDefinition?: (ctx: ZenDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenClass`.
	 * @param ctx the parse tree
	 */
	enterZenClass?: (ctx: ZenClassContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenClass`.
	 * @param ctx the parse tree
	 */
	exitZenClass?: (ctx: ZenClassContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenInterface`.
	 * @param ctx the parse tree
	 */
	enterZenInterface?: (ctx: ZenInterfaceContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenInterface`.
	 * @param ctx the parse tree
	 */
	exitZenInterface?: (ctx: ZenInterfaceContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenEnum`.
	 * @param ctx the parse tree
	 */
	enterZenEnum?: (ctx: ZenEnumContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenEnum`.
	 * @param ctx the parse tree
	 */
	exitZenEnum?: (ctx: ZenEnumContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStruct`.
	 * @param ctx the parse tree
	 */
	enterZenStruct?: (ctx: ZenStructContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStruct`.
	 * @param ctx the parse tree
	 */
	exitZenStruct?: (ctx: ZenStructContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAlias`.
	 * @param ctx the parse tree
	 */
	enterZenAlias?: (ctx: ZenAliasContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAlias`.
	 * @param ctx the parse tree
	 */
	exitZenAlias?: (ctx: ZenAliasContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenFunction`.
	 * @param ctx the parse tree
	 */
	enterZenFunction?: (ctx: ZenFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenFunction`.
	 * @param ctx the parse tree
	 */
	exitZenFunction?: (ctx: ZenFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenExpansion`.
	 * @param ctx the parse tree
	 */
	enterZenExpansion?: (ctx: ZenExpansionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenExpansion`.
	 * @param ctx the parse tree
	 */
	exitZenExpansion?: (ctx: ZenExpansionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenVariant`.
	 * @param ctx the parse tree
	 */
	enterZenVariant?: (ctx: ZenVariantContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenVariant`.
	 * @param ctx the parse tree
	 */
	exitZenVariant?: (ctx: ZenVariantContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenVariantOption`.
	 * @param ctx the parse tree
	 */
	enterZenVariantOption?: (ctx: ZenVariantOptionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenVariantOption`.
	 * @param ctx the parse tree
	 */
	exitZenVariantOption?: (ctx: ZenVariantOptionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenEnumConstant`.
	 * @param ctx the parse tree
	 */
	enterZenEnumConstant?: (ctx: ZenEnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenEnumConstant`.
	 * @param ctx the parse tree
	 */
	exitZenEnumConstant?: (ctx: ZenEnumConstantContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenDefinitionMember`.
	 * @param ctx the parse tree
	 */
	enterZenDefinitionMember?: (ctx: ZenDefinitionMemberContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenDefinitionMember`.
	 * @param ctx the parse tree
	 */
	exitZenDefinitionMember?: (ctx: ZenDefinitionMemberContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenFieldMember`.
	 * @param ctx the parse tree
	 */
	enterZenFieldMember?: (ctx: ZenFieldMemberContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenFieldMember`.
	 * @param ctx the parse tree
	 */
	exitZenFieldMember?: (ctx: ZenFieldMemberContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenThisMember`.
	 * @param ctx the parse tree
	 */
	enterZenThisMember?: (ctx: ZenThisMemberContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenThisMember`.
	 * @param ctx the parse tree
	 */
	exitZenThisMember?: (ctx: ZenThisMemberContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenConstOrMethodMember`.
	 * @param ctx the parse tree
	 */
	enterZenConstOrMethodMember?: (ctx: ZenConstOrMethodMemberContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenConstOrMethodMember`.
	 * @param ctx the parse tree
	 */
	exitZenConstOrMethodMember?: (ctx: ZenConstOrMethodMemberContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenSetterMember`.
	 * @param ctx the parse tree
	 */
	enterZenSetterMember?: (ctx: ZenSetterMemberContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenSetterMember`.
	 * @param ctx the parse tree
	 */
	exitZenSetterMember?: (ctx: ZenSetterMemberContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenGetterMember`.
	 * @param ctx the parse tree
	 */
	enterZenGetterMember?: (ctx: ZenGetterMemberContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenGetterMember`.
	 * @param ctx the parse tree
	 */
	exitZenGetterMember?: (ctx: ZenGetterMemberContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenImplementsMember`.
	 * @param ctx the parse tree
	 */
	enterZenImplementsMember?: (ctx: ZenImplementsMemberContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenImplementsMember`.
	 * @param ctx the parse tree
	 */
	exitZenImplementsMember?: (ctx: ZenImplementsMemberContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenCallerMember`.
	 * @param ctx the parse tree
	 */
	enterZenCallerMember?: (ctx: ZenCallerMemberContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenCallerMember`.
	 * @param ctx the parse tree
	 */
	exitZenCallerMember?: (ctx: ZenCallerMemberContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenIndexGetOperator`.
	 * @param ctx the parse tree
	 */
	enterZenIndexGetOperator?: (ctx: ZenIndexGetOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenIndexGetOperator`.
	 * @param ctx the parse tree
	 */
	exitZenIndexGetOperator?: (ctx: ZenIndexGetOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenDestructor`.
	 * @param ctx the parse tree
	 */
	enterZenDestructor?: (ctx: ZenDestructorContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenDestructor`.
	 * @param ctx the parse tree
	 */
	exitZenDestructor?: (ctx: ZenDestructorContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenOperator`.
	 * @param ctx the parse tree
	 */
	enterZenOperator?: (ctx: ZenOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenOperator`.
	 * @param ctx the parse tree
	 */
	exitZenOperator?: (ctx: ZenOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenEqualsOperator`.
	 * @param ctx the parse tree
	 */
	enterZenEqualsOperator?: (ctx: ZenEqualsOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenEqualsOperator`.
	 * @param ctx the parse tree
	 */
	exitZenEqualsOperator?: (ctx: ZenEqualsOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenCaster`.
	 * @param ctx the parse tree
	 */
	enterZenCaster?: (ctx: ZenCasterContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenCaster`.
	 * @param ctx the parse tree
	 */
	exitZenCaster?: (ctx: ZenCasterContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenContainsOperator`.
	 * @param ctx the parse tree
	 */
	enterZenContainsOperator?: (ctx: ZenContainsOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenContainsOperator`.
	 * @param ctx the parse tree
	 */
	exitZenContainsOperator?: (ctx: ZenContainsOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenInnerDefinition`.
	 * @param ctx the parse tree
	 */
	enterZenInnerDefinition?: (ctx: ZenInnerDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenInnerDefinition`.
	 * @param ctx the parse tree
	 */
	exitZenInnerDefinition?: (ctx: ZenInnerDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenIterator`.
	 * @param ctx the parse tree
	 */
	enterZenIterator?: (ctx: ZenIteratorContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenIterator`.
	 * @param ctx the parse tree
	 */
	exitZenIterator?: (ctx: ZenIteratorContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStaticInitializer`.
	 * @param ctx the parse tree
	 */
	enterZenStaticInitializer?: (ctx: ZenStaticInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStaticInitializer`.
	 * @param ctx the parse tree
	 */
	exitZenStaticInitializer?: (ctx: ZenStaticInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenFunctionHeader`.
	 * @param ctx the parse tree
	 */
	enterZenFunctionHeader?: (ctx: ZenFunctionHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenFunctionHeader`.
	 * @param ctx the parse tree
	 */
	exitZenFunctionHeader?: (ctx: ZenFunctionHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenFunctionParameter`.
	 * @param ctx the parse tree
	 */
	enterZenFunctionParameter?: (ctx: ZenFunctionParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenFunctionParameter`.
	 * @param ctx the parse tree
	 */
	exitZenFunctionParameter?: (ctx: ZenFunctionParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenFunctionBodyStatement`.
	 * @param ctx the parse tree
	 */
	enterZenFunctionBodyStatement?: (ctx: ZenFunctionBodyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenFunctionBodyStatement`.
	 * @param ctx the parse tree
	 */
	exitZenFunctionBodyStatement?: (ctx: ZenFunctionBodyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenFunctionBody`.
	 * @param ctx the parse tree
	 */
	enterZenFunctionBody?: (ctx: ZenFunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenFunctionBody`.
	 * @param ctx the parse tree
	 */
	exitZenFunctionBody?: (ctx: ZenFunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenIntExpression`.
	 * @param ctx the parse tree
	 */
	enterZenIntExpression?: (ctx: ZenIntExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenIntExpression`.
	 * @param ctx the parse tree
	 */
	exitZenIntExpression?: (ctx: ZenIntExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenPrefixedIntExpression`.
	 * @param ctx the parse tree
	 */
	enterZenPrefixedIntExpression?: (ctx: ZenPrefixedIntExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenPrefixedIntExpression`.
	 * @param ctx the parse tree
	 */
	exitZenPrefixedIntExpression?: (ctx: ZenPrefixedIntExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenFloatExpression`.
	 * @param ctx the parse tree
	 */
	enterZenFloatExpression?: (ctx: ZenFloatExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenFloatExpression`.
	 * @param ctx the parse tree
	 */
	exitZenFloatExpression?: (ctx: ZenFloatExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStringExpression`.
	 * @param ctx the parse tree
	 */
	enterZenStringExpression?: (ctx: ZenStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStringExpression`.
	 * @param ctx the parse tree
	 */
	exitZenStringExpression?: (ctx: ZenStringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenVariableExpression`.
	 * @param ctx the parse tree
	 */
	enterZenVariableExpression?: (ctx: ZenVariableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenVariableExpression`.
	 * @param ctx the parse tree
	 */
	exitZenVariableExpression?: (ctx: ZenVariableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenLocalExpressionVariable`.
	 * @param ctx the parse tree
	 */
	enterZenLocalExpressionVariable?: (ctx: ZenLocalExpressionVariableContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenLocalExpressionVariable`.
	 * @param ctx the parse tree
	 */
	exitZenLocalExpressionVariable?: (ctx: ZenLocalExpressionVariableContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenThisExpression`.
	 * @param ctx the parse tree
	 */
	enterZenThisExpression?: (ctx: ZenThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenThisExpression`.
	 * @param ctx the parse tree
	 */
	exitZenThisExpression?: (ctx: ZenThisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenSuperExpression`.
	 * @param ctx the parse tree
	 */
	enterZenSuperExpression?: (ctx: ZenSuperExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenSuperExpression`.
	 * @param ctx the parse tree
	 */
	exitZenSuperExpression?: (ctx: ZenSuperExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenDollarExpression`.
	 * @param ctx the parse tree
	 */
	enterZenDollarExpression?: (ctx: ZenDollarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenDollarExpression`.
	 * @param ctx the parse tree
	 */
	exitZenDollarExpression?: (ctx: ZenDollarExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenArrayExpression`.
	 * @param ctx the parse tree
	 */
	enterZenArrayExpression?: (ctx: ZenArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenArrayExpression`.
	 * @param ctx the parse tree
	 */
	exitZenArrayExpression?: (ctx: ZenArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenMapExpression`.
	 * @param ctx the parse tree
	 */
	enterZenMapExpression?: (ctx: ZenMapExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenMapExpression`.
	 * @param ctx the parse tree
	 */
	exitZenMapExpression?: (ctx: ZenMapExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenTrueExpression`.
	 * @param ctx the parse tree
	 */
	enterZenTrueExpression?: (ctx: ZenTrueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenTrueExpression`.
	 * @param ctx the parse tree
	 */
	exitZenTrueExpression?: (ctx: ZenTrueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenFalseExpression`.
	 * @param ctx the parse tree
	 */
	enterZenFalseExpression?: (ctx: ZenFalseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenFalseExpression`.
	 * @param ctx the parse tree
	 */
	exitZenFalseExpression?: (ctx: ZenFalseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenNullExpression`.
	 * @param ctx the parse tree
	 */
	enterZenNullExpression?: (ctx: ZenNullExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenNullExpression`.
	 * @param ctx the parse tree
	 */
	exitZenNullExpression?: (ctx: ZenNullExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenBracketExpression`.
	 * @param ctx the parse tree
	 */
	enterZenBracketExpression?: (ctx: ZenBracketExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenBracketExpression`.
	 * @param ctx the parse tree
	 */
	exitZenBracketExpression?: (ctx: ZenBracketExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenNewExpression`.
	 * @param ctx the parse tree
	 */
	enterZenNewExpression?: (ctx: ZenNewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenNewExpression`.
	 * @param ctx the parse tree
	 */
	exitZenNewExpression?: (ctx: ZenNewExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenThrowExpression`.
	 * @param ctx the parse tree
	 */
	enterZenThrowExpression?: (ctx: ZenThrowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenThrowExpression`.
	 * @param ctx the parse tree
	 */
	exitZenThrowExpression?: (ctx: ZenThrowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenPanicExpression`.
	 * @param ctx the parse tree
	 */
	enterZenPanicExpression?: (ctx: ZenPanicExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenPanicExpression`.
	 * @param ctx the parse tree
	 */
	exitZenPanicExpression?: (ctx: ZenPanicExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenMatchExpression`.
	 * @param ctx the parse tree
	 */
	enterZenMatchExpression?: (ctx: ZenMatchExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenMatchExpression`.
	 * @param ctx the parse tree
	 */
	exitZenMatchExpression?: (ctx: ZenMatchExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenBracketHandlerExpression`.
	 * @param ctx the parse tree
	 */
	enterZenBracketHandlerExpression?: (ctx: ZenBracketHandlerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenBracketHandlerExpression`.
	 * @param ctx the parse tree
	 */
	exitZenBracketHandlerExpression?: (ctx: ZenBracketHandlerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterZenPrimaryExpression?: (ctx: ZenPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitZenPrimaryExpression?: (ctx: ZenPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenPostfixExpression`.
	 * @param ctx the parse tree
	 */
	enterZenPostfixExpression?: (ctx: ZenPostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenPostfixExpression`.
	 * @param ctx the parse tree
	 */
	exitZenPostfixExpression?: (ctx: ZenPostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenUnaryExpression`.
	 * @param ctx the parse tree
	 */
	enterZenUnaryExpression?: (ctx: ZenUnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenUnaryExpression`.
	 * @param ctx the parse tree
	 */
	exitZenUnaryExpression?: (ctx: ZenUnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenMulExpression`.
	 * @param ctx the parse tree
	 */
	enterZenMulExpression?: (ctx: ZenMulExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenMulExpression`.
	 * @param ctx the parse tree
	 */
	exitZenMulExpression?: (ctx: ZenMulExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAddExpression`.
	 * @param ctx the parse tree
	 */
	enterZenAddExpression?: (ctx: ZenAddExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAddExpression`.
	 * @param ctx the parse tree
	 */
	exitZenAddExpression?: (ctx: ZenAddExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenShiftExpression`.
	 * @param ctx the parse tree
	 */
	enterZenShiftExpression?: (ctx: ZenShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenShiftExpression`.
	 * @param ctx the parse tree
	 */
	exitZenShiftExpression?: (ctx: ZenShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenCompareExpression`.
	 * @param ctx the parse tree
	 */
	enterZenCompareExpression?: (ctx: ZenCompareExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenCompareExpression`.
	 * @param ctx the parse tree
	 */
	exitZenCompareExpression?: (ctx: ZenCompareExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAndExpression`.
	 * @param ctx the parse tree
	 */
	enterZenAndExpression?: (ctx: ZenAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAndExpression`.
	 * @param ctx the parse tree
	 */
	exitZenAndExpression?: (ctx: ZenAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenXorExpression`.
	 * @param ctx the parse tree
	 */
	enterZenXorExpression?: (ctx: ZenXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenXorExpression`.
	 * @param ctx the parse tree
	 */
	exitZenXorExpression?: (ctx: ZenXorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenOrExpression`.
	 * @param ctx the parse tree
	 */
	enterZenOrExpression?: (ctx: ZenOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenOrExpression`.
	 * @param ctx the parse tree
	 */
	exitZenOrExpression?: (ctx: ZenOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAndAndExpression`.
	 * @param ctx the parse tree
	 */
	enterZenAndAndExpression?: (ctx: ZenAndAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAndAndExpression`.
	 * @param ctx the parse tree
	 */
	exitZenAndAndExpression?: (ctx: ZenAndAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenOrOrExpression`.
	 * @param ctx the parse tree
	 */
	enterZenOrOrExpression?: (ctx: ZenOrOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenOrOrExpression`.
	 * @param ctx the parse tree
	 */
	exitZenOrOrExpression?: (ctx: ZenOrOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenConditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterZenConditionalExpression?: (ctx: ZenConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenConditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitZenConditionalExpression?: (ctx: ZenConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAssignExpression`.
	 * @param ctx the parse tree
	 */
	enterZenAssignExpression?: (ctx: ZenAssignExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAssignExpression`.
	 * @param ctx the parse tree
	 */
	exitZenAssignExpression?: (ctx: ZenAssignExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementBlock`.
	 * @param ctx the parse tree
	 */
	enterZenStatementBlock?: (ctx: ZenStatementBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementBlock`.
	 * @param ctx the parse tree
	 */
	exitZenStatementBlock?: (ctx: ZenStatementBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementReturn`.
	 * @param ctx the parse tree
	 */
	enterZenStatementReturn?: (ctx: ZenStatementReturnContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementReturn`.
	 * @param ctx the parse tree
	 */
	exitZenStatementReturn?: (ctx: ZenStatementReturnContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementVar`.
	 * @param ctx the parse tree
	 */
	enterZenStatementVar?: (ctx: ZenStatementVarContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementVar`.
	 * @param ctx the parse tree
	 */
	exitZenStatementVar?: (ctx: ZenStatementVarContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementIf`.
	 * @param ctx the parse tree
	 */
	enterZenStatementIf?: (ctx: ZenStatementIfContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementIf`.
	 * @param ctx the parse tree
	 */
	exitZenStatementIf?: (ctx: ZenStatementIfContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementFor`.
	 * @param ctx the parse tree
	 */
	enterZenStatementFor?: (ctx: ZenStatementForContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementFor`.
	 * @param ctx the parse tree
	 */
	exitZenStatementFor?: (ctx: ZenStatementForContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementDo`.
	 * @param ctx the parse tree
	 */
	enterZenStatementDo?: (ctx: ZenStatementDoContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementDo`.
	 * @param ctx the parse tree
	 */
	exitZenStatementDo?: (ctx: ZenStatementDoContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementWhile`.
	 * @param ctx the parse tree
	 */
	enterZenStatementWhile?: (ctx: ZenStatementWhileContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementWhile`.
	 * @param ctx the parse tree
	 */
	exitZenStatementWhile?: (ctx: ZenStatementWhileContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementLock`.
	 * @param ctx the parse tree
	 */
	enterZenStatementLock?: (ctx: ZenStatementLockContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementLock`.
	 * @param ctx the parse tree
	 */
	exitZenStatementLock?: (ctx: ZenStatementLockContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementThrow`.
	 * @param ctx the parse tree
	 */
	enterZenStatementThrow?: (ctx: ZenStatementThrowContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementThrow`.
	 * @param ctx the parse tree
	 */
	exitZenStatementThrow?: (ctx: ZenStatementThrowContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementTry`.
	 * @param ctx the parse tree
	 */
	enterZenStatementTry?: (ctx: ZenStatementTryContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementTry`.
	 * @param ctx the parse tree
	 */
	exitZenStatementTry?: (ctx: ZenStatementTryContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementContinue`.
	 * @param ctx the parse tree
	 */
	enterZenStatementContinue?: (ctx: ZenStatementContinueContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementContinue`.
	 * @param ctx the parse tree
	 */
	exitZenStatementContinue?: (ctx: ZenStatementContinueContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatementBreak`.
	 * @param ctx the parse tree
	 */
	enterZenStatementBreak?: (ctx: ZenStatementBreakContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatementBreak`.
	 * @param ctx the parse tree
	 */
	exitZenStatementBreak?: (ctx: ZenStatementBreakContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenSwitchCaseStatement`.
	 * @param ctx the parse tree
	 */
	enterZenSwitchCaseStatement?: (ctx: ZenSwitchCaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenSwitchCaseStatement`.
	 * @param ctx the parse tree
	 */
	exitZenSwitchCaseStatement?: (ctx: ZenSwitchCaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenSwitchStatement`.
	 * @param ctx the parse tree
	 */
	enterZenSwitchStatement?: (ctx: ZenSwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenSwitchStatement`.
	 * @param ctx the parse tree
	 */
	exitZenSwitchStatement?: (ctx: ZenSwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenStatement`.
	 * @param ctx the parse tree
	 */
	enterZenStatement?: (ctx: ZenStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenStatement`.
	 * @param ctx the parse tree
	 */
	exitZenStatement?: (ctx: ZenStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenAnnotatedStatement`.
	 * @param ctx the parse tree
	 */
	enterZenAnnotatedStatement?: (ctx: ZenAnnotatedStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenAnnotatedStatement`.
	 * @param ctx the parse tree
	 */
	exitZenAnnotatedStatement?: (ctx: ZenAnnotatedStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenExpressionLambda`.
	 * @param ctx the parse tree
	 */
	enterZenExpressionLambda?: (ctx: ZenExpressionLambdaContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenExpressionLambda`.
	 * @param ctx the parse tree
	 */
	exitZenExpressionLambda?: (ctx: ZenExpressionLambdaContext) => void;

	/**
	 * Enter a parse tree produced by `ZenCodeParser.zenFunctionLambda`.
	 * @param ctx the parse tree
	 */
	enterZenFunctionLambda?: (ctx: ZenFunctionLambdaContext) => void;
	/**
	 * Exit a parse tree produced by `ZenCodeParser.zenFunctionLambda`.
	 * @param ctx the parse tree
	 */
	exitZenFunctionLambda?: (ctx: ZenFunctionLambdaContext) => void;
}

