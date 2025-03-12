import React from "react";
import styles from "../../pages/Dashboard/css/dashboard.module.css";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const PersonalDetails = ({ data, openModal }) => {
    return (
        <div className={styles.detailsSection}>
            <div className={styles.editBtn}>
                <Tooltip title="Edit Details">
                    <IconButton 
                        onClick={() => openModal("personal",data)}
                        sx={{
                            backgroundColor: '#FFD966',
                            '&:hover': {
                                backgroundColor: '#ffc107',
                            },
                            padding: '0.5rem',
                        }}
                    >
                        <EditIcon sx={{ fontSize: '1.2rem' }} />
                    </IconButton>
                </Tooltip>
            </div>
            <div className={styles.details1}>
                <div className={styles.profileImage}>
                    <img src={data.image || "/default-profile.png"} alt={data.name} />
                    <div className={styles.profileImageOverlay}>
                        <Tooltip title="Edit Profile Photo">
                            <IconButton 
                                onClick={() => openModal("photo", data)}
                                sx={{
                                    backgroundColor: 'rgba(255, 217, 102, 0.9)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 193, 7, 0.9)',
                                    },
                                    padding: '0.4rem',
                                }}
                            >
                                <CameraAltIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <h4>Name</h4>
                        <p>{data.name}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h4>Roll Number</h4>
                        <p>{data.rollNumber}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h4>Phone Number</h4>
                        <p>{data.phoneNumber}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h4>Room Number</h4>
                        <p>{data.roomNumber}</p>
                    </div>
                </div>
            </div>
            <div className={styles.details2}>
                <p><span>Institute Email Id</span> - {data.instituteEmailId}</p>
                <p><span>Personal Mail Id</span> - {data.emailId}</p>
                <p><span>Department </span> - {data.department}</p>
                <p><span>Year of Passing</span> - {data.yearOfPassing}</p>
            </div>
        </div>
    );
};

export default PersonalDetails;