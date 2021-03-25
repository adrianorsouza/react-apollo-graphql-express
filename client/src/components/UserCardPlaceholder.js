import React from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardHeader, Grid } from '../containers';
import { TextRow } from './PulseHolders';

const UserCardPlaceholder = ({ cols, items }) => {
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

// Styles
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

export default UserCardPlaceholder;
