import React from "react";
import "./style.css";
import Banner from "../../Assets/images/Banner Background.png";
import Navbar from "../../components/Common/Navbar";
import HeroContent from "../../components/HeroContent";
import Category from "../../components/Category";
import Destinations from "../../components/Destinations";
import BookATrip from "../../components/BookATrip";
import Partners from "../../components/Partners";

const Homepage = () => {
  return (
    <div className="Homepage__Wrapper">
      <img className="Homepage__Banner" src={Banner} alt="Homepage Banner" />

      <Navbar />
      <HeroContent />
      <Category />
      <Destinations />
      <BookATrip />
      <Partners />
    </div>
  );
};

export default Homepage;
