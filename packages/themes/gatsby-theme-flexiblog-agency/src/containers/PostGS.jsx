import React from 'react';
import { Layout, Stack, Main, Sidebar } from '@layout';
import { PostGSHead } from '@elegantstack/flow-ui-widgets/src/PostGS/PostGS.Head';
import { PostGSBody } from '@elegantstack/flow-ui-widgets/src/PostGS/PostGS.Body';
import { PostGSTags } from '@elegantstack/flow-ui-widgets/src/PostGS/PostGS.Tags';
import Seo from '@elegantstack/flow-ui-widgets/src/Seo';
import Divider from '@elegantstack/flow-ui-components/src/Divider';
import { Card as CardComponent } from 'theme-ui';
import AuthorGSCompact from '@elegantstack/flow-ui-widgets/src/AuthorGSCompact';

const PostGS = ({
                  data: {postGS, categoryGS, authorGS},
                  ...props
                }) => {

  const {pageContext: {services = {}, siteUrl} = {}} = props;
  return (
    <Layout {...props}>
      <Seo {...postGS} siteUrl={siteUrl}/>
      <Divider/>
      <Stack effectProps={{effect: 'fadeInDown'}}>
        <PostGSHead {...postGS} categoryGS={categoryGS}/>
      </Stack>
      <Divider/>
      <Stack effectProps={{fraction: 0}}>
        <Main>
          <CardComponent variant="paper">
            <PostGSBody description={postGS.description} />
            <Divider/>
            <PostGSTags {...postGS} />
          </CardComponent>
          <Divider space={2}/>
          <CardComponent variant="paper">
            <PostGSBody description={postGS.city} />
          </CardComponent>
          <Divider space={2}/>
          <CardComponent variant="paper">
            <PostGSBody description={postGS.state} />
          </CardComponent>
          <Divider space={2}/>
          <CardComponent variant="paper">
            <PostGSBody description={postGS.federal} />
          </CardComponent>
        </Main>
        <Sidebar>
          <AuthorGSCompact {...authorGS} />
          <Divider/>
        </Sidebar>
      </Stack>
    </Layout>
  );
};

export default PostGS;
