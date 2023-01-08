import React from "react";
import "./css/css.css";

function homeAbout() {
  return (
    <div>
      <div className="design">
        {/* <img src={require("./css/design2.jpg")} alt="" /> */}

        <div className="d1">
          <p>-</p>
        </div>
        <div className="d2">
          <p>-</p>
        </div>
        <div className="d3">
          <p>-</p>
        </div>
      </div>

      <div className="aboutUs">
        <div className="heading">ABOUT US</div>

        <div className="main-content">
          <div className="item1">
            <div className="content1">
              <div className="part1">
                <h2>
                  RK Hall has always stood as the foremost in the campus, be it
                  Sports, SoCult or the coveted Illumination.
                </h2>
              </div>

              {/* <div className="part2">
              <p>
                Its glorious history boasts of 21 Sports GCs (General
                Championships) and 19 SoCult GCs, more than any other hall. The
                Hall's strength in sports can be judged from the fact that even
                the extra players in some teams are Inter-IIT players.
              </p>
            </div> */}
            </div>

            <div className="content2">
              <div className="part1">
                <h3>
                  The unique culture of this Hall is woven around the principle
                  of unity, especially its ‘Wing Culture’, where boarders of all
                  years live together, in the same Wing.
                </h3>
              </div>

              {/* <div className="part2">
              <p>
                The gigantic messtop structure of "Geetopadesha" during Illu -
                2002 in RK Hall is the tallest ever structure in the history of
                IIT KGP. The panoramic view of that messtop is still fresh in
                the memories of many RKiites around the globe.
              </p>
            </div> */}
            </div>
          </div>

          <div className="item2">
            <div className="part1">
              <p>
                Its glorious history boasts of 21 Sports GCs (General
                Championships) and 19 SoCult GCs, more than any other hall. The
                Hall's strength in sports can be judged from the fact that even
                the extra players in some teams are Inter-IIT players.
              </p>
            </div>

            <div className="part2">
              <p>
                The gigantic messtop structure of "Geetopadesha" during Illu -
                2002 in RK Hall is the tallest ever structure in the history of
                IIT KGP. The panoramic view of that messtop is still fresh in
                the memories of many RKiites around the globe.
              </p>
            </div>
          </div>
        </div>

        <div className="more">
          <div className="link">
            <a href="#">
              <h6>Read More ></h6>
            </a>
          </div>

          <div className="text">
            <p>
              <br /> <br /> A great pLace to learn and ... live
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homeAbout;
