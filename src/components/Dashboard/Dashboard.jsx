import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useMediaQuery } from '@mui/material';
import Experience from './Experience'
import Profile from './Profile';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

const drawerWidth = '18rem';

const Dashboard = () => {
    // const [open, setOpen] = React.useState(true);

    const [details, setDetails] = useState({
        name: 'Tyrant',
        rollNo: '22XX1000X',
        email: 'abc@gmail.com',
        instiEmail: 'abc@gmail.com',
        department: 'Mathematics',
        dob: '01/01/2001',
        mobileNo: '7863535468',
        passingYear: '2026',
        roomNo: 'E316',
        emergencyContact: '7534685586',
    });

    const isMobile = useMediaQuery("(max-width: 920px)");
    return (

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CssBaseline />
            {!isMobile ? (<Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        marginTop: '4rem', boxSizing: 'border-box'
                    },
                }}
            >
                {/* <Toolbar /> */}
                <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#FFD050', height: '100vh', padding: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', marginRight: '1.5rem' }}>
                        <AccountCircleIcon sx={{ marginRight: '1.5rem' }} />
                        <h3>Profile</h3>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '1.3rem' }}>
                        <Button sx={{
                            height: '4rem',
                            width: '20rem',
                            backgroundColor: 'black',
                            padding: '1rem',
                            color: 'white',
                            borderBottom: '1px solid white',
                            borderRadius: '0rem',
                            transition: 'font-size 0.3s',
                            '&:hover': {
                                backgroundColor: 'black',
                                fontSize: '1.1rem',

                            },
                        }}>
                            Log Out
                        </Button>

                        <Button sx={{
                            height: '4rem',
                            width: '20rem',
                            padding: '1rem',
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: '0rem',
                            transition: 'font-size 0.3s',
                            '&:hover': {
                                backgroundColor: 'black',
                                fontSize: '1.1rem',
                            },
                        }}>
                            Change Password
                        </Button>

                    </Box>
                </Box>
            </Drawer >) : (null)}
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '2.8rem', maxWidth: '50rem', width: '80%'}}>
                <Profile details={details} setDetails={setDetails} />
                <br />
                <Experience />
            </Box>
        </Box >


    );
}

export default Dashboard;
