// eslint-disable-next-line no-undef
module.exports = {
  plugins: ["simple-import-sort", "unused-imports"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
  },
  parserOptions: {
    schema: "../backend/src/schema.graphql",
  },
  overrides: [
    {
      files: ["*.graphql"],
      extends: "plugin:@graphql-eslint/schema-recommended",
      rules: {
        "@graphql-eslint/require-id-when-available": "error",
        "@graphql-eslint/alphabetize": [
          "error",
          {
            selections: ["OperationDefinition"],
            groups: ["id", "*"],
          },
        ],
      },
    },
  ],
};
