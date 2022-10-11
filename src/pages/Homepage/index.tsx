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
import Carousel from "../../components/Common/Carousel";

const Homepage = () => {
  // const slides = [
  //   { url: "../../Assets/images/Top Destination1.png", title: "beach" },
  //   { url: "../../Assets/images/Top Destination2.png", title: "boat" },
  //   { url: "../../Assets/images/Top Destination3.png", title: "forest" },
  // ];

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
      {/* <Carousel slides={slides} /> */}
    </div>
  );
};

export default Homepage;
