import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const Navigate = useNavigate(); 
  
  return (
    <Box sx={{ flexGrow: 1 }}>
        <CssBaseline/>
      <AppBar position="static" style={{ background: '#232536' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
            R K H
          </Typography>
          <Button color="inherit" onClick={() => Navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => Navigate('/gallery')}>Gallery</Button>
          <Button color="inherit" onClick={() => Navigate('/alumni')}>About Us</Button>
          <Button color="inherit">Testimonials</Button>
          <Button color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
