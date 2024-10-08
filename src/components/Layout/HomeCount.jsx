import React, { useState } from "react";
import "./HomeCount.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaAward } from "react-icons/fa";
import { ImHappy } from "react-icons/im";
import { GiMedicinePills } from "react-icons/gi";
import { MdOutlineGppGood } from "react-icons/md";
import logo from "../../Assets/Images/logo/shadowGreen.png";

const HomeCount = () => {
  const [counterOn, setCounteOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounteOn(true)}
      onExit={() => setCounteOn(false)}
    >
      <div className="CountWrapper">
        <div className="BgCount">
          <img src={logo} alt="" />

          <span className="Countvelayudha">Velayudha</span>
          <span className="Countpharma">Pharmacy & Clinic</span>
          <span className="CountAchive">Our Achievements</span>
          <br />
        </div>
        <div className="counterList">
          <div className="counterCard">
            <span className="Icon">
              <FaAward />
            </span>
            <span className="Count">
              {counterOn && <CountUp start={0} end={75} duration={10} />}+
            </span>
            <span className="Info"> Years Experience</span>
          </div>
          <div className="counterCard">
            <span className="Icon">
              <ImHappy />
            </span>
            <span className="Count">
              {counterOn && <CountUp start={0} end={100} duration={10} />}K+
            </span>
            <span className="Info"> Happy Customers</span>
          </div>
          <div className="counterCard">
            <span className="Icon">
              <GiMedicinePills />
            </span>
            <span className="Count">
              {counterOn && <CountUp start={0} end={100} duration={10} />}+
            </span>
            <span className="Info"> Products</span>
          </div>
          <div className="counterCard">
            <span className="Icon">
              <MdOutlineGppGood />
            </span>
            <span className="Count">
              {counterOn && <CountUp start={0} end={100} duration={10} />}%
            </span>
            <span className="Info">Quality</span>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default HomeCount;
