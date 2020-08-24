import React from 'react';
import SiteHeader from './organisms/SiteHeader/SiteHeader';
import SiteFooter from './organisms/SiteFooter/SiteFooter';

const Layout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main role="main">
        {children}
      </main>
      <SiteFooter />
    </>
  )
};

export default Layout;
