import React from "react";
import "./index.css";

const Text = props => {
  const { textType } = props;
  return <p className={`text text--${textType}`}>{props.children}</p>;
};

export default Text;
