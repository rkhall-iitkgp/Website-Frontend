import React from "react";
import styles from "../css/ProfileCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function ProfileCard(props) {
  return (
    <div className={styles.profileCard}>
      <img src={props.imageUrl} alt={props.name} />
      <div className={styles.profileCardInfo}>
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        {/* <div className="profile-social-icons">
          <a
            rel="noreferrer"
            className="facebook social"
            href={props.facebookUrl}
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon icon={faFacebook} />{" "}
          </a>
          <a
            rel="noreferrer"
            className="twitter social"
            href={props.twitterUrl}
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon icon={faTwitter} />{" "}
          </a>
          <a
            rel="noreferrer"
            className="instagram social"
            href={props.instagramUrl}
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon icon={faInstagram} />{" "}
          </a>
          <a
            rel="noreferrer"
            className="linkedin social"
            href={props.linkedinUrl}
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default ProfileCard;
