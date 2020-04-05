// https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project

const OFF = "off";
const WARN = "warn";
const ERROR = "error";

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    // "plugin:react-hooks/recommended", // till this is fixed: https://github.com/facebook/react/issues/18208
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "@typescript-eslint", "import"],
  rules: {
    "import/order": [
      ERROR,
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "prettier/prettier": [ERROR, { singleQuote: true }],
    "react-hooks/rules-of-hooks": ERROR,
    "react-hooks/exhaustive-deps": WARN,
    "no-shadow": ERROR,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
