/** @format */

import React, { useContext } from "react";
import { ImageContext } from "../../Contexts/ImageContext";

const Cart = () => {
  const imageContext = useContext(ImageContext);
  console.log(imageContext);
  return (
    <div>
      <div>
        <h3> Your cart</h3>
        <img src={imageContext.products.title}></img>
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
