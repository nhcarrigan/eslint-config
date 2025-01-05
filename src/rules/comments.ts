/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import type { Linter } from "eslint";

export const commentsRules: Linter.RulesRecord = {
  "comments/no-unlimited-disable": "warn",
  "comments/require-description":  "warn",
};
