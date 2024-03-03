import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Experience from './Experience'
import Profile from './Profile';
import { Button } from '@mui/material';

const drawerWidth = '18rem';

const Dashboard = () => {
    const [open, setOpen] = React.useState(true);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
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
                <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#FFD050', height: '100vh', padding: '20px', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                        <Button sx={{
                            height: '4rem',
                            width: '20rem',
                            backgroundColor: 'black',
                            padding: '1rem',
                            color: 'white',
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
            </Drawer >
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '2.8rem' }}>
                <Profile />
                <Experience />
            </Box>
        </Box >


    );
}

export default Dashboard;
