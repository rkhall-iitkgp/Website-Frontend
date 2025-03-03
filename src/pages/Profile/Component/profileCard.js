// import React from "react";
// import "./profileCard.css";

// const ProfileCard = ({ onClose }) => {
//   return (
//     <div className="card">
//       <button className="exit-button" onClick={onClose}>×</button>
//       <p className="rk-id">Your RK Id : Xyyy ( default )</p>

//       <div className="image-upload">
//         <button className="upload-button">
//           <img
//             src="/camera-icon.png"
//             alt="Upload"
//             className="camera-icon"
//           />
//         </button>
//         <p className="upload-text">Edit your profile Image</p>
//       </div>

//       <button className="save-button">Save</button>
//     </div>
//   );
// };

// export default ProfileCard;


import React, { useState } from "react";
import "./profileCard.css";

const ProfileCard = ({ onClose }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="card">
      <button className="exit-button" onClick={onClose}>×</button>
      <p className="rk-id">Your RK Id : Xyyy ( default )</p>

      <div className="image-upload">
        <label className="upload-button">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            style={{ display: "none" }}
          />
          <img
            src={image || "/camera-icon.png"}
            alt="Upload"
            className="camera-icon"
          />
        </label>
        <p className="upload-text">Edit your profile Image</p>
      </div>

      <button className="save-button">Save</button>
    </div>
  );
};

export default ProfileCard;
