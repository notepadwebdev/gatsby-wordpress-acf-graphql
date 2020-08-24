import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PrimaryNavigation from '../PrimaryNavigation/PrimaryNavigation';
import './SiteHeader.scss';

const SiteHeader = ({ site }) => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        generalSettings {
          title
        }
      }
    }
  `);

  return (
    <header className="site-header">
      <div className="container">
        <h2>
          <Link to="/">{data.wp.generalSettings.title}</Link>
        </h2>
        <PrimaryNavigation />
      </div>
    </header>
  );
};

export default SiteHeader;
