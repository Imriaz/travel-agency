import React from "react";
import "./style.css";
import Banner from "../../Assets/images/Banner Background.png";
import Navbar from "../../components/Common/Navbar";
import HeroContent from "../../components/HeroContent";
import Category from "../../components/Category";
import Destinations from "../../components/Destinations";
import BookATrip from "../../components/BookATrip";
import Testimonials from "../../components/Testimonials";
import Partners from "../../components/Partners";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Common/Footer";

const Homepage = () => {
  return (
    <div className="Homepage__Wrapper">
      <img className="Homepage__Banner" src={Banner} alt="Homepage Banner" />

      <Navbar />
      <HeroContent />
      <Category />
      <Destinations />
      <BookATrip />
      <Testimonials />
      <Partners />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Homepage;
