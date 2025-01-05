/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, expect, it } from "vitest";
import config from "../src/index.ts";
import { commentsRules } from "../src/rules/comments.ts";
import { deprecationRules } from "../src/rules/deprecation.ts";
import { eslintRules } from "../src/rules/eslint.ts";
import { importRules } from "../src/rules/import.ts";
import { jsdocRules } from "../src/rules/jsdoc.ts";
import { playwrightRules } from "../src/rules/playwright.ts";
import { reactRules } from "../src/rules/react.ts";
import { sortKeysFixRules } from "../src/rules/sortKeysFix.ts";
import { stylisticRules } from "../src/rules/stylistic.ts";
import {
  typescriptEslintRules,
  typescriptEslintRulesWithTypes,
} from "../src/rules/typescriptEslint.ts";
import { unicornRules } from "../src/rules/unicorn.ts";
import { vitestRules } from "../src/rules/vitest.ts";
import type { Linter } from "eslint";

// #region Custom matcher
expect.extend({
  toContainRules(received, expected) {
    const missingRules: Array<string> = [];
    const mismatchedRules: Array<string> = [];

    for (const [ key, value ] of Object.entries(expected)) {
      if (!(key in received)) {
        missingRules.push(key);
      } else if (!this.equals(received[key], value)) {
        mismatchedRules.push(key);
      }
    }

    const pass = missingRules.length === 0 && mismatchedRules.length === 0;

    let message = "";
    // eslint-disable-next-line no-negated-condition -- This is a test.
    if (!pass) {
      message = `${message}Expected rules to contain all specified rules.\n`;
      if (missingRules.length > 0) {
        message = `${message}Missing rules: ${missingRules.join(", ")}\n`;
      }
      if (mismatchedRules.length > 0) {
        message = `${message}Mismatched rules: ${mismatchedRules.join(", ")}\n`;
      }
    } else {
      message = "Expected rules not to contain all specified rules";
    }

    return {
      message: (): string => {
        return message;
      },
      pass: pass,
    };
  },
});
// #endregion

// #region Helper function

