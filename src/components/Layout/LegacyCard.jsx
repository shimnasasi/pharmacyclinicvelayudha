import React from "react";
import "./LegacyCard.css";
// import img3 from "../../Assets/Images/legacy/3.png";

function LegacyCard({image,name,details}) {
  return (
    <div className="LegacyCardwrapper">
      <div className="imagewrapperaboutteam">
        <img src={image} alt="hiiiiiii" />
      </div>
      <div className="aboutteamdetails">
        <span className="aboutteamname">{name}</span>
        <span className="aboutteamparagrap">{details}</span>
      </div>
    </div>
  );
}

export default LegacyCard;
