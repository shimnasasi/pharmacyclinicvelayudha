import React from "react";
import "./HServiceCard.css";
import logo from "../../Assets/Images/logo/shadowGreen.png";

function HServiceCard({ service }) {
  return (
    <div className="homeservicecard">
      <img src={logo} alt="" />{" "}
      <span className="servicecardpara">
        Velayudha Pharmacy & <br /> Clinic
      </span>
      <span className="servicecardname">{service}</span>
    </div>
  );
}

export default HServiceCard;
