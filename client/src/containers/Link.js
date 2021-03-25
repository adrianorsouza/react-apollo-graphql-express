import React from 'react';
import styled from 'styled-components';
import { Link as RRDLink } from 'react-router-dom';
import { colors } from '../styles';

const LinkStyled = styled(RRDLink)`
  border-radius: var(--border-radius-default);
  &:hover {
    // TODO REPLACE TO VAR
    background: ${colors.purple['600']};
  }
`;

const Link = ({ children, ...props }) => {
  return <LinkStyled {...props}>{children}</LinkStyled>;
};

export default Link;
