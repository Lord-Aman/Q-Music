import React from "react";
import "./Banner.css";

function Banner({ text, image }) {
  return (
    <div className="banner-container">
      <h1 className="banner-text">{text}</h1>
      <img src={image} />
    </div>
  );
}

export default Banner;
