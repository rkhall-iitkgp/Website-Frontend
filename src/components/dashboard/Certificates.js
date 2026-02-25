import React from "react";
import styles from "../../pages/Dashboard/css/dashboard.module.css";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Certificates = ({ data, openModal }) => {
    const certificates = data || [];
    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                <h2>Certificates</h2>
                <Tooltip title="Add Project">
                    <IconButton 
                        onClick={() => openModal("certificates")}
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
            <div className={styles.certificatesList}>
                {certificates?.filter(Boolean).length > 0 ? (
                    certificates.map((cert, index) => (
                        cert && (
                            <div key={index} className={styles.certificateItem}>
                                <div className={styles.editBtn3}>
                                    <Tooltip title="Edit Details">
                                        <IconButton 
                                            onClick={() => openModal("certificates", { data: cert, index })}
                                            sx={{
                                                padding: '0.5rem',
                                            }}
                                        >
                                            <EditIcon sx={{ fontSize: '1.2rem' }} />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                                <div className={styles.itemHeader}>
                                    <h3>{cert.title}</h3>
                                </div>
                                <p className={styles.issuedBy}>Issued by: {cert.issuedBy}</p>
                                <p className={styles.issueDate}>Date: {cert.issueDate}</p>
                                <p className={styles.description}>{cert.description}</p>
                                {cert.image && (
                                    <div className={styles.certificateImage}>
                                        <img src={cert.image} alt={cert.title} />
                                    </div>
                                )}
                            </div>
                        )
                    )).filter(Boolean)
                ) : (
                    <p className={styles.emptyMessage}>No certificates added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Certificates;