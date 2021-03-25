import React from 'react';
import styled from 'styled-components';

const CardBodyStyled = styled.div`
  padding: 0 1.25rem 1.25rem;
`;

const CardBody = (props) => {
  return <CardBodyStyled>{props.children}</CardBodyStyled>;
};

export default CardBody;
