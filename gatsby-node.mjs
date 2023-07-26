/**
 * @file Node Configuration
 * @FixMe Import of "./src/templates/page.jsx" fails when using esm import statement
 */
import path from "node:path";

export const createSchemaCustomization = ({ actions, schema }) => {

  const { createTypes } = actions

  const typeDefs = [

    "type Mdx implements Node { frontmatter: Frontmatter }",

    schema.buildObjectType(
      {
        name: "Frontmatter",
        interfaces: [
          "Node"
        ],
        fields: {
          pageType: {
            type: "String"
          },
          title: {
            type: "String"
          },
          pageDescription: {
            type: "String!"
          },
          tags: {
            type: "String"
          },
          published: {
            type: "String"
          },
          authors: {
            type: "String"
          },
          contributors: {
            type: "String"
          },
          reviewers: {
            type: "String"
          },
          slug: {
            type: "String"
          },
          dateCreated: {
            type: "Date",
            resolve(parent) {
              return parent.title || '(Untitled)'
            }
          },
          dateModified: {
            type: "Date"
          },
          datePublished: {
            type: "Date"
          },
          dateReviewed: {
            type: "Date"
          },
          dateReviewDue: {
            type: "Date"
          },
        },
        extensions: {
          infer: false,
        },

      },
    ),

    schema.buildObjectType(
      {
        name: "personJson",
        interfaces: [
          "Node"
        ],
        fields: {
          userName: {
            type: "String!"
          },
        },
        extensions: {
          infer: false,
        },
      }
    )

  ]

  createTypes(typeDefs)

}

export const createPages = async ({ graphql, actions, reporter }) => {

  console.log("++++++ createPages")
  const { createPage } = actions

  const result = await graphql(`
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

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.

  const postTemplate = path.resolve(`./src/templates/post.jsx`)

  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach(node => {

    console.log("------------ createPage")

    createPage({



      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: node.frontmatter.slug,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}

// export const createResolvers = ({ createResolvers }) => {

//   const resolvers = {

//   }
//   createResolvers(resolvers)
// }
