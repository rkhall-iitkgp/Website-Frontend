import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useNavigate } from 'react-router-dom';
import DrawerComp from './DrawerComp';
import { useMediaQuery } from '@material-ui/core';
import {
  useTheme,
} from "@material-ui/core";
import Logo from './rklogo_1.png';
import { HashLink } from 'react-router-hash-link';


export default function ButtonAppBar() {
  const Navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" style={{ background: 'black' }}>
        <Toolbar>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >

            <button onClick={refreshPage} style={{
              background: "none",
              color: "inherit",
              border: "none",
              padding: "0",
              font: "inherit",
              cursor: "pointer",
              outline: "inherit"
            }}><img src={Logo} alt="RKH" style={{ maxWidth: 30, marginRight: '10px' }} /></button>
          </Typography>
          {isMobile ? (
            <DrawerComp />
          ) : (
            <div>
              <Button color="inherit" onClick={() => Navigate('/')}>Home</Button>
              <Button color="inherit" onClick={() => Navigate('/gallery')}>Gallery</Button>
              <Button color="inherit" onClick={() => Navigate('/alumni')}>Alumni</Button>
              <HashLink smooth to='/#AboutUs' style={{ color: "white" }}><Button color="inherit">About Us</Button></HashLink>
              <HashLink smooth to='/#Testimonials' style={{ color: "white" }}><Button color="inherit">Testimonials</Button></HashLink>
              <HashLink smooth to='/#footer' style={{ color: "white" }}><Button color="inherit">Contact Us</Button></HashLink>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
