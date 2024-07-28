/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import type { Linter } from "eslint";

const spacesPerIndent = 2;

export const stylisticRules: Linter.RulesRecord = {
  "stylistic/array-bracket-newline": [ "warn", "consistent" ],
  "stylistic/array-bracket-spacing": [ "warn", "always" ],
  "stylistic/array-element-newline": [ "warn", "consistent" ],
  "stylistic/arrow-parens":          [ "warn", "always" ],
  "stylistic/arrow-spacing":
  [ "warn", { after: true, before: true } ],
  "stylistic/block-spacing":                  [ "warn", "always" ],
  "stylistic/brace-style":                    [ "warn", "1tbs" ],
  "stylistic/comma-dangle":                   [ "warn", "always-multiline" ],
  "stylistic/comma-spacing":                  [ "warn" ],
  "stylistic/comma-style":                    [ "warn", "last" ],
  "stylistic/computed-property-spacing":      [ "warn", "never" ],
  "stylistic/dot-location":                   [ "warn", "object" ],
  "stylistic/eol-last":                       [ "warn", "always" ],
  "stylistic/function-call-argument-newline": [ "warn", "consistent" ],
  "stylistic/function-call-spacing":          [ "warn", "never" ],
  "stylistic/function-paren-newline":         [ "warn", "consistent" ],
  "stylistic/generator-star-spacing":         [ "warn", "after" ],
  "stylistic/indent":                         [ "warn", spacesPerIndent ],
  "stylistic/key-spacing":                    [
    "warn",
    { afterColon:  true,
      align:       "value",
      beforeColon: false,
      mode:        "strict" },
  ],
  "stylistic/keyword-spacing":
  [ "warn", { after: true, before: true } ],
  "stylistic/line-comment-position": [ "warn", "above" ],
  "stylistic/linebreak-style":       [ "warn", "unix" ],
  "stylistic/lines-around-comment":  [
    "warn",
    { afterBlockComment: false, beforeBlockComment: true },
  ],
  "stylistic/max-len": [
    "warn",
    { code:                   80,
      ignoreComments:         true,
      ignoreTemplateLiterals: true,
      tabWidth:               2 },
  ],
  "stylistic/max-statements-per-line": [ "warn", { max: 1 } ],
  "stylistic/member-delimiter-style":  "warn",
  "stylistic/multiline-comment-style": [ "warn", "starred-block" ],
  "stylistic/multiline-ternary":       [ "warn", "always" ],
  "stylistic/new-parens":              [ "warn", "always" ],
  "stylistic/newline-per-chained-call":
  [ "warn", { ignoreChainWithDepth: 2 } ],
  "stylistic/no-confusing-arrow": [
    "warn",
    { allowParens: false, onlyOneSimpleParam: false },
  ],
  "stylistic/no-extra-parens":     [ "warn", "all" ],
  "stylistic/no-extra-semi":       "warn",
  "stylistic/no-floating-decimal": "warn",
  "stylistic/no-mixed-operators":
  [ "warn", { allowSamePrecedence: false } ],
  "stylistic/no-mixed-spaces-and-tabs": [ "warn" ],
  "stylistic/no-multi-spaces":
  [ "warn", { exceptions: { Property: true, TSTypeAnnotation: true } } ],
  "stylistic/no-multiple-empty-lines":       [ "warn", { max: 1 } ],
  "stylistic/no-tabs":                       "warn",
  "stylistic/no-trailing-spaces":            "warn",
  "stylistic/no-whitespace-before-property": "warn",
  "stylistic/object-curly-newline":
  [ "warn", { consistent: true } ],
  "stylistic/object-curly-spacing":         [ "warn", "always" ],
  "stylistic/one-var-declaration-per-line": [ "warn", "always" ],
  "stylistic/operator-linebreak":           [ "warn", "before" ],
  "stylistic/padded-blocks":                [ "warn", "never" ],
  "stylistic/quote-props":                  [ "warn", "consistent-as-needed" ],
  "stylistic/quotes":
  [ "warn", "double", { allowTemplateLiterals: true } ],
  "stylistic/rest-spread-spacing": [ "warn", "never" ],
  "stylistic/semi":                [ "warn", "always" ],
  "stylistic/semi-spacing":
  [ "warn", { after: true, before: false } ],
  "stylistic/semi-style":                  [ "warn", "last" ],
  "stylistic/space-before-blocks":         [ "warn", "always" ],
  "stylistic/space-before-function-paren": [ "warn", "never" ],
  "stylistic/space-in-parens":             [ "warn", "never" ],
  "stylistic/space-infix-ops":             [ "warn" ],
  "stylistic/spaced-comment":              [ "warn", "always" ],
  "stylistic/switch-colon-spacing":
  [ "warn", { after: true, before: false } ],
  "stylistic/template-curly-spacing": [ "warn", "never" ],
  "stylistic/template-tag-spacing":   [ "warn", "never" ],
  "stylistic/type-annotation-spacing":
  [ "warn", { after: true, before: false } ],
  "stylistic/type-generic-spacing":     "warn",
  "stylistic/type-named-tuple-spacing": "warn",
  "stylistic/wrap-iife":                [ "warn", "inside" ],
  "stylistic/yield-star-spacing":       [ "warn", "after" ],
};
