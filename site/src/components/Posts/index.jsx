import React, { useMemo, useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Box, Stack } from '@mui/material';
import PostItem from './Item';
import styles from './index.styles'
import PostsFilter from './Filter';

const PostsList = ({nodes}) => {

  const filtersData = usePostsFilterQuery();

  const [filters, setFilters] = useState({});

  const handleChange = (value, category) => {
    setFilters(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const filteredPosts = useMemo(() => {
    return nodes.filter((node) => {
      const itemFilters = node.filters.split(',').map(element => element.trim());
      if (Object.values(filters).every(el => itemFilters.indexOf(el) !== -1)) {
        return node
      }
    })
  }, [nodes, filters])

  const refreshFilter = () => {
    setFilters({});
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.filter}>
        <PostsFilter filters={filters} filtersData={filtersData} handleChange={handleChange} refreshFilter={refreshFilter}/>
      </Box>
      <Stack direction="row" flexWrap="wrap" width="100%" height="max-content">
        {filteredPosts && filteredPosts.map((item) => (
          <PostItem {...item} key={item.slug}/>
        ))}
      </Stack>
    </Box>
  );
};

export default PostsList;

export const usePostsFilterQuery = () => (
  useStaticQuery(graphql`
    query PostsFilterQuery {
      allGoogleFiltersSheet {
        edges {
          node {
            name
            categories
          }
        }
      }
    }
  `)
);
