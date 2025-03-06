import React from 'react';
import styles from './Ratings.module.css';

const Ratings = () => {
  return (
    <div className={styles.ratingsContainer}>
      <div className={styles.ratingsBox}>
        <div className={styles.totalReviews}>
          <h3>Total Reviews:</h3>
          <span>156</span>
        </div>
        <div className={styles.averageRating}>
          <h3>Average Rating:</h3>
          <div className={styles.stars}>
            <span>4.0</span>
            {"★".repeat(4)}{"☆".repeat(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings; 