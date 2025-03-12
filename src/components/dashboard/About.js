import React from "react";
import styles from "../../pages/Dashboard/css/dashboard.module.css";
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const About = ({ data, openModal }) => {
    return (
        <div className={styles.section}>
            <div className={styles.editBtn2}>
                <Tooltip title="Edit Details">
                    <IconButton 
                        onClick={() => openModal("about",data)}
                        sx={{
                            padding: '0.5rem',
                        }}
                    >
                        <EditIcon sx={{ fontSize: '1.2rem' }} />
                    </IconButton>
                </Tooltip>
            </div>
            <div className={styles.sectionHeader}>
                <h2>About</h2>
            </div>
            <div className={styles.aboutContent}>
                <p>{data}</p>
            </div>
        </div>
    );
};

export default About;