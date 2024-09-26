/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import type { Linter } from "eslint";

export const vitestRules: Linter.RulesRecord = {
  "vitest/consistent-test-filename":
    [ "warn", { pattern: /^[\da-z-]+\.spec\.ts$/ } ],
  "vitest/consistent-test-it":            "warn",
  "vitest/expect-expect":                 "warn",
  "vitest/max-nested-describe":           [ "warn", { max: 2 } ],
  "vitest/no-alias-methods":              "warn",
  "vitest/no-commented-out-tests":        "warn",
  "vitest/no-conditional-expect":         "warn",
  "vitest/no-conditional-in-test":        "warn",
  "vitest/no-conditional-tests":          "warn",
  "vitest/no-disabled-tests":             "warn",
  "vitest/no-done-callback":              "warn",
  "vitest/no-duplicate-hooks":            "warn",
  "vitest/no-focused-tests":              "warn",
  "vitest/no-identical-title":            "warn",
  "vitest/no-import-node-test":           "warn",
  "vitest/no-interpolation-in-snapshots": "warn",
  "vitest/no-restricted-vi-methods":      "warn",
  "vitest/no-standalone-expect":          "warn",
  "vitest/no-test-prefixes":              "warn",
  "vitest/no-test-return-statement":      "warn",
  "vitest/prefer-called-with":            "warn",
  "vitest/prefer-comparison-matcher":     "warn",
  "vitest/prefer-each":                   "warn",
  "vitest/prefer-equality-matcher":       "warn",
  "vitest/prefer-expect-assertions":      "warn",
  "vitest/prefer-expect-resolves":        "warn",
  "vitest/prefer-hooks-in-order":         "warn",
  "vitest/prefer-hooks-on-top":           "warn",
  "vitest/prefer-lowercase-title":        "warn",
  "vitest/prefer-mock-promise-shorthand": "warn",
  "vitest/prefer-spy-on":                 "warn",
  "vitest/prefer-strict-equal":           "warn",
  "vitest/prefer-to-be":                  "warn",
  "vitest/prefer-to-be-falsy":            "warn",
  "vitest/prefer-to-be-object":           "warn",
  "vitest/prefer-to-be-truthy":           "warn",
  "vitest/prefer-to-contain":             "warn",
  "vitest/prefer-to-have-length":         "warn",
  "vitest/prefer-todo":                   "warn",
  "vitest/require-hook":                  "warn",
  "vitest/require-to-throw-message":      "warn",
  "vitest/require-top-level-describe":    "warn",
  "vitest/valid-describe-callback":       "warn",
  "vitest/valid-expect":
    [ "warn", { maxArgs: 2, minArgs: 2 } ],
  "vitest/valid-title": "warn",
};
