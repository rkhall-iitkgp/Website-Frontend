import React from "react";
import styles from "../../pages/Dashboard/css/dashboard.module.css";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Experience = ({ data, openModal }) => {
    const experiences = data || [];

    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                <h2>Experience</h2>
                <Tooltip title="Add Project">
                    <IconButton 
                        onClick={() => openModal("experience")}
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
            <div className={styles.experienceList}>
                {experiences.filter(Boolean).length > 0 ? (
                    experiences.map((exp, index) => (
                        exp && (  // Check if experience object exists
                            <div key={index} className={styles.experienceItem}>
                                <div className={styles.editBtn3}>
                                    <Tooltip title="Edit Details">
                                        <IconButton 
                                            onClick={() => openModal("experience", { data: exp, index })}
                                            sx={{
                                                padding: '0.5rem',
                                            }}
                                        >
                                            <EditIcon sx={{ fontSize: '1.2rem' }} />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                                <div className={styles.itemHeader}>
                                    <h3>{exp.title}</h3>
                                </div>
                                <p className={styles.company}>{exp.company}</p>
                                <p className={styles.year}>{exp.year}</p>
                                <p className={styles.description}>{exp.description}</p>
                            </div>
                        )
                    ))
                ) : (
                    <p>No experience added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Experience;