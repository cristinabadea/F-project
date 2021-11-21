/** @format */
import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="/" element={ <Home />} />
      </Routes>
    </Router>
  );
};

export default MyRouter;
