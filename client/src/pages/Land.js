import React from "react";
import img from "../img/cactuspink.jpg";

const Land = () => {
  return (
    <div className="container">
      <img alt= "Cactus-Baby" style={{maxWidth : "100%" , maxHeight: "100%" , marginTop: "25px", marginRight: "auto" , marginLeft: "auto" , marginBottom: '10px'}} src={img}></img>
    </div>
  );
};

export default Land;