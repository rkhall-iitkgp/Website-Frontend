import React from 'react';
import styles from './Daily.module.css';
import dailyItems from '../Meal/DailyItems.json';

const Daily = ({ currentMeal }) => {
  // Get daily items for the selected meal
  const dailyMenuItems = dailyItems.dailyItems[currentMeal.toLowerCase()] || [];

  return (
    <div className={styles.dailyContainer}>
      <h2>Daily Menu:</h2>
      <ul className={styles.menuList}>
        {dailyMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Daily; 