import React from "react";
import styles from "./About.module.css";

function homeAbout() {
  return (
    <div id="AboutUs" >
        <div style={{height:'10px'}}></div>

    <div className={styles.aboutUs} >
      <div className={styles.about_design}>
        <div className={styles.d1}></div>
        <div className={styles.d2}></div>
        <div className={styles.d3}></div>
      </div>

      <div className={styles.aboutUs_main}>
        <h2>ABOUT US</h2>

        <div className={styles.aboutUs_content}>
          <div className={styles.aboutUs_right}>
            <h3>
            RK stands at the forefront of excellence and achievement in the campus be it Sports, SoCult, Tech or the coveted Illumination.

            </h3>
            <p>
            With a long and glorious history of 22 Sports GCs and 23 SoCult GCs, RK Hall has cemented its position as the leading hall on campus. In fact, our hall has won more GCs than any other hall in IIT Kharagpur!
            </p>
          </div>

          <div className={styles.aboutUs_left}>
            <p>
            At Radhakrishnan Hall, we take pride in our unique 'Wing Culture', where boarders of all years live together, fostering a strong sense of unity and camaraderie.

            </p>
            <p className={styles.music_room}>
            At RK, we believe that creativity and talent should have no boundaries. That's why we are proud to be the home of the RK Music Room, generously funded by the RK batch of 1992. Equipped with a wide range of musical instruments, this state-of-the-art infrastructure  is the perfect platform for unleashing your musical talent,which serves as a valuable resource for RKites and students of the WTMS and ETMS to hone their musical skills and prepare for events like the Inter IIT Cultural Meet.

            </p>
          </div>
        </div>
        <div className={styles.aboutUs_more}>
          {/* <Button name="Read More" /> */}

          <div className={styles.aboutUs_moto}>
            <p>A great pLace to learn and live</p>
          </div>
          <div id="Testimonials"></div>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default homeAbout;
