import React from "react";
import image from "./headshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Alumnus = () => {
  return (
    <div className="alumnuscard">
      <img src={image} className="headshot" />
      <span className="name">Melon Husk</span>
      <span className="batch">Batch of 2023</span>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="social">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} className="social-icons" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} className="social-icons" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} className="social-icons" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
        </a>
      </div>
    </div>
  );
};

export default Alumnus;
