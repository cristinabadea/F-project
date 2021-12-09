/** @format */

import React from "react";
import "./Cart.css";

const Product = (props) => {
  const { product, onAdd } = props;

  return (
    <div className="product-card">
      <img className="product-img" src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <div>RON {product.price}</div>
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
