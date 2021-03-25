import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const AlertWrapper = styled.div`
  background: ${colors.alert.error};
  padding: 0.825rem;
  color: ${colors.gray['100']};
  border-radius: 0.25rem;
`;

const Alert = ({ message }) => {
  if (!message) return null;
  return <AlertWrapper>{message}</AlertWrapper>;
};

export default Alert;
