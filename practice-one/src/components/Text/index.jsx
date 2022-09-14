import React from "react";
import "./index.css";

const Text = props => {
  const { textType, text } = props;
  return <p className={`text text--${textType}`}>{text}</p>;
};

export default Text;
