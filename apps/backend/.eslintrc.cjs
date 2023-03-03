// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
