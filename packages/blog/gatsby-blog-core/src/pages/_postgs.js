const queryMobileMenu = require('../utils/queryMobileMenu')

module.exports = async (
  { graphql, actions, reporter },
  pluginOptions,
  { template }
) => {
  const { createPage } = actions
  const { pageContextOptions } = pluginOptions

  pageContextOptions.mobileMenu = await queryMobileMenu({ graphql })

  const resultGS = await graphql(`
    {
      allGooglePostsSheet(
        limit: 1000
      ) {
        edges {
          node {
            id
            slug
            category
            tags
            author
          }
        }
      }
    }
  `)

  if (resultGS.errors) {
    reporter.panic(resultGS.errors)
  }

  const { allGooglePostsSheet } = resultGS.data
  const postsGS = allGooglePostsSheet.edges

  postsGS.forEach(({ node }, index) => {
    const { id, slug, category, author } = node
    createPage({
      path: slug,
      component: template,
      context: {
        id,
        category,
        author
      }
    })
  })
}
