import React from "react";
import "./style.css";
import MailIcon from "../../Assets/images/Mail.png";

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <div className="Subscribe__Description">
        <h1 className="Subscribe__Description__Title">
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h1>
        <div className="Subscribe__Description__Area">
          <input
            className="Subscribe__Description__Area__InputField"
            type="text"
            placeholder="Your email"
          />
          <button className="Subscribe__Description__Area__Button">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
