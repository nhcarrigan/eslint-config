/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import type { Linter } from "eslint";

/**
 * Rules that require type definitions.
 * These CANNOT run on the test directory as our typescript
 * configuration excludes tests from compliation.
 */
const typescriptEslintRulesWithTypes: Linter.RulesRecord = {
  "@typescript-eslint/await-thenable":          "error",
  "@typescript-eslint/consistent-type-exports": [
    "warn",
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  "@typescript-eslint/dot-notation":                   [ "error" ],
  "@typescript-eslint/no-array-delete":                "error",
  "@typescript-eslint/no-base-to-string":              [ "error" ],
  "@typescript-eslint/no-confusing-void-expression":   [ "error" ],
  "@typescript-eslint/no-duplicate-type-constituents": [ "error" ],
  "@typescript-eslint/no-floating-promises":           [ "error" ],
  "@typescript-eslint/no-implied-eval":                [ "error" ],
  "@typescript-eslint/no-meaningless-void-operator":   [ "warn" ],
  "@typescript-eslint/no-misused-promises":
  [ "error" ],
  "@typescript-eslint/no-mixed-enums":                         "error",
  "@typescript-eslint/no-redundant-type-constituents":         "warn",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": [ "warn" ],
  "@typescript-eslint/no-unnecessary-condition":               [ "warn" ],
  "@typescript-eslint/no-unnecessary-qualifier":               "warn",
  "@typescript-eslint/no-unnecessary-template-expression":     "warn",
  "@typescript-eslint/no-unnecessary-type-arguments":          "warn",
  "@typescript-eslint/no-unnecessary-type-assertion":          [ "warn" ],
  "@typescript-eslint/no-unnecessary-type-parameters":         "warn",
  "@typescript-eslint/no-unsafe-argument":                     "error",
  "@typescript-eslint/no-unsafe-assignment":                   "error",
  "@typescript-eslint/no-unsafe-call":                         "error",
  "@typescript-eslint/no-unsafe-declaration-merging":          "error",
  "@typescript-eslint/no-unsafe-enum-comparison":              "error",
  "@typescript-eslint/no-unsafe-function-type":                "error",
  "@typescript-eslint/no-unsafe-member-access":                "error",
  "@typescript-eslint/no-unsafe-return":                       "error",
  "@typescript-eslint/no-unsafe-unary-minus":                  "error",
  "@typescript-eslint/only-throw-error":                       [ "error" ],
  "@typescript-eslint/prefer-destructuring":                   [ "warn" ],
  "@typescript-eslint/prefer-find":                            "error",
  "@typescript-eslint/prefer-includes":                        "warn",
  "@typescript-eslint/prefer-nullish-coalescing":              "error",
  "@typescript-eslint/prefer-optional-chain":                  [ "warn" ],
  "@typescript-eslint/prefer-promise-reject-errors":           [ "error" ],
  "@typescript-eslint/prefer-readonly":                        "warn",
  "@typescript-eslint/prefer-reduce-type-parameter":           "warn",
  "@typescript-eslint/prefer-regexp-exec":                     "error",
  "@typescript-eslint/prefer-return-this-type":                "warn",
  "@typescript-eslint/prefer-string-starts-ends-with":         "error",
  "@typescript-eslint/promise-function-async":
  [ "error", { allowAny: false } ],
  "@typescript-eslint/require-array-sort-compare": [
    "error",
    { ignoreStringArrays: false },
  ],
  "@typescript-eslint/require-await":          "error",
  "@typescript-eslint/restrict-plus-operands": [
    "error",
    {
      allowAny:             false,
      allowBoolean:         false,
      allowNullish:         false,
      allowNumberAndString: false,
      allowRegExp:          false,
    },
  ],
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    {
      allowAny:     false,
      allowBoolean: false,
      allowNever:   false,
      allowNullish: false,
      allowNumber:  false,
      allowRegExp:  false,
    },
  ],
  "@typescript-eslint/return-await":               [ "error", "always" ],
  "@typescript-eslint/strict-boolean-expressions": [
    "error",
    {
      allowNullableObject: true,
      allowNumber:         false,
      allowString:         false,
    },
  ],
  "@typescript-eslint/switch-exhaustiveness-check": [
    "error",
    { requireDefaultForNonUnion: true },
  ],
  "@typescript-eslint/unbound-method":                         "error",
  "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
};

/**
 * Rules that do not require type definitions.
 * These can run on both the src and test directories.
 */
