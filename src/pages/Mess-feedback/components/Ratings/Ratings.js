import React from 'react';
import styles from './Ratings.module.css';

const Ratings = () => {
  const ratingData = [
    { stars: 5, count: 180 },
    { stars: 4, count: 95 },
    { stars: 3, count: 60 },
    { stars: 2, count: 28 },
    { stars: 1, count: 18 }
  ];

  const totalReviews = ratingData.reduce((sum, item) => sum + item.count, 0);
  const averageRating = (ratingData.reduce((sum, item) => sum + item.stars * item.count, 0) / totalReviews).toFixed(1);

  return (
    <div className={styles.ratingsContainer}>
      <div className={styles.ratingsBox}>
        <div className={styles.ratingHeader}>
          
          <div className={styles.totalReviewsBox}>
            <h3>Total Reviews</h3>
            <span className={styles.reviewCount}>{totalReviews}</span>
            
          </div>

          <div className={styles.averageRatingBox}>
            <h3>Average Rating</h3>
            <span className={styles.ratingNumber}>{averageRating}</span>
            <div className={styles.stars}>
              {"★".repeat(Math.floor(averageRating))}
              {"☆".repeat(5 - Math.floor(averageRating))}
            </div>
            
          </div>
        </div>
        <div className={styles.ratingBars}>
          {ratingData.map((rating) => (
            <div key={rating.stars} className={styles.ratingBar}>
              <div className={styles.starLabel}>
                {"★".repeat(rating.stars)}
              </div>
              <div className={styles.barContainer}>
                <div 
                  className={styles.barFill}
                  style={{ width: `${(rating.count / totalReviews) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ratings;