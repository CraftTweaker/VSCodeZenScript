// Generated from ./src/antlr/ZenCode.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ZenCodeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ZenCodeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenFile?: (ctx: ZenFileContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenSHLToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenSHLToken?: (ctx: ZenSHLTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenSHRToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenSHRToken?: (ctx: ZenSHRTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenUSHRToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenUSHRToken?: (ctx: ZenUSHRTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAndAndToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAndAndToken?: (ctx: ZenAndAndTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenCoalesceToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenCoalesceToken?: (ctx: ZenCoalesceTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenDecrementToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenDecrementToken?: (ctx: ZenDecrementTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenDot2Token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenDot2Token?: (ctx: ZenDot2TokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenDot3Token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenDot3Token?: (ctx: ZenDot3TokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenEqual2Token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenEqual2Token?: (ctx: ZenEqual2TokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenEqual3Token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenEqual3Token?: (ctx: ZenEqual3TokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenGreaterEqToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenGreaterEqToken?: (ctx: ZenGreaterEqTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenIncrementToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenIncrementToken?: (ctx: ZenIncrementTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenLambdaToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenLambdaToken?: (ctx: ZenLambdaTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenLessEqToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenLessEqToken?: (ctx: ZenLessEqTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenNotEqualToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenNotEqualToken?: (ctx: ZenNotEqualTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenNotEqual2Token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenNotEqual2Token?: (ctx: ZenNotEqual2TokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenOptCallToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenOptCallToken?: (ctx: ZenOptCallTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenOrOrToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenOrOrToken?: (ctx: ZenOrOrTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAddAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAddAssignToken?: (ctx: ZenAddAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAndAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAndAssignToken?: (ctx: ZenAndAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenCatAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenCatAssignToken?: (ctx: ZenCatAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenDivAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenDivAssignToken?: (ctx: ZenDivAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenModAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenModAssignToken?: (ctx: ZenModAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenMulAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenMulAssignToken?: (ctx: ZenMulAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenOrAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenOrAssignToken?: (ctx: ZenOrAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenSHLAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenSHLAssignToken?: (ctx: ZenSHLAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenSHRAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenSHRAssignToken?: (ctx: ZenSHRAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenSubAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenSubAssignToken?: (ctx: ZenSubAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenUSHRAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenUSHRAssignToken?: (ctx: ZenUSHRAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenXOrAssignToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenXOrAssignToken?: (ctx: ZenXOrAssignTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenType?: (ctx: ZenTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenTypeParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenTypeParams?: (ctx: ZenTypeParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenTypeParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenTypeParam?: (ctx: ZenTypeParamContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenTypeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenTypeArguments?: (ctx: ZenTypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenCallArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenCallArguments?: (ctx: ZenCallArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenTypeArgumentsForcall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenTypeArgumentsForcall?: (ctx: ZenTypeArgumentsForcallContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAnnotationCallArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAnnotationCallArguments?: (ctx: ZenAnnotationCallArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAnnotations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAnnotations?: (ctx: ZenAnnotationsContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenImport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenImport?: (ctx: ZenImportContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenVisibleAccessModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenVisibleAccessModifier?: (ctx: ZenVisibleAccessModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAccessModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAccessModifier?: (ctx: ZenAccessModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenDeclerationModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenDeclerationModifier?: (ctx: ZenDeclerationModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenMemberNonStaticModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenMemberNonStaticModifier?: (ctx: ZenMemberNonStaticModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenMemberStaticModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenMemberStaticModifier?: (ctx: ZenMemberStaticModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenDefinition?: (ctx: ZenDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenClass?: (ctx: ZenClassContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenInterface`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenInterface?: (ctx: ZenInterfaceContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenEnum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenEnum?: (ctx: ZenEnumContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStruct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStruct?: (ctx: ZenStructContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAlias?: (ctx: ZenAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenFunction?: (ctx: ZenFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenExpansion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenExpansion?: (ctx: ZenExpansionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenVariant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenVariant?: (ctx: ZenVariantContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenVariantOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenVariantOption?: (ctx: ZenVariantOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenEnumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenEnumConstant?: (ctx: ZenEnumConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenDefinitionMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenDefinitionMember?: (ctx: ZenDefinitionMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenFieldMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenFieldMember?: (ctx: ZenFieldMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenThisMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenThisMember?: (ctx: ZenThisMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenConstOrMethodMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenConstOrMethodMember?: (ctx: ZenConstOrMethodMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenSetterMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenSetterMember?: (ctx: ZenSetterMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenGetterMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenGetterMember?: (ctx: ZenGetterMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenImplementsMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenImplementsMember?: (ctx: ZenImplementsMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenCallerMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenCallerMember?: (ctx: ZenCallerMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenIndexGetOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenIndexGetOperator?: (ctx: ZenIndexGetOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenDestructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenDestructor?: (ctx: ZenDestructorContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenOperator?: (ctx: ZenOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenEqualsOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenEqualsOperator?: (ctx: ZenEqualsOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenCaster`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenCaster?: (ctx: ZenCasterContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenContainsOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenContainsOperator?: (ctx: ZenContainsOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenInnerDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenInnerDefinition?: (ctx: ZenInnerDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenIterator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenIterator?: (ctx: ZenIteratorContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStaticInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStaticInitializer?: (ctx: ZenStaticInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenFunctionHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenFunctionHeader?: (ctx: ZenFunctionHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenFunctionParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenFunctionParameter?: (ctx: ZenFunctionParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenFunctionBodyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenFunctionBodyStatement?: (ctx: ZenFunctionBodyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenFunctionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenFunctionBody?: (ctx: ZenFunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenIntExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenIntExpression?: (ctx: ZenIntExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenPrefixedIntExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenPrefixedIntExpression?: (ctx: ZenPrefixedIntExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenFloatExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenFloatExpression?: (ctx: ZenFloatExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStringExpression?: (ctx: ZenStringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenVariableExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenVariableExpression?: (ctx: ZenVariableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenLocalExpressionVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenLocalExpressionVariable?: (ctx: ZenLocalExpressionVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenThisExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenThisExpression?: (ctx: ZenThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenSuperExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenSuperExpression?: (ctx: ZenSuperExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenDollarExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenDollarExpression?: (ctx: ZenDollarExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenArrayExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenArrayExpression?: (ctx: ZenArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenMapExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenMapExpression?: (ctx: ZenMapExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenTrueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenTrueExpression?: (ctx: ZenTrueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenFalseExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenFalseExpression?: (ctx: ZenFalseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenNullExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenNullExpression?: (ctx: ZenNullExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenBracketExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenBracketExpression?: (ctx: ZenBracketExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenNewExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenNewExpression?: (ctx: ZenNewExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenThrowExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenThrowExpression?: (ctx: ZenThrowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenPanicExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenPanicExpression?: (ctx: ZenPanicExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenMatchExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenMatchExpression?: (ctx: ZenMatchExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenBracketHandlerExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenBracketHandlerExpression?: (ctx: ZenBracketHandlerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenPrimaryExpression?: (ctx: ZenPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenPostfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenPostfixExpression?: (ctx: ZenPostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenUnaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenUnaryExpression?: (ctx: ZenUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenMulExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenMulExpression?: (ctx: ZenMulExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAddExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAddExpression?: (ctx: ZenAddExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenShiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenShiftExpression?: (ctx: ZenShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenCompareExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenCompareExpression?: (ctx: ZenCompareExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAndExpression?: (ctx: ZenAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenXorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenXorExpression?: (ctx: ZenXorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenOrExpression?: (ctx: ZenOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAndAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAndAndExpression?: (ctx: ZenAndAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenOrOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenOrOrExpression?: (ctx: ZenOrOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenConditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenConditionalExpression?: (ctx: ZenConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAssignExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAssignExpression?: (ctx: ZenAssignExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementBlock?: (ctx: ZenStatementBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementReturn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementReturn?: (ctx: ZenStatementReturnContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementVar?: (ctx: ZenStatementVarContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementIf?: (ctx: ZenStatementIfContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementFor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementFor?: (ctx: ZenStatementForContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementDo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementDo?: (ctx: ZenStatementDoContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementWhile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementWhile?: (ctx: ZenStatementWhileContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementLock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementLock?: (ctx: ZenStatementLockContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementThrow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementThrow?: (ctx: ZenStatementThrowContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementTry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementTry?: (ctx: ZenStatementTryContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementContinue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementContinue?: (ctx: ZenStatementContinueContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatementBreak`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatementBreak?: (ctx: ZenStatementBreakContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenSwitchCaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenSwitchCaseStatement?: (ctx: ZenSwitchCaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenSwitchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenSwitchStatement?: (ctx: ZenSwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenStatement?: (ctx: ZenStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenAnnotatedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenAnnotatedStatement?: (ctx: ZenAnnotatedStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenExpressionLambda`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenExpressionLambda?: (ctx: ZenExpressionLambdaContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenCodeParser.zenFunctionLambda`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZenFunctionLambda?: (ctx: ZenFunctionLambdaContext) => Result;
}

