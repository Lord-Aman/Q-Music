import React from "react";
import "./Button.css";

function Button({ text, variant = "primary" }) {
  return <button className={`${variant} button`}>{text}</button>;
}

export default Button;
