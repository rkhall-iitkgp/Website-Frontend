import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <CssBaseline/>
      <AppBar position="static" style={{ background: '#232536' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
            R K H
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Testimonials</Button>
          <Button color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;