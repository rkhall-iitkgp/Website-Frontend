import React from "react";
import image from "./headshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Audio } from 'react-loader-spinner';

const Alumnus = (props) => {
  return (
    <div className="alumnuscard">
    <img src={props.img} className="headshot" />
      <div className="namebatch">
        <span className="name">{props.name}</span>
        <span className="batch">{`Batch of ${props.batch}`}</span>
      </div>
      <p className="desc">{props.desc}</p>
      <div className="social">
        <a href="javascript:void(0)">
          <FontAwesomeIcon icon={faFacebook} className="social-icons" />
        </a>
        <a href="javascript:void(0)">
          <FontAwesomeIcon icon={faInstagram} className="social-icons" />
        </a>
        <a href="javascript:void(0)">
          <FontAwesomeIcon icon={faTwitter} className="social-icons" />
        </a>
        <a href={props.linkedin} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
        </a>
      </div>
    </div>
  );
};

export default Alumnus;
