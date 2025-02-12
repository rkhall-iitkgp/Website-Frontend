import React, { useState } from "react";

const AddSkillModal = ({ onClose }) => {
  const [skill, setSkill] = useState("");

  const handleConfirm = () => {
    if (skill.trim() !== "") {
      alert(`Skill added: ${skill}`);
      setSkill("");
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <h2 style={styles.heading}>Add your skill</h2>
        <input
          type="text"
          value={skill}
          placeholder="Development"
          onChange={(e) => setSkill(e.target.value)}
          style={styles.input}
        />
        <button style={styles.confirmButton} onClick={handleConfirm}>
          <span style={styles.plusIcon}>+</span> Confirm
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    width: "300px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "16px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    marginBottom: "16px",
  },
  confirmButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },
  plusIcon: {
    fontSize: "16px",
    marginRight: "5px",
  },
};

export default AddSkillModal;
