import SearchBox from './SearchBox';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding-top: 1.25rem;
  h1 {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <h1>Social</h1>
      <SearchBox />
    </HeaderContainer>
  );
};

export default Header;
