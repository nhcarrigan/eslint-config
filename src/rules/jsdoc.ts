/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import type { Linter } from "eslint";

export const jsdocRules: Linter.RulesRecord = {
  "jsdoc/check-access":         "warn",
  "jsdoc/check-alignment":      "warn",
  "jsdoc/check-indentation":    "warn",
  "jsdoc/check-param-names":    "warn",
  "jsdoc/check-property-names": "warn",
  "jsdoc/check-syntax":         "warn",
  "jsdoc/check-tag-names":      "warn",
  "jsdoc/check-template-names": "warn",
  "jsdoc/check-values":         [
    "warn",
    {
      allowedLicenses: [ "Naomi's Public License" ],
    },
  ],
  "jsdoc/convert-to-jsdoc-comments": [
    "warn",
    {
      enableFixer:           true,
      enforceJsdocLineStyle: "multi",
      lineOrBlockStyle:      "both",
    },
  ],
  "jsdoc/empty-tags":              "warn",
  "jsdoc/implements-on-classes":   "warn",
  "jsdoc/imports-as-dependencies": "warn",
  "jsdoc/informative-docs":        "warn",
  "jsdoc/match-description":       "warn",
  "jsdoc/multiline-blocks":
    [ "warn", { noSingleLineBlocks: true } ],
  "jsdoc/no-bad-blocks":                         "warn",
  "jsdoc/no-blank-block-descriptions":           "warn",
  "jsdoc/no-blank-blocks":                       "warn",
  "jsdoc/no-defaults":                           "warn",
  "jsdoc/no-types":                              "warn",
  "jsdoc/require-asterisk-prefix":               "warn",
  "jsdoc/require-description":                   "warn",
  "jsdoc/require-description-complete-sentence": "warn",
  "jsdoc/require-file-overview":                 [
    "warn",
    {
      tags: {
        author: {
          mustExist:         true,
          preventDuplicates: true,
        },
        copyright: {
          mustExist:         true,
          preventDuplicates: true,
        },
        license: {
          mustExist:         true,
          preventDuplicates: true,
        },
      },
    },
  ],
  "jsdoc/require-hyphen-before-param-description": "warn",
  "jsdoc/require-jsdoc":                           [
    "warn",
    {
      publicOnly: true,
      require:    {
        ArrowFunctionExpression: true,
        ClassDeclaration:        true,
        ClassExpression:         true,
        FunctionDeclaration:     true,
        FunctionExpression:      true,
        MethodDefinition:        true,
      },
    },
  ],
  "jsdoc/require-param":                "warn",
  "jsdoc/require-param-description":    "warn",
  "jsdoc/require-param-name":           "warn",
  "jsdoc/require-property":             "warn",
  "jsdoc/require-property-description": "warn",
  "jsdoc/require-property-name":        "warn",
  "jsdoc/require-returns":              "warn",
  "jsdoc/require-returns-check":        "warn",
  "jsdoc/require-returns-description":  "warn",
  "jsdoc/require-template":             "warn",
  "jsdoc/require-throws":               "warn",
  "jsdoc/require-yields":               "warn",
  "jsdoc/require-yields-check":         "warn",
  "jsdoc/sort-tags":                    [
    "warn",
    {
      linesBetween: 0,
    },
  ],
  "jsdoc/tag-lines":   [ "warn", "never" ],
  "jsdoc/valid-types": "warn",
};
