import React from 'react';

const Image = props => {
  const { imageContainer, src, alt, imageClass } = props;
  return (
    <div className={imageContainer}>
      <img src={src} alt={alt} className={imageClass} />
    </div>
  );
};

export default Image;
