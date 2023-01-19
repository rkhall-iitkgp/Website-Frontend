import React from "react";
import "./Button.css";

const Button = (props) => {
  const { link, name } = props;
  return (
    <button className="gb_btn">
      <a href={link}>{name}</a>
    </button>
  );
};

export default Button;
