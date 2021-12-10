/** @format */

import React from "react";
import "./Cart.css";
import Product from "./Product";

const Main = (props) => {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2> Products</h2>
      <div className="main-row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
};

export default Main;