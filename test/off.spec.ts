/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, expect, it } from "vitest";
import { eslintRules } from "../src/rules/eslint.ts";
import { importRules } from "../src/rules/import.js";
import { jsdocRules } from "../src/rules/jsdoc.js";
import { stylisticRules } from "../src/rules/stylistic.ts";
import { typescriptEslintRules } from "../src/rules/typescriptEslint.js";
import { unicornRules } from "../src/rules/unicorn.js";
import { vitestRules } from "../src/rules/vitest.js";

describe("no rules should be turned off in", () => {
  it("eslint rules", () => {
    expect.assertions(148);
    const rules = Object.entries(eslintRules);
    for (const [ name, rule ] of rules) {
      expect(Array.isArray(rule)
        ? rule.at(0)
        : rule, `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`).not.toBe("off");
    }
  });

  it("import rules", () => {
    expect.assertions(29);
    const rules = Object.entries(importRules);
    for (const [ name, rule ] of rules) {
      expect(Array.isArray(rule)
        ? rule.at(0)
        : rule, `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`).not.toBe("off");
    }
  });

  it("jsdoc rules", () => {
    expect.assertions(43);
    const rules = Object.entries(jsdocRules);
    for (const [ name, rule ] of rules) {
      expect(Array.isArray(rule)
        ? rule.at(0)
        : rule, `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`).not.toBe("off");
    }
  });

  it("stylistic rules", () => {
    expect.assertions(65);
    const rules = Object.entries(stylisticRules);
    for (const [ name, rule ] of rules) {
      expect(Array.isArray(rule)
        ? rule.at(0)
        : rule, `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`).not.toBe("off");
    }
  });

  it("typescript-eslint rules", () => {
    expect.assertions(59);
    const rules = Object.entries(typescriptEslintRules);
    for (const [ name, rule ] of rules) {
      expect(Array.isArray(rule)
        ? rule.at(0)
        : rule, `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`).not.toBe("off");
    }
  });

  it("unicorn rules", () => {
    expect.assertions(73);
    const rules = Object.entries(unicornRules);
    for (const [ name, rule ] of rules) {
      expect(Array.isArray(rule)
        ? rule.at(0)
        : rule, `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`).not.toBe("off");
    }
  });

  it("vitest rules", () => {
    expect.assertions(45);
    const rules = Object.entries(vitestRules);
    for (const [ name, rule ] of rules) {
      expect(Array.isArray(rule)
        ? rule.at(0)
        : rule, `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`).not.toBe("off");
    }
  });
});
