import React, { useContext } from "react";
import "./Home.css";
import Nav from "../../Components/Nav";
// import Calculator from "./Calculator";
import { Context } from "../../Context";

// import Footer from "../../Components/Footer";
// import RecommendedSkis from "./RecommendedSkis";

const Home = () => {
//   const context = useContext(Context);
  return (
    <div className="home-page">
      <Nav></Nav>
      <h4>
        Our ski size calculator is designed to help you choose the perfect gear
        to make one of the most popular winter activities even more enjoyable.
        Knowing how to size skis can make a real difference to your experience.
        As you probably know, they're not just some strips of plastic that you
        can randomly wear. Choosing skis can be daunting, but we're here to help
        you. Picking the right skis begins at the most basic level by knowing
        what length is appropriate for you. This is strongly influenced by your
        ability level but also by your riding style and terrain choice. Let us
        guide you through the process below!
      </h4>

      {/* {!context.data.userData ? (
        <Calculator></Calculator>
      ) : (
        <RecommendedSkis></RecommendedSkis>
      )}
      <Footer></Footer> */}
    </div>
  );
};

export default Home;

 
