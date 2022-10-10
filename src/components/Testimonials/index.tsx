import React from "react";
import "./style.css";
import DownArrow from "../../Assets/images/down arrow.svg";
import UpperArrow from "../../Assets/images/upper arrow.svg";
import CardImage from "../../Assets/images/Testimonials card image.png";

const Testimonials = () => {
  const [sectionHeadingValue, setSectionHeadingValue] = React.useState(" ");
  return (
    <div className="Testimonials">
      <div className="Testimonials__LeftSide">
        <h1 className="Testimonials__LeftSide__SectionTopHeading">
          Testimonials
        </h1>
        <h2 className="Testimonials__LeftSide__SectionHeading">
          What people say about Us {sectionHeadingValue}.
        </h2>
        <div className="Testimonials__LeftSide__ToggleButton">
          <button
            className="Testimonials__LeftSide__ToggleButton__Button active"
            onClick={(e) => setSectionHeadingValue(" ")}
          ></button>
          <button
            className="Testimonials__LeftSide__ToggleButton__Button"
            onClick={(e) => setSectionHeadingValue("2")}
          ></button>
          <button
            className="Testimonials__LeftSide__ToggleButton__Button"
            onClick={(e) => setSectionHeadingValue("3")}
          ></button>
        </div>
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
