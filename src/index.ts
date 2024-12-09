/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { fixupPluginRules } from "@eslint/compat";
import stylistic from "@stylistic/eslint-plugin";
import tslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import vitest from "@vitest/eslint-plugin";
import deprecation from "eslint-plugin-deprecation";
import importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import playwright from "eslint-plugin-playwright";
import react from "eslint-plugin-react";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import { deprecationRules } from "./rules/deprecation.js";
import { disabledEslintRules, eslintRules } from "./rules/eslint.js";
import { importRules } from "./rules/import.js";
import { jsdocRules } from "./rules/jsdoc.js";
import { playwrightRules } from "./rules/playwright.js";
import { reactRules } from "./rules/react.js";
import { sortKeysFixRules } from "./rules/sortKeysFix.js";
import { stylisticRules } from "./rules/stylistic.js";
import { typescriptEslintRules, typescriptEslintRulesWithTypes }
  from "./rules/typescriptEslint.js";
import { unicornRules } from "./rules/unicorn.js";
import { vitestRules } from "./rules/vitest.js";
import type { ESLint, Linter } from "eslint";

const config: Array<Linter.Config> = [
  // #region Typescript Config
  {
    files:           [ "src/**/*.ts" ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser:        parser,
      parserOptions: {
        ecmaVersion:     11,
        project:         true,
        sourceType:      "module",
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      // @ts-expect-error It's a config. It's just not the narrow config. SMH.
      "@typescript-eslint": tslint,
      // @ts-expect-error They haven't typedef this yet because it technically doesn't support eslint9
      "deprecation":        fixupPluginRules(deprecation),
      "import":             fixupPluginRules(importPlugin as ESLint.Plugin),
      "jsdoc":              jsdoc,
      "sort-keys-fix":      sortKeysFix as ESLint.Plugin,
      // @ts-expect-error They haven't typedef this yet because it technically doesn't support eslint9
      "stylistic":          fixupPluginRules(stylistic),
      "unicorn":            unicorn,
    },
    rules: {
      ...eslintRules,
      ...disabledEslintRules,
      ...typescriptEslintRules,
      ...typescriptEslintRulesWithTypes,
      ...importRules,
      ...jsdocRules,
      ...deprecationRules,
      ...stylisticRules,
      ...unicornRules,
      ...sortKeysFixRules,
    },
  },
  // #endregion

  // #region Vitest Config
  {
    files:           [ "test/**/*.spec.ts" ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser:        parser,
      parserOptions: {
        ecmaVersion: 11,
        sourceType:  "module",
      },
    },
    plugins: {
      // @ts-expect-error It's a config. It's just not the narrow config. SMH.
      "@typescript-eslint": tslint,
      "import":             fixupPluginRules(importPlugin as ESLint.Plugin),
      "jsdoc":              jsdoc,
      "sort-keys-fix":      sortKeysFix as ESLint.Plugin,
      // @ts-expect-error They haven't typedef this yet because it technically doesn't support eslint9
      "stylistic":          fixupPluginRules(stylistic),
      "unicorn":            unicorn,
      "vitest":             vitest,
    },
    rules: {
      ...eslintRules,
      ...disabledEslintRules,
      ...typescriptEslintRules,
      ...vitestRules,
      ...importRules,
      ...jsdocRules,
      ...stylisticRules,
      ...unicornRules,
      ...sortKeysFixRules,
    },
  },
  // #endregion

  // #region Playwright Config
  {
    files:           [ "e2e/**/*.spec.ts" ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser:        parser,
      parserOptions: {
        ecmaVersion: 11,
        sourceType:  "module",
      },
    },
    plugins: {
      // @ts-expect-error It's a config. It's just not the narrow config. SMH.
      "@typescript-eslint": tslint,
      "import":             fixupPluginRules(importPlugin as ESLint.Plugin),
      "jsdoc":              jsdoc,
      "playwright":         playwright,

      "sort-keys-fix": sortKeysFix as ESLint.Plugin,
      // @ts-expect-error They haven't typedef this yet because it technically doesn't support eslint9
      "stylistic":     fixupPluginRules(stylistic),
      "unicorn":       unicorn,
    },
    rules: {
      ...eslintRules,
      ...disabledEslintRules,
      ...typescriptEslintRules,
      ...playwrightRules,
      ...importRules,
      ...jsdocRules,
      ...stylisticRules,
      ...unicornRules,
      ...sortKeysFixRules,
    },
  },
  // #endregion

  // #region React Config
  {
    files:           [ "src/**/*.tsx" ],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser:        parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion:     11,
        project:         true,
        sourceType:      "module",
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      // @ts-expect-error It's a config. It's just not the narrow config. SMH.
      "@typescript-eslint": tslint,
      // @ts-expect-error They haven't typedef this yet because it technically doesn't support eslint9
      "deprecation":        fixupPluginRules(deprecation),
      "import":             fixupPluginRules(importPlugin as ESLint.Plugin),
      "jsdoc":              jsdoc,
      "react":              react as ESLint.Plugin,
      "sort-keys-fix":      sortKeysFix as ESLint.Plugin,
      // @ts-expect-error They haven't typedef this yet because it technically doesn't support eslint9
      "stylistic":          fixupPluginRules(stylistic),
      "unicorn":            unicorn,
    },
    rules: {
      ...eslintRules,
      ...disabledEslintRules,
      ...typescriptEslintRules,
      ...typescriptEslintRulesWithTypes,
      ...importRules,
      ...jsdocRules,
      ...deprecationRules,
      ...stylisticRules,
      ...unicornRules,
      ...sortKeysFixRules,
      ...reactRules,
    },
  },
];

export default config;
