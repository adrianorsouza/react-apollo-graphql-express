import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const TextRow = (props) => {
  return <TextRowStyled {...props} />;
};
TextRow.defaultProps = {
  maxWidth: '100%',
  maxHeight: 1,
  spacing:  1,
};
TextRow.propTypes = {
  maxWidth: PropTypes.any,
  maxHeight: PropTypes.number,
  spacing:  PropTypes.number,
};

const PulseHolders = (props) => {
  return <PulseWrap>{props.children}</PulseWrap>;
};

// Styles
const PulseWrap = styled.div`
  animation: placeholder-pulse 1s infinite;
  .text-row {
    background: rgba(205, 205, 205, 0.5);
    width: 100%;
    border: 6px solid #f2f2f2;
    margin-bottom: 10px;
  }
  @keyframes placeholder-pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const TextRowStyled = styled.div`
  width: ${(props) => (`${props.maxWidth}%`)};
  display: block;
  height: ${(props) => (`${props.maxHeight}rem`)};
  background: ${props => props.color || `var(--gray-light)`};
  margin: ${props => `${props.spacing}px`} 0;
  border-radius: var(--border-radius-default);
`;

export default PulseHolders;
