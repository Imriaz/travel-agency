import React from "react";
import "./style.css";
import Banner from "../../Assets/images/Banner Background.png";
import Navbar from "../../components/Common/Navbar";
import HeroContent from "../../components/HeroContent";
import Category from "../../components/Category";
import Destinations from "../../components/Destinations";

const Homepage = () => {
  return (
    <div className="Homepage__Wrapper">
      <img className="Homepage__Banner" src={Banner} alt="Homepage Banner" />

      <Navbar />
      <HeroContent />
      <Category />
      <Destinations />
    </div>
  );
};

export default Homepage;
