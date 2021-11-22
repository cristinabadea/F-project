/** @format */

import React from "react";

const Cart = (props) => {
  return (
    <div>
      <div>
        <h3> Your cart</h3>
        <img src={props.img}></img>
        <div>
          <p> Number of products: {props.addToCart}</p>
          <button> Buy</button>
          <button> Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
