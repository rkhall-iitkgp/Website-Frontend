import React, { useState } from 'react'
import Card from '@mui/material/Card';
import reg_img from "./register.svg";
import MenuItem from '@mui/material/MenuItem';


import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Typography, colors } from '@mui/material';
import { useMediaQuery } from '@material-ui/core';
import Divider from '@mui/material/Divider';


const Register = () => {
    const submithandler = () => {
        //After submitting form what to be done
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const[name, setName] =  useState("");
    const[rollNo, setRollNo] =  useState("");
    const[phone, setPhone] =  useState("");
    const[yearOfPass, setYearOfPass] =  useState("");

    const years =  [
      
        {
            value: "2023",
            label: "2023"
        },
        {
            value: "2022",
            label: "2022"
        },  {
            value: "2024",
            label: "2024"
        },
        {
            value: "2025",
            label: "2025"
        },
        {
            value: "2026",
            label: "2026"
        },
        {
            value: "2027",
            label: "2027"
        },
        {
            value: "2028",
            label: "2028"
        },
        {
            value: "2029",
            label: "2029"
        },
     
    ]

    const isMobile = useMediaQuery("(max-width: 920px)");
    const divStyle = {
        // backgroundImage: "url('https://www.shutterstock.com/shutterstock/photos/2262760763/display_1500/stock-photo-three-dimensional-render-of-blue-wavy-object-2262760763.jpg')",
        backgroundImage: "url('/bg_img.png')",
        // backgroundImage: { Bg_img },
        backgroundSize: 'cover',

        backgroundRepeat: 'no-repeat',

        height: '100%',
    };
    return (
        <form className='login_form' action='submit' onSubmit={submithandler}>
            <div style={divStyle}>
                <div id='login_main' style={{ marginTop: '0rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Card sx={{ marginTop: '5rem', marginBottom: "1rem", width: '70vw', height: '90vh', boxShadow: "inherit" }}>
                        <div className='login_main' style={{ display: 'flex' }}>

                            {!isMobile && <div className='left'>

                                <img style={{ width: '35vw', height: '75vh' }} className='left_image' src={reg_img} alt="" />

                            </div>}

                            <div style={!isMobile ? { marginLeft: '2rem', display: 'flex', flexDirection: 'column' } : { marginLeft: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h1 style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'sans-serif', marginTop: '1.5rem' }} className='right_heading'>Register</h1>
                                <TextField value={name} onChange={(e) => setName(e.target.value)} sx={{ marginTop: '1rem', width: '28vmax' }} label="Name" variant="outlined" />
                                <TextField value={rollNo} onChange={(e) => setRollNo(e.target.value)} sx={{ marginTop: '1rem', width: '28vmax' }} label="Institute Roll No." variant="outlined" />
                                <TextField value={phone} type="number" onChange={(e) => setPhone(e.target.value)} sx={{ marginTop: '1rem', width: '28vmax' }} label="Mobile No." variant="outlined" />
                                <TextField select
          
          defaultValue="XXXX"
          value={yearOfPass} onChange={(e) => setYearOfPass(e.target.value)} sx={{ marginTop: '1rem', width: '28vmax' }} label="Year of Passing" variant="outlined" >
           {years.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
        
                                {/* <TextField value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Email" variant="filled" /> */}
                                {/* <TextField value={password} onChange={(e) => setPassword(e.target.value)} sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Password" variant="filled" /> */}
                                <Button onClick={""} type='submit' sx={{ marginTop: '1.5rem', background: 'black', padding: '0.8rem', width: '28vmax', '&:hover': { background: 'gray' } }} variant='contained'>Next</Button>

                                
                                {/* <FormControlLabel sx={{ marginTop: '1.5rem' }} control={<Checkbox />} label="Remember Me" /> */}



                                {/* <Button type='submit' sx={{ marginTop: '1.5rem', background: 'black', width: '28vmax', '&:hover': { background: 'gray' } }} variant='contained'>Login</Button> */}


                                <Typography sx={{ marginTop: '1.5rem' }} >Already have an account ? 
                                    <a href="/register" style={{ color: 'blue' }}> Login here</a>
                                </Typography>


                            </div>
                        </div>
                    </Card>


                </div>
            </div>
        </form>

    )
}

export default Register;