/** @format */

import React from "react";
import "./RecomItem.css";
import Cart from "./Cart";
import { useState } from "react";

const RecomItem = (props) => {
  const [addProduct, setAddProduct] = useState(0);

  const addToCart = () => {
    setAddProduct(addProduct + 1);
    console.log(addProduct);
  };

  return (
    <div>
      <div className="recom-row">
        <div className="recom-col recom-img">
          <img className="img1" src={props.itemImage} />
        </div>
        <div className="recom-col recom-col-background">
          <h1> Our recommendatios:</h1>
          <p>{props.recom1}</p>
          <p>{props.recom2}</p>
          <p>{props.recom3}</p>
        </div>
      </div>

      <button onClick={addToCart} className="recom-btn">
        {" "}
        Add to cart
      </button>
      <Cart productNumber={addProduct}></Cart>
    </div>
  );
};

export default RecomItem;
