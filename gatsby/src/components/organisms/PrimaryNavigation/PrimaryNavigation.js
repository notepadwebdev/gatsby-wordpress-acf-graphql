import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import './PrimaryNavigation.scss';

const PrimaryNavigation = () => {
  const data = useStaticQuery(graphql`
    query primaryNavigation {
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
    }
  `);

  return (data.allWpMenu.nodes && data.allWpMenu.nodes.length) ? (
    <nav className="primary-navigation" role="navigation">
      <ul>
        {data.allWpMenu.nodes[0].menuItems.nodes.map(node => {
          return (
            <li key={node.id}>
              <Link to={node.path} activeClassName="active" partiallyActive={true}>
                {node.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null;
};

export default PrimaryNavigation;
