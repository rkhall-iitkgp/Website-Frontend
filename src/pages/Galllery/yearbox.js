import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

const Yearbox = (props) => {
  return (
    <>
      <div
        onClick={() => props.handleClick(props.year)}
        className={`yearbox ${props.selected === true ? "active" : ""}`}
      >
        <span>{props.year}</span>
        <FontAwesomeIcon icon={faCaretDown} className="dropdown" />
      </div>
    </>
  );
};

export default Yearbox;
