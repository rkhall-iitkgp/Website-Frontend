import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerContainer}>
      <button 
        className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home">Home</a>
          <a href="#mess">Mess</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
          <a href="#login">Log In</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu; 