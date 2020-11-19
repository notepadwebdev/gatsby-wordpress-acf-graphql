import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Error404 = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.wp.generalSettings.title} />
      <h1>{data.wp.generalSettings.title}</h1>
      <p>Page not found.</p>
      <p>
        Go to <Link to="/">homepage</Link>.
      </p>
    </Layout>
  );
};

export default Error404;

export const pageQuery = graphql`
  query {
    wp {
      generalSettings {
        title
      }
    }
  }
`;
