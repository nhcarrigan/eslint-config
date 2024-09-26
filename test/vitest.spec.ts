/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, expect, it } from "vitest";
import { vitestRules } from "../src/rules/vitest.ts";

describe("vitest configs", () => {
  it("should never be an error", () => {
    expect.assertions(45);
    const rules = Object.entries(vitestRules);
    for (const [ name, rule ] of rules) {
      expect(Array.isArray(rule)
        ? rule.at(0)
        : rule, `${name} appears to be set to an error!`).not.toBe("error");
      continue;
    }
  });
});
