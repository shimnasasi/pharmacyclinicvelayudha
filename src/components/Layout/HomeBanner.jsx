import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="homeWrapper">
      <div className="content">
        <span className="ayurbanner">Velayudha</span>
        <span className="pharmabanner">pharmacy & Clinic</span>
        <br />
        <span className="pharmabannersub">
          Embracing Holistic Healing Since 1948
        </span>
        <br />
        <p>
          For more than 70 years, Velayudha pharmacy & Clinic has been a trusted
          name in Ayurvedic medicine. Founded by Velayudha vaidhyar, our clinic
          has been dedicated to providing authentic and effective treatments
          that address the root causes of ailments, rather than just the
          symptoms.
        </p>

        <Link to={"/about"}>
          <button>Explore </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;