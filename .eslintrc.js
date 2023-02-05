module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    jsx: true,
  },
  plugins: ["react", "@typescript-eslint"],
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "no-undef": "off",
    "no-console": "error",
    "no-var": "error",
    "prefer-template": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    indent: "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { accessibility: "explicit" },
    ],
    "import/prefer-default-export": "off",
    "react/jsx-one-expression-per-line": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-types": "off",
    "no-unneeded-ternary": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    eqeqeq: "error",
    "no-empty-function": "error",
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignoreEnums: true,
        ignoreReadonlyClassProperties: true,
        ignoreNumericLiteralTypes: true,
        ignoreDefaultValues: true,
        ignore: [0, 1],
      },
    ],

    "no-nested-ternary": "error",
  },
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
