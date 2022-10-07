import React from "react";
import "./style.css";
import SubscribeLeft from "../../Assets/images/Subscribe Left.png";
import SubscribeRight from "../../Assets/images/Subscribe Right.png";
import SubscribePlus from "../../Assets/images/Subscribe Plus.png";
import SubscribeShare from "../../Assets/images/Subscribe Share.png";
import MailIcon from "../../Assets/images/Mail.png";

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <img
        className="Subscribe__LeftIcon"
        src={SubscribeLeft}
        alt="Subscribe Left Icon"
      />
      <img
        className="Subscribe__RightIcon"
        src={SubscribeRight}
        alt="Subscribe Right Icon"
      />
      <img
        className="Subscribe__ShareIcon"
        src={SubscribeShare}
        alt="Subscribe Share Icon"
      />
      <img
        className="Subscribe__PlusIcon"
        src={SubscribePlus}
        alt="Subscribe Plus Icon"
      />
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
          <img
          className="Subscribe__MailIcon"
          src={MailIcon}
          alt="Subscribe Mail Icon"
        />
        </div>
        
      </div>
    </div>
  );
};

export default Subscribe;
