/** @format */

import React, { useContext } from "react";
import "./Home.css";
import Nav from "../../Components/Nav";
import Calculator from "./Calculator";
import { Context } from "../../Contexts/Context";

import Footer from "../../Components/Footer";
import RecomSkis from "./RecomSkis";

const Home = () => {
  const context = useContext(Context);
  return (
    <div className="home-page">
      <Nav></Nav>
      <div className="home-intro ">
        Our ski size calculator is designed to help you choose the perfect gear
        to make one of the most popular winter activities even more enjoyable.
        Knowing how to size skis can make a real difference to your experience.
        As you probably know, they're not just some strips of plastic that you
        can randomly wear. Choosing skis can be daunting, but we're here to help
        you. Picking the right skis begins at the most basic level by knowing
        what length is appropriate for you. This is strongly influenced by your
        ability level but also by your riding style and terrain choice. Let us
        guide you through the process below!
      </div>

      {!context.data.userData ? (
        <Calculator></Calculator>
      ) : (
        <RecomSkis></RecomSkis>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;