import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import PrimaryNavigation from '../PrimaryNavigation/PrimaryNavigation';
import './SiteHeader.scss';

const SiteHeader = ({ menuItems }) => {
  return (
    <header className="site-header">
      <div className="container">
        <h2>
          <Link to="/">LOGO</Link>
        </h2>
        {menuItems && <PrimaryNavigation menuItems={menuItems} />}
      </div>
    </header>
  );
};

export default SiteHeader;

SiteHeader.propTypes = {
  menuItems: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
      })
    )
  })
};
