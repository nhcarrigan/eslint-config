/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import type { Linter } from "eslint";

export const playwrightRules: Linter.RulesRecord = {
  "playwright/expect-expect":               "warn",
  "playwright/max-nested-describe":         [ "warn", { max: 2 } ],
  "playwright/missing-playwright-await":    "warn",
  "playwright/no-commented-out-tests":      "warn",
  "playwright/no-conditional-expect":       "warn",
  "playwright/no-conditional-in-test":      "warn",
  "playwright/no-duplicate-hooks":          "warn",
  "playwright/no-element-handle":           "warn",
  "playwright/no-eval":                     "warn",
  "playwright/no-focused-test":             "warn",
  "playwright/no-force-option":             "warn",
  "playwright/no-get-by-title":             "warn",
  "playwright/no-nested-step":              "warn",
  "playwright/no-networkidle":              "warn",
  "playwright/no-nth-methods":              "warn",
  "playwright/no-page-pause":               "warn",
  "playwright/no-raw-locators":             "warn",
  "playwright/no-skipped-test":             "warn",
  "playwright/no-standalone-expect":        "warn",
  "playwright/no-unsafe-references":        "warn",
  "playwright/no-useless-await":            "warn",
  "playwright/no-useless-not":              "warn",
  "playwright/no-wait-for-selector":        "warn",
  "playwright/no-wait-for-timeout":         "warn",
  "playwright/prefer-comparison-matcher":   "warn",
  "playwright/prefer-equality-matcher":     "warn",
  "playwright/prefer-hooks-in-order":       "warn",
  "playwright/prefer-hooks-on-top":         "warn",
  "playwright/prefer-lowercase-title":      "warn",
  "playwright/prefer-strict-equal":         "warn",
  "playwright/prefer-to-be":                "warn",
  "playwright/prefer-to-contain":           "warn",
  "playwright/prefer-to-have-count":        "warn",
  "playwright/prefer-to-have-length":       "warn",
  "playwright/prefer-web-first-assertions": "warn",
  "playwright/require-hook":                "warn",
  "playwright/require-to-throw-message":    "warn",
  "playwright/require-top-level-describe":  "warn",
  "playwright/valid-describe-callback":     "warn",
  "playwright/valid-expect":
    [ "warn", { maxArgs: 2, minArgs: 2 } ],
  "playwright/valid-expect-in-promise": "warn",
  "playwright/valid-title":             "warn",
};
