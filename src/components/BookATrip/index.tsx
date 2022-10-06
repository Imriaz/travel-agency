import React from "react";
import "./style.css";
import DestinationIcon from "../../Assets/images/destination.png";
import PaymentIcon from "../../Assets/images/payment.png";
import CarIcon from "../../Assets/images/car.png";

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
        </div>
      </div>
      <div className="Booking__RightSide">
        <div className="Booking__RightSide__TripCard">
          <h1>HEllo</h1>
        </div>
      </div>
    </div>
  );
};

export default BookATrip;
