import React from "react";
import "./profileCard.css";

const ProfileCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <label htmlFor="department" className="label">
          Enter your Department :
        </label>
        <input
          type="text"
          id="department"
          placeholder="Your Department"
          className="input"
        />

        <p className="rk-id">Your RK Id : Xyyy ( default )</p>

        <div className="image-upload">
          <button className="upload-button">
            <img
              src="/camera-icon.png" // replace with your camera icon URL
              alt="Upload"
              className="camera-icon"
            />
          </button>
          <p className="upload-text">Edit your profile Image</p>
        </div>

        <button className="save-button">Save</button>
      </div>
    </div>
  );
};

export default ProfileCard;