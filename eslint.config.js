import { jest } from "eslint-plugin-jest";
import { jsdoc } from "eslint-plugin-jsdoc";
import { a11y } from "eslint-plugin-jsx-a11y";

export default [
  {
    globals: {
      graphql: true,
      __PATH_PREFIX__: true,
      __TRAILING_SLASH__: true,
      __BASE_PATH__: true,
    },
    files: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
      "**/*.jsx"
    ],
    ignores: {},
    plugins: {
      "a11y": "a11y",
      "jest": "jest",
      "jsdoc": "jsdoc"
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      },
      parser: "@babel/eslint-parser",
      parserOptions: {}
    },
    linterOptions: {
      noInlineConfig: "true",
      reportUnusedDisabledDirectives: "true",
    },
    processor: "",
    extends: [
      "react-app",
      "react-app/jest"
    ],
    settings: {},
    rules: {},
  }
];
