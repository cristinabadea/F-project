/** @format */

import React from "react";

const Cart = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <title> Your cart</title>
        <img src=""></img>
        <div>
          <p> Number of products:{props.productNumber} </p>
          <button> Buy</button>
          <button> Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