const typescriptEslintRules: Linter.RulesRecord = {
  "@typescript-eslint/adjacent-overload-signatures": "warn",
  "@typescript-eslint/array-type":
  [ "warn", { default: "generic" } ],
  "@typescript-eslint/ban-ts-comment": [
    "error",
    { "ts-expect-error": "allow-with-description" },
  ],
  "@typescript-eslint/class-literal-property-style":    [ "error", "getters" ],
  "@typescript-eslint/class-methods-use-this":          [ "error" ],
  "@typescript-eslint/consistent-generic-constructors": [
    "error",
    "constructor",
  ],
  "@typescript-eslint/consistent-indexed-object-style": [ "warn", "record" ],
  "@typescript-eslint/consistent-type-assertions":      [
    "warn",
    { assertionStyle: "never" },
  ],
  "@typescript-eslint/consistent-type-definitions": [ "warn", "interface" ],
  "@typescript-eslint/consistent-type-imports":     [
    "warn",
    { fixStyle: "inline-type-imports", prefer: "type-imports" },
  ],
  "@typescript-eslint/default-param-last":            "error",
  "@typescript-eslint/explicit-function-return-type": [ "warn" ],
  "@typescript-eslint/explicit-member-accessibility": [
    "warn",
    { accessibility: "explicit" },
  ],
  "@typescript-eslint/explicit-module-boundary-types": [ "warn" ],
  "@typescript-eslint/init-declarations":              [ "error", "always" ],
  // Anything more than 3 and we should be using a params object
  "@typescript-eslint/max-params":
  [ "error", { max: 3 } ],
  "@typescript-eslint/member-ordering":        [ "warn" ],
  "@typescript-eslint/method-signature-style": [ "warn", "property" ],
  "@typescript-eslint/naming-convention":      [
    "warn",
    {
      format:             [ "camelCase" ],
      leadingUnderscore:  "allow",
      selector:           "default",
      trailingUnderscore: "forbid",
    },
    {
      format:             [ "PascalCase" ],
      leadingUnderscore:  "forbid",
      selector:           "typeLike",
      trailingUnderscore: "forbid",
    },
    {
      format:             [ "PascalCase" ],
      leadingUnderscore:  "forbid",
      selector:           "class",
      trailingUnderscore: "forbid",
    },
  ],
  "@typescript-eslint/no-array-constructor":            [ "error" ],
  "@typescript-eslint/no-confusing-non-null-assertion": "warn",
  "@typescript-eslint/no-duplicate-enum-values":        "error",
  "@typescript-eslint/no-dynamic-delete":               "error",
  "@typescript-eslint/no-empty-function":               [ "error" ],
  "@typescript-eslint/no-empty-interface":              [ "warn" ],
  "@typescript-eslint/no-empty-object-type":            [ "warn" ],
  "@typescript-eslint/no-explicit-any":
  [ "error", { fixToUnknown: true } ],
  "@typescript-eslint/no-extraneous-class":         [ "error" ],
  "@typescript-eslint/no-for-in-array":             "error",
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-inferrable-types":         [ "warn" ],
  "@typescript-eslint/no-invalid-void-type":
  [ "error" ],
  "@typescript-eslint/no-loop-func":                            "error",
  "@typescript-eslint/no-loss-of-precision":                    "error",
  "@typescript-eslint/no-misused-new":                          "error",
  "@typescript-eslint/no-namespace":                            "error",
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain":     "error",
  "@typescript-eslint/no-non-null-assertion":                   "error",
  "@typescript-eslint/no-require-imports":
  [ "error" ],
  "@typescript-eslint/no-shadow":
  [ "error" ],
  "@typescript-eslint/no-this-alias":                                [ "warn" ],
  "@typescript-eslint/no-unnecessary-parameter-property-assignment": "warn",
  "@typescript-eslint/no-unnecessary-type-constraint":               "warn",
  "@typescript-eslint/no-unused-expressions":                        [ "warn" ],
  "@typescript-eslint/no-unused-vars":                               [
    "warn",
    {
      args:              "all",
      argsIgnorePattern: "^_",
      caughtErrors:      "all",
      vars:              "all",
      varsIgnorePattern: "^_",
    },
  ],
  "@typescript-eslint/no-use-before-define":    [ "error" ],
  "@typescript-eslint/no-useless-constructor":  "warn",
  "@typescript-eslint/no-useless-empty-export": "warn",
  "@typescript-eslint/no-var-requires":         [ "error" ],
  "@typescript-eslint/no-wrapper-object-types": "warn",
  "@typescript-eslint/parameter-properties":    [
    "warn",
    { prefer: "parameter-property" },
  ],
  "@typescript-eslint/prefer-as-const":            "warn",
  "@typescript-eslint/prefer-enum-initializers":   "error",
  "@typescript-eslint/prefer-for-of":              "warn",
  "@typescript-eslint/prefer-function-type":       "warn",
  "@typescript-eslint/prefer-literal-enum-member": [ "error" ],
  "@typescript-eslint/triple-slash-reference":     [
    "warn",
    { lib: "never", path: "never", types: "prefer-import" },
  ],
  "@typescript-eslint/unified-signatures": [ "warn" ],
};

export {
  typescriptEslintRules,
  typescriptEslintRulesWithTypes,
};
