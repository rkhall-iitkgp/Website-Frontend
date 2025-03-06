import React, { useState } from 'react';
import styles from './ReviewForm.module.css';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    roomNumber: '',
    phoneNumber: '',
    review: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <div className={styles.formRow}>
        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={formData.roomNumber}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
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