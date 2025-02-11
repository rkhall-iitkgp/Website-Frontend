import styles from "./css/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg" className={styles.footerContent}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <div className={styles.logoSection}>
              <img
                src="https://www.rkhall.in/static/media/rklogo_1.90345b10f462fbbf0d72.png"
                alt="Radhakrishnan Hall Logo"
                className={styles.logoImage}
              />
              <div>
                <div className={styles.logo}>Radhakrishnan Hall</div>
                <p className={styles.description}>
                  Indian Institute of Technology, Kharagpur
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={styles.contactUs}>
              <h4>Contact Us</h4>
              <p>
                <strong>Email:</strong> rk.iitkgp@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 988-580-7077
              </p>
              <p>
                <strong>Phone:</strong> 887-382-5020
              </p>
            </div>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={4}>
            <div className={styles.socialLinks}>
              <h4>Follow Us</h4>
              <p>Stay connected on our social platforms:</p>
              <div className={styles.icons}>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/groups/5971048020"
                  className={styles.socialLink}
                >
                  <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                  {/* <span>Facebook</span> */}
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@radhakrishnanhall10"
                  className={styles.socialLink}
                >
                  <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
                  {/* <span>YouTube</span> */}
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/rkh.iitkgp/"
                  className={styles.socialLink}
                >
                  <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                  {/* <span>Instagram</span> */}
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/groups/4072350/"
                  className={styles.socialLink}
                >
                  <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                  {/* <span>LinkedIn</span> */}
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Radhakrishnan Hall. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;