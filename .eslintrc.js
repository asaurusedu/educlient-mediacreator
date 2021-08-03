module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["google", "prettier", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [],
  parser: "babel-eslint",
  rules: {},
};
