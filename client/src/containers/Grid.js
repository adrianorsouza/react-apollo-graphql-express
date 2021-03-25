import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GridContainer = styled.div`
  display: grid;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(${(props) => props.cols}, minmax(0, 1fr));
  }
`;
const Grid = (props) => {
  return <GridContainer {...props}>{props.children}</GridContainer>;
};

Grid.defaultProps = {
  cols: 1,
};

Grid.propTypes = {
  cols: PropTypes.number,
};

export default Grid;
