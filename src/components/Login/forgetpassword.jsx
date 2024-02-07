import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Login_image from './Computer login-bro.svg'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Link, Typography, colors } from '@mui/material';
import { useMediaQuery } from '@material-ui/core';
import { Divider, Box } from '@mui/material';
import { Padding } from '@mui/icons-material';
import { MuiOtpInput } from 'mui-one-time-password-input'

const ForgetPassword = () => {
    const [otp, setOtp] = React.useState('')

    const handleChange = (newValue) => {
        setOtp(newValue)
        console.log(otp);
    }


    const submithandler = () => {
        //After submitting form what to be done
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showOTP, setShowOTP] = useState(false);
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

            <Card sx={!isMobile?{ marginTop: '7rem', width: '70vw', height: '75vh', boxShadow: "inherit" }:{ marginTop: '4rem',width: '100vw', height: '100vh'}}>
                        <div className='login_main' style={!isMobile?{ display: 'flex' }:{display:'flex',flexDirection:'column'}}>

                   <div className='left'>

                                <img style={!isMobile?{ width: '35vw', height: '75vh' }:{width:'100vw',height:'35vh'}} className='left_image' src={Login_image} alt="" />

                            </div>

                            
                            <div style={!isMobile ? { marginLeft: '2rem', display: 'flex', flexDirection: 'column' } : { marginLeft: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h1 style={!isMobile?{ fontSize: '3rem', fontWeight: '800', fontFamily: 'sans-serif', marginTop: '2.5rem' }:{fontSize:'2rem', fontWeight: '750', fontFamily: 'sans-serif', marginTop: '0.5rem'}} className='right_heading'>Login</h1>
                                <TextField value={email} onChange={(e) => { setEmail(e.target.value); }} sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Email" variant="filled" />

                                <Link sx={{ marginTop: '1.5rem', fontSize: '1rem',cursor:'pointer' }} onClick={() => {
                                    setShowOTP(true);
                                }} >SEND OTP/RESEND OTP</Link>


                                {showOTP && <Typography sx={{ marginTop: '1.5rem', maxWidth: '25rem',font:"sans-serif" , fontWeight:'400' }} >An OTP has been sent to your registered email adddress .Please enter it below!
                                </Typography>}
                                {/* <Typography sx={{ marginTop: '1.5rem', maxWidth: '25rem' }} >An OTP has been sent to your registered email adddress .Please enter it below!
                                </Typography> */}

                                {showOTP && <MuiOtpInput value={otp} onChange={handleChange} style={{ marginTop: '0.8rem', maxWidth: '15rem', gap: '10px' }} />}
                                {/* <MuiOtpInput value={otp} onChange={handleChange} style={{ marginTop: '0.8rem', maxWidth: '15rem', gap: '10px' }} /> */}

                                <FormControlLabel sx={{ marginTop: '0.5rem' }} control={<Checkbox />} label="Remember Me" />

                                <Button type='submit' sx={{ marginTop: '1rem', background: 'black', padding: '0.8rem', width: '28vmax', '&:hover': { background: 'gray' } }} variant='contained'>Verify</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </form>

    );
}

export default ForgetPassword;



