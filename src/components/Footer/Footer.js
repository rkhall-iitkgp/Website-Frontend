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
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Footer() {
  return (
    <footer>
      <Grid container className="query">
        <Box item>
          <p>Any Queries?</p>
          <p>Don't worry, write to us!</p>
        </Box>
        <Box item className="emailsubmit">
          <TextField
            className="email"
            id="filled-basic"
            label="Email"
            variant="filled"
          />
          <Button className="submit"  variant="contained">
            Subscribe
          </Button>
        </Box>
      </Grid>
      <Box bgcolor="#8DD3BB" color="black" className="lowerfooter">
        <Container maxwidth="lg">
          <Grid container spacing={0}>
            <Grid container xs={12} sm={3} className="logolinks">
              <Grid item xs={12}>
                <Box textAlign="center" className="logo">
                  RKH
                </Box>
              </Grid>
              <Grid container xs={12} className="social-links">
                <Grid xs={3}>
                  <Link>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="social-icons"
                    />
                  </Link>
                </Grid>
                <Grid xs={3}>
                  <Link>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="social-icons"
                    />
                  </Link>
                </Grid>
                <Grid xs={3}>
                  <Link>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="social-icons"
                    />
                  </Link>
                </Grid>
                <Grid xs={3}>
                  <Link>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="social-icons"
                    />
                  </Link>
                </Grid>
              </Grid>
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
