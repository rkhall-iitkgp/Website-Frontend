import React from "react";
// import "./css/css.css";
import "./About.css";
import Button from "../Button/Button";

function homeAbout() {
  return (
    <div className="aboutUs">
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
              RK Hall has always stood as the foremost in the campus, be it
              Sports, SoCult or the coveted Illumination.
            </h3>
            <p>
              Its glorious history boasts of 21 Sports GCs (General
              Championships) and 19 SoCult GCs, more than any other hall. The
              Hall's strength in sports can be judged from the fact that even
              the extra players in some teams are Inter-IIT players.
            </p>
          </div>

          <div className="aboutUs_left">
            <h3>
              The unique culture of this Hall is woven around the principle of
              unity, especially its ‘Wing Culture’, where boarders of all years
              live together, in the same Wing.
            </h3>
            <p>
              The gigantic messtop structure of "Geetopadesha" during Illu -
              2002 in RK Hall is the tallest ever structure in the history of
              IIT KGP. The panoramic view of that messtop is still fresh in the
              memories of many RKiites around the globe.
            </p>
          </div>
        </div>
        <div className="aboutUs_more">
          <Button name="Read More" link="#" />

          <div className="aboutUs_moto">
            <p>A great pLace to learn and ...live</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homeAbout;
