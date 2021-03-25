import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 1280px) {
    max-width: 1536px;
  }
`;

const Container = (props) => {
  return <ContainerWrapper>{props.children}</ContainerWrapper>;
};

export default Container;
