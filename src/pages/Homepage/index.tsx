import React from "react";
import Navbar from "../../components/Common/Navbar";
import HeroContent from "../../components/HeroContent";
import "./style.css";
import Banner from "../../Assets/images/Banner Background.png";
import Category from "../../components/Category";

const Homepage = () => {
  return (
    <div className="Homepage__Wrapper">
      <img className="Homepage__Banner" src={Banner} alt="Homepage Banner" />

      <Navbar />
      <HeroContent />
      <Category />
    </div>
  );
};

export default Homepage;
