import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { link, name } = props;
  return (
    <button className={styles.gb_btn}>
      <a href={link}>{name} {">"}</a>
    </button>
  );
};

export default Button;
