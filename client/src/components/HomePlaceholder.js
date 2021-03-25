import React from 'react';
import PropTypes from 'prop-types';
import UserCardPlaceholder from './UserCardPlaceholder';
import PulseHolders from './PulseHolders';

const HomePlaceholder = ({ loading }) => {
  if (!loading) return null;

  return (
    <PulseHolders>
      <UserCardPlaceholder cols={6} items={18} />
    </PulseHolders>
  );
};

HomePlaceholder.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default HomePlaceholder;
