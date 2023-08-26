/*
 * @file ESLint Configuration
 */

const babelRules = require("@babel/eslint-plugin")
const babelParser = require("@babel/eslint-parser")
const gatsbyEsLint = require("gatsby-plugin-eslint")
const globals = require("globals")
const js = require("@eslint/js")
const flowType = require("eslint-plugin-flowtype")
const jSdoc = require("eslint-plugin-jsdoc")
const jsxA11y = require("eslint-plugin-jsx-a11y")
const react = require("eslint-plugin-react")

module.exports = [
  js.configs.all,
  {

    "ignores": [
      "__explore/*",
      ".cache/*",
      ".yarn/*",
      "logs/*",
      "node_modules/*",
      "src/images/",
      "src/sounds/",
      "src/videos/",
      "public/*",
      ".gitkeep"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        ...globals.node,
        "__BASE_PATH__": true,
        "__PATH_PREFIX__": true,
        "__TRAILING_SLASH__": true,
        "graphql": true
      },
      "parser": babelParser,
      "parserOptions": {
        "babelOptions": {
          "babelrc": false,
          "configFile": false,
          "presets": [
            "@babel/preset-env"
          ]
        },
        "requireConfigFile": false
      },
      "sourceType": "module"
    },

    "linterOptions": {
      "noInlineConfig": true,
      "reportUnusedDisableDirectives": true
    },
    "plugins": {
      babelRules,
      flowType,
      gatsbyEsLint,
      jSdoc,
      jsxA11y,
      react
    },


    "rules": {
      "array-bracket-newline": [
        "warn",
        "always"
      ],
      "array-element-newline": [
        "warn",
        "always",
        {
          "ArrayExpression": "always",
          "ArrayPattern": "always"
        }
      ],


      /*
       * Set more ignore patterns, if necessary for jest etc.
       * @see {@link https://eslint.org/docs/latest/rules/capitalized-comments|capitalized-comments}
       */
      "capitalized-comments": [
        "warn",
        "always",
        {
          "ignoreConsecutiveComments": false,
          "ignoreInlineComments": false,
          "ignorePattern": "jscs|jshint|eslint|istanbul|global|globals|exported"
        }
      ],
      "comma-dangle": [
        "error",
        {
          "arrays": "never",
          "exports": "never",
          "functions": "never",
          "imports": "never",
          "objects": "never"
        }
      ],
      "indent": [

        /*
         * Key : "indent". How to configure these rules?
         * Error is: Value 1 should be object
         * - "CallExpression": 1
         * - "FunctionDeclaration": 1
         * - "FunctionExpression": 1
         * - "StaticBlock": 1
         *
         * Also look at docs for:
         * "ignoredNodes": "",
         * "tab": "",
         */
        "warn",
        2,
        {
          "ArrayExpression": 1,
          "ImportDeclaration": 1,
          "MemberExpression": 1,
          "ObjectExpression": 1,
          "SwitchCase": 0,
          "VariableDeclarator": 1,
          "flatTernaryExpressions": false,
          "ignoreComments": false,
          "offsetTernaryExpressions": false,
          "outerIIFEBody": 1
        }
      ],
      "max-len": [
        "warn",
        {
          "code": 100,
          "comments": 100,
          "ignoreComments": false,
          // "ignorePattern": "",
          "ignoreRegExpLiterals": true,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": false,
          "ignoreTrailingComments": false,
          "ignoreUrls": true,
          "tabWidth": 2
        }
      ],
      "multiline-comment-style": [

        /*
         * Read documentation for configuring this rule and other JSDoc rules:
         * {
         *   CheckJSDoc: true
         * }
         * @see {@link https://eslint.org/docs/latest/rules/multiline-comment-style|multiline-comment-style}
         * @see {@link https://www.npmjs.com/package/eslint-plugin-jsdoc|eslint-plugin-jsdoc}
         */
        "warn",
        "starred-block"
      ],

      /*
       * Cannot get "no-anonymous-exports-page-templates" from gatsby-plugin-eslint to function:
       * - Does it require use through gatsby-config.mjs
       * - Cant it be used directly as preferred option?
       * @see {@link https://www.npmjs.com/package/gatsby-plugin-eslint|no-anonymous-exports-page-templates from gatsby-plugin-eslint}
       * @see {@link https://github.com/mongkuen/gatsby-plugin-eslint|gatsby-plugin-eslint GitHub repository}
       * @see {@link https://www.gatsbyjs.com/plugins/gatsby-plugin-eslint|gatsby-plugin-eslint in the Gatsby Documentation}
       */

      // "no-anonymous-exports-page-templates": "warn",
      "no-magic-numbers": [
        "error",
        {
          "detectObjects": true,
          "enforceConst": true,

          /*
           * "ignore": [
           * ],
           */
          "ignoreArrayIndexes": false,
          "ignoreClassFieldInitialValues": true,
          "ignoreDefaultValues": true
        }
      ],
      "no-mixed-spaces-and-tabs": [
        "error"
      ],
      "no-tabs": [
        "error",
        {
          "allowIndentationTabs": false
        }
      ],
      "no-trailing-spaces": [
        "error",
        {
          "ignoreComments": false,
          "skipBlankLines": false
        }
      ],
      "no-unexpected-multiline": [
        "error"
      ],
      "no-unreachable": [
        "error"
      ],
      "no-unused-expressions": [
        "warn",
        {
          "allowShortCircuit": false,
          "allowTaggedTemplates": false,
          "allowTernary": false,
          "enforceForJSX": false
        }
      ],
      "object-curly-spacing": [
        "warn",
        "always",
        {
          "arraysInObjects": true,
          "objectsInObjects": true
        }
      ],
      "one-var": [
        "warn",
        "never"
      ],

      /*
       * Rule needs refining.
       * As suggested:
       * - no-unreachable is included in this config
       *
       * @see {@link https://eslint.org/docs/latest/rules/semi|semi}
       * @see {@link https://eslint.org/docs/latest/rules/no-unreachable|no-unreachable}
       * @see {https://eslint.org/docs/latest/rules/no-unexpected-multiline|no-unexpected-multiline}
       */
      "semi": [
        "warn",
        "never"
      ],

      /*
       * Rule needs refining.
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys|sort-keys}
       */
      "sort-keys": [
        "warn",
        "asc"
      ]
    }
  },
  {
    "files": [
      "**/*.cjs",
      "**/*.js"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "parser": babelParser,
      "parserOptions": {
        "babelOptions": {
          "babelrc": false,
          "configFile": false,
          "presets": [
            "@babel/preset-env"
          ]
        },
        "requireConfigFile": false,
        "sourceType": "module"
      }
    }

  },
  {
    "files": [
      "**/*.jsx"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        ...globals.node,
        "__BASE_PATH__": true,
        "__PATH_PREFIX__": true,
        "__TRAILING_SLASH__": true,
        "graphql": true
      },
      "parser": babelParser,
      "parserOptions": {
        "babelOptions": {
          "babelrc": false,
          "configFile": false,
          "presets": [
            "@babel/preset-env"
          ]
        },
        "requireConfigFile": false
      },
      "sourceType": "module"
    }
  },
  {
    "files": [
      "**/*.mjs"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        ...globals.node,
        "__BASE_PATH__": true,
        "__PATH_PREFIX__": true,
        "__TRAILING_SLASH__": true,
        "graphql": true
      },
      "parser": babelParser,
      "parserOptions": {
        "babelOptions": {
          "babelrc": false,
          "configFile": false,
          "presets": [
            "@babel/preset-env"
          ]
        },
        "requireConfigFile": false
      },
      "sourceType": "module"
    }
  },
  {
    "files": [
      "**/*.ts"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        ...globals.node,
        "__BASE_PATH__": true,
        "__PATH_PREFIX__": true,
        "__TRAILING_SLASH__": true,
        "graphql": true
      },
      "parser": babelParser,
      "parserOptions": {
        "babelOptions": {
          "babelrc": false,
          "configFile": false,
          "presets": [
            "@babel/preset-env"
          ]
        },
        "requireConfigFile": false
      },
      "sourceType": "module"
    }
  },
  {
    "files": [
      "**/*.tsx"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        ...globals.node,
        "__BASE_PATH__": true,
        "__PATH_PREFIX__": true,
        "__TRAILING_SLASH__": true,
        "graphql": true
      },
      "parser": babelParser,
      "parserOptions": {
        "babelOptions": {
          "babelrc": false,
          "configFile": false,
          "presets": [
            "@babel/preset-env"
          ]
        },
        "requireConfigFile": false
      },
      "sourceType": "module"
    }
  }
]
