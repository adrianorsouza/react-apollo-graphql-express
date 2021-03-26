import React from 'react';
import styled from 'styled-components';

const AlertWrapper = styled.div`
  background: var(--color-alert-error);
  padding: 0.825rem;
  color: var(--color-gray-100);
  border-radius: 0.25rem;
`;

const Alert = ({ message }) => {
  if (!message) return null;
  return <AlertWrapper>{message}</AlertWrapper>;
};

export default Alert;
