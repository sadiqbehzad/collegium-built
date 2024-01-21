import React from "react";
import "./button.css";

const Button = (props) => {
  const { label, width, height, color, fontSize } = props;
  const btnStyle = {
    width: width || "auto",
    height: height || "auto",
    color: color || "white",
    fontSize: fontSize || "auto",
  };
  return (
    <div>
      <button className="btn" style={btnStyle}>
        {label}
      </button>
    </div>
  );
};

export default Button;
