import React from 'react';
import styled from 'styled-components';
import { Link as RRDLink } from 'react-router-dom';

const LinkStyled = styled(RRDLink)`
  border-radius: var(--border-radius-default);
  &:hover {
    // TODO REPLACE TO VAR
    background: var(--color-purple-500);
  }
`;

const Link = ({ children, ...props }) => {
  return <LinkStyled {...props}>{children}</LinkStyled>;
};

export default Link;
