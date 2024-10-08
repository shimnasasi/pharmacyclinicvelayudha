import React from "react";
import "./AboutJoin.css";
import Imgcard from "./Imgcard";
import ButtonExplore from "../common/ButtonExplore";
import MainHead from "../common/MainHead";

function AboutJoin() {
  return (
    <div className="aboutjoinmain">
      <div className="joindetails">
      <MainHead Heading={"Join Our Journey"}/>
        {/* <span className="joinhead"></span> */}
        <span className="joinpara">
          Experience the transformative power of Ayurveda with us. Whether you
          seek relief from specific health issues or wish to improve your
          overall well-being, we are here to support you on your journey to
          health and harmony. Join the countless individuals who have benefited
          from our holistic approach to healing.
        </span>
        <ButtonExplore btncontent={"Explore"} />
      </div>
      <Imgcard
        imagesrc={
          "https://img.freepik.com/premium-photo/herbs-spices-ayurvedic-medicine-products-herbal-medicine-products-background_677428-1769.jpg?w=360"
        }
      />
    </div>
  );
}

export default AboutJoin;
