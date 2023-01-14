// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//         <CssBaseline/>
//       <AppBar position="static" style={{ background: '#232536' }}>
//         <Toolbar>
//           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
//             R K H
//           </Typography>
//           <Button color="inherit">Home</Button>
//           <Button color="inherit">Gallery</Button>
//           <Button color="inherit">About Us</Button>
//           <Button color="inherit">Testimonials</Button>
//           <Button color="inherit">Contact Us</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import './css/style.css'

const Nav = styled.nav`
  border-bottom: 20px solid #ffffff;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <a href="#" className="RKH">
          {/* <img
            src='#'
            alt="logo"
            width="100"
            height="70"
          /> */}
          RKH
        </a>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar