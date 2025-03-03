import React, { useState } from "react";
import "./css/dashboardUI.css";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
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
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [aboutText, setAboutText] = useState(
    "Write about yourself here"
  );
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    title: '',
    company: '',
    year: '',
    description: ''
  });
  
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [showAddProfile, setShowAddProfile] = useState(false);
  const certificates = [
    {
      title: "Certificate of Completion",
      issuedBy: "Coursera",
      issueDate: "2022",
      description: "Completed the 'Python for Everybody' course"
    },
    {
      title: "Advanced Web Development Certification",
      issuedBy: "Google",
      issueDate: "2023",
      description: "Completed the Advanced Web Development course"
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      company: "Personal Project",
      year: "2023",
      description: "Built a full-stack e-commerce platform using MERN stack with features like user authentication, product management, and payment integration.",
      image: null
    },
    {
      title: "Portfolio Website",
      company: "Client Project",
      year: "2022",
      description: "Designed and developed a responsive portfolio website using React.js and modern CSS techniques.",
      image: null
    },
  ];

  const [editingExperience, setEditingExperience] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddExperience = () => {
    if (editIndex !== null) {
      // Update existing experience
      const updatedExperiences = [...experiences];
      updatedExperiences[editIndex] = newExperience;
      setExperiences(updatedExperiences);
      setEditIndex(null);
    } else {
      // Add new experience
      setExperiences([...experiences, newExperience]);
    }
    setNewExperience({ title: '', company: '', year: '', description: '' });
    setShowExperienceModal(false);
  };

  const handleEditExperience = (exp, index) => {
    setNewExperience(exp);
    setEditIndex(index);
    setShowExperienceModal(true);
  };

  const handleDeleteExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
      setShowSkillModal(false);
    }
  };

  const handleDeleteSkill = (indexToDelete) => {
    setSkills(skills.filter((_, index) => index !== indexToDelete));
  };

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
            <button 
              className="edit-button"
              onClick={() => {
                setNewSkill("");
                setShowSkillModal(true);
              }}
            >
              <FaPlus />
            </button>
          </div>
          <div className="skills-container">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                  <button 
                    onClick={() => handleDeleteSkill(index)}
                    style={{
                      background: 'none',
                      border: 'none',
                      marginLeft: '8px',
                      cursor: 'pointer',
                      color: '#666',
                      padding: '0 4px'
                    }}
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skill Modal */}
        {showSkillModal && (
          <div style={overlayStyle}>
            <div style={{...modalStyle, width: '400px'}}>
              <button 
                style={closeButtonStyle}
                onClick={() => setShowSkillModal(false)}
              >
                ×
              </button>
              <div style={formStyle}>
                <h3 style={modalTitleStyle}>Add New Skill</h3>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Skill Name</label>
                  <input
                    type="text"
                    placeholder="e.g., JavaScript, Python, React"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    style={enhancedInputStyle}
                  />
                </div>
                <div style={buttonContainerStyle}>
                  <button 
                    onClick={() => setShowSkillModal(false)}
                    style={cancelButtonStyle}
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleAddSkill}
                    style={enhancedSaveButtonStyle}
                    disabled={!newSkill.trim()}
                  >
                    Add Skill
                  </button>
                </div>
              </div>
            </div>
          </div>
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
            <button 
              className="edit-button"
              onClick={() => {
                setEditIndex(null);
                setNewExperience({ title: '', company: '', year: '', description: '' });
                setShowExperienceModal(true);
              }}
            >
              <FaPlus />
            </button>
          </div>
          <div className="experience-cards">
            {experiences.length === 0 ? (
              <div className="empty-state">
                No experiences added yet. Click the plus button to add one.
              </div>
            ) : (
              experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="exp-header">
                    <div className="exp-title-section">
                      <h4>{exp.title}</h4>
                      <span className="company-name">{exp.company}</span>
                    </div>
                    <div style={actionContainerStyle}>
                      <button 
                        style={actionIconStyle}
                        className="edit-icon"
                        onClick={() => handleEditExperience(exp, index)}
                        title="Edit Experience"
                      >
                        <FaEdit size={15} />
                      </button>
                      <button 
                        style={{...actionIconStyle, marginLeft: '8px'}}
                        className="delete-icon"
                        onClick={() => handleDeleteExperience(index)}
                        title="Delete Experience"
                      >
                        <FaTrash size={15} />
                      </button>
                    </div>
                  </div>
                  <span className="exp-duration">{exp.year}</span>
                  <p className="exp-description">{exp.description}</p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Experience Modal */}
        {showExperienceModal && (
          <div style={overlayStyle}>
            <div style={{...modalStyle, width: '500px'}}>
              <button 
                style={closeButtonStyle}
                onClick={() => {
                  setShowExperienceModal(false);
                  setEditIndex(null);
                  setNewExperience({ title: '', company: '', year: '', description: '' });
                }}
              >×</button>
              <div className="experience-form" style={formStyle}>
                <h3 style={modalTitleStyle}>{editIndex !== null ? 'Edit Experience' : 'Add New Experience'}</h3>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Position/Title</label>
                  <input
                    type="text"
                    placeholder="e.g., Software Engineer"
                    value={newExperience.title}
                    onChange={(e) => setNewExperience({...newExperience, title: e.target.value})}
                    style={enhancedInputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Tech Solutions Inc."
                    value={newExperience.company}
                    onChange={(e) => setNewExperience({...newExperience, company: e.target.value})}
                    style={enhancedInputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Duration</label>
                  <input
                    type="text"
                    placeholder="e.g., 2020 - Present"
                    value={newExperience.year}
                    onChange={(e) => setNewExperience({...newExperience, year: e.target.value})}
                    style={enhancedInputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Description</label>
                  <textarea
                    placeholder="Describe your role and achievements..."
                    value={newExperience.description}
                    onChange={(e) => setNewExperience({...newExperience, description: e.target.value})}
                    style={{...enhancedInputStyle, height: '120px', resize: 'vertical'}}
                  />
                </div>
                <div style={buttonContainerStyle}>
                  <button 
                    onClick={() => {
                      setShowExperienceModal(false);
                      setEditIndex(null);
                      setNewExperience({ title: '', company: '', year: '', description: '' });
                    }}
                    style={cancelButtonStyle}
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleAddExperience}
                    style={enhancedSaveButtonStyle}
                  >
                    {editIndex !== null ? 'Update Experience' : 'Save Experience'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certificates Section */}
        <section className="content-section">
          <div className="section-header">
            <h3>Certificates</h3>
            <button className="edit-button">
              <FaPlus />
            </button>
          </div>
          <div className="experience-cards">
            {certificates.map((cert, index) => (
              <div key={index} className="experience-card">
                <div className="cert-content">
                  <div className="exp-header">
                    <h4>{cert.title}</h4>
                    <span className="company-name">{cert.issuedBy}</span>
                  </div>
                  <span className="exp-duration">{cert.issueDate}</span>
                  <p className="exp-description">{cert.description}</p>
                </div>
                <div className="cert-image-section">
                  <div className="image-upload-area">
                    <input
                      type="file"
                      id={`cert-image-${index}`}
                      className="image-input"
                      accept="image/*"
                      hidden
                    />
                    <label htmlFor={`cert-image-${index}`} className="upload-label">
                      {cert.image ? (
                        <img src={cert.image} alt="Certificate" className="uploaded-cert" />
                      ) : (
                        <div className="upload-placeholder">
                          <FaPlus />
                          <span>Add Certificate Image</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="content-section">
          <div className="section-header">
            <h3>Projects</h3>
            <button className="edit-button">
              <FaPlus />
            </button>
          </div>
          <div className="experience-cards">
            {projects.map((project, index) => (
              <div key={index} className="experience-card">
                <div className="cert-content">
                  <div className="exp-header">
                    <h4>{project.title}</h4>
                    <span className="company-name">{project.company}</span>
                  </div>
                  <span className="exp-duration">{project.year}</span>
                  <p className="exp-description">{project.description}</p>
                </div>
                <div className="cert-image-section">
                  <div className="image-upload-area">
                    <input
                      type="file"
                      id={`project-image-${index}`}
                      className="image-input"
                      accept="image/*"
                      hidden
                    />
                    <label htmlFor={`project-image-${index}`} className="upload-label">
                      {project.image ? (
                        <img src={project.image} alt="Project" className="uploaded-cert" />
                      ) : (
                        <div className="upload-placeholder">
                          <FaPlus />
                          <span>Add Project Image</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
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

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '14px'
};

const saveButtonStyle = {
  background: 'var(--primary-color)',
  color: 'black',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500'
};

const actionButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '8px',
  borderRadius: '6px',
  transition: 'all 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#666',
};

const formStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};

const modalTitleStyle = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#1a1a1a',
  marginBottom: '8px',
  textAlign: 'center'
};

const formGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};

const labelStyle = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#666'
};

const enhancedInputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '14px',
  transition: 'all 0.2s ease',
  outline: 'none',
  backgroundColor: '#f8f8f8',
  '&:focus': {
    borderColor: 'var(--primary-color)',
    backgroundColor: '#fff',
    boxShadow: '0 0 0 3px rgba(255, 208, 80, 0.2)'
  }
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '12px',
  justifyContent: 'flex-end',
  marginTop: '20px'
};

const enhancedSaveButtonStyle = {
  background: 'var(--primary-color)',
  color: 'black',
  padding: '12px 24px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  }
};

const cancelButtonStyle = {
  background: '#f5f5f5',
  color: '#666',
  padding: '12px 24px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: '#ebebeb'
  }
};

const actionContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  opacity: 1,
  transition: 'opacity 0.2s ease',
  marginLeft: '8px'
};

const actionIconStyle = {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  color: '#666',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: '#f5f5f5'
  }
};

export default Dashboard;


/*
data = {
  experiences:
    [{
      name : ,
      copny nane:
      date:
      description
    },{},{},{}]
}
  
Experiencedata = data.experiences
Experiencedata.forEach((experience,i)=>{
  return (
    <h1>experience.name</h1>
  )
  })
<h1>ame</h1>

*/