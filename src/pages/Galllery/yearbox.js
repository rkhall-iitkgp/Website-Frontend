import React from "react";
import styles from "./css/gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

const Yearbox = (props) => {
  return (
    <>
      <div
        onClick={() => props.handleClick(props.year)}
        className={`${styles.yearbox} ${props.selected === true ? `${styles.active}` : ""}`}
      >
        <span>{props.year}</span>
        <FontAwesomeIcon icon={faCaretDown} className={styles.dropdown} />
      </div>
    </>
  );
};

export default Yearbox;
