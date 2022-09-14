import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import ProductImage from "../Image/index";
import ProductTitle from "../Heading/index";
import ProductPrice from "../Text/index";
import Button from "../Button/index";

const ProductItem = props => {
  const { product } = props;
  return (
    <>
      <li className="product-item">
        <Link to="javascript:void(0)">
          <ProductImage
            imageWrapperStyle="product-img-wrapper"
            src={product.image}
            alt="Product Image"
            imageStyle="product-image"
          />
          <div className="product-infor">
            <ProductTitle
              headingLevel="3"
              titleType="product"
              title={product.title}
            />
            <ProductPrice textType="product-price" text={product.price} />
          </div>
          <div className="product-actions">
            <Button className="btn--edit">
              <i className="fa-solid fa-pen-to-square"></i>
            </Button>
            <Button className="btn--delete">
              <i class="fa-solid fa-trash-can"></i>
            </Button>
          </div>
        </Link>
      </li>
    </>
  );
};

export default ProductItem;
