/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { suite, assert, test } from "vitest";
import { disabledEslintRules, eslintRules } from "../src/rules/eslint.ts";

suite("ESLint Configs", () => {
  test("should not enable disabled rules", () => {
    const disabled = Object.keys(disabledEslintRules);
    const enabled = Object.keys(eslintRules);
    for (const key of disabled) {
      assert.notInclude(
        enabled,
        key,
        `Disabled rule ${key} has been re-enabled!`,
      );
    }
  });

  test("all disabled rules should be off", () => {
    const rules = Object.entries(disabledEslintRules);
    for (const [ name, rule ] of rules) {
      if (Array.isArray(rule)) {
        assert.strictEqual(
          rule.at(0),
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      if (typeof rule === "string") {
        assert.strictEqual(
          rule,
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      assert.fail(`Could not determine rule type for ${name}!`);
    }
  });
});

