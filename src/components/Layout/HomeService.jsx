import React from "react";
import "./HomeService.css";
// import MainHead from "../common/MainHead";

import HServiceCard from "../common/HServiceCard";
import { serviceDetailsList } from "../../utils/services";

const HomeService = () => {
  return (
    <div className="HSWrapper">
      {/* <MainHead Heading={"Experience  Our Exclusive Care"} /> */}
      <h2 className="experiencehead">Experience  Our Exclusive Care</h2>
      <span className="homeservicepara">
        We offer a comprehensive range of Ayurvedic treatments and services
        designed to promote balance and well-being, including:
      </span>

      <div className="serviceslist">
        {serviceDetailsList.map((list) => (
          <HServiceCard service={list.serviceName} />
        ))}
      </div>
    </div>
  );
};

export default HomeService;
