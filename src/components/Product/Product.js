import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="container">
      <div className="product">
        <img src={product.image} alt={product.name}></img>
        <div className="product-info">
          <p className="product-name"> Name : {product.name}</p>
          <p>Price : {product.price}</p>
        </div>
        <button
          className="add-to-cart"
          onClick={() => {
            handleAddToCart(product);
          }}
        >
          {" "}
          <p>
            ADD TO CART <FontAwesomeIcon icon={faShoppingCart} size="xs" />
          </p>
        </button>
      </div>
    </div>
  );
};

export default Product;
