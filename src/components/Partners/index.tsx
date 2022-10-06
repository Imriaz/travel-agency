import React from "react";
import "./style.css";
import AxonLogo from "../../Assets/images/axon.png";
import JetStarLogo from "../../Assets/images/jetStar.png";
import ExpediaLogo from "../../Assets/images/expedia.png";
import QuantasLogo from "../../Assets/images/qantas.png";
import AlitaliaLogo from "../../Assets/images/alitalia.png";

const Partners = () => {
  return (
    <div className="Partner">
      <img className="Partner__Logo" src={AxonLogo} alt="Logos" />
      <img className="Partner__Logo" src={JetStarLogo} alt="Logos" />
      <img className="Partner__Logo" src={ExpediaLogo} alt="Logos" />
      <img className="Partner__Logo" src={QuantasLogo} alt="Logos" />
      <img className="Partner__Logo" src={AlitaliaLogo} alt="Logos" />
    </div>
  );
};

export default Partners;
