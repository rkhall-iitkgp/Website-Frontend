import styles from "./css/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import img from "./mailbox.png";
import { useForm, ValidationError } from '@formspree/react';

function Footer() {
  // fa
const [state, handleSubmit] = useForm("xeqweyvv");
if (state.succeeded) {
  return window.location.reload();
}

  return (
    <footer id="footer" >
      <Box bgcolor="#8DD3BB" color="black" className={styles.footer}>
        <Grid container className={styles.query}>
          <Grid item className={styles.querytext}>
            <div>
              <p>Any Queries?</p>
              <p>Don't worry, write to us!</p>
            </div>
            <form
              className={styles.emailsubmit}
              method="POST" onSubmit={handleSubmit}
            >
              <input
                className={styles.email}
                type="message"
                id="message"
                name="message"
                placeholder="Write to Us"
              />
              <button type="submit" className={styles.submit} disabled={state.submitting}>
                Submit
              </button>
            </form>
          </Grid>

          <Grid item className={styles.image} xs={12} md={5}>
            <img src={img} alt="subs" />
          </Grid>
        </Grid>

        <Container maxwidth="lg" className={styles.lowerFooter}>
          <div className={styles.logoLinks}>
          <a target="_blank" href="https://www.geocities.ws/rkhall_iitkgp/index.htm" style={{color:"black"}}><div className={styles.logo}>RKH</div></a>
            <div className={styles.verticalDivider}></div>
            <div className={styles.socialLinksContainer}>
              <div className={styles.socialLinks}>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/groups/5971048020"
                >
                  <FontAwesomeIcon icon={faFacebook} className={styles.socialIcons} />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@radhakrishnanhall10"
                >
                  <FontAwesomeIcon icon={faYoutube} className={styles.socialIcons} />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/groups/4072350/"
                >
                  <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons} />
                </Link>
              </div>
              <div>
              <Link
                  target="_blank"
                  href="https://www.instagram.com/rkh.iitkgp/"
                >
                  <FontAwesomeIcon icon={faInstagram} className={styles.socialIcons}/>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
