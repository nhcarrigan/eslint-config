/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, expect, it } from "vitest";
import { stylisticRules } from "../src/rules/stylistic.ts";

describe("stylistic configs", () => {
  it("should never be an error", () => {
    expect.assertions(65);
    const rules = Object.entries(stylisticRules);
    for (const [ name, rule ] of rules) {
      expect(Array.isArray(rule)
        ? rule.at(0)
        : rule, `${name} appears to be set to an error!`).not.toBe("error");
      continue;
    }
  });
});
