import React from "react";
import "./Footer.css";
import logo from "../../Assets/Images/logo/whitelogo.png";
// import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="leftSide">
        <div className="leftFooter">
          <img src={logo} alt="" />
          <div className="Name">
            <span className="Velayudha">Velayudha</span>
            <span className="pharma">pharmacy & Clinic</span>
          </div>
        </div>
        <p>
          where tradition meets excellence. Established in 1948, we have been
          dedicated to the art and science of Ayurveda for over seven decades,
          offering natural and holistic healthcare solutions to our community.
        </p>
      </div>
      <div className="FooterLinks">
        <FaWhatsapp className="footerIcons" />
        <FaFacebookF className="footerIcons" />
        <FaInstagram className="footerIcons" />
        <FaEnvelope className="footerIcons" />
        <FaXTwitter className="footerIcons" />
      </div>
      {/* <div className="footerlist">
        <Link to={"/"}>
          <li className="footerLower">home</li>
        </Link>
        <Link to={"/About Us"}>
          <li className="footerLower">About Us</li>
        </Link>
        <Link to={"/Services"}>
          <li className="footerLower">Services</li>
        </Link>
        <Link to={"/Products"}>
          <li className="footerLower">Products</li>
        </Link>
        <Link to={"/Contact"}>
          <li className="footerLower">Contact</li>
        </Link>
      </div> */}
    </div>
  );
};

export default Footer;
