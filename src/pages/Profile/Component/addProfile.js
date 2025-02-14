import React from 'react';
import './profileCard.css';

const AddProfile = ({ onClose }) => {
  return (
    <div className="add-profile-card">
      <button className="exit-button" onClick={onClose}>×</button>
      <h2 className="add-profile-title">Add Profile Section</h2>
      
      <div className="options-grid">
        <button className="option-button">
          Add Experience
        </button>
        <button className="option-button">
          Add Projects
        </button>
        <button className="option-button">
          Add Certificates
        </button>
        <button className="option-button">
          Add Skills
        </button>
      </div>
    </div>
  );
};

export default AddProfile;
