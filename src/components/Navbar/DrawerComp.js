import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import "./css/style.css";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";

const useStyles = makeStyles(() => ({
  paper: {
    background: "#000000",
  },
  menuPaper: {
    color: "white",
  },
}));

function DrawerComponent() {
    const pathname = useLocation().pathname;
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        classes={{ paper: classes.paper }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pathname!=="/" && <Link style={{ color: "white" }} to="/">
            <ListItem
              className="menu-item-drawer"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>}
          {pathname === "/" && 
            <Link style={{ color: "white" }}>
            <ListItem
            className="menu-item-drawer"
            onClick={() => setOpenDrawer(false)}
            >
            <ListItemText>
                <HashLink smooth to="/#home" style={{ color: "white" }}>
                Home
                </HashLink>
            </ListItemText>
            </ListItem>
        </Link>
          }
          <Link style={{ color: "white" }} to="/gallery">
            <ListItem
              className="menu-item-drawer"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText>Gallery</ListItemText>
            </ListItem>
          </Link>
          <Link style={{ color: "white" }} to="/alumni">
            <ListItem
              className="menu-item-drawer"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText>Alumni</ListItemText>
            </ListItem>
          </Link>
          <Link style={{ color: "white" }}>
            <ListItem
              className="menu-item-drawer"
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
              className="menu-item-drawer"
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
              className="menu-item-drawer"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText>
                <HashLink smooth to="/#footer" style={{ color: "white" }}>
                  Contact Us
                </HashLink>
              </ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <IconButton
        style={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
