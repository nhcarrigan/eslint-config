/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, expect, it } from "vitest";
import { playwrightRules } from "../src/rules/playwright.ts";

describe("playwright configs", () => {
  it("should never be an error", () => {
    expect.assertions(42);
    const rules = Object.entries(playwrightRules);
    for (const [ name, rule ] of rules) {
      expect(Array.isArray(rule)
        ? rule.at(0)
        : rule, `${name} appears to be set to an error!`).not.toBe("error");
      continue;
    }
  });
});
