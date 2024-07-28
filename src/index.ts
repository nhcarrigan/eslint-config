/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { fixupPluginRules } from "@eslint/compat";
import stylistic from "@stylistic/eslint-plugin";
import tslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import deprecation from "eslint-plugin-deprecation";
import importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import noOnlyTests from "eslint-plugin-no-only-tests";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import { deprecationRules } from "./rules/deprecation.js";
import { disabledEslintRules, eslintRules } from "./rules/eslint.js";
import { importRules } from "./rules/import.js";
import { jsdocRules } from "./rules/jsdoc.js";
import { noOnlyTestsRules } from "./rules/noOnlyTests.js";
import { sortKeysFixRules } from "./rules/sortKeysFix.js";
import { stylisticRules } from "./rules/stylistic.js";
import { typescriptEslintRules, typescriptEslintRulesWithTypes }
  from "./rules/typescriptEslint.js";
import { unicornRules } from "./rules/unicorn.js";
import type { ESLint, Linter } from "eslint";

const config: Array<Linter.Config> = [
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
      "no-only-tests":      noOnlyTests as ESLint.Plugin,
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
      ...noOnlyTestsRules,
      ...importRules,
      ...jsdocRules,
      ...deprecationRules,
      ...stylisticRules,
      ...unicornRules,
      ...sortKeysFixRules,
    },
  },
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
      "no-only-tests":      noOnlyTests as ESLint.Plugin,
      "sort-keys-fix":      sortKeysFix as ESLint.Plugin,
      // @ts-expect-error They haven't typedef this yet because it technically doesn't support eslint9
      "stylistic":          fixupPluginRules(stylistic),
      "unicorn":            unicorn,
    },
    rules: {
      ...eslintRules,
      ...disabledEslintRules,
      ...typescriptEslintRules,
      ...noOnlyTestsRules,
      ...importRules,
      ...jsdocRules,
      ...stylisticRules,
      ...unicornRules,
      ...sortKeysFixRules,
      // Overrides
      "complexity":                        "off",
      "import/no-extraneous-dependencies": "error",
      "max-lines-per-function":            "off",
      "max-nested-callbacks":              "off",
    },
  },
];

export default config;
