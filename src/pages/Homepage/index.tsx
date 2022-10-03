import React from "react";
import Navbar from "../../components/Common/Navbar";
import HeroContent from "../../components/HeroContent";
import "./style.css";
import Banner from "../../Assets/images/Banner Background.png";
import Category from "../../components/Category";

const Homepage = () => {
  return (
    <div className="Homepage__Wrapper">
      {/* <div>
        <img src={Banner} alt="Homepage Banner" />
      </div> */}
      <Navbar />
      <HeroContent />
      <Category />
    </div>
  );
};

export default Homepage;
