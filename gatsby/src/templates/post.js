import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import FlexibleBlocks from '../components/organisms/FlexibleBlocks/FlexibleBlocks';

const Post = ({ data }) => {
  const page = data.allWpPost.nodes[0];

  return (
    <Layout>
      <SEO title={`${page.title} | ${data.wp.generalSettings.title}`} />

      <div class="container">
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>

      {page.flexibleBlocks && page.flexibleBlocks.flexibleBlocks && (
        <FlexibleBlocks blocks={page.flexibleBlocks.flexibleBlocks} />
      )}
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($slug: String!) {
    wp {
      generalSettings {
        title
        description
      }
    }
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        slug
      }
    }
  }
`;
