import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import FlexibleBlocks from "../components/organisms/FlexibleBlocks/FlexibleBlocks";

const Post = ({ data }) => {
  const page = data.allWpPost.nodes[0];

  return (
    <Layout primaryMenu={data.allWpMenu.nodes[0].menuItems}>
      <SEO title={`${page.title} | ${data.wp.generalSettings.title}`} />

      <div className="container">
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
    allWpMenu(filter: { slug: { eq: "primary-navigation" } }) {
      nodes {
        menuItems {
          nodes {
            id
            label
            path
          }
        }
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
