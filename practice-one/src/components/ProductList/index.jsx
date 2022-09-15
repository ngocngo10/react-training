import React from "react";
import "./index.css";
import ProductItem from "../ProductItem";

const ProductList = props => {
  const { products } = props;
  return (
    <ul className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
