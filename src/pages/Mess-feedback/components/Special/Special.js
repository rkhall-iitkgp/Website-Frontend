import React, { useState } from 'react';
import styles from './Special.module.css';
import specialsData from '../Meal/Specials.json';

const Special = ({ currentMeal, currentDay }) => {
  const [imageError, setImageError] = useState(false);
  
  // Get the special item for current day and meal
  const daySpecial = specialsData[currentDay]?.[currentMeal.toLowerCase()]?.special;
  const specialTitle = Array.isArray(daySpecial) ? daySpecial[0] : daySpecial;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={styles.specialContainer}>
      <h2>Today's Special:</h2>
      <div className={styles.specialContent}>
        {!imageError ? (
          <img 
            src={`/images/${currentMeal.toLowerCase()}.jpg`}
            alt={specialTitle} 
            onError={handleImageError}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            [Food Image: {specialTitle}]
          </div>
        )}
        <h3>{specialTitle}</h3>
      </div>
    </div>
  );
};

export default Special; 