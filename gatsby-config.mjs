/**
 * @file Gatsby Site Configuration
 */

import { dirname } from "path"
import { fileURLToPath } from "url"
import { createRequire } from "module"

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config = {
  siteMetadata: {
    title: "Archiv8",
    siteUrl: "https://archiv8.github.io",
    description: "Unofficial Arch Linux PKGBUILDs for building packages with tools such as makepkg"
  },
  trailingSlash: "never",
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "blogImages",
        "path": "./src/images/blog-images/",
      },
      __key: "blogImages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "branding",
        "path": "./src/images/branding/",
      },
      __key: "branding"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "data",
        "path": "./src/data/",
      },
      __key: "data"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "icons",
        "path": "./src/images/icons/",
      },
      __key: "icons"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "content",
        "path": "./src/content/"
      },
      __key: "content"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "siteImages",
        "path": "./src/images/site-images/",
      },
      __key: "siteImages"
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        "typeName": "Json",
      }
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Yaml", // a fixed string
      },
    },

  ]
};

export default config
