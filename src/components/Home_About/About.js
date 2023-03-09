import React from "react";
import "./About.css";
import Button from "../Button/Button";

function homeAbout() {
  return (
    <div className="aboutUs" id="AboutUs">
      <div className="about_design">
        <div className="d1"></div>
        <div className="d2"></div>
        <div className="d3"></div>
      </div>

      <div className="aboutUs_main">
        <h2>ABOUT US</h2>

        <div className="aboutUs_content">
          <div className="aboutUs_right">
            <h3>
            RK stands at the forefront of excellence and achievement in the campus be it Sports, SoCult, Tech or the coveted Illumination.

            </h3>
            <p>
            With a long and glorious history of 22 Sports GCs and 23 SoCult GCs, RK Hall has cemented its position as the leading hall on campus. In fact, our hall has won more GCs than any other hall in IIT Kharagpur!
            </p>
          </div>

          <div className="aboutUs_left">
            <p>
            At Radhakrishnan Hall, we take pride in our unique 'Wing Culture', where boarders of all years live together, fostering a strong sense of unity and camaraderie.

            </p>
            <p className="music_room">
            At RK, we believe that creativity and talent should have no boundaries. That's why we are proud to be the home of the RK Music Room, generously funded by the RK batch of 1992. Equipped with a wide range of musical instruments, this state-of-the-art infrastructure  is the perfect platform for unleashing your musical talent,which serves as a valuable resource for RKites and students of the WTMS and ETMS to hone their musical skills and prepare for events like the Inter IIT Cultural Meet.

            </p>
          </div>
        </div>
        <div className="aboutUs_more">
          {/* <Button name="Read More" /> */}

          <div className="aboutUs_moto">
            <p>A great pLace to learn and...live</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homeAbout;
