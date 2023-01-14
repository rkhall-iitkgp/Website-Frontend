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
      <Grid
        container
        spacing={0}
        className="gallery-box"
        justifyContent="center"
      >
        <Grid container className="gallery-left" md={6.5} xs={12}>
          {/* <Grid item xs={12}> */}
          <div className="left-top">
            <h2>Gallery </h2>
            {/* <div className="gallery-text"></div> */}
          </div>
          {/* </Grid> */}
          <div className="content">
            {/* <Grid item xs={6}> */}
            <img src={illu} alt="img" />
            <Grid item xs={12} style={{ textAlign: "right" }}>
            <div className="illu-text"><label>ILLUMINATION l 2016</label></div>
            </Grid>
            <Grid
              container
              xs={12}
              justifyContent="space-between"
              // sx={{
              //   paddingBottom: { md: "100px", lg: "0" },
              // }}
            >
              <Grid item xs={12} md={8}>
                <h4>
                  Festival for you,
                  <br /> Tradition for us.
                </h4>
                <div className="gallery-text">
                  The Illuminatinon (or ‘illu’) is the IIT Kharagpur way of
                  celebrating Diwali. This unique culture is celebrated by
                  students from different halls of residence, alumni, faculty,
                  and even guests of honor from outside the institute. RK Hall
                  has a glorious history of winning Gold in both, the Illu and
                  the Rangoli for the past few years.
                </div>
              </Grid>
            </Grid>
              <Grid
                item
                container
                xs={4}
                sm={3.5}
                md={4}
                lg={3.5}
                direction="column"
              >
              {/* style={{ paddingLeft: "8%" }} */}
                <Grid item>
                  <button className="gallery-text-button">
                    <div className="gallery-text">Read More {" >"}</div>
                  </button>
                </Grid>
              </Grid>

          </div>
        </Grid>
        <Grid item md={4.5} xs={12} className="gallery-right">
          <div className="right-top">
            <h2>Featured Photos </h2>
            <div className="gallery-text">View All</div>
          </div>

          <div className="content">
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
            <img src={img4} alt="img" />
          </div>
        </Grid>
      </Grid>

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
