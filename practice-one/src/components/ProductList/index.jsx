import React from "react";
import "./index.css";
import ProductItem from "../ProductItem";

const ProductList = props => {
  const { products } = props;

  if (products.length) {
    return (
      <ul className="product-list">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    );
  } else {
    return (
      <div className="empty-product-list">
        <p>No records in table</p>
      </div>
    );
  }
};

export default ProductList;
