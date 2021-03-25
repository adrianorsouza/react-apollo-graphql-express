import React from 'react';
import PropTypes from 'prop-types';
import UserCardPlaceholder from './UserCardPlaceholder';
import PulseHolders, { TextRow } from './PulseHolders';

const ProfilePlaceholder = ({ loading }) => {
  if (!loading) return null;

  return (
    <PulseHolders>
      <UserCardPlaceholder cols={1} items={1} />
      <TextRow maxHeight={3} maxWidth={20} spacing={30} />
      <UserCardPlaceholder cols={6} items={6} />
    </PulseHolders>
  );
};

ProfilePlaceholder.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default ProfilePlaceholder;
