import React from "react";
import "./style.css";
import Traveller from "../../Assets/images/Banner Image.png";
import playButton from "../../Assets/images/Play button.png";

const HeroContent = () => {
  return (
    <div className="HeroContent">
      <div className="HeroContent__LeftSide">
        <h3 className="HeroContent__LeftSide__Tagline">
          Best Destinations around the world
        </h3>
        <h1 className="HeroContent__LeftSide__Heading">
          Travel,{" "}
          <span className="HeroContent__LeftSide__Heading__Underline">
            enjoy{" "}
          </span>
          and live a new and full life
        </h1>
        <p className="HeroContent__LeftSide__Description">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="HeroContent__LeftSide__ButtonGroup">
          <button className="HeroContent__LeftSide__ButtonGroup__FindButton">
            Find out more
          </button>
          <div className="HeroContent__LeftSide__ButtonGroup__PlayDemoButton">
            <img src={playButton} alt="Play Button" />
            Play Demo
          </div>
        </div>
      </div>
      <div className="HeroContent__RightSide">
        <img
          className="HeroContent__RightSide__Banner"
          src={Traveller}
          alt="Traveller"
        />
      </div>
    </div>
  );
};

export default HeroContent;
