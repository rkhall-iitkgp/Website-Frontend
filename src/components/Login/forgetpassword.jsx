import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Login_image from './Computer login-bro.svg'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Link, Typography, colors } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Divider, Box } from '@mui/material';
import { Padding } from '@mui/icons-material';
import { MuiOtpInput } from 'mui-one-time-password-input'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});


const ForgetPassword = ({ setPage, email, setEmail, backpage, setBackPage }) => {

    const formik = useFormik({
        initialValues: {
            email: email || '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    const [otp, setOtp] = React.useState('')

    const handleChange = (newValue) => {
        setOtp(newValue)
        console.log(otp);
    }


    const submithandler = () => {
        //After submitting form what to be done
    }
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

                    <Card sx={!isMobile ? { marginTop: '7rem', width: '70vw', height: '75vh', boxShadow: "inherit" } : { marginTop: '4rem', width: '100vw', height: '100vh' }}>
                        <div className='login_main' style={!isMobile ? { display: 'flex' } : { display: 'flex', flexDirection: 'column' }}>

                            <div className='left'>

                                <img style={!isMobile ? { width: '35vw', height: '75vh' } : { width: '100vw', height: '35vh' }} className='left_image' src={Login_image} alt="" />

                            </div>


                            <div style={!isMobile ? { marginLeft: '2rem', display: 'flex', flexDirection: 'column' } : { marginLeft: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h1 style={!isMobile ? { fontSize: '3rem', fontWeight: '800', fontFamily: 'sans-serif', marginTop: '2.5rem' } : { fontSize: '2rem', fontWeight: '750', fontFamily: 'sans-serif', marginTop: '0.5rem' }} className='right_heading'>Login</h1>

                                {(<ArrowBackIosNewIcon style={{ fontSize: "large", cursor: "pointer" }} onClick={() => { setPage(backpage); setBackPage('flogin') }} />)}

                                <TextField id='email' name='email'
                                    value={formik.values.email}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setEmail(e.target.value); // Update the email state
                                    }}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Email" size='small' variant="filled" />

                                <Link sx={{ marginTop: '1.5rem', fontSize: '1rem', cursor: 'pointer' }} onClick={() => {
                                    setShowOTP(true);
                                }} >SEND OTP/RESEND OTP</Link>


                                {showOTP && <Typography sx={{ marginTop: '1.5rem', maxWidth: '25rem', font: "sans-serif", fontWeight: '400' }} >An OTP has been sent to your registered email adddress .Please enter it below!
                                </Typography>}

                                {showOTP && <MuiOtpInput value={otp} onChange={handleChange} style={{ marginTop: '0.8rem', maxWidth: '15rem', gap: '10px' }} />}

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




