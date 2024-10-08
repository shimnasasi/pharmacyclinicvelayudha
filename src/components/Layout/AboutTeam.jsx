import React from "react";
import "./AboutTeam.css";
import LegacyCard from "./LegacyCard";
import img1 from "../../Assets/Images/legacy/1.png" ;
import img2 from "../../Assets/Images/legacy/2.png";
import img3 from "../../Assets/Images/legacy/3.png";

function AboutTeam() {
  const legecyinfo = [
    {
      name: "Velayudha vaidhyar",
      image: img1,
      period: "1948-1988",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Velayudha vaidhyar",
      image: img2,
      period: "1948-1988",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Velayudha vaidhyar",
      image: img3,
      period: "1948-1988",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];

  return (
    <div className="aboutteamWrapper">
      <h1 className="ourlegacy">our legacy</h1>
      <div className="cards">
        {legecyinfo.map((list) => (
          <LegacyCard name={list.name} period={list.period} details={list.details } image={list.image}/>
        ))}
      </div>
    </div>
  );
}

export default AboutTeam;
