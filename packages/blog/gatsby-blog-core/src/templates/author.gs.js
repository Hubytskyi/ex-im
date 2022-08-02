import { graphql } from 'gatsby';
import AuthorGS from '../containers/CollectionGS.Author';

export default AuthorGS;

export const pageQuery = graphql`
  query PostsByAuthorQuery(
    $skip: Int!
    $limit: Int!
    $slug: String!
  ) {
    collectionInfo: googleAuthorsSheet(slug: { eq: $slug }) {
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
    posts: allGooglePostsSheet(
      filter: {author: {eq: $slug}}
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
`;
