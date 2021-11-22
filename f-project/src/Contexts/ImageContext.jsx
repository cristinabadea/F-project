/** @format */

import React, { useState } from "react";

import { createContext } from "react";

export const ImageContext = createContext();

const ImageContextProvider = (props) => {
  //   console.log(props);
  const [count, setCount] = useState(0);

  const addToCart = (count) => {
    setCount(count + 1);
    console.log("Cart setCount: " + count);
  };

  return (
    <ImageContext.Provider value={{ count, addToCart }}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
