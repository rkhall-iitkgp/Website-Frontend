import React from "react";
import styles from "../../pages/Dashboard/css/dashboard.module.css";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Projects = ({ data, openModal }) => {
    const projects = data || [];

    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                <h2>Projects</h2>
                <Tooltip title="Add Project">
                    <IconButton 
                        onClick={() => openModal("projects")}
                        sx={{
                            backgroundColor: '#f0f0f0',
                            '&:hover': {
                                backgroundColor: '#e0e0e0',
                            },
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            </div>
            <div className={styles.projectsList}>
                {projects.filter(Boolean).length > 0 ? (
                    projects.map((project, index) => (
                        project && (  // Add null check here
                            <div key={index} className={styles.projectItem}>
                                <div className={styles.editBtn3}>
                                    <Tooltip title="Edit Details">
                                        <IconButton 
                                            onClick={() => openModal("projects", { data: project, index })}
                                            sx={{
                                                padding: '0.5rem',
                                            }}
                                        >
                                            <EditIcon sx={{ fontSize: '1.2rem' }} />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                                <div className={styles.itemHeader}>
                                    <h3>{project.title}</h3>
                                </div>
                                <p className={styles.company}>{project.company}</p>
                                <p className={styles.year}>{project.year}</p>
                                <p className={styles.description}>{project.description}</p>
                            </div>
                        )
                    )).filter(Boolean)  // Filter out any null/undefined values
                ) : (
                    <p className={styles.emptyMessage}>No projects added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
