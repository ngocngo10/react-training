import React from 'react';
import './index.css';

const Image = props => {
  const { imageWrapperStyle, src, alt, imageStyle } = props;
  return (
    <div className={imageWrapperStyle}>
      <img src={src} alt={alt} className={imageWrapperStyle} />
    </div>
  );
};

export default Image;
