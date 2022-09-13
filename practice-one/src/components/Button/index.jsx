import React from 'react';
import './index.css';

const Button = props => {
  const { className, variant, size } = props;
  return (
    <button className={`${className} btn btn-${variant} btn-${size}`}>
      {props.children}
    </button>
  );
};

export default Button;
