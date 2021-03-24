import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <main className="md:container md:mx-auto p-5 sm:p-0 main">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
