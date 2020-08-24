import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import FlexibleBlocks from '../components/organisms/FlexibleBlocks/FlexibleBlocks';

const Page = ({ data }) => {
  const page = data.allWpPage.nodes[0];

  return (
    <Layout>
      <SEO title={`${page.title} | ${data.wp.generalSettings.title}`} />

      <div class="container">
        <h1>{page.title}</h1>
        {page.content && (
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        )}
      </div>

      {page.flexibleBlocks && page.flexibleBlocks.flexibleBlocks && (
        <FlexibleBlocks blocks={page.flexibleBlocks.flexibleBlocks} />
      )}
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query($slug: String!) {
    wp {
      generalSettings {
        title
        description
      }
    }
    allWpPage(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        slug
        flexibleBlocks {
          flexibleBlocks {
            ... on WpPage_Flexibleblocks_FlexibleBlocks_FbContentBlock {
              fieldGroupName
              blockAlignment
              blockTitle
              blockWysiwyg
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
