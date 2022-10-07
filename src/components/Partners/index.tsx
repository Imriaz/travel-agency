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
      <div className="Partner__List">
        <img className="Partner__Logo" src={AxonLogo} alt="Logos" />
      </div>
      <div className="Partner__List">
        <img className="Partner__Logo" src={JetStarLogo} alt="Logos" />
      </div>
      <div className="Partner__List">
        <img className="Partner__Logo" src={ExpediaLogo} alt="Logos" />
      </div>
      <div className="Partner__List">
        <img className="Partner__Logo" src={QuantasLogo} alt="Logos" />
      </div>
      <div className="Partner__List">
        <img className="Partner__Logo" src={AlitaliaLogo} alt="Logos" />
      </div>
    </div>
  );
};

export default Partners;
