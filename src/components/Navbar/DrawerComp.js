import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";

// Define styles using makeStyles
const useStyles = makeStyles({
  drawerPaper: {
    backgroundColor: "#000000 !important", // Ensure black background
    color: "white", // Ensure white text color
  },
  menuItemDrawer: {
    color: "white",
    textAlign: "center !important",
    borderBottom: "1px solid grey",
  },
  menuItemDrawerHover: {
    "&:hover": {
      color: "black !important",
      backgroundColor: "#FFD050 !important",
    },
  },
});

function DrawerComponent() {
  const pathname = useLocation().pathname;
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawerPaper }} // Apply custom styles
      >
        <List>
          {pathname !== "/" && (
            <Link style={{ color: "white" }} to="/">
              <ListItem
                className={`${classes.menuItemDrawer} ${classes.menuItemDrawerHover}`}
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemText>Home</ListItemText>
              </ListItem>
            </Link>
          )}
          {pathname === "/" && (
            <Link style={{ color: "white" }}>
              <ListItem
                className={`${classes.menuItemDrawer} ${classes.menuItemDrawerHover}`}
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemText>
                  <HashLink smooth to="/#home" style={{ color: "white" }}>
                    Home
                  </HashLink>
                </ListItemText>
              </ListItem>
            </Link>
          )}
          <Link style={{ color: "white" }} to="/gallery">
            <ListItem
              className={`${classes.menuItemDrawer} ${classes.menuItemDrawerHover}`}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText>Gallery</ListItemText>
            </ListItem>
          </Link>
          <Link style={{ color: "white" }}>
            <ListItem
              className={`${classes.menuItemDrawer} ${classes.menuItemDrawerHover}`}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText>
                <HashLink smooth to="/#AboutUs" style={{ color: "white" }}>
                  About Us
                </HashLink>
              </ListItemText>
            </ListItem>
          </Link>
          <Link style={{ color: "white" }}>
            <ListItem
              className={`${classes.menuItemDrawer} ${classes.menuItemDrawerHover}`}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText>
                <HashLink smooth to="/#Testimonials" style={{ color: "white" }}>
                  Testimonials
                </HashLink>
              </ListItemText>
            </ListItem>
          </Link>
          <Link style={{ color: "white" }}>
            <ListItem
              className={`${classes.menuItemDrawer} ${classes.menuItemDrawerHover}`}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText>
                <HashLink smooth to="/#footer" style={{ color: "white" }}>
                  Contact Us
                </HashLink>
              </ListItemText>
            </ListItem>
          </Link>
          {/* Login Menu Item */}
          <Link style={{ color: "white" }} to="/login">
            <ListItem
              className={`${classes.menuItemDrawer} ${classes.menuItemDrawerHover}`}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText>Login</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <IconButton
        style={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
        size="large"
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;