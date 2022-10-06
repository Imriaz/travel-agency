import React from "react";
import "./style.css";
import DestinationIcon from "../../Assets/images/destination.png";
import PaymentIcon from "../../Assets/images/payment.png";
import CarIcon from "../../Assets/images/car.png";
import TripCartImage from "../../Assets/images/Trip cart image.jpg";
import Leaf from "../../Assets/images/Leaf.png";
import Map from "../../Assets/images/map icon.png";
import Send from "../../Assets/images/send.png";
import Building from "../../Assets/images/building 1.png";
import Heart from "../../Assets/images/heart icon.png";

const BookATrip = () => {
  return (
    <div className="Booking">
      <div className="Booking__LeftSide">
        <h1 className="Booking__LeftSide__SectionTopHeading">Easy and Fast</h1>
        <h2 className="Booking__LeftSide__SectionHeading">
          Book your next trip in 3 easy steps
        </h2>
        <div className="Booking__LeftSide__Feature">
          <div className="Booking__LeftSide__Feature__Card">
            <img src={DestinationIcon} alt="Features icon" />
            <div className="Booking__LeftSide__Feature__Card__Body">
              <h3 className="Booking__LeftSide__Feature__Card__Body__Title">
                Choose Destination
              </h3>
              <p className="Booking__LeftSide__Feature__Card__Body__Description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="Booking__LeftSide__Feature__Card">
            <img src={PaymentIcon} alt="Features icon" />
            <div className="Booking__LeftSide__Feature__Card__Body">
              <h3 className="Booking__LeftSide__Feature__Card__Body__Title">
                Make Payment
              </h3>
              <p className="Booking__LeftSide__Feature__Card__Body__Description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="Booking__LeftSide__Feature__Card">
            <img src={CarIcon} alt="Features icon" />
            <div className="Booking__LeftSide__Feature__Card__Body">
              <h3 className="Booking__LeftSide__Feature__Card__Body__Title">
                Reach Airport on Selected Date
              </h3>
              <p className="Booking__LeftSide__Feature__Card__Body__Description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Booking__RightSide">
        <div className="Booking__RightSide__TripCard">
          <img
            src={TripCartImage}
            alt="Trip Card Images"
          />
          <div className="Booking__RightSide__TripCard__Body">
            <h1 className="Booking__RightSide__TripCard__Body__Title">
              Trip To Greece
            </h1>
            <div className="Booking__RightSide__TripCard__Body__Description">
              <span>14-29 June | </span>
              <span>by Robbin joseph</span>
            </div>
            <div className="Booking__RightSide__TripCard__Body__Icon">
              <img src={Leaf} alt="Leaf Icon" />
              <img src={Map} alt="Map Icon" />
              <img src={Send} alt="Send Icon" />
            </div>
            <div className="Booking__RightSide__TripCard__Body__Interest">
              <img src={Building} alt="Building Icon" />
              <span>24 people going</span>
              <img src={Heart} alt="Heart Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookATrip;
