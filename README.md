# Naomi's ESLint Config

This package holds my ESLint configuration for easy installation and syncing changes across projects.

## Live Version

This package is currently published. [View the `npm` page](https://www.npmjs.com/package/@nhcarrigan/eslint-config).

## Installation

To install this package, run the following command:

```bash
npm i @nhcarrigan/eslint-config eslint
```

## Compatibility

This package is compatible with ESLint 9.

## Usage

To use this package, add the following to your `eslint.config.js` file:

```js
import NaomisConfig from "@nhcarrigan/eslint-config";

export default [
  ...NaomisConfig,
  // Any overrides you need, such as:
   {
   rules: {
     complexity: "off",
     "max-lines-per-function": "off",
     "max-statements": "off",
     "jsdoc/require-file-overview": "off"
   },
 },
 {
   files: ["test/__mocks__/Database.mock.ts"],
   rules: {
     "require-await": "off"
   }
 },
];
```

Then set up these two scripts in your `package.json`:

```json
{
    "format": "eslint src test --max-warnings 0 --fix",
    "lint": "eslint src test --max-warnings 0",
}
```

### Formatting

Our rulesets include the `stylistic` package, which enforces quite a bit of specific formatting. With this being the case, projects should NOT use Prettier in tandem with this config.

Instead, set your editor to run the ESLint formatter on save. For example, in VSCodium, you can add a `.vscode/settings.json` file to your project:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": ["typescript"]
}
```

## Stylistic Standards

This configuration does not extend or incorporate any external rulesets. Every rule this config sets has been added deliberately and with reason.

### Warnings and Errors

A rule is set to be a warning when it is something that is okay during development (e.g. using a `console.log`, or not having a JSDoc definition yet) but should not make it to production code.

A rule is set to an error when it is something that should not occur in development or production (e.g. missing semi-colons, using loose equality).

### No Deactivated Rules

Because this config is built from scratch, there is no need to explicitly deactivate any rules. Everything is "off" by default, and turned on as desired by this package.

The tests will not allow you to explicitly disable rules.

The only exception is the `disabledEslintRules` object, which explicitly turns off built-in ESLint rules to avoid conflicts with external packages like `@typescript-eslint`. 

### Proposing Style Changes

All style changes should be proposed in our [chat server](https://chat.nhcarrigan.com).

## Feedback and Bugs

If you have feedback or a bug report, please feel free to open an issue!

## Contributing

If you would like to contribute to the project, you may create a Pull Request containing your proposed changes and we will review it as soon as we are able! Please review our [contributing guidelines](CONTRIBUTING.md) first.

## Code of Conduct

Before interacting with our community, please read our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This software is licensed under our [global software license](https://docs.nhcarrigan.com/legal/license/).

Copyright held by Naomi Carrigan.

## Contact

We may be contacted through our [Chat Server](http://chat.nhcarrigan.com) or via email at `contact@nhcarrigan.com`.
