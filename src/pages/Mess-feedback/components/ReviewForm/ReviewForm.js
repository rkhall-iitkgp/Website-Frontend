import React, { useState } from 'react';
import styles from './ReviewForm.module.css';

const ReviewModal = ({ isOpen, onClose, rating, setRating, reviewText, setReviewText, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2 className={styles.modalTitle}>Write Your Review</h2>

        <div className={styles.modalStars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? styles.starFilled : styles.starEmpty}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          className={styles.modalTextArea}
          placeholder="Share your experience..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />

        <button className={styles.modalDoneButton} onClick={onSubmit}>
          Done
        </button>
      </div>
    </div>
  );
};

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    roomNumber: '',
    phoneNumber: '',
    review: '',
    mealType: 'Breakfast',
    rating: 0
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalReviewText, setModalReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Form Submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRating = (star) => {
    setFormData({ ...formData, rating: star });
    setIsModalOpen(true);
  };

  const handleModalSubmit = () => {
    console.log("Review Submitted:", { rating: formData.rating, review: modalReviewText });
    setIsModalOpen(false);
    // You might want to clear the rating or keep it. Keeping it as per typical UX.
    // Also, if you want to save this review data to formData or send it immediately, do it here.
  };

  return (
    <div className={styles.reviewFormContainer}>
      <div className={styles.rateExperienceSection}>
        <h2 className={styles.sectionTitle}>Rate Your Experience</h2>
        <div className={styles.starRating}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= formData.rating ? styles.starFilled : styles.starEmpty}
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rating={formData.rating}
        setRating={(star) => setFormData({ ...formData, rating: star })}
        reviewText={modalReviewText}
        setReviewText={setModalReviewText}
        onSubmit={handleModalSubmit}
      />

      <hr className={styles.divider} />

      <form className={styles.reviewForm} onSubmit={handleSubmit}>
        <h2 className={styles.complaintTitle}>Do you have a complaint?</h2>

        <div className={styles.hiddenFields}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            // required - Removing required to allow just rating if wanted, or keep it if this form is independent
            className={styles.inputField}
          />
          <div className={styles.formRow}>
            <input
              type="text"
              name="roomNumber"
              placeholder="Room Number"
              value={formData.roomNumber}
              onChange={handleChange}
              className={styles.inputField}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>
          <select name="mealType" value={formData.mealType} onChange={handleChange} className={styles.selectField}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Snacks">Snacks</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>

        <textarea
          name="review"
          placeholder="Describe your complaint or share suggestions..."
          value={formData.review}
          onChange={handleChange}
          className={styles.textArea}
        />

        <div className={styles.actionButtons}>
          <button type="button" className={styles.uploadButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
              <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor" />
            </svg>
            Upload Image
          </button>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;