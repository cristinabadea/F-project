/** @format */

import React from "react";
import "./RecomItem.css";

import { useState } from "react";
import MyCart from "../MyCart/MyCart";
import { Link } from "react-router-dom";
import Cart from "../MyCart/Cart";

const RecomItem = (props) => {
  const [addProduct, setAddProduct] = useState(0);

  const addToCart = () => {
    setAddProduct(addProduct + 1);
    // console.log(addProduct);
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

      <Link to="./cart">
        <button className="recom-btn"> Add to cart</button>
      </Link>
      <div className="do-not-display">
        <Cart img={props.itemImage} />
        <MyCart products={addToCart}></MyCart>
      </div>
    </div>
  );
};

export default RecomItem;
