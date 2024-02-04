import "./css/galleryHome.css";
import illu from "./illu.jpeg";
import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
// import Button from "../Button/Button";
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
          <div className="left-top">
            <h2>Gallery </h2>
          </div>
          <div className="content">
            <img src={illu} alt="img" />
            <Grid item xs={12} style={{ textAlign: "right" }}>
              <div className="illu-text">ILLUMINATION l 2016</div>
            </Grid>
            <Grid
              container
              xs={12}
              justifyContent="space-between"
              className="gallery-below"
            >
              <Grid item>
                <h4>Festival for you, Tradition for us!</h4>
                <div className="gallery-text">
                At Radhakrishnan Hall of Residence, we take great pride in celebrating Diwali with our unique and exciting tradition - the Illumination, or 'illu' for short. This celebration is a hallmark of IIT Kharagpur's culture, and it brings together students from different halls of residence, alumni, faculty, and guests of honor from outside the institute.
                <br/>And at RK Hall, we've had a glorious history of winning Gold in both the illu and the Rangoli competitions for the past few years! These achievements are a testament to our team's enthusiasm, creativity, and dedication to upholding our tradition of excellence.
                <br/>Come and witness an electrifying celebration of Diwali like never before! 
                <br/>Experience the stunning lights, mesmerizing rangolis, and the contagious energy of the RK Hall community.

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
            </Grid>
          </div>
        </Grid>
        <Grid item md={4.5} xs={12} className="gallery-right">
          <div className="right-heading">
            <h2>Featured Photos </h2>
            <Link to={"./gallery"}>View All</Link>
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
  );
}

export default galleryHome;
