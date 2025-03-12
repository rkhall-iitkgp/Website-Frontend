import React from "react";
import { useState,useEffect } from "react";
import styles from "./css/dashboard.module.css";
import PersonalDetails from "../../components/dashboard/PersonalDetails";
import About from "../../components/dashboard/About";
import Experience from "../../components/dashboard/Experience";
import Skills from "../../components/dashboard/Skills";
import Certificates from "../../components/dashboard/Certificates";
import Projects from "../../components/dashboard/Projects";
import UpdateModal from "../../components/dashboard/UpdateModal";

export default function Dashboard(){
    const [profileData,setProfileData] = useState({
        name : "Test User",
        phoneNumber: 9876543210,
        rollNumber : "22XX10000",
        department : "Electrical",
        emergencyMobileNumber: 9876543210,
        yearOfPassing: 2026,
        emailId: "test@gmail.com",
        instituteEmailId : "test@kgpian.iitkgp.ac.in",
        roomNumber: "E101",
        dateOfBirth: 2005,
        image: "dummy_string",
        rkid: "RK311222",
        about: "Dummy about",
        skills: ["HTML","CSS","JS"],
        experience: [
            {
                title: "Dummy experience",
                company: 'Dummy company',
                year: '2026-2027',
                description: 'Dummy test'
            }
        ],
        certificates: [
            {
                title: "Dummy experience",
                issuedBy : 'Dummy company',
                issueDate : '3-4-2025',
                description : "Dummy test",
                image : null
            }
        ],
        projects: [
            {
                title: "Portfolio Website",
                company: "Client Project",
                year: "2022",
                description: "Designed and developed a responsive portfolio website using React.js and modern CSS techniques.",
            }
        ]
    });

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const [editData, setEditData] = useState(null);
    
    useEffect(()=>{
        console.log(profileData)
    },[profileData])

    const openModal = (type, data = null) => {
        setModalType(type);
        setEditData(data);
        setShowModal(true);
    };
    
    const closeModal = () => {
        setShowModal(false);
        setEditData(null);
    };

    const updateProfileData = (type, newData, index = null) => {
        let updatedProfile = {...profileData};
        
        switch(type) {
            case "photo":
                updatedProfile.image = newData.image;
                break;
            case "personal":
                updatedProfile = {...updatedProfile, ...newData};
                break;
            case "about":
                updatedProfile.about = newData.about;
                break;
            case "experience":
                if (index !== null) {
                    updatedProfile.experience[index] = newData;
                } else {
                    updatedProfile.experience.push(newData);
                }
                break;
            case "skills":
                updatedProfile.skills = newData;
                break;
            case "certificates":
                if (index !== null) {
                    updatedProfile.certificates[index] = newData;
                } else {
                    updatedProfile.certificates.push(newData);
                }
                break;
            case "projects":
                if (index !== null) {
                    updatedProfile.projects[index] = newData;
                } else {
                    updatedProfile.projects.push(newData);
                }
                break;
            default:
                break;
        }
        
        setProfileData(updatedProfile);
        // API call to update the data on the server
    };
    
    return (
        <div className={styles.container}>
            <PersonalDetails data={profileData} openModal={openModal} />
            <About data={profileData.about} openModal={openModal} />
            <Skills data={profileData.skills} openModal={openModal} />
            <Experience data={profileData.experience} openModal={openModal} />
            <Certificates data={profileData.certificates} openModal={openModal} />
            <Projects data={profileData.projects} openModal={openModal} />
            
            {showModal && (
                <UpdateModal 
                    type={modalType}
                    data={editData}
                    closeModal={closeModal}
                    updateData={updateProfileData}
                />
            )}
        </div>
    );
}