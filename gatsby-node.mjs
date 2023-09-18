/**
 * @file Node Configuration
 * @FixMe Import of "./src/templates/page.jsx" fails when using esm import statement
 */
import path from "node:path"

export const createSchemaCustomization = ({ actions, schema }) => {

  const { createTypes } = actions

  const typeDefs = [

    "type Mdx implements Node { frontmatter: Frontmatter }",

    schema.buildObjectType({
      "name": "Frontmatter",
      "interfaces": [
        "Node"
      ],
      "fields": {
        "userId": {
          "type": "String"
        },
        "contentType": {
          "type": "String"
        },
        "contributorUserId": {
          "type": "String"
        },
        "dateCreated": {
          "type": "Date"
        },
        "pageDescription": {
          "type": "String!"
        },
        "published": {
          "type": "String"
        },
        "reviewerUserId": {
          "type": "String"
        },
        "slug": {
          "type": "String"
        },
        "subTitle": {
          "type": "String"
        },
        "tags": {
          "type": "String"
        },
        "title": {
          "type": "String"
        }

        /*
         * @todo Use hashes created on "git commit" to retrieve date/time for the following.
         * File/folder dates are only reliable on original local repository. The dates of a fresh
         * clone will not be based on the filesystem but on the commit latest hash.
         *
         * "dateModified": {
         *   "type": "Date"
         * },
         * "datePublished": {
         *   "type": "Date"
         * },
         * "dateReviewed": {
         *   "type": "Date"
         * },
         * "dateReviewDue": {
         *   "type": "Date"
         * }
         */
      },
      "extensions": {
        "infer": false
      }

    }),

    schema.buildObjectType({
      "name": "personJson",
      "interfaces": [
        "Node"
      ],
      "fields": {
        "userId": {
          "type": "String!"
        }
      },
      "extensions": {
        "infer": false
      }
    })

  ]

  createTypes(typeDefs)

}

export const createPages = async ({ graphql, actions, reporter }) => {

  console.log("++++++ createPages")
  const { createPage } = actions

  const resultSlug = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (resultSlug.errors) {

    reporter.panicOnBuild(
      "Error loading MDX result: resultSlug",
      resultSlug.errors
    )

  }

  /*
   * Create blog post pages.
   */

  const postTemplate = path.resolve("./src/templates/post.jsx")

  const posts = resultSlug.data.allMdx.nodes

  /*
   * Call `createPage` for each result
   */
  posts.forEach((node) => {

    console.log("------------ createPage")

    createPage({

      /*
       * @todo URIs
       * Slugs become increasingly unreliable when the site structure alters. Replace front
       * matter slugs with an alternative.
       *
       * Use a different query / method, like frontmatter.title with a helper function such as
       * slugify to create a slug.
       */
      "path": node.frontmatter.slug,

      /*
       * Provide the path to the MDX content file so webpack can pick it up and transform it into
       * JSX
       */
      "component": `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,

      /*
       * Use the values in this context in the page layout component
       */
      "context": { "id": node.id }
    })

  })

}

// Export const createResolvers = ({ createResolvers }) => {

//   Const resolvers = {

/*
 *   }
 *   createResolvers(resolvers)
 * }
 */
