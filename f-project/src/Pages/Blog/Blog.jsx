import React from "react";
import MyNav from "../../Components/Nav";
import WhereToSki from "../About/WhereToSki";
import GiftForSkiers from "../About/GiftForSkiers";
import Footer from "../../Components/Footer";

const Blog = () => {
  return (
    <div>
      <MyNav></MyNav>

      <GiftForSkiers></GiftForSkiers>

      <WhereToSki></WhereToSki>

      <Footer></Footer>
    </div>
  );
};

export default Blog;
