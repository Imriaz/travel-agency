import React from "react";
import "./style.css";
import MailIcon from "../../Assets/images/Mail.png";

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <h1 className="Subscribe__Title">
        Subscribe to get information, latest news and other interesting offers
        about Cobham
      </h1>
      <div className="Subscribe__Button">
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
