/** @format */

import React from "react";
import "./EmptyCart.css";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <div className="cart-container">
        <div className="cart-title">
          <h3>Your cart is empty right now!</h3>
          <p>
            {" "}
            Check out the perfect skis for you after filling our{" "}
            <Link to="/">
              <em>survey!</em>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
