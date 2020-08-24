const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allWpPage {
        nodes {
          slug
          title
        }
      }
      allWpPost {
        nodes {
          slug
          title
        }
      }
    }
  `).then(result => {

    // Build all WP pages.
    result.data.allWpPage.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug: node.slug,
        },
      })
    });

    // Build all WP posts.
    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.slug,
        },
      })
    });
  });
}
