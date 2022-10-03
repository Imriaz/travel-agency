import React from "react";
import "./style.css";
import card1 from "../../Assets/images/calculated weather.png";
import card2 from "../../Assets/images/plane.png";
import card3 from "../../Assets/images/local events.png";
import card4 from "../../Assets/images/customization.png";

const Category = () => {
  return (
    <div className="Category">
      <h1 className="Category__SectionTopHeading">CATEGORY</h1>
      <h2 className="Category__SectionHeading">We Offer Best Services</h2>
      <div className="Category__Services">
        <div className="Category__Card">
          <img src={card1} alt="Card Images" />
          <h1 className="Category__Card__Title">Calculated Weather</h1>
          <p className="Category__Card__Description">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>
        <div className="Category__Card">
          <img src={card2} alt="Card Images" />
          <h1 className="Category__Card__Title">Best Flights</h1>
          <p className="Category__Card__Description">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>
        <div className="Category__Card">
          <img src={card3} alt="Card Images" />
          <h1 className="Category__Card__Title">Local Events</h1>
          <p className="Category__Card__Description">
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </p>
        </div>
        <div className="Category__Card">
          <img src={card4} alt="Card Images" />
          <h1 className="Category__Card__Title">Customization</h1>
          <p className="Category__Card__Description">
            We deliver outsourced aviation services for military customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
