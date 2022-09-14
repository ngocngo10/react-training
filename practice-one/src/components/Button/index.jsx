import React from "react";
import "./index.css";

const Button = props => {
  const { type = { type }, className = "", variant = "primary", size } = props;
  return (
    <button
      type={type}
      className={`${className} btn btn-${variant} btn-${size}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
