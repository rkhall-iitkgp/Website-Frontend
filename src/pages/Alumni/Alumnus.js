import React from "react";
import styles from "./css/alumni.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Alumnus = (props) => {
  return (
    <div className={styles.alumnuscard}>
    <img src={props.img} className={styles.headshot} />
      <div className={styles.namebatch}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.batch}>{`Batch of ${props.batch}`}</span>
      </div>
      <p className={styles.desc}>{props.desc}</p>
      <div className={styles.social}>
        <a href="javascript:void(0)">
          <FontAwesomeIcon icon={faFacebook} className={styles.socialIcons} />
        </a>
        <a href="javascript:void(0)">
          <FontAwesomeIcon icon={faInstagram} className={styles.socialIcons} />
        </a>
        <a href="javascript:void(0)">
          <FontAwesomeIcon icon={faTwitter} className={styles.socialIcons} />
        </a>
        <a href={props.linkedin} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons} />
        </a>
      </div>
    </div>
  );
};

export default Alumnus;
