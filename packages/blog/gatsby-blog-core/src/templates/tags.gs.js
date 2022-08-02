import { graphql } from 'gatsby';
import TagGS from '../containers/TagGS';

export default TagGS;

export const pageQuery = graphql`
  query allPostsGSByTagQuery(
    $skip: Int!
    $limit: Int!
    $slug: String
  ) {
    collectionInfo: googleTagsSheet(slug: { eq: $slug }) {
      name
      slug
    }
    posts: allGooglePostsSheet(
      filter: {tags: {in: [$slug]}}
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
