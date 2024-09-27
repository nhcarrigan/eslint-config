/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import type { Linter } from "eslint";

export const importRules: Linter.RulesRecord = {
  "import/default":                     "error",
  "import/export":                      "error",
  "import/exports-last":                "warn",
  "import/extensions":                  [ "warn", "ignorePackages" ],
  "import/first":                       "warn",
  "import/group-exports":               "warn",
  "import/newline-after-import":        [ "warn", { count: 1 } ],
  "import/no-absolute-path":            [ "error" ],
  "import/no-amd":                      "error",
  "import/no-anonymous-default-export": [ "warn" ],
  "import/no-commonjs":                 [ "error" ],
  "import/no-cycle":                    [ "error" ],
  "import/no-default-export":           "warn",
  "import/no-duplicates":               [ "error" ],
  "import/no-dynamic-require":          "error",
  "import/no-empty-named-blocks":       "error",
  "import/no-extraneous-dependencies":  [
    "error",
    { devDependencies: [ "**/*.spec.ts" ] },
  ],
  "import/no-import-module-exports":   [ "error" ],
  "import/no-mutable-exports":         "error",
  "import/no-named-as-default":        "warn",
  "import/no-named-as-default-member": "warn",
  "import/no-namespace":               [ "warn" ],
  "import/no-relative-packages":       "warn",
  "import/no-self-import":             "error",
  "import/no-unassigned-import":       [ "error" ],
  "import/no-unused-modules":          [ "warn" ],
  "import/no-useless-path-segments":   [ "warn" ],
  "import/no-webpack-loader-syntax":   "error",
  "import/order":                      [
    "warn",
    {
      "alphabetize": {
        caseInsensitive: true,
        order:           "asc",
      },
      "groups": [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index",
        "object",
        "type",
        "unknown",
      ],
      "newlines-between": "never",
    },
  ],
};
