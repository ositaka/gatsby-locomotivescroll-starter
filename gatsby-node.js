/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { slugify } = require("./src/utils/utilityFunctions")
const path = require("path")
const authors = require("./src/utils/authors")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}


exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  
  if(node.internal.type === "MarkdownRemark"){
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const singlePostTemplate = path.resolve("src/templates/single-post.js")

  return graphql(`
    {
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              author
              tags
            }
            fields{
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: singlePostTemplate,
        context: {
          // Passing slug for template to use to get post
          slug: node.fields.slug,
          // Find author imageUrl from authors and pass it to the single post template
          imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl
        }
      })
    })
  })
}