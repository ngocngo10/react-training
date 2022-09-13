import React from 'react';
import './index.css';

const Heading = props => {
  const { headingLevel, titleStyle, title } = props;
  const Tag = `h${headingLevel}`;
  return <Tag className={`title ${titleStyle}`}>{title}</Tag>;
};

export default Heading;
