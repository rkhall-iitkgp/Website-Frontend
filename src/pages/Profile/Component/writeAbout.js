import React, { useState } from "react";
import "./profileCard.css";

const WriteAbout = ({ initialText, onSave }) => {
  const [text, setText] = useState(initialText || "");

  const handleSave = () => {
    onSave(text);
  };

  return (
    <div className="write-about-container">
      <h2 className="write-about-title">About</h2>
      <p className="write-about-subtitle">
        You can write about your years of experience, industry, or skills.
      </p>
      <textarea
        className="write-about-textarea"
        placeholder="Write something about yourself..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="write-about-actions">
        <button className="write-about-save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default WriteAbout;