/** @format */

import React from "react";
import "./Cart.css";

const Product = (props) => {
  const { product, onAdd } = props;

  return (
    <div className="product-card">
      <img className="product-img" src={product.imageUrl} alt={product.title} />
      <hr />
      <div className="product-title">{product.title}</div>
      <div className="product-price">{product.price} RON</div>
      <div>
        <button onClick={() => onAdd(product)} id="my-button">
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
