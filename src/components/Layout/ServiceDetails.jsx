import React from "react";
import "./ServiceDetails.css";

const ServiceDetails = ({ service, description, image }) => {
  return (
    <div className="seviceDetails">
      <div className="ServiceDetalsList">
        <h1>{service}</h1>
        <h3>{description}</h3>
      </div>
      <img className="dImage" src={image} alt="" />
    </div>
  );
};

export default ServiceDetails;
