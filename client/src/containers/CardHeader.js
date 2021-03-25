import React from 'react';
import styled from 'styled-components';

const CardHeaderStyled = styled.div`
  height: 11rem;
`;

const CardHeader = (props) => {
  return <CardHeaderStyled>{props.children}</CardHeaderStyled>;
};

export default CardHeader;
