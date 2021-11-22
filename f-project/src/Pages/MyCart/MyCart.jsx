/** @format */

import React from "react";
import Footer from "../../Components/Footer";
import MyNav from "../../Components/Nav";
import "./MyCart.css";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";

const MyCart = (props) => {
  console.log(props.products);

  return (
    <div className="about-page">
      <div>
        <MyNav></MyNav>
        <EmptyCart />
        <Cart />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MyCart;
