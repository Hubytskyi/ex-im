import { graphql } from 'gatsby'
import PostGSPage from '../containers/PostGS'

export default PostGSPage

export const pageQuery = graphql`
  query PostGSPageQuery(
    $id: String! 
    $category: String!
    $author: String!
  ) {
    postGS: googlePostsSheet(id: { eq: $id }) {
      title
      author
      category
      date
      slug
      tags
      timeToRead
      description
      state
      city
      federal
    }
    categoryGS: googleCategoriesSheet(slug: {eq: $category}) {
      name
    }
    authorGS: googleAuthorsSheet(slug: {eq: $author}) {
      id
      slug
      name
      photo
      description
      expertise
      position
      instagram
      twitter
      website
    }
  }
`
