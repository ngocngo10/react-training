import React from 'react';
import './index.css';

const ProductItem = props => {
  return <li className="product-item">{props.children}</li>;
};

export default ProductItem;
