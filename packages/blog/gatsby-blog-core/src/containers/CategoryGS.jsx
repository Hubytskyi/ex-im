import React from 'react';
import { Layout, Stack, Main, PreFooter } from '@layout';
import PageTitle from '@components/PageTitle';
import Divider from '@components/Divider';
import Seo from '@widgets/Seo';
import PostsList from '../../../../../site/src/components/Posts';
import PaginationGS from '@elegantstack/flow-ui-components/src/PaginationGS';

const CategoryGS = ({data: {posts, collectionInfo}, ...props}) => {

  return (
    <Layout {...props}>
      <Seo title={collectionInfo.name} description={collectionInfo.description}/>
      <Divider/>
      <Stack effectProps={{effect: 'fadeInDown'}}>
        <PageTitle
          header={collectionInfo.name}
          subheader={collectionInfo.title}
          running={collectionInfo.description}
          totalCount={posts.totalCount}
        />
      </Stack>
      <Divider/>
      <Stack>
        <Main>
          <div>
            {posts.nodes && <PostsList {...posts} />}
          </div>
        </Main>
      </Stack>
      <Divider/>
      <PreFooter>
        <PaginationGS {...posts.pageInfo} {...collectionInfo} />
      </PreFooter>
    </Layout>
  );
};


export default CategoryGS;
