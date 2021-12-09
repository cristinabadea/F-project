/** @format */

import React from "react";
import "./Cart.css";

const Header = () => {
  return (
    <header className="header-row block center">
      <div>
        <a href="#/">
          <h1>Small shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">Cart</a>
      </div>
    </header>
  );
};

export default Header;
