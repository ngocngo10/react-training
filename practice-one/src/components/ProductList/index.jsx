import React from "react";
import "./index.css";
import ProductItem from "../ProductItem/index";

const ProductList = props => {
  const { products } = props;
  return (
    <ul className="product-list">
      {products.map(product => (
        <ProductItem key={products.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
