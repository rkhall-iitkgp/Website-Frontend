import "./css/galleryHome.css";
import illu from "./illu.jpeg";
import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";
import * as React from "react";
import Grid from "@mui/material/Grid";

function galleryHome() {
  return (
    <div>
      <div className="gallery-out-box">
        <Grid
          container
          spacing={0}
          className="galler-box"
          justifyContent="center"
        >
          <Grid container className="gallery-left" md={6.5} xs={12}>
            {/* <Grid item xs={12}> */}
            <h2>Gallery</h2>
            {/* </Grid> */}
            <div className="content">
              {/* <Grid item xs={6}> */}
              <img src={illu} alt="img" />

              <Grid container xs={12} className="content-text">
                <Grid item xs style={{ paddingTop: "8%" }}>
                  <h4>
                    Festival for you,
                    <br /> Tradition for us.
                  </h4>
                  <div className="text">
                    The Illuminatinon (or ‘illu’) is the IIT Kharagpur way of
                    celebrating Diwali. This unique culture is celebrated by
                    students from different halls of residence, alumni, faculty,
                    and even guests of honor from outside the institute. RK Hall
                    has a glorious history of winning Gold in both, the Illu and
                    the Rangoli for the past few years.
                  </div>
                </Grid>
                <Grid
                  item
                  xs={4.5}
                  sm={3.5}
                  md={4.4}
                  lg={3.5}
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="stretch"
                >
                  <Grid item xs={1} style={{ textAlign: "right" }}>
                    <label>ILLUMINATION l 2016</label>
                  </Grid>
                  <Grid item xs={1.8}>
                    <button>
                      <div className="text">Read More {" >"}</div>
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item md={4.5} xs={12} className="gallery-right">
            <div className="right-top">
              <h2>Featured Photos </h2>
              <div className="text">View All</div>
            </div>
            <div className="content">
              <img src={img1} alt="img" />
              <img src={img2} alt="img" />
              <img src={img3} alt="img" />
              <img src={img4} alt="img" />
            </div>
          </Grid>
        </Grid>
      </div>
      {/* <Grid container spacing={2}>
        <Grid item xs={8} container>
          <Grid item xs={6}>
            dddddddddddddddd
          </Grid>
          <Grid item xs={6}>
            dffddddddddddssssssssss
          </Grid>
        </Grid>
        <Grid item xs={4}>
          ddddddddddddd
        </Grid>
        <Grid item xs={4}>
          dddddddddddddddd
        </Grid>
        <Grid item xs={8}>
          dffddddddddddssssssssss
        </Grid>
      </Grid> */}
    </div>
  );
}

export default galleryHome;
