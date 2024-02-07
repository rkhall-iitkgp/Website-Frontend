import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Login_image from './Computer login-bro.svg'
// import Bg_img from "bg_img.png"
import { useNavigate } from 'react-router-dom';


import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Typography, colors } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Divider, Box } from '@mui/material';
import { Padding } from '@mui/icons-material';


const Login = ({ setPage, email, setEmail }) => {


    const submithandler = () => {
        //After submitting form what to be done
    }
    // const [email, setEmail] = useState('');

    const isMobile = useMediaQuery("(max-width: 920px)");
    const divStyle = !isMobile ? {
        backgroundImage: "url('/bg_img.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    } : {};

    return (
        <form className='login_form' action='submit' onSubmit={submithandler}>
            <div style={divStyle}>
                <div id='login_main' style={{ marginTop: '0rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Card sx={!isMobile ? { marginTop: '7rem', width: '70vw', height: '75vh', boxShadow: "inherit" } : { marginTop: '4rem', width: '100vw', height: '100vh' }}>
                        <div className='login_main' style={!isMobile ? { display: 'flex' } : { display: 'flex', flexDirection: 'column' }}>

                            <div className='left'>

                                <img style={!isMobile ? { width: '35vw', height: '75vh' } : { width: '100vw', height: '35vh' }} className='left_image' src={Login_image} alt="" />

                            </div>

                            <div style={!isMobile ? { marginLeft: '2rem', display: 'flex', flexDirection: 'column' } : { marginLeft: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h1 style={!isMobile ? { fontSize: '3rem', fontWeight: '800', fontFamily: 'sans-serif', marginTop: '2.5rem' } : { fontSize: '2rem', fontWeight: '750', fontFamily: 'sans-serif', marginTop: '0.5rem' }} className='right_heading'>Login</h1>

                                <TextField value={email} onChange={(e) => { setEmail(e.target.value); }} sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Email" variant="filled" />

                                {/* <TextField value={password} onChange={(e) => setPassword(e.target.value)} sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Password" variant="filled" /> */}

                                <Button onClick={() => setPage('plogin')} type='submit' sx={{ marginTop: '1.5rem', background: 'black', padding: '0.8rem', width: '28vmax', '&:hover': { background: 'gray' } }} variant='contained'>Login With Password</Button>

                                <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" style={{ marginTop: '0.8rem' }}>

                                    <Divider style={{ width: '100%' }}>
                                        <Typography variant="p">or</Typography>
                                    </Divider>
                                </Box>

                                {/* <FormControlLabel sx={{ marginTop: '1.5rem' }} control={<Checkbox />} label="Remember Me" /> */}



                                <Button sx={{ marginTop: '1.5rem', background: '#FBF6EA', color: 'black', width: '28vmax', '&:hover': { background: '#FFD050' } }} onClick={() => setPage('ologin')} variant='contained'>Login With OTP</Button>


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