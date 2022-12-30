import "./css/css.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import img from "./mailbox.png";

function Footer() {
  return (
    <footer>
      <Box bgcolor="#8DD3BB" color="black" className="footer">
        <Grid container className="query">
          <Grid item xs={12} md={7} className="querytext">
            <div>
              <p>Any Queries?</p>
              <p>Don't worry, write to us!</p>
            </div>
            <Box item className="emailsubmit">
              <input
                className="email"
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
              />
              <button type="submit" className="submit">
                Subscribe
              </button>
            </Box>
          </Grid>

          <Grid item className="image" xs={12} md={5}>
            <img src={img} />
          </Grid>
        </Grid>

        <Container maxwidth="lg" className="lowerfooter">
          <Grid container spacing={0}>
            <Grid container xs={12} sm={3} className="logolinks">
              <Grid item xs={12}>
                <Box textAlign="center" className="logo">
                  RKH
                </Box>
              </Grid>
              <div className="social-links">
                <Grid xs={3}>
                  <Link href="/">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="social-icons"
                    />
                  </Link>
                </Grid>
                <Grid xs={3}>
                  <Link href="/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="social-icons"
                    />
                  </Link>
                </Grid>
                <Grid xs={3}>
                  <Link href="/">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="social-icons"
                    />
                  </Link>
                </Grid>
                <Grid xs={3}>
                  <Link href="/">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="social-icons"
                    />
                  </Link>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box pb={1} className="footer-subhead">
                Help
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Hello
                </Link>
              </Box>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Box pb={1} className="footer-subhead">
                Help
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Hello
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box pb={1} className="footer-subhead">
                Help
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
              <Box pb={1} className="footer-sublink">
                <Link href="/" color="inherit">
                  Hello
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
