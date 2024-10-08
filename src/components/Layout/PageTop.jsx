import React from "react";
import "./PageTop.css";

const PageTop = ({ PageName }) => {
  return (
    <div className="PageDetails">
      <div className="PageName">
        <h1>{PageName}</h1>
      </div>
    </div>
  );
};

export default PageTop;
