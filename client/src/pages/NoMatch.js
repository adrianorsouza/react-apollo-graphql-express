import React from 'react';
import { useLocation } from 'react-router-dom';
const NoMatch = (props) => {
  const location = useLocation();

  return (
    <>
      <h1>Page Not Found!</h1>
      <small>{location.pathname}</small>
    </>
  );
};

export default NoMatch;
