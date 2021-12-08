/** @format */

import React, { useContext } from "react";
import "./Home.css";
import Nav from "../../Components/Nav";
import Calculator from "./Calculator";
import { Context } from "../../Contexts/Context";

import Footer from "../../Components/Footer";
import RecomSkis from "./RecomSkis";
import HomeHeader from "./HomeHeader";

const Home = () => {
  const context = useContext(Context);
  return (
    <div className="home-page">
      <Nav></Nav>
      <HomeHeader />
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
