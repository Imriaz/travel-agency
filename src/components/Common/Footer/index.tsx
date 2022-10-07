import React from "react";
import "./style.css";

import Facebook from "../../../Assets/images/Facebook.png";
import Instagram from "../../../Assets/images/Instagram.png";
import Twitter from "../../../Assets/images/Twitter.png";
import PlayStore from "../../../Assets/images/Play Store.png";
import AppleStore from "../../../Assets/images/Apple Store.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer__Logo">
          <h1 className="Footer__Logo__Title">Jadoo.</h1>
          <p className="Footer__Logo__Description">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="Footer__NavContent">
          <div className="Footer__NavContent__NavRow">
            <h3 className="Footer__NavContent__NavRow__Title">Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Mobile</p>
          </div>
          <div className="Footer__NavContent__NavRow">
            <h3 className="Footer__NavContent__NavRow__Title">Contact</h3>
            <p>Help/FAQ</p>
            <p>Press</p>
            <p>Affilates</p>
          </div>
          <div className="Footer__NavContent__NavRow">
            <h3 className="Footer__NavContent__NavRow__Title">More</h3>
            <p>Airlinefees</p>
            <p>Airline</p>
            <p>Low </p>
          </div>
        </div>
        <div className="Footer__Outbound">
          <div className="Footer__Outbound__Social">
            <img src={Facebook} alt="Facebook Logo" />
            <img src={Instagram} alt="Instagram Logo" />
            <img src={Twitter} alt="Twitter Logo" />
          </div>
          <div className="Footer__Outbound__Discover">
            <h3 className="Footer__Outbound__Discover__Title">
              Discover our app
            </h3>
            <div className="Footer__Outbound__Discover__Logo">
              <img src={PlayStore} alt="Google Play Store Logo" />
              <img src={AppleStore} alt="Apple Store Logo" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="Footer__Copyright">All rights reserved@jadoo.co</h1>
    </>
  );
};

export default Footer;
