import React from "react";
import "./Aboutmain.css";
import Imgcard from "./Imgcard";
import ButtonExplore from "../common/ButtonExplore";
import MainHead from "../common/MainHead";
import { Link } from "react-router-dom";
// import img2 from '../../Assets/Images/home/home.jpg'

function Aboutmain() {
  return (
    <div className="aboutmainwrapper">
      {/* <Imgcard imagesrc="https://img.freepik.com/premium-photo/herbs-spices-ayurvedic-medicine-products-herbal-medicine-products-background_677428-1783.jpg?w=360"/> */}
      <Imgcard imagesrc=  "https://img.freepik.com/premium-photo/herbs-spices-ayurvedic-medicine-products-herbal-medicine-products-background_677428-1769.jpg?w=360"/>
      <div className="aboutmaindetails">
        <h3>About us</h3>
        <MainHead Heading={"A Legacy of Holistic Healing Since 1948"}/>
        {/* <MainHead Heading={"About us"}/> */}
        <br />
        <div className="aboutmainpara">
          Welcome to our esteemed Ayurveda clinic, where tradition meets
          excellence. Established in 1948, we have been dedicated to the art and
          science of Ayurveda for over seven decades, offering natural and
          holistic healthcare solutions to our community.
        </div>
        <br />
       <Link to={"/services"}> <ButtonExplore btncontent={"Explore"} /></Link>
      </div>
    </div>
  );
}

export default Aboutmain;
