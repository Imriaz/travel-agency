import React from "react";
import "./style.css";
import TopDestination from "../../Assets/images/Top Destination.png";
import ShareIcon from "../../Assets/images/share icon.png";

const Destinations = () => {
  return (
    <div className="Destinations">
      <h1 className="Destinations__SectionTopHeading">Top Selling</h1>
      <h2 className="Destinations__SectionHeading">Top Destinations</h2>
      <div className="Destinations__Services">
        <div className="Destinations__Card">
          <img
            className="Destinations__Card__Image"
            height="427px"
            width="314px"
            src={TopDestination}
            alt="Card Images"
          />
          <div className="Destinations__Card__Body">
            <div className="Destinations__Card__Body__Main">
              <h1 className="Destinations__Card__Body__Main__Title">
                Rome, Italty
              </h1>
              <h1 className="Destinations__Card__Body__Main__Title">$5,42k</h1>
            </div>
            <p className="Destinations__Card__Body__Duration">
              <img src={ShareIcon} alt="Share Icon" />
              10 Days Trip
            </p>
          </div>
        </div>

        <div className="Destinations__Card">
          <img
            className="Destinations__Card__Image"
            height="427px"
            width="314px"
            src={TopDestination}
            alt="Card Images"
          />
          <div className="Destinations__Card__Body">
            <div className="Destinations__Card__Body__Main">
              <h1 className="Destinations__Card__Body__Main__Title">
                London, UK
              </h1>
              <h1 className="Destinations__Card__Body__Main__Title">$4.2k</h1>
            </div>
            <p className="Destinations__Card__Body__Duration">
              <img src={ShareIcon} alt="Share Icon" />
              12 Days Trip
            </p>
          </div>
        </div>

        <div className="Destinations__Card">
          <img
            className="Destinations__Card__Image"
            height="427px"
            width="314px"
            src={TopDestination}
            alt="Card Images"
          />
          <div className="Destinations__Card__Body">
            <div className="Destinations__Card__Body__Main">
              <h1 className="Destinations__Card__Body__Main__Title">
                Full Europe
              </h1>
              <h1 className="Destinations__Card__Body__Main__Title">$15k</h1>
            </div>
            <p className="Destinations__Card__Body__Duration">
              <img src={ShareIcon} alt="Share Icon" />
              28 Days Trip
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
