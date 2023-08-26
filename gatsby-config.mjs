/**
 * @file Gatsby Site Configuration
 */

import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";

/*
 * Const __dirname = path.dirname(fileURLToPath(import.meta.url));
 * require = createRequire(import.meta.url);
 * gatsbyEslintRules = path.join(
 *     process.cwd(),
 *     "node_modules",
 *     "gatsby",
 *     "dist",
 *     "utils",
 *     "eslint-rules"
 * );
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config = {
  "siteMetadata": {
    "title": "Archiv8",
    "siteUrl": "https://archiv8.github.io",
    "description": "Unofficial Arch Linux PKGBUILDs for building packages with tools such as makepkg"
  },
  "trailingSlash": "never",
  "graphqlTypegen": true,
  "plugins": [

    /*
     * {
     *     "resolve": "gatsby-plugin-eslint",
     *     "options": {
     *         // Gatsby required rules directory
     *         "rulePaths": [gatsbyEslintRules],
     *         // Default settings that may be omitted or customized
     *         "stages": ["develop"],
     *         "extensions": [
     *             "cjs",
     *             "js",
     *             "jsx",
     *             "mjs",
     *             "ts",
     *             "tsx"
     *         ],
     *         "exclude": [
     *             ".cache",
     *             ".yarn/",
     *             "__explore/",
     *             "public",
     *             "node_modules/",
     *             "src/images/",
     *             "src/sounds/",
     *             "src/videos/",
     *             ".gitkeep"
     *         ]
     */

    //         /*
    //          * Any additional eslint-webpack-plugin options below
    //          * ...
    //          */
    //     }
    // },
    "gatsby-plugin-mdx",
    {
      "resolve": "gatsby-source-filesystem",
      "options": {
        "name": "blogImages",
        "path": "./src/images/blog-images/"
      },
      "__key": "blogImages"
    },
    {
      "resolve": "gatsby-source-filesystem",
      "options": {
        "name": "branding",
        "path": "./src/images/branding/"
      },
      "__key": "branding"
    },
    {
      "resolve": "gatsby-source-filesystem",
      "options": {
        "name": "data",
        "path": "./src/data/"
      },
      "__key": "data"
    },
    {
      "resolve": "gatsby-source-filesystem",
      "options": {
        "name": "icons",
        "path": "./src/images/icons/"
      },
      "__key": "icons"
    },
    {
      "resolve": "gatsby-source-filesystem",
      "options": {
        "name": "content",
        "path": "./src/content/"
      },
      "__key": "content"
    },
    {
      "resolve": "gatsby-source-filesystem",
      "options": {
        "name": "siteImages",
        "path": "./src/images/site-images/"
      },
      "__key": "siteImages"
    },
    {
      "resolve": "gatsby-transformer-json",
      "options": {
        "typeName": "Json"
      }
    },
    {
      "resolve": "gatsby-transformer-yaml",
      "options": {
        // A fixed string
        "typeName": "Yaml"
      }
    }

  ]
};

export default config;
