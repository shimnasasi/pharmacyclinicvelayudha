import React, { useState } from "react";
import "./Sidebar.css";
// import ServiceDetails from "./ServiceDetails";
// import img1 from "../../Assets/Images/services/Arthritis.jpg";
import { serviceDetailsList } from "../../utils/services";
import MainHead from "../common/MainHead";

const Sidebar = () => {
  const [serviceName, setServiceName] = useState("Arthritis");

  const serviceHandle = (e) => {
    setServiceName(e.target.innerText);
  };
  return (
    <div className="servicemain">
      <div className="sidebar">
        <div className="services">
          <div className="servicelist" onClick={serviceHandle}>
            Arthritis
          </div>
          <div className="servicelist" onClick={serviceHandle}>
            Migraine & Sinusitis
          </div>
          <div className="servicelist" onClick={serviceHandle}>
            Diabetes
          </div>
          <div className="servicelist" onClick={serviceHandle}>
            Skin treatment
          </div>
          <div className="servicelist" onClick={serviceHandle}>
            Hair fall & Dandruf
          </div>
          <div className="servicelist" onClick={serviceHandle}>
            Depression & Anxiety
          </div>
          <div className="servicelist" onClick={serviceHandle}>
            Gastric Problem
          </div>
          <div className="servicelist" onClick={serviceHandle}>
            Immunity booster Program
          </div>
        </div>
      </div>
      {serviceDetailsList
        .filter((item) => item.serviceName === serviceName)
        .map((list) => (
          <div className="DisDetails">
            <div className="DisDetailsInfo">
              {/* <h1>{list.serviceName}</h1> */}
              <MainHead Heading={list.serviceName} />
              <h3>{list.description}</h3>
            </div>
            <img className="DisDetailsImg" src={list.image} alt="" />
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
