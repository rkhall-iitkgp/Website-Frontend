import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useNavigate } from "react-router-dom";
import DrawerComp from "./DrawerComp";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import Logo from "./rklogo_1.png";
import { HashLink } from "react-router-hash-link";
import "./css/style.css";

export default function Navbar() {
  const Navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" style={{ background: "black" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <div className="logo-container">
            <a href="/">
              <img
                src={Logo}
                alt="RKH"
                style={{ maxWidth: 30, marginRight: "10px" }}
              />
            </a>
            </div>
          </Typography>
          {isMobile ? (
            <DrawerComp />
          ) : (
            <div className="menu-items">
              <Button
                className="menu-item"
                color="inherit"
                onClick={() => Navigate("/")}
              >
                Home
              </Button>
              <Button
                className="menu-item"
                color="inherit"
                onClick={() => Navigate("/gallery")}
              >
                Gallery
              </Button>
              <Button
                className="menu-item"
                color="inherit"
                onClick={() => Navigate("/alumni")}
              >
                Alumni
              </Button>
              <HashLink smooth to="/#AboutUs" style={{ color: "white" }}>
                <Button className="menu-item" color="inherit">
                  About Us
                </Button>
              </HashLink>
              <HashLink smooth to="/#Testimonials" style={{ color: "white" }}>
                <Button className="menu-item" color="inherit">
                  Testimonials
                </Button>
              </HashLink>
              <HashLink smooth to="/#footer" style={{ color: "white" }}>
                <Button className="menu-item" color="inherit">
                  Contact Us
                </Button>
              </HashLink>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
