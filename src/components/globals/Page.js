import React from 'react';

import Meta from './Meta';
import Nav from './Nav';
import GlobalStyles from './GlobalStyles';
import Footer from './Footer';

const Page = ({ children }) => {
  return (
    <div>
      <Meta />
      <Nav />
      <GlobalStyles />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
