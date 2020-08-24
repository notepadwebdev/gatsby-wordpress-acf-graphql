import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title={`${data.wp.generalSettings.title} | ${data.wp.generalSettings.description}`} />

      <div class="container">
        <h1>{data.wp.generalSettings.title}</h1>

        <h2>Pages</h2>
        <ul>
          {data.allWpPage.nodes.map((node, index) => (
            <li key={index}><Link to={node.uri}>{node.title}</Link></li>
          ))}
        </ul>

        <h2>Posts</h2>
        <ul>
          {data.allWpPost.nodes.map((node, index) => (
              <li key={index}><Link to={node.uri}>{node.title}</Link></li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    wp {
      generalSettings {
        title
        description
      }
    }
    allWpPage {
      nodes {
        title
        slug
        uri
      }
    }
    allWpPost {
      nodes {
        title
        slug
        uri
      }
    }
  }
`
