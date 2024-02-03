module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    quotes: "off",
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "react/no-unknown-property": ["error", { ignore: ["css", "options"] }],
  },
};
