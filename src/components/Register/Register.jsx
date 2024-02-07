import React, { useState } from 'react'
import Card from '@mui/material/Card';
import reg_img from "./register.svg";
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
//
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Typography, colors } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';


const Register = () => {
    const submithandler = () => {
        //After submitting form what to be done
    }


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [instiEmail, setInstiEmail]  =  useState("");
    const [confPass, setConfPass] = useState('');
    const [roomNo, setRoomNo] = useState("");
    const [dob, setDob] = useState('');
    const [depart, setDepart]  =  useState("");
    const[emergencyPhone, setEmergencyPhone]=useState('');
    const[name, setName] =  useState("");
    const[rollNo, setRollNo] =  useState("");
    const[phone, setPhone] =  useState("");
    const[yearOfPass, setYearOfPass] =  useState("");

    const[regPageCount, setRegPageCount] = useState(1);

    const [isActive, setIsActive] = useState(false);

    function handleNext(){
        setRegPageCount(regPageCount+1);
    }

    function handleBack(){
        setRegPageCount(regPageCount-1);
    }


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
        <form className='register_form' action='submit' onSubmit={submithandler}>
            <div style={divStyle}>
                <div id='register_main' style={{ marginTop: '0rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Card sx={{ marginTop: '5rem', marginBottom: "1rem", width: '70vw', height: '90vh', boxShadow: "inherit" }}>
                        <div className='register_main' style={{ display: 'flex' }}>

                            {!isMobile && <div className='left'>

                                <img style={{ width: '35vw', height: '75vh' }} className='left_image' src={reg_img} alt="" />

                            </div>}

                            <div style={!isMobile ? { marginLeft: '2rem', display: 'flex', flexDirection: 'column' } : { marginLeft: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                             <h1 style={{  fontSize: '3rem', fontWeight: '800', fontFamily: 'sans-serif', marginTop: '1.5rem' }} className='right_heading'>Register</h1>{regPageCount >1 && (<ArrowBackIosNewIcon onClick={handleBack} style={{fontSize:"large", cursor:"pointer"}}/>) }
                                

{/* page 1 */}
                          {regPageCount===1  &&  (
                             <div className='regPage1'> <TextField value={name} onChange={(e) => setName(e.target.value)} sx={{ marginTop: '1rem', width: '28vmax' }} label="Name" variant="outlined" />
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
                             </TextField></div>
                          )}
                         
                          
                          {/* page 2 */}
                           {regPageCount===2 && ( <div className='regPage2'> <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginTop: '1rem', width: '28vmax' }} label="Email Id" variant="outlined" />
                                <TextField type="email" value={instiEmail} onChange={(e) => setInstiEmail(e.target.value)} sx={{ marginTop: '1rem', width: '28vmax' }} label="Institute Email Id" variant="outlined" />
                                <TextField  value={dob} defaultValue="" type="date" onChange={(e) => setDob(e.target.value)} sx={{ marginTop: '1rem', width: '28vmax' }} label="Date of Birth" variant="outlined" InputLabelProps={{
        shrink: true,
    }}
    InputProps={{
        style: { color: isActive ? 'black' : '#666666' },
        onFocus: () => setIsActive(true),
        onBlur: () => setIsActive(false),
    }}/>
                                <TextField 
                         value={depart} onChange={(e) => setDepart(e.target.value)} sx={{ marginTop: '1rem', width: '28vmax' }} label="Department" variant="outlined" >
                          
                         </TextField></div> )}

                                   {/* page 3 */}
                                   {regPageCount===3 && ( <div className='regPage3'> <TextField type="number" value={emergencyPhone} onChange={(e) => setEmergencyPhone(e.target.value)} sx={{ marginTop: '1rem', width: '28vmax' }} label="Emergency Mobile No." variant="outlined" />
                                <TextField value={roomNo} onChange={(e) => setRoomNo(e.target.value)} sx={{ marginTop: '1rem', width: '28vmax' }} label="Room No." variant="outlined" />
                                
                                <FormControl sx={{ marginTop: "1rem", width: '28vmax' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl sx={{ marginTop: "1rem", width: '28vmax' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                       
                    

</div> )}
          
        
                                {/* <TextField value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Email" variant="filled" /> */}
                                {/* <TextField value={password} onChange={(e) => setPassword(e.target.value)} sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Password" variant="filled" /> */}
                            {regPageCount <=2 && (<Button onClick={handleNext} sx={{ marginTop: '1.5rem', background: 'black', padding: '0.8rem', width: '28vmax', '&:hover': { background: 'gray' } }} variant='contained'>Next</Button>)}
                            {regPageCount ===3 && (<Button  type="submit" sx={{ marginTop: '1.5rem', background: 'black', padding: '0.8rem', width: '28vmax', '&:hover': { background: 'gray' } }} variant='contained'>Register</Button>)}
                                
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
    );
}

export default Register;