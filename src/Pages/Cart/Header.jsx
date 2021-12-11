/** @format */

import React from "react";
import BasketStyle from "./BasketStyle";

import "./Cart.css";

const Header = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  console.log("header props " + props);
  return (
    <header className="header-row block center">
      <div className="header-item h-i-1">
        <h1> Our recommended skis</h1>
      </div>
      <div className="header-item h-i-2">
        <BasketStyle onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </header>
  );
};

export default Header;
