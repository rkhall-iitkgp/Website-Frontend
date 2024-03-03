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

const drawerWidth = '20rem';

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
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFD050', height: '100vh', padding: '20px' }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Button sx={{ color: 'black', height: '5rem', width: '20rem' }}>LOGOUT</Button>
                        <Button sx={{ color: 'black', height: '5rem', width: '20rem' }}>LOGOUT</Button>
                        <Button sx={{ color: 'black', height: '5rem', width: '20rem' }}>LOGOUT</Button>
                        <Button sx={{ color: 'black', height: '5rem', width: '20rem' }}>LOGOUT</Button>
                    </Box>
                </Box>
            </Drawer >
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Profile />
                <Experience />
            </Box>
        </Box >


    );
}

export default Dashboard;
