/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { suite, assert, test } from "vitest";
import { stylisticRules } from "../src/rules/stylistic.ts";

suite("Stylistic Configs", () => {
  test("should never be an error", () => {
    const rules = Object.entries(stylisticRules);
    for (const [ name, rule ] of rules) {
      if (Array.isArray(rule)) {
        assert.include(
          [ "off", "warn" ],
          rule.at(0),
          `${name} appears to be set to an error!`,
        );
        continue;
      }
      if (typeof rule === "string") {
        assert.include(
          [ "off", "warn" ],
          rule,
          `${name} appears to be set to an error!`,
        );
        continue;
      }
      assert.fail(`Could not determine rule type for ${name}!`);
    }
  });
});
