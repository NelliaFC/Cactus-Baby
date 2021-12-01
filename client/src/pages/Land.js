import React from "react";
import img from "../img/Cactus Baby.jpg";


const Land = () => {
  return (
    <div className="container">
      
      <img style={{display: 'flex', justifyContent: 'center', maxWidth : "700" , maxHeight: "350" , marginRight: "auto" , marginLeft: "auto" , marginBottom: "auto", }} src={img}></img>
    </div>
  );
};

export default Land;