import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Picture = styled.picture`
  position: relative;
  display: block;
  height: ${(props) => (props.size === 'large' && `60%`) || `50%`};

  background-color: rgba(191, 219, 254, 1);
  background-image: linear-gradient(90deg, #fbbf24, #ef4444, #ec4899);

  img {
    width: ${(props) => (props.size === 'large' && `9rem`) || `8rem`};
    height: ${(props) => (props.size === 'large' && `9rem`) || `8rem`};
    border-radius: 9999px;
    margin-left: auto;
    margin-right: auto;

    box-shadow: rgb(255, 255, 255) 0 0 0 4px, rgba(59, 130, 246, 0.5) 0 0 0 8px,
      rgba(0, 0, 0, 0) 0 0 0 0;

    position: absolute;
    top: 25%;
    right: 25%;
    bottom: 25%;
    left: 22%;
  }
`;

const CardImage = ({ src, name, size }) => {
  let [w, h] = size === 'large' ? [200, 200] : [128, 128];
  return (
    <Picture size={size}>
      <img src={src} alt={name} width={w} height={h} />
    </Picture>
  );
};

CardImage.defaultProps = {
  size: 'normal',
};
CardImage.propTypes = {
  size: PropTypes.oneOf(['normal', 'large']),
};

export default CardImage;
