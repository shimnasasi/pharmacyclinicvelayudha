import React from "react";
import "./Aboutmember.css";
import jishnu from "../../Assets/Images/legacy/Jishnu.png";

const Aboutmember = () => {
  return (
    <div className="aboutmember">
      <span className="heritage"> Our Legacy Lives On..</span>

      <div className="member">
        <div className="membershadow" />
        <img
          className="currentimage"
          src={jishnu}
          // src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <div className="currentDetails">
          <span className="head">Dr.V Jishnu Gopal</span>

          <span className="paragraph">
            Ayurvedic Healthcare Expert & Director, Velayudha
            Pharmacy and Clinic A distinguished Ayurvedic doctor, carrying
            forward a three-generation legacy. Combining traditional wisdom with
            modern expertise for holistic care. Over 10 years of experience in
            delivering personalized wellness. Committed to preserving Ayurveda's
            rich heritage and innovation. Incorporating innovative approaches
            for optimal health outcomes. Providing compassionate and
            personalized care. Setting new standards in Ayurvedic healthcare
            through excellence. Dedicated to improving lives through holistic
            wellness. Renowned for exceptional patient outcomes and care.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aboutmember;