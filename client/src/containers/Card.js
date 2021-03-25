import React from 'react';
import styled from 'styled-components';

export const CardStyled = styled.div`
  border: 0;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: auto;
`;

const Card = (props) => {
  return <CardStyled>{props.children}</CardStyled>;
};

export default Card;
