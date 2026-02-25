import { useState, useEffect, useRef } from "react";
import styles from "../../pages/Dashboard/css/dashboard.module.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const UpdateModal = ({ type, data, closeModal, updateData }) => {
    const [formData, setFormData] = useState({});
    const [index, setIndex] = useState(null);
    
    useEffect(() => {
        if (data) {
            if (data.index !== undefined) {
                setIndex(data.index);
                setFormData(data.data);
            } else {
                setFormData(data);
            }
        } else {
            // Set default values based on type
            switch(type) {
                case "personal":
                    setFormData({
                        name: "",
                        rollNumber: "",
                        phoneNumber: "",
                        roomNumber: "",
                        instituteEmailId: "",
                        emailId: "",
                        department: "",
                        yearOfPassing: ""
                    });
                    break;
                case "experience":
                    setFormData({
                        title: "",
                        company: "",
                        year: "",
                        description: ""
                    });
                    break;
                case "certificates":
                    setFormData({
                        title: "",
                        issuedBy: "",
                        issueDate: "",
                        description: "",
                        image: null
                    });
                    break;
                case "projects":
                    setFormData({
                        title: "",
                        company: "",
                        year: "",
                        description: ""
                    });
                    break;
                case "skills":
                    setFormData(data || []);
                    break;
                case "about":
                    setFormData({ about: data || "" });
                    break;
                default:
                    break;
            }
        }
    }, [type, data]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === "photo") {
            // Convert the selected image to a URL that can be used in img src
            const imageUrl = URL.createObjectURL(formData.file);
            updateData(type, { image: imageUrl });
            closeModal();
        } else {
            // Handle other form types as before
            updateData(type, formData, index);
            closeModal();
        }
    };
    
    const [newSkill, setNewSkill] = useState("");

    const handleAddSkill = (e) => {
        e.preventDefault();
        if (newSkill.trim()) {
            setFormData(prev => [...prev, newSkill.trim()]);
            setNewSkill("");
        }
    };

    const handleDeleteSkill = (skillToDelete) => {
        setFormData(prev => prev.filter(skill => skill !== skillToDelete));
    };

    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('File size should not exceed 5MB');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    file: file,
                    previewUrl: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const renderForm = () => {
        switch(type) {
            case "personal":
                return (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name || data?.name || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Roll Number</label>
                            <input 
                                type="text" 
                                name="rollNumber" 
                                value={formData.rollNumber || data?.rollNumber || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Phone Number</label>
                            <input 
                                type="tel" 
                                name="phoneNumber" 
                                value={formData.phoneNumber || data?.phoneNumber || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Room Number</label>
                            <input 
                                type="text" 
                                name="roomNumber" 
                                value={formData.roomNumber || data?.roomNumber || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Institute Email ID</label>
                            <input 
                                type="email" 
                                name="instituteEmailId" 
                                value={formData.instituteEmailId || data?.instituteEmailId || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email ID</label>
                            <input 
                                type="email" 
                                name="emailId" 
                                value={formData.emailId || data?.emailId || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Department</label>
                            <input 
                                type="text" 
                                name="department" 
                                value={formData.department || data?.department || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Year of Passing</label>
                            <input 
                                type="number" 
                                name="yearOfPassing" 
                                value={formData.yearOfPassing || data?.yearOfPassing || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formActions}>
                            <button type="submit" className={styles.saveButton}>Save</button>
                            <button type="button" className={styles.cancelButton} onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                );
            
            case "about":
                return (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>About</label>
                            <textarea 
                                name="about" 
                                defaultValue ={data} 
                                onChange={handleChange} 
                                rows="6"
                                required 
                            />
                        </div>
                        <div className={styles.formActions}>
                            <button type="submit" className={styles.saveButton}>Save</button>
                            <button type="button" className={styles.cancelButton} onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                );
            
                case "skills":
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label>Add Skill</label>
                                <div className={styles.skillInputContainer}>
                                    <input 
                                        type="text" 
                                        value={newSkill}
                                        onChange={(e) => setNewSkill(e.target.value)}
                                        placeholder="Enter a skill"
                                    />
                                    <button 
                                        type="button" 
                                        onClick={handleAddSkill}
                                        className={styles.addSkillButton}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                            
                            <div className={styles.skillsList}>
                                {Array.isArray(formData) && formData.map((skill, index) => (
                                    <div key={index} className={styles.skillItem}>
                                        <span>{skill}</span>
                                        <button 
                                            type="button"
                                            onClick={() => handleDeleteSkill(skill)}
                                            className={styles.deleteSkillButton}
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
    
                            <div className={styles.formActions}>
                                <button type="submit" className={styles.saveButton}>Save</button>
                                <button type="button" className={styles.cancelButton} onClick={closeModal}>Cancel</button>
                            </div>
                        </form>
                    );
            
                    case "experience":
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label>Title</label>
                                    <input 
                                        type="text" 
                                        name="title" 
                                        value={formData.title || ""} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Company</label>
                                    <input 
                                        type="text" 
                                        name="company" 
                                        value={formData.company || ""} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Year</label>
                                    <input 
                                        type="text" 
                                        name="year" 
                                        value={formData.year || ""} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Description</label>
                                    <textarea 
                                        name="description" 
                                        value={formData.description || ""} 
                                        onChange={handleChange} 
                                        rows="4"
                                        required 
                                    />
                                </div>
                                <div className={styles.formActions2}>
                                    <div>
                                        <button 
                                            type="button" 
                                            className={styles.deleteButton} 
                                            onClick={() => {
                                                updateData(type, null, index)
                                                closeModal();
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <div>
                                        <button type="submit" className={styles.saveButton}>Save</button>
                                        <button type="button" className={styles.cancelButton} onClick={closeModal}>Cancel</button>
                                    </div>
                                </div>
                            </form>
                        );
                
            case "certificates":
                return (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>Title</label>
                            <input 
                                type="text" 
                                name="title" 
                                value={formData.title || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Issued By</label>
                            <input 
                                type="text" 
                                name="issuedBy" 
                                value={formData.issuedBy || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Issue Date</label>
                            <input 
                                type="text" 
                                name="issueDate" 
                                value={formData.issueDate || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Description</label>
                            <textarea 
                                name="description" 
                                value={formData.description || ""} 
                                onChange={handleChange} 
                                rows="4"
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Certificate Image URL</label>
                            <input 
                                type="text" 
                                name="image" 
                                value={formData.image || ""} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className={styles.formActions2}>
                            <div>
                                <button 
                                    type="button" 
                                    className={styles.deleteButton} 
                                    onClick={() => {
                                        updateData(type, null, index)
                                        closeModal();
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                            <div>
                                <button type="submit" className={styles.saveButton}>Save</button>
                                <button type="button" className={styles.cancelButton} onClick={closeModal}>Cancel</button>
                            </div>
                        </div>
                    </form>
                );
                
            case "projects":
                return (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>Title</label>
                            <input 
                                type="text" 
                                name="title" 
                                value={formData.title || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Company/Client</label>
                            <input 
                                type="text" 
                                name="company" 
                                value={formData.company || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Year</label>
                            <input 
                                type="text" 
                                name="year" 
                                value={formData.year || ""} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Description</label>
                            <textarea 
                                name="description" 
                                value={formData.description || ""} 
                                onChange={handleChange} 
                                rows="4"
                                required 
                            />
                        </div>
                        <div className={styles.formActions2}>
                            <div>
                                <button 
                                    type="button" 
                                    className={styles.deleteButton} 
                                    onClick={() => {
                                        updateData(type, null, index)
                                        closeModal();
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                            <div>
                                <button type="submit" className={styles.saveButton}>Save</button>
                                <button type="button" className={styles.cancelButton} onClick={closeModal}>Cancel</button>
                            </div>
                        </div>
                    </form>
                );

            case "photo":
                return (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.photoUploadContainer}>
                            <div className={styles.previewContainer}>
                                <img 
                                    src={formData.previewUrl || data.image || "/default-profile.png"} 
                                    alt="Profile Preview" 
                                    className={styles.imagePreview}
                                />
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                            />
                            <button
                                type="button"
                                className={styles.uploadButton}
                                onClick={() => fileInputRef.current.click()}
                            >
                                <CloudUploadIcon /> Choose Photo
                            </button>
                            <p className={styles.uploadHint}>
                                Supported formats: JPG, PNG, GIF (max. 5MB)
                            </p>
                        </div>
                        <div className={styles.formActions}>
                            <button 
                                type="submit" 
                                className={styles.saveButton}
                                disabled={!formData.file}
                            >
                                Save
                            </button>
                            <button 
                                type="button" 
                                className={styles.cancelButton} 
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                );
                
            default:
                return <p>Unknown form type</p>;
        }
    };
    
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h2>{index !== null ? "Edit" : "Add"} {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
                    <button className={styles.closeButton} onClick={closeModal}>×</button>
                </div>
                <div className={styles.modalContent}>
                    {renderForm()}
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;