/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { suite, assert, test } from "vitest";
import { eslintRules } from "../src/rules/eslint.ts";
import { importRules } from "../src/rules/import.js";
import { jsdocRules } from "../src/rules/jsdoc.js";
import { noOnlyTestsRules } from "../src/rules/noOnlyTests.js";
import { stylisticRules } from "../src/rules/stylistic.ts";
import { typescriptEslintRules } from "../src/rules/typescriptEslint.js";
import { unicornRules } from "../src/rules/unicorn.js";

suite("No rules should be turned off in", () => {
  test("eslint rules", () => {
    const rules = Object.entries(eslintRules);
    for (const [ name, rule ] of rules) {
      if (Array.isArray(rule)) {
        assert.notStrictEqual(
          rule.at(0),
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      if (typeof rule === "string") {
        assert.notStrictEqual(
          rule,
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      assert.fail(`Could not determine rule type for ${name}!`);
    }
  });

  test("import rules", () => {
    const rules = Object.entries(importRules);
    for (const [ name, rule ] of rules) {
      if (Array.isArray(rule)) {
        assert.notStrictEqual(
          rule.at(0),
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      if (typeof rule === "string") {
        assert.notStrictEqual(
          rule,
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      assert.fail(`Could not determine rule type for ${name}!`);
    }
  });

  test("jsdoc rules", () => {
    const rules = Object.entries(jsdocRules);
    for (const [ name, rule ] of rules) {
      if (Array.isArray(rule)) {
        assert.notStrictEqual(
          rule.at(0),
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      if (typeof rule === "string") {
        assert.notStrictEqual(
          rule,
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      assert.fail(`Could not determine rule type for ${name}!`);
    }
  });

  test("no-only-tests rules", () => {
    const rules = Object.entries(noOnlyTestsRules);
    for (const [ name, rule ] of rules) {
      if (Array.isArray(rule)) {
        assert.notStrictEqual(
          rule.at(0),
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      if (typeof rule === "string") {
        assert.notStrictEqual(
          rule,
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      assert.fail(`Could not determine rule type for ${name}!`);
    }
  });

  test("stylistic rules", () => {
    const rules = Object.entries(stylisticRules);
    for (const [ name, rule ] of rules) {
      if (Array.isArray(rule)) {
        assert.notStrictEqual(
          rule.at(0),
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      if (typeof rule === "string") {
        assert.notStrictEqual(
          rule,
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      assert.fail(`Could not determine rule type for ${name}!`);
    }
  });

  test("typescript-eslint rules", () => {
    const rules = Object.entries(typescriptEslintRules);
    for (const [ name, rule ] of rules) {
      if (Array.isArray(rule)) {
        assert.notStrictEqual(
          rule.at(0),
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      if (typeof rule === "string") {
        assert.notStrictEqual(
          rule,
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      assert.fail(`Could not determine rule type for ${name}!`);
    }
  });

  test("unicorn rules", () => {
    const rules = Object.entries(unicornRules);
    for (const [ name, rule ] of rules) {
      if (Array.isArray(rule)) {
        assert.notStrictEqual(
          rule.at(0),
          "off",
          `${name} appears to be turned off - this project does not use any external configs, so all rules should be off by default.`,
        );
        continue;
      }
      if (typeof rule === "string") {
        assert.notStrictEqual(
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
