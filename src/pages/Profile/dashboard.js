import React from "react";
import "./css/dashboardUI.css";
import { FaEllipsisH } from "react-icons/fa";
// import { Dashboard } from "@mui/icons-material";

const DashboardUI = () => {
  const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML", "Python"];
  const experiences = [
    { title: "UI/UX Designer", year: "2018 - 2022" },
    { title: "Full-Stack Developer", year: "2019 - 2023" },
    { title: "Frontend Developer", year: "2020 - Present" },
  ];

  return (
    <div className="container">
      <div className="profile-card">
        <div className="header">
          <div>
            <h2>Radhakrishnan Hall of Residence</h2>
            <h1>IIT Kharagpur</h1>
          </div>
          <div className="department-info">
            <p>Department of Civil Engineering</p>
            <p>RK Id: RKCEXYZ</p>
          </div>
        </div>

        <div className="profile-info">
          <div className="avatar">
            <img src="profile.jpg" alt="Profile" />
          </div>
          <div>
            <h2>SANJAY SAINI</h2>
            <p>( 23CEXYZX )</p>
          </div>
          <div className="actions">
            <button className="btn">Add Profile Section</button>
            <button className="btn">Open to</button>
            <FaEllipsisH className="icon" />
          </div>
        </div>

        <div className="section">
          <h3>About <button className="add">+</button></h3>
          <div className="content-box"></div>
        </div>

        <div className="section">
          <h3>Skills <button className="add">+</button></h3>
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill">{skill} ✕</span>
            ))}
            <button className="add-skill">+ Add skills</button>
          </div>
        </div>

        <div className="section">
          <h3>Add Certificates <button className="add">+</button></h3>
        </div>

        <div className="section">
          <h3>EXPERIENCE <button className="add">+</button></h3>
          {experiences.map((exp, index) => (
            <div key={index} className="experience">
              <p className="year">{exp.year}</p>
              <h4>{exp.title}</h4>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardUI;
