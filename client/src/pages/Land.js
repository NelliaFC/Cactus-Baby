import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import img from "../img/blackandgold.jpg";

const Land = () => {
  return (
    <div className="container">
      {/* <CategoryMenu /> */}
      <h1>This is the home page</h1>
      <img style={{maxWidth : "50%" , maxHeight: "50%" , marginRight: "auto" , marginLeft: "auto" , marginBottom: '10px'}} src={img}></img>
    </div>
  );
};

export default Land;