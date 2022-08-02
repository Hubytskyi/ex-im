import { graphql } from 'gatsby'
import CategoryGS from '../containers/CategoryGS'

export default CategoryGS

export const pageQuery = graphql`
  query allPostsGSByCategoryQuery(
    $skip: Int!
    $limit: Int!
    $slug: String!
  ) {
    collectionInfo: googleCategoriesSheet(slug: { eq: $slug }) {
      id
      name
      slug
      description
    }

    posts: allGooglePostsSheet(
      filter: {
        category: { eq: $slug }
      }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        slug
        icon
        filters
      }
      pageInfo {
        pageCount
        hasPreviousPage
        hasNextPage
        currentPage
      }
      totalCount
    }
  }
`
