import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import ProductImage from "../Image";
import ProductTitle from "../Heading";
import ProductPrice from "../Text";
import Button from "../Button";

fontawesome.library.add(faPencil, faTrash);

const ProductItem = props => {
  const { product } = props;
  return (
    <>
      <li className="product-item">
        <a href="#">
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
            <ProductPrice textType="product-price">
              <strong>{`${product.price}`}</strong>
              <sup>₫</sup>
            </ProductPrice>
          </div>
          <div className="product-actions">
            <Button className="btn-edit">
              <FontAwesomeIcon icon="fa-solid fa-pencil" />
            </Button>
            <Button className="btn-delete">
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </Button>
          </div>
        </a>
      </li>
    </>
  );
};

export default ProductItem;
