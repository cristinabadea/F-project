/** @format */

import React, { useContext, useState } from "react";
import { ImageContext } from "../../Contexts/ImageContext";

const Cart = () => {
  const context = useContext(ImageContext);

  return (
    <div>
      <div>
        <h3> Your cart</h3>
        <img src=""></img>
        <div>
          <p> Number of products:</p>
          <button> Buy</button>
          <button> Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
