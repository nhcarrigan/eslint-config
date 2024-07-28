/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import type { Linter } from "eslint";

export const noOnlyTestsRules: Linter.RulesRecord = {
  "no-only-tests/no-only-tests": [
    "warn",
    {
      block: [ "test", "expect", "assert", "describe", "bench" ],
      focus: [ "only", "skip" ],
    },
  ],
};
