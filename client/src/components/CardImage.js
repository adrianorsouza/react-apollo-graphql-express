import React from 'react';

const CardImage = ({ src, name }) => {
  return (
    <div className="h-44">
      <picture className="relative block h-1/2 bg-blue-200 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <img
          src={src}
          alt={name}
          className="w-32 h-32 rounded-full mx-auto ring-4 ring-offset-4 absolute inset-1/4"
        />
      </picture>
    </div>
  );
};

export default CardImage;
