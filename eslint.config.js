import naomisRules from "./prod/index.js";

export default [
  ...naomisRules,
  {
    rules: {
      "@typescript-eslint/naming-convention": "off",
      "import/no-default-export": "off",
      "import/namespace": "off",
      "import/no-deprecated": "off",
      "@typescript-eslint/consistent-type-assertions": "off"
    },
  },
];
