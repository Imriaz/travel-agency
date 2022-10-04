import React from "react";
import "./style.css";
import Banner from "../../Assets/images/plus group.png";
import card1 from "../../Assets/images/calculated weather.png";
import card2 from "../../Assets/images/plane.png";
import card3 from "../../Assets/images/local events.png";
import card4 from "../../Assets/images/customization.png";
import CategoryHover from "../../Assets/images/category hover.png";

const Category = () => {
  return (
    <div className="Category">
      <img className="Category__Banner" src={Banner} alt="Category Banner" />
      <h1 className="Category__SectionTopHeading">CATEGORY</h1>
      <h2 className="Category__SectionHeading">We Offer Best Services</h2>
      <div className="Category__Services">
        <div className="Category__Card">
          <img
            className="Category__Card__Image"
            src={card1}
            alt="Card Images"
          />
          <h1 className="Category__Card__Title">Calculated Weather</h1>
          <p className="Category__Card__Description">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
          <img
            className="Category__Card__ImageActive"
            src={CategoryHover}
            alt="Category Hover Icon"
          />
        </div>
        <div className="Category__Card">
          <img
            className="Category__Card__Image"
            src={card2}
            alt="Card Images"
          />
          <h1 className="Category__Card__Title">Best Flights</h1>
          <p className="Category__Card__Description">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
          <img
            className="Category__Card__ImageActive"
            src={CategoryHover}
            alt="Category Hover Icon"
          />
        </div>
        <div className="Category__Card">
          <img
            className="Category__Card__Image"
            src={card3}
            alt="Card Images"
          />
          <h1 className="Category__Card__Title">Local Events</h1>
          <p className="Category__Card__Description">
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </p>
          <img
            className="Category__Card__ImageActive"
            src={CategoryHover}
            alt="Category Hover Icon"
          />
        </div>
        <div className="Category__Card">
          <img
            className="Category__Card__Image"
            src={card4}
            alt="Card Images"
          />
          <h1 className="Category__Card__Title">Customization</h1>
          <p className="Category__Card__Description">
            We deliver outsourced aviation services for military customers
          </p>
          <img
            className="Category__Card__ImageActive"
            src={CategoryHover}
            alt="Category Hover Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
