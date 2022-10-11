import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardImage from "../../Assets/images/Testimonials card image.png";

const Testimonials = () => {
  let slideIndex = 1;
  const [previewSlides, setPreviewSlides] = React.useState<string[]>(["block"]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Testimonials">
      <div className="Testimonials__LeftSide">
        <h1 className="Testimonials__LeftSide__SectionTopHeading">
          Testimonials
        </h1>
        <div style={{ margin: "0", height: "320px", width: "495px" }}>
          <Slider {...settings}>
            <div>
              <h2 className="Testimonials__LeftSide__SectionHeading">
                What people say about Us.
              </h2>
            </div>
            <div>
              <h2 className="Testimonials__LeftSide__SectionHeading">
                What people say about Us 2.
              </h2>
            </div>
            <div>
              <h2 className="Testimonials__LeftSide__SectionHeading">
                What people say about Us 3.
              </h2>
            </div>
          </Slider>
        </div>
        {/* <h2
          className="Testimonials__LeftSide__SectionHeading"
          style={{ display: `${previewSlides}` }}
        >
          What people say about Us.
        </h2>
        <h2 className="Testimonials__LeftSide__SectionHeading">
          What people say about Us 2.
        </h2>
        <h2 className="Testimonials__LeftSide__SectionHeading">
          What people say about Us 3.
        </h2> */}

        {/* <div className="Testimonials__LeftSide__ToggleButton">
          <button
            className="Testimonials__LeftSide__ToggleButton__Button active"
            onClick={() => currentSlide(1)}
          ></button>
          <button
            className="Testimonials__LeftSide__ToggleButton__Button"
            onClick={() => currentSlide(2)}
          ></button>
          <button
            className="Testimonials__LeftSide__ToggleButton__Button"
            onClick={() => currentSlide(3)}
          ></button>
        </div> */}
      </div>
      <div className="Testimonials__RightSide">
        <div className="Testimonials__RightSide__Card">
          <div className="Testimonials__RightSide__Card__Body">
            <p className="Testimonials__RightSide__Card__Body__Description">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h3 className="Testimonials__RightSide__Card__Body__Title">
              Mike taylor
            </h3>
            <p className="Testimonials__RightSide__Card__Body__Address">
              Lahore, Pakistan
            </p>
          </div>
          <img
            className="Testimonials__RightSide__Card__CardIcon"
            src={CardImage}
            height="68px"
            width="68px"
            alt="Testimonial Card Images"
          />
        </div>

        <div className="Testimonials__RightSide__Card Second">
          <div className="Testimonials__RightSide__Card__Body">
            <p className="Testimonials__RightSide__Card__Body__Description">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h3 className="Testimonials__RightSide__Card__Body__Title">
              Chris Thomas
            </h3>
            <p className="Testimonials__RightSide__Card__Body__Address">
              CEO of Red Button
            </p>
          </div>
          <img
            className="Testimonials__RightSide__Card__CardIcon"
            src={CardImage}
            height="68px"
            width="68px"
            alt="Testimonial Card Images"
          />
        </div>

        <div className="Testimonials__RightSide__SlideButtons">
          <button>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="Testimonials__RightSide__SlideButtons__Previous"
                d="M1 8.5L8 1.5L15 8.5"
                stroke="#BCB7C2"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="Testimonials__RightSide__SlideButtons__Next"
                d="M1 1L8 8L15 1"
                stroke="#3E2E4D"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
