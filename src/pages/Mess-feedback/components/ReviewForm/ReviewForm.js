import React, { useState } from 'react';
import styles from './ReviewForm.module.css';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    roomNumber: '',
    phoneNumber: '',
    review: '',
    mealType: 'Breakfast'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
   
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
       <h2 className={styles.complaint}>Do you have any complaint?</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <div className={styles.formRow}>
        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={formData.roomNumber}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <select name="mealType" value={formData.mealType} onChange={handleChange} required>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snacks">Snacks</option>
                <option value="Dinner">Dinner</option>
            </select>
      <textarea
        name="review"
        placeholder="Your Review"
        value={formData.review}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm; 