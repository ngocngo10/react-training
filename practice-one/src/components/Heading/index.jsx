import React from 'react';
import './index.css';

const Heading = props => {
  const { headingLevel, titleType, title } = props;
  const Tag = `h${headingLevel}`;
  return <Tag className={`title title--${titleType}`}>{title}</Tag>;
};

export default Heading;
