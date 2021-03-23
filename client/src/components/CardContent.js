import React from 'react';
import PropTypes from 'prop-types';
import { eyeColorMap } from '../utils/helpers';

const CardContent = ({ name, age, eyeColor, company, email }) => {
  return (
    <div className="card-content p-5 pt-0">
      <div className="leading-relaxed border-b-2 mb-5">
        <h1 className="font-semibold text-black font-display">{name}</h1>
        <p className="text-gray-400 font-thin text-sm">
          idade <strong>{age}</strong>, olhos{' '}
          <strong>{eyeColorMap(eyeColor)}</strong>
        </p>
      </div>
      <dl>
        <dt>
          <strong className="text-gray-300">{company}</strong>
        </dt>
        <dd>
          <small className="text-indigo-400">{email}</small>
        </dd>
      </dl>
    </div>
  );
};

CardContent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  eyeColor: PropTypes.string,
  company: PropTypes.string,
  email: PropTypes.string,
};

export default CardContent;
