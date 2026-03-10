import React from 'react';
import styles from './Meal.module.css';

const Meal = ({ meal, timing, isSelected, onSelect }) => {
  return (
    <div 
      className={`${styles.mealCard} ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelect(meal)}
    >
      <h3>{meal}</h3>
      <p>{timing}</p>
    </div>
  );
};

export default Meal; 