import React from "react";
import "./Imgcard.css";

function Imgcard({imagesrc}) {
  return (
    <div className="leftaboutmain">
      <div className="imgcover">
        <div className="imgbgborder" />
        <img
          src={imagesrc}
          alt="hiiiiiiiiii"
        />
      </div>
    </div>
  );
}

export default Imgcard;
