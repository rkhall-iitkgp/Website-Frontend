import "./css/css.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import img from "./mailbox.png";

function Footer() {
  return (
    <footer id="footer">
      <Box bgcolor="#8DD3BB" color="black" className="footer">
        <Grid container className="query">
          <Grid item className="querytext">
            <div>
              <p>Any Queries?</p>
              <p>Don't worry, write to us!</p>
            </div>
            <form
              className="emailsubmit"
              action="https://formbold.com/s/xknaolej"
              method="POST"
            >
              <input
                className="email"
                type="message"
                id="message"
                name="message"
                placeholder="Write to Us"
              />
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </Grid>

          <Grid item className="image" xs={12} md={5}>
            <img src={img} alt="subs" />
          </Grid>
        </Grid>

        <Container maxwidth="lg" className="lowerFooter">
          <div className="logoLinks">
            <div className="logo">RKH</div>
            <div class="verticalDivider"></div>
            <div className="socialLinksContainer">
              <div className="socialLinks">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/groups/5971048020"
                >
                  <FontAwesomeIcon icon={faFacebook} className="social-icons" />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@radhakrishnanhall10"
                >
                  <FontAwesomeIcon icon={faYoutube} className="social-icons" />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/groups/4072350/"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
                </Link>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faTwitter} className="social-icons" />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
