import React from "react";
import "./Contactcard.css";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contactcard = () => {
  return (
    <div className="contactMain">
      <div className="cardWrapper">
        <div>
          <h1 className="contactHead">
            Our Contact <br className="headbreak" /> Information
          </h1>
          <p className="paraEnq">
            Have a Enquiry or some feedback for us?
            <br /> Fill out the form below to contact our team.
          </p>
        </div>
        <div className="contactDetails">
          <h2 className="heading">Address</h2>
          <p className="para">
            Ernakulam <br />
            Kerala
          </p>
        </div>
        <div className="contactDetails">
          <h2 className="heading">Contact no</h2>
          <p className="para">
            <FaPhoneSquareAlt />
            +91-9745249762 <br />
          </p>
        </div>
        {/* <div className="contactDetails">
          <h2 className="heading">Email</h2>
          <p className="para">
            abcde@gmail.com <br />
            abcde@gmail.com
          </p>
        </div> */}
      </div>
      <div className="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3249665770595!2d76.28795910887294!3d9.989992490073643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d004b480901%3A0x8d95222f4878bfd8!2sVelayudha%20Pharmacy%20and%20Clinic!5e0!3m2!1sen!2sin!4v1728019091232!5m2!1sen!2sin"
          className="map"
          title="map"
          allowFullScreeneen=""
          loadingng="lazy"
          referrerPolicyy="no-referrer-when-downgrade"
        ></iframe>
        {/* <a href="https://www.google.com/maps/place/9%C2%B059'24.5%22N+76%C2%B017'26.7%22E/@9.9901442,76.2881751,17z/data=!3m1!4b1!4m4!3m3!8m2!3d9.9901389!4d76.29075?entry=ttu"> */}
        {/* <iframe
            title="map"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.323134216863!2d76.28817507456627!3d9.990144173205222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMjQuNSJOIDc2wrAxNycyNi43IkU!5e0!3m2!1sen!2sin!4v1723647318837!5m2!1sen!2sin"
          // src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.323254815283!2d76.28818127503108!3d9.990134190114738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMjQuNSJOIDc2wrAxNycyNi43IkU!5e0!3m2!1sen!2sin!4v1723645586550!5m2!1sen!2sin"
          ></iframe> */}
        {/* </a> */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.3234843400674!2d76.28818897503099!3d9.99011519011477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMjQuNCJOIDc2wrAxNycyNi44IkU!5e0!3m2!1sen!2sin!4v1722317199126!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.323134216863!2d76.28817507456627!3d9.990144173205222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMjQuNSJOIDc2wrAxNycyNi43IkU!5e0!3m2!1sen!2sin!4v1723647318837!5m2!1sen!2sin"
         width="600" height="450" style="border:0;"
         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </div>
  );
};

export default Contactcard;
