import React, { useState } from "react";
import "./css/dashboardUI.css";
import { FaEdit, FaPlus } from "react-icons/fa";
// import { Dashboard } from "@mui/icons-material";
import YourInfo from "./Component/yourInfo";
import AddSkillModal from "./Component/skill";
import ProfileCard from "./Component/profileCard";
import WriteAbout from "./Component/writeAbout";
import AddProfile from './Component/addProfile';
import ProfileImage from "./profileImage.jpg";

const Dashboard = () => {
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showWriteAbout, setShowWriteAbout] = useState(false);
  const [aboutText, setAboutText] = useState(
    "Final year student at IIT Kharagpur with a passion for technology and innovation. Specializing in Civil Engineering with a focus on sustainable development."
  );
  const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML", "Python", "Git", "MongoDB"];
  const experiences = [
    { 
      title: "UI/UX Designer",
      company: "Tech Solutions Inc.",
      year: "2018 - 2022",
      description: "Led design initiatives for enterprise applications"
    },
    { 
      title: "Full-Stack Developer",
      company: "Innovation Labs",
      year: "2019 - 2023",
      description: "Developed scalable web applications using MERN stack"
    },
    { 
      title: "Frontend Developer",
      company: "Digital Creators",
      year: "2020 - Present",
      description: "Building responsive and interactive user interfaces"
    },
  ];
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [showAddProfile, setShowAddProfile] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Main Content */}
      <main className="main-content">
        {/* Header Card */}
        <div className="header-card">
          <div className="header-content">
            <div className="profile-quick-view">
              <div className="avatar-large">
                <img src={ProfileImage} alt="Profile" />
                <button 
                  className="edit-avatar"
                  onClick={() => setShowProfileCard(true)}
                >
                  <FaEdit />
                </button>
              </div>
            </div>

            <div className="header-info">
              <h1 className="user-name">Anurag Ranjan<label className="user-id"> (23CEXYZX)</label></h1>
              
              <h2 className="hall-name">Radhakrishnan Hall of Residence</h2>
              <h3>IIT Kharagpur</h3>
              <div className="department-badge">
                Department of Civil Engineering<br/>
                <span className="rk-id">RK ID: RKCEXYZ</span>
              </div>
              <div className="header-actions">
                <button 
                  className="btn-primary"
                  onClick={() => setShowAddProfile(true)}
                >
                  Add Profile Section
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => setShowInfoModal(true)}
                >
                  Personal Information
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="content-section">
          <div className="section-header">
            <h3>About</h3>
            <button 
              className="edit-button"
              onClick={() => setShowWriteAbout(true)}
            >
              <FaEdit />
            </button>
          </div>
          <div className="section-content">
            <p className="about-text">
              {aboutText}
            </p>
          </div>
        </section>

        {/* WriteAbout Modal */}
        {showWriteAbout && (
          <div style={overlayStyle}>
            <div style={modalStyle}>
              <button 
                style={closeButtonStyle}
                onClick={() => setShowWriteAbout(false)}
              >
                ×
              </button>
              <WriteAbout 
                initialText={aboutText}
                onSave={(text) => {
                  setAboutText(text);
                  setShowWriteAbout(false);
                }}
              />
            </div>
          </div>
        )}

        {/* Skills Section */}
        <section className="content-section">
          <div className="section-header">
            <h3>Skills</h3>
            <button className="edit-button"><FaPlus /></button>
          </div>
          <div className="skills-container">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
            <button 
              className="add-skill-btn"
              onClick={() => setShowSkillModal(true)}
            >
              <FaPlus className="add-icon" />
              <span>Add new skill</span>
            </button>
          </div>
        </section>

        {/* Skill Modal */}
        {showSkillModal && (
          <AddSkillModal onClose={() => setShowSkillModal(false)} />
        )}

        {showInfoModal && (
          <div style={overlayStyle}>
            <div style={modalStyle}>
              <button 
                style={closeButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f0f0';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                onClick={() => setShowInfoModal(false)}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <YourInfo />
            </div>
          </div>
        )}

        {/* Experience Section */}
        <section className="content-section">
          <div className="section-header">
            <h3>Experience</h3>
            <button className="edit-button"><FaPlus /></button>
          </div>
          <div className="experience-cards">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="exp-header">
                  <h4>{exp.title}</h4>
                  <span className="company-name">{exp.company}</span>
                </div>
                <span className="exp-duration">{exp.year}</span>
                <p className="exp-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Add ProfileCard Modal */}
        {showProfileCard && (
          <div style={overlayStyle}>
            <div style={modalStyle}>
              <ProfileCard onClose={() => setShowProfileCard(false)} />
            </div>
          </div>
        )}

        {showAddProfile && (
          <div style={overlayStyle}>
            <div style={modalStyle}>
              <AddProfile onClose={() => setShowAddProfile(false)} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  backdropFilter: "blur(5px)",
};

const modalStyle = {
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: "32px 40px",
  width: "auto",
  maxWidth: "95%",
  boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
  position: "relative",
  margin: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const closeButtonStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  width: "32px",
  height: "32px",
  border: "none",
  borderRadius: "50%",
  backgroundColor: "#f5f5f5",
  color: "#666",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
  zIndex: 2,
};

export default Dashboard;
