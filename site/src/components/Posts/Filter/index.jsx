import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const PostsFilter = ({filters, filtersData, handleChange, refreshFilter}) => {

  const parseCategories = node => {
    const categoriesArray = node.categories.split('/');
    const categoriesWithoutSpace = categoriesArray.map(cat => cat.trim());
    const formattedCategories = categoriesWithoutSpace.map((cat) => {

      const subcategories = cat.substring(
        cat.indexOf('(') + 1,
        cat.lastIndexOf(')')
      );

      return {
        name: cat.substring(0, cat.indexOf('(')),
        subcategories: subcategories.split(',')
      };
    });

    return (
      <>
        {formattedCategories.map((category) => {
          return (
            <Box key={category.name}>
              <FormControl fullWidth key={category.name}>
                <InputLabel id="corporate-insurance-categories-label">{category.name}</InputLabel>
                <Select
                  key={category.name}
                  labelId="corporate-insurance-categories-label"
                  id={category.name}
                  value={filters[category.name] || ''}
                  label={category.name}
                  sx={{mb: 2}}
                  onChange={(event) => {
                    handleChange(event.target.value, category.name);
                  }}
                >
                  {category.subcategories.map((subcategory) => {
                    const sub = subcategory.trim();
                    return (
                      <MenuItem key={sub} value={sub}>{sub}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          );
        })}
      </>

    );
  };

  return (
    <Box sx={{pr: 2}}>
      {filtersData.allGoogleFiltersSheet.edges && filtersData.allGoogleFiltersSheet.edges.map(({node}) => (
        <Box sx={{marginBottom: 2}} key={node.name}>
          <Typography sx={{mb: 1}}>{node.name}</Typography>
          {parseCategories(node)}
        </Box>
      ))}
      <Typography sx={{cursor: 'pointer', alignSelf: 'end'}} onClick={refreshFilter} variant={'caption'}>Clear All</Typography>
    </Box>
  );
};

export default PostsFilter;