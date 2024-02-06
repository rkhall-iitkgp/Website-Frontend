import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Login_image from './Computer login-bro.svg'
// import Bg_img from "bg_img.png"

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Typography, colors } from '@mui/material';
import { useMediaQuery } from '@material-ui/core';
import { Divider, Box } from '@mui/material';
import { Padding } from '@mui/icons-material';


const Login = () => {
    const submithandler = () => {
        //After submitting form what to be done
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isMobile = useMediaQuery("(max-width: 920px)");
    const divStyle = {
        // backgroundImage: "url('https://www.shutterstock.com/shutterstock/photos/2262760763/display_1500/stock-photo-three-dimensional-render-of-blue-wavy-object-2262760763.jpg')",
        backgroundImage: "url('/bg_img.png')",
        // backgroundImage: { Bg_img },
        backgroundSize: 'cover',

        backgroundRepeat: 'no-repeat',

        height: '100vh',
    };
    return (
        <form className='login_form' action='submit' onSubmit={submithandler}>
            <div style={divStyle}>
                <div id='login_main' style={{ marginTop: '0rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Card sx={{ marginTop: '7rem', width: '70vw', height: '75vh', boxShadow: "inherit" }}>
                        <div className='login_main' style={{ display: 'flex' }}>

                            {!isMobile && <div className='left'>

                                <img style={{ width: '35vw', height: '75vh' }} className='left_image' src={Login_image} alt="" />

                            </div>}

                            <div style={!isMobile ? { marginLeft: '2rem', display: 'flex', flexDirection: 'column' } : { marginLeft: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h1 style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'sans-serif', marginTop: '2.5rem' }} className='right_heading'>Login</h1>
                                <TextField value={email} onChange={(e) => { setEmail(e.target.value); }} sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Email" variant="filled" />
                                {/* <TextField value={password} onChange={(e) => setPassword(e.target.value)} sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Password" variant="filled" /> */}
                                <Button type='submit' sx={{ marginTop: '1.5rem', background: 'black', padding: '0.8rem', width: '28vmax', '&:hover': { background: 'gray' } }} variant='contained'>Login With Password</Button>

                                <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" style={{ marginTop: '0.8rem' }}>

                                    <Divider style={{ width: '100%' }}>
                                        <Typography variant="p">or</Typography>
                                    </Divider>
                                </Box>

                                {/* <FormControlLabel sx={{ marginTop: '1.5rem' }} control={<Checkbox />} label="Remember Me" /> */}



                                <Button type='submit' sx={{ marginTop: '1.5rem', background: '#FBF6EA', color: 'black', width: '28vmax', '&:hover': { background: '#FFD050' } }} variant='contained'>Login With OTP</Button>


                                <Typography sx={{ marginTop: '1.5rem' }} >Don't have an account?
                                    <a href="/register" style={{ color: 'blue', marginLeft: '0.5rem' }}>Register here</a>
                                </Typography>
                            </div>
                        </div>
                    </Card>


                </div>
            </div>
        </form>

    )
}

export default Login