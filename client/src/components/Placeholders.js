import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader, Grid } from '../containers';

const Placeholders = (props) => {
  return <PulseWrap>{props.children}</PulseWrap>;
};

// Styles for Placeholders
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

export const TextRow = (props) => {
  return <TextRowStyled {...props} />;
};
TextRow.defaultProps = {
  maxWidth: '100%',
  maxHeight: 1,
  spacing: 1,
};
TextRow.propTypes = {
  maxWidth: PropTypes.any,
  maxHeight: PropTypes.number,
  spacing: PropTypes.number,
};

const TextRowStyled = styled.div`
  width: ${(props) => `${props.maxWidth}%`};
  display: block;
  height: ${(props) => `${props.maxHeight}rem`};
  background: ${(props) => props.color || `var(--gray-light)`};
  margin: ${(props) => `${props.spacing}px`} 0;
  border-radius: var(--border-radius-default);
`;

export const UserCardPlaceholder = ({ cols, items }) => {
  return (
    <Grid cols={cols}>
      {[...Array(items).keys()].map((i) => (
        <Card key={i}>
          <CardHeader>
            <Picture>
              <div />
            </Picture>
          </CardHeader>
          <CardBody>
            <TextRow spacing={20} maxHeight={2} />
            <TextRow spacing={10} />
            <TextRow spacing={10} />
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
};

UserCardPlaceholder.defaultProps = {
  cols: 6,
  items: 18,
};

// Styles for UserCardPlaceholder
const Picture = styled.picture`
  position: relative;
  display: block;
  height: ${(props) => (props.size === 'large' && `60%`) || `50%`};

  background-color: #f2f2f2;

  div {
    width: ${(props) => (props.size === 'large' && `9rem`) || `8rem`};
    height: ${(props) => (props.size === 'large' && `9rem`) || `8rem`};
    border-radius: 9999px;
    margin-left: auto;
    margin-right: auto;

    box-shadow: rgb(255, 255, 255) 0 0 0 4px, rgba(226, 226, 226, 0.5) 0 0 0 8px,
      rgba(0, 0, 0, 0) 0 0 0 0;
    background: white;

    position: absolute;
    top: 25%;
    right: 25%;
    bottom: 25%;
    left: 22%;
  }
`;

// Home Page loading placeholder
export const HomePlaceholder = ({ loading }) => {
  if (!loading) return null;
  return (
    <Placeholders>
      <UserCardPlaceholder cols={6} items={18} />
    </Placeholders>
  );
};

HomePlaceholder.propTypes = {
  loading: PropTypes.bool.isRequired,
};

// Profile Page loading placeholder
export const ProfilePlaceholder = ({ loading }) => {
  if (!loading) return null;
  return (
    <Placeholders>
      <UserCardPlaceholder cols={1} items={1} />
      <TextRow maxHeight={3} maxWidth={20} spacing={30} />
      <UserCardPlaceholder cols={6} items={6} />
    </Placeholders>
  );
};

ProfilePlaceholder.propTypes = {
  loading: PropTypes.bool.isRequired,
};
