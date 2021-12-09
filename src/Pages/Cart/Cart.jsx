/** @format */

import React, { useContext, useState } from "react";
import MyNav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import Header from "./Header";
import Basket from "./Basket";
import Main from "./Main";
import "./Cart.css";
import { ImageContext } from "../../Contexts/ImageContext";

const Cart = () => {
  const imageContext = useContext(ImageContext);
  const { products } = imageContext;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  console.log("cart console: " + cartItems.length);
  return (
    <div>
      <MyNav countCartItems={cartItems.length}></MyNav>
      <div>
        <Header />
        <div className="main-row">
          <Main onAdd={onAdd} products={products}></Main>
          <Basket
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
          ></Basket>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
