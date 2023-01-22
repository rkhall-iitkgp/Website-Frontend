import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(()=>({
    paper: {
        background:"#232536",
    },
    menuPaper: {
        color:"white"
    }
}));

function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        classes={{paper: classes.paper}}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={{color: "white"}} to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={{color: "white"}} to="/gallery">Gallery</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={{color: "white"}} to="/alumni">Alumni</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={{color: "white"}} to="/">About Us</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={{color: "white"}} to="/">Testimonials</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={{color: "white"}} to="/">Contact Us</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        style={{color: "white"}}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon/>
      </IconButton>
    </>
  );
}
export default DrawerComponent;