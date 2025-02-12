import React, { useState } from "react";
import "./profileCard.css";

const YourInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [YourInfo, setYourInfo] = useState({
    personalEmail: "ranx@gmail.com",
    instituteEmail: "ranx@kgpian.iitkgp.ac.in",
    mobileNumber: "1234567890",
    roomNumber: "Xyyy",
  });

  const [editableInfo, setEditableInfo] = useState({ ...YourInfo });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setYourInfo({ ...editableInfo });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableInfo((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="info-card-container">
      {!isEditing ? (
        <div className="info-card">
          <h2 className="info-title">Your Information</h2>
          <p className="info-item">
            <strong>Personal Mail Id:</strong> {YourInfo.personalEmail}
          </p>
          <p className="info-item">
            <strong>Institute Mail Id:</strong> {YourInfo.instituteEmail}
          </p>
          <p className="info-item">
            <strong>Mobile No.:</strong> {YourInfo.mobileNumber}
          </p>
          <p className="info-item">
            <strong>Room No.:</strong> {YourInfo.roomNumber}
          </p>
          <button className="edit-button" onClick={handleEditClick}>
            ✏️
          </button>
        </div>
      ) : (
        <div className="edit-card">
          <h2 className="edit-title">Edit Your Information</h2>
          <label className="edit-label">
            Personal Mail Id:
            <input
              type="email"
              name="personalEmail"
              value={editableInfo.personalEmail}
              onChange={handleInputChange}
              className="edit-input"
            />
          </label>
          <label className="edit-label">
            Institute Mail Id:
            <input
              type="email"
              name="instituteEmail"
              value={editableInfo.instituteEmail}
              onChange={handleInputChange}
              className="edit-input"
            />
          </label>
          <label className="edit-label">
            Mobile No.:
            <input
              type="text"
              name="mobileNumber"
              value={editableInfo.mobileNumber}
              onChange={handleInputChange}
              className="edit-input"
            />
          </label>
          <label className="edit-label">
            Room No.:
            <input
              type="text"
              name="roomNumber"
              value={editableInfo.roomNumber}
              onChange={handleInputChange}
              className="edit-input"
            />
          </label>
          <button className="save-button" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default YourInfo;