/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, expect, it } from "vitest";
import { disabledEslintRules, eslintRules } from "../src/rules/eslint.ts";

describe("eslint configs", () => {
  it("should not enable disabled rules", () => {
    expect.assertions(20);
    const disabled = Object.keys(disabledEslintRules);
    const enabled = Object.keys(eslintRules);
    for (const key of disabled) {
      expect(enabled, `Disabled rule ${key} has been re-enabled!`).not.toContain(key);
    }
  });

  it("all disabled rules should be off", () => {
    expect.assertions(20);
    const rules = Object.entries(disabledEslintRules);
    for (const [ name, rule ] of rules) {
      expect(Array.isArray(rule)
        ? rule.at(0)
        : rule, `${name} appears to be turned on - disabled rules should be explicitly turned off.`).toBe("off");
    }
  });
});

