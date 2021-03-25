import React from 'react';
import { Container } from './';
import { Header } from '../components';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
