import React, { useState, useEffect } from 'react';
import Meal from './components/Meal/Meal';
import Special from './components/Special/Special';
import Daily from './components/Daily/Daily';
import Ratings from './components/Ratings/Ratings';
import ReviewForm from './components/ReviewForm/ReviewForm';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import styles from './Mess.module.css';

export default function Mess() {
  const [selectedMeal, setSelectedMeal] = useState('Lunch');

  // Define meal times in 24-hour format
  const mealTimes = {
    Breakfast: { start: '06:00', end: '07:30' },
    Lunch: { start: '12:30', end: '14:00' },
    Snacks: { start: '16:30', end: '18:00' },
    Dinner: { start: '19:30', end: '21:00' }
  };

  // Function to determine current or next meal based on time
  const getCurrentOrNextMeal = () => {
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ':' + 
                       now.getMinutes().toString().padStart(2, '0');

    // Convert meal times to comparable values (minutes since midnight)
    const timeToMinutes = (time) => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    };

    const currentMinutes = timeToMinutes(currentTime);

    // Check each meal time
    if (currentMinutes <= timeToMinutes(mealTimes.Breakfast.end)) {
      return 'Breakfast';
    } else if (currentMinutes <= timeToMinutes(mealTimes.Lunch.end)) {
      return 'Lunch';
    } else if (currentMinutes <= timeToMinutes(mealTimes.Snacks.end)) {
      return 'Snacks';
    } else if (currentMinutes <= timeToMinutes(mealTimes.Dinner.end)) {
      return 'Dinner';
    } else {
      // After dinner, show next day's breakfast
      return 'Breakfast';
    }
  };

  // Update selected meal based on current time
  useEffect(() => {
    const updateMeal = () => {
      const currentOrNextMeal = getCurrentOrNextMeal();
      setSelectedMeal(currentOrNextMeal);
    };

    // Update immediately
    updateMeal();

    // Update every minute
    const interval = setInterval(updateMeal, 60000);

    return () => clearInterval(interval);
  }, []);

  // Get current date with day of the week
  const today = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[today.getDay()];
  const formattedDate = today.toLocaleDateString('en-GB');
  const dateString = `${currentDay}, ${formattedDate}`;

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  const mealTimings = {
    "Breakfast": "6:00am to 7:30am",
    "Lunch": "12:30pm to 2:00pm",
    "Snacks": "4:30pm to 6:00pm",
    "Dinner": "7:30pm to 9:00pm"
  };

  return (
    <div className={styles.container}>
      {/* <nav className={styles.navbar}>
        <div className={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#mess">Mess</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
          <a href="#login">Log In</a>
        </div>
        <HamburgerMenu />
      </nav> */}

      <div className={styles.section}>
        <div className={styles.headerName}>
          <div className={styles.hallname}>Radhakrishnan Hall</div>
          <div className={styles.date}>{dateString}</div>
        </div>
        <div className={styles.sectionTitle}>Meal Timings</div>
        <div className={styles.mealTimings}>
          {Object.entries(mealTimings).map(([meal, timing]) => (
            <Meal 
              key={meal}
              meal={meal}
              timing={timing}
              isSelected={selectedMeal === meal}
              onSelect={handleMealSelect}
            />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          {/* <div className={styles.sectionTitle}>Today's Menu</div> */}
        </div>
        <div className={styles.menuContainer}>
          <Special currentMeal={selectedMeal} currentDay={currentDay} />
          <Daily currentMeal={selectedMeal} currentDay={currentDay} />
        </div>
      </div>

      <Ratings />
      <ReviewForm />
    </div>
  );
} 
