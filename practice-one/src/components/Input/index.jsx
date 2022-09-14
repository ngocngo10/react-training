import React from "react";
import { useRef } from "react";
import "./index.css";

const Input = props => {
  const { type, className, name, id, placeholder, nameRef } = props;

  return (
    <input
      type={type}
      className={className}
      name={name}
      id={id}
      placeholder={placeholder}
      ref={nameRef}
    />
  );
};

export default Input;