const baseProperties = (
  ruleset: Linter.Config<Linter.RulesRecord>,
  isNoTypes: boolean,
): void => {
  expect(ruleset?.plugins, "missing @typescript-eslint plugin").toHaveProperty(
    "@typescript-eslint",
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- This is a test.
  isNoTypes
    ? expect(
      ruleset?.plugins,
      "should not have deprecation plugin",
    ).not.toHaveProperty("deprecation")
    : expect(ruleset?.plugins, "missing deprecation plugin").toHaveProperty(
      "deprecation",
    );
  expect(ruleset?.plugins, "missing import plugin").toHaveProperty("import");
  expect(ruleset?.plugins, "missing jsdoc plugin").toHaveProperty("jsdoc");
  expect(ruleset?.plugins, "missing sort-keys-fix plugin").toHaveProperty(
    "sort-keys-fix",
  );
  expect(ruleset?.plugins, "missing stylistic plugin").toHaveProperty(
    "stylistic",
  );
  expect(ruleset?.plugins, "missing unicorn plugin").toHaveProperty("unicorn");
  expect(ruleset?.rules, "missing eslint rules").toContainRules(eslintRules);
  expect(ruleset?.rules, "missing typescript-eslint rules").toContainRules(
    typescriptEslintRules,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- This is a test.
  isNoTypes
    ? expect(
      ruleset?.rules,
      "should not have deprecation rules",
    ).not.toContainRules(deprecationRules)
    : expect(ruleset?.rules, "missing deprecation rules").toContainRules(
      deprecationRules,
    );
  expect(ruleset?.rules, "missing import rules").toContainRules(importRules);
  expect(ruleset?.rules, "missing jsdoc rules").toContainRules(jsdocRules);
  expect(ruleset?.rules, "missing sort-keys-fix rules").toContainRules(
    sortKeysFixRules,
  );
  expect(ruleset?.rules, "missing stylistic rules").toContainRules(
    stylisticRules,
  );
  expect(ruleset?.rules, "missing unicorn rules").toContainRules(unicornRules);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- This is a test.
  isNoTypes
    ? expect(
      ruleset?.rules,
      "should not have typescript-eslint rules with types",
    ).not.toContainRules(typescriptEslintRulesWithTypes)
    : expect(
      ruleset?.rules,
      "missing typescript-eslint rules with types",
    ).toContainRules(typescriptEslintRulesWithTypes);
  expect(ruleset?.rules, "missing comment rules").toContainRules(commentsRules);
};
// #endregion

describe("global config", () => {
  // #region Typescript
  it("should apply the expected plugins for typescript", () => {
    expect.assertions(27);
    const ruleset = config.find((rule) => {
      return rule?.files?.includes("src/**/*.ts");
    });
    expect(ruleset, "ruleset is not defined").toBeDefined();
    expect(ruleset?.plugins, "ruleset does not have plugins").toBeDefined();
    expect(
      ruleset?.plugins,
      "should not have vitest plugin",
    ).not.toHaveProperty("vitest");
    expect(
      ruleset?.plugins,
      "should not have playwright plugin",
    ).not.toHaveProperty("playwright");
    expect(ruleset?.plugins, "should not have react plugin").not.toHaveProperty(
      "react",
    );
    expect(ruleset?.rules, "ruleset does not have rules").toBeDefined();
    expect(ruleset?.rules, "should not have vitest rules").not.toContainRules(
      vitestRules,
    );
    expect(
      ruleset?.rules,
      "should not have playwright rules",
    ).not.toContainRules(playwrightRules);
    expect(ruleset?.rules, "should not have react rules").not.toContainRules(
      reactRules,
    );
    baseProperties(ruleset as Linter.Config<Linter.RulesRecord>, false);
    expect(
      Object.keys(ruleset?.plugins ?? {}),
      "should not have extraneous plugins",
    ).toHaveLength(8);
  });
  // #endregion

  // #region Vitest
  it("should apply the expected plugins for vitest files", () => {
    expect.assertions(27);
    const ruleset = config.find((rule) => {
      return rule?.files?.includes("test/**/*.spec.ts");
    });
    expect(ruleset, "ruleset is not defined").toBeDefined();
    expect(ruleset?.plugins, "ruleset does not have plugins").toBeDefined();
    expect(ruleset?.plugins, "missing vitest plugin").toHaveProperty("vitest");
    expect(
      ruleset?.plugins,
      "should not have playwright plugin",
    ).not.toHaveProperty("playwright");
    expect(ruleset?.plugins, "should not have react plugin").not.toHaveProperty(
      "react",
    );
    expect(ruleset?.rules, "ruleset does not have rules").toBeDefined();
    expect(ruleset?.rules, "missing vitest rules").toContainRules(vitestRules);
    expect(
      ruleset?.rules,
      "should not have playwright rules",
    ).not.toContainRules(playwrightRules);
    expect(ruleset?.rules, "should not have react rules").not.toContainRules(
      reactRules,
    );
    baseProperties(ruleset as Linter.Config<Linter.RulesRecord>, true);
    expect(
      Object.keys(ruleset?.plugins ?? {}),
      "should not have extraneous plugins",
    ).toHaveLength(8);
  });
  // #endregion

  // #region Playwright
  it("should apply the expected plugins for playwright", () => {
    expect.assertions(27);
    const ruleset = config.find((rule) => {
      return rule?.files?.includes("e2e/**/*.spec.ts");
    });
    expect(ruleset, "ruleset is not defined").toBeDefined();
    expect(ruleset?.plugins, "ruleset does not have plugins").toBeDefined();
    expect(
      ruleset?.plugins,
      "should not have vitest plugin",
    ).not.toHaveProperty("vitest");
    expect(ruleset?.plugins, "missing playwright plugin").toHaveProperty(
      "playwright",
    );
    expect(ruleset?.plugins, "should not have react plugin").not.toHaveProperty(
      "react",
    );
    expect(ruleset?.rules, "ruleset does not have rules").toBeDefined();
    expect(ruleset?.rules, "should not have vitest rules").not.toContainRules(
      vitestRules,
    );
    expect(ruleset?.rules, "missing playwright rules").toContainRules(
      playwrightRules,
    );
    expect(ruleset?.rules, "should not have react rules").not.toContainRules(
      reactRules,
    );
    baseProperties(ruleset as Linter.Config<Linter.RulesRecord>, true);
    expect(
      Object.keys(ruleset?.plugins ?? {}),
      "should not have extraneous plugins",
    ).toHaveLength(8);
  });
  // #endregion

  // #region React
  it("should apply the expected plugins for react", () => {
    expect.assertions(27);
    const ruleset = config.find((rule) => {
      return rule?.files?.includes("src/**/*.tsx");
    });
    expect(ruleset, "ruleset is not defined").toBeDefined();
    expect(ruleset?.plugins, "ruleset does not have plugins").toBeDefined();
    expect(
      ruleset?.plugins,
      "should not have vitest plugin",
    ).not.toHaveProperty("vitest");
    expect(
      ruleset?.plugins,
      "should not have playwright plugin",
    ).not.toHaveProperty("playwright");
    expect(ruleset?.plugins, "missing react plugin").toHaveProperty("react");
    expect(ruleset?.rules, "ruleset does not have rules").toBeDefined();
    expect(ruleset?.rules, "should not have vitest rules").not.toContainRules(
      vitestRules,
    );
    expect(
      ruleset?.rules,
      "should not have playwright rules",
    ).not.toContainRules(playwrightRules);
    expect(ruleset?.rules, "missing react rules").toContainRules(reactRules);
    baseProperties(ruleset as Linter.Config<Linter.RulesRecord>, false);
    expect(
      Object.keys(ruleset?.plugins ?? {}),
      "should not have extraneous plugins",
    ).toHaveLength(9);
  });
  // #endregion
});
