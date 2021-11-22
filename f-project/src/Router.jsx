/** @format */
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";

import MyBlog from "./Pages/Blog/Blog";
import MyCart from "./Pages/MyCart/MyCart";

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/cart" element={<MyCart />} />
        <Route exact path="/blog" element={<MyBlog />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default MyRouter;
