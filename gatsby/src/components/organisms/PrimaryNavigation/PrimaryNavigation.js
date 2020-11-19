import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './PrimaryNavigation.scss';

const PrimaryNavigation = ({ menuItems }) => {
  return (
    <nav className="primary-navigation" role="navigation">
      <ul>
        {menuItems.nodes.map((node) => {
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
  );
};

export default PrimaryNavigation;

PrimaryNavigation.propTypes = {
  menuItems: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
      })
    )
  }).isRequired
};
