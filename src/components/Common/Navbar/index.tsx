import React from "react";
import "./style.css";
import Logo from "../../../Assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <img src={Logo} alt="Jadoo Logo" />
      </div>
      <div className="Navbar__MenuItem">
        <ul>
          <li>Destinations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
          <li>Bookings</li>
          <li>Login</li>
          <li>Sign up</li>
          <li>EN</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
