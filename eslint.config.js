/*
 * @file ESLint Configuration
 * @author Ross Clark
 * @copyright 2023
 * @license
 * @todo Split settings into manageable chunks either as a:
 * - A shareable config
 * - A plugin
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

      /*
       * @todo ESLint, array-bracket-newline
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       * @see {@link https://eslint.org/docs/latest/rules/array-bracket-newline|array-bracket-newline}
       */
      "array-bracket-newline": [
        "warn",
        "always"
      ],

      /*
       * @todo ESLint, array-element-newline
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       * @see {@link https://eslint.org/docs/latest/rules/array-element-newline|array-element-newline}
       */
      "array-element-newline": [
        "warn",
        "always",
        {
          "ArrayExpression": "always",
          "ArrayPattern": "always"
        }
      ],


      /*
       * @todo ESLint, capitalized-comments
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       * - If necessary Set more ignore patterns,  for jest etc.
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

      /*
       * @todo ESLint, comma-dangle
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       * @see {@link https://eslint.org/docs/latest/rules/comma-dangle|comma-dangle}
       */
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

      /*
       * @todo ESLint, complexity
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       * @see {@link https://eslint.org/docs/latest/rules/complexity|complexity}
       */
      // "complexity": [], https://eslint.org/docs/latest/rules/complexity

      /*
       * @todo ESLint, indent
       * - Verify configurations option against Gatsby settings
       *   - Understand unused options, including:
       *     - "ignoredNodes": "",
       *     - "tab": "",
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       * Figure out what triggers error; Value 1 should be object
       * @see {@link https://eslint.org/docs/latest/rules/indent|indent}
       */
      "indent": [
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

      /*
       * @todo ESLint, max-len
       * - Verify configurations option against Gatsby settings
       *   - Understand unused options
       *   - Whether usage is compatible with Gatsby
       * - How / whether changes will effect readability of code
       * @see {@link https://eslint.org/docs/latest/rules/max-len|max-len}
       */
      "max-len": [
        "warn",
        {
          "code": 100,
          "comments": 100,
          "ignoreComments": false,
          // "ignorePattern": "",
          "ignoreRegExpLiterals": false,
          "ignoreStrings": false,
          "ignoreTemplateLiterals": false,
          "ignoreTrailingComments": false,
          "ignoreUrls": true,
          "tabWidth": 2
        }
      ],

      /*
       * @todo ESLint, max-depth
       * - Verify configurations option against Gatsby settings
       *   - Understand unused options
       *   - Whether changes / usage are compatible with Gatsby
       * - How / whether changes will effect readability of code
       * @see {@link https://eslint.org/docs/latest/rules/max-depth|max-depth}
       */
      // "max-depth": [], https://eslint.org/docs/latest/rules/max-depth

      /*
       * @todo ESLint, max-lines
       * - Verify configurations option against Gatsby settings
       *   - Understand unused options
       *   - Whether usage compatible with Gatsby
       * - How / whether changes will effect readability of code
       * @see {@link https://eslint.org/docs/latest/rules/max-lines|max-lines}
       */
      "max-lines": [
        "warn",
        {
          "max": 1000,
          "skipBlankLines": false,
          "skipComments": false
        }
      ],

      /*
       * @todo ESLint, max-lines-per-function
       * - Verify configurations option against Gatsby settings
       *   - Understand unused options
       *   - Whether changes / usage are compatible with Gatsby
       * - How / whether changes will effect readability of code
       * @see {@link https://eslint.org/docs/latest/rules/https://eslint.org/docs/latest/rules/max-lines-per-function|max-lines-per-function}
       */
      // "max-lines-per-function": [],

      /*
       * @todo ESLint, max-nested-callbacks
       * - Verify configurations option against Gatsby settings
       *   - Understand unused options
       *   - Whether changes / usage are compatible with Gatsby
       * - How / whether changes will effect readability of code
       * @see {@link https://eslint.org/docs/latest/rules/max-nested-callbacks|max-nested-callbacks}
       */
      // "max-nested-callbacks": [],

      /*
       * @todo ESLint, max-params
       * - Verify configurations option against Gatsby settings
       *   - Understand unused options
       *   - Whether changes / usage are compatible with Gatsby
       * - How / whether changes will effect readability of code
       * @see {@link https://eslint.org/docs/latest/rules/max-params|max-params}
       */
      // "max-params": [], https://eslint.org/docs/latest/rules/max-params

      /*
       * @todo ESLint, max-statements
       * - Verify configurations option against Gatsby settings
       *   - Understand unused options
       *   - Whether changes / usage are compatible with Gatsby
       * - How / whether changes will effect readability of code
       * @see {@link https://eslint.org/docs/latest/rules/max-statements|max-statements}
       */
      //  "max-statements": [],


      /*
       * @todo ESLint, multiline-comment-style
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       * @see {@link https://eslint.org/docs/latest/rules/multiline-comment-style|multiline-comment-style}
       */
      "multiline-comment-style": [
        "warn",
        "starred-block"
      ],


      /*
       * @todo ESLint, no-anonymous-exports-page-templates
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       * @todo Cannot get "no-anonymous-exports-page-templates" from gatsby-plugin-eslint to
       * function:
       * - Does it require use through gatsby-config.mjs
       * - Can it be used directly as preferred option?
       *
       * @see {@link https://www.npmjs.com/package/gatsby-plugin-eslint|no-anonymous-exports-page-templates from gatsby-plugin-eslint}
       * @see {@link https://github.com/mongkuen/gatsby-plugin-eslint|gatsby-plugin-eslint GitHub repository}
       * @see {@link https://www.gatsbyjs.com/plugins/gatsby-plugin-eslint|gatsby-plugin-eslint in the Gatsby Documentation}
       */
      // "no-anonymous-exports-page-templates": "warn",

      /*
       * @todo @todo ESLINT, sort-keys
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys|sort-keys}
       */
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

      /*
       * @todo @todo ESLINT, sort-keys
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys|sort-keys}
       */
      "no-mixed-spaces-and-tabs": [
        "error"
      ],

      /*
       * @todo @todo ESLINT, sort-keys
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys|sort-keys}
       */
      "no-tabs": [
        "error",
        {
          "allowIndentationTabs": false
        }
      ],

      /*
       * @todo @todo ESLINT, sort-keys
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys|sort-keys}
       */
      "no-trailing-spaces": [
        "error",
        {
          "ignoreComments": false,
          "skipBlankLines": false
        }
      ],

      /*
       * @todo @todo ESLINT, sort-keys
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys|sort-keys}
       */
      "no-unexpected-multiline": [
        "error"
      ],

      /*
       * @todo @todo ESLINT, sort-keys
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys|sort-keys}
       */
      "no-unreachable": [
        "error"
      ],

      /*
       * @todo @todo ESLINT, sort-keys
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys|sort-keys}
       */
      "no-unused-expressions": [
        "warn",
        {
          "allowShortCircuit": false,
          "allowTaggedTemplates": false,
          "allowTernary": false,
          "enforceForJSX": false
        }
      ],

      /*
       * @todo @todo ESLINT, sort-keys
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys|sort-keys}
       */
      "object-curly-spacing": [
        "warn",
        "always",
        {
          "arraysInObjects": true,
          "objectsInObjects": true
        }
      ],

      /*
       * @todo @todo ESLINT, sort-keys
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys|sort-keys}
       */
      "one-var": [
        "warn",
        "never"
      ],

      /*
       * @todo ESLint, no-restricted-exports
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
       *  @see {@link https://eslint.org/docs/latest/rules/no-restricted-exports|no-restricted-exports}
       */
      // "no-restrict-exports": [],

      /*
       * @todo ESLINT, semi
       * - Rule needs refining.
       * - As suggested n the documentation the following are included in this configuration file:
       *   - no-unreachable
       *   - no-unexpected-multiline
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
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
       * @todo @todo ESLINT, sort-keys
       * - Rule needs refining.
       * - Verify configurations option against Gatsby settings
       * - Understand unused options:
       *   - Whether changes / usage is compatible with Gatsby
       *   - How / whether changes will effect readability of code
       *
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
