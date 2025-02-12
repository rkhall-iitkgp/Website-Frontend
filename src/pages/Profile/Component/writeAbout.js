import React from "react";
import "./profileCard.css";

const writeAbout = () => {
  return (
    <div className="about-card-container">
      <div className="about-card">
        <h2 className="about-title">Write about yourself</h2>
        <p className="about-description">
          You can write about your years of experience, industry, or skills.
        </p>
        <textarea
          className="about-textarea"
          placeholder="Write something about yourself..."
        ></textarea>
        <button className="about-save-button">Save</button>
      </div>
    </div>
  );
};

export default writeAbout;