import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import { Box, height } from '@mui/system';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography, colors } from '@mui/material';
import Divider from '@mui/material/Divider';
import Experience from './Experience'
import { useState } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import Stack from '@mui/material/Stack'




function FormRow({ field, data, details, setDetails, name, hedit }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <React.Fragment>
            <Grid item xs={8}>
                <h3>{field}:</h3>
            </Grid>
            <Grid item xs={4} textAlign="right" sx={{ paddingBottom: '0.3rem' }}>
                {hedit ? (
                    <TextField
                        id="filled-basic"
                        value={data}
                        name={name}
                        variant="filled"
                        InputProps={{
                            // disableUnderline: true,
                            style: {
                                padding: '0rem 0rem 1.5rem',
                                margin: '0.1rem',
                                outline: 'none',
                                height: '2rem',
                                backgroundColor: 'transparent',
                                textAlign: 'right',
                            },
                            dir: 'rtl',

                        }}
                        onChange={handleChange}
                        fullWidth
                    />

                ) : (
                    <Typography>{data}</Typography>
                )}
            </Grid>
        </React.Fragment>
    );
}
const Profile = ({ details, setDetails }) => {
    const isMobile = useMediaQuery("(max-width: 920px)");
    const [hedit, setHedit] = useState(0);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handletoggle = () => {
        setHedit(hedit ^ 1);
    }

    const privateButttonStyle = !isMobile ? {
        height: '3rem',
        width: '10rem',
    } : { height: '5vh', width: '9vh' };

    const editButttonStyle = !isMobile ? {
        position: 'relative',
        top: ' 7vh',
        right: '-45vh',
    } : { position: 'absolute', top: '8.5vh', left: '82vw' };
    return (
        <Box sx={{ marginTop: '1.5rem' }}>
            {/* <Box sx={{ flexGrow: 1, maxWidth: '20rem', justifyContent: 'space-between', backgroundColor: 'red' }}>
            </Box> */}
            <Stack direction='row' justifyContent="space-between" alignItems="flex-start">
                <Button sx={{
                    ...privateButttonStyle,
                    border: '2px solid black',
                    fontWeight: 'bold',
                    color: 'black'
                }}>Private</Button>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '0.7rem', }}>
                    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        {/* <CameraAltIcon /> */}
                        <Box sx={{
                            height: '12rem',
                            width: '12rem',
                            border: '2px solid black',
                            borderRadius: '50%'
                        }} >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ top: '0.43rem', left: '0.5rem', width: '11rem', height: '11rem', marginBottom: '0.5rem' }} />
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: '0', right: '0', marginRight: '0.3rem', marginBottom: '1.1rem' }}>
                            <Box sx={{
                                backgroundColor: '#FFD050', borderRadius: '50%', height: '2.5rem', width: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': {
                                    backgroundColor: "#FFDA50",
                                }
                            }}>
                                <CameraAltIcon sx={{
                                    '&:hover': {
                                        backgroundColor: "#FFDA50",
                                        borderRadius: '50%'
                                    }
                                }} onClick={() => alert("hi")} />
                            </Box>
                        </Box>
                    </Box>
                    {hedit ? (
                        <TextField
                            id="filled-basic"
                            value={details.name}
                            name="name"
                            variant="filled"
                            InputProps={{
                                // disableUnderline: true,
                                style: {
                                    outline: 'none',
                                    height: 'auto',
                                    backgroundColor: 'transparent',
                                    fontSize: '1.4rem'
                                },
                            }}
                            sx={{ width: '80%', marginTop: '-1rem' }}
                            onChange={handleChange}
                            fullWidth
                        />
                    ) : (
                        <Typography variant="h5" fontWeight={'bold'} value={details.name} align="center" gutterBottom >{details.name}</Typography>
                    )}
                    {hedit ? (
                        <TextField
                            id="filled-basic"
                            value={details.rollNo}
                            name="rollNo"
                            variant="filled"
                            InputProps={{
                                // disableUnderline: true,
                                style: {
                                    outline: 'none',
                                    height: 'auto',
                                    backgroundColor: 'transparent',
                                    fontSize: '1rem',
                                    textAlign: 'center'
                                },
                            }}
                            sx={{ width: '80%', marginTop: '-1rem' }}
                            onChange={handleChange}
                            fullWidth
                        />
                    ) : (
                        <Typography variant="p" value={details.rollNo} align="center" gutterBottom >{details.rollNo}</Typography>
                    )}
                </Box>
                <IconButton sx={{
                    backgroundColor: '#FFD050',
                    '&:hover': {
                        backgroundColor: "#FFDA50"
                    }
                }} onClick={handletoggle} >
                    {hedit === 1 ? <SaveOutlinedIcon /> : <EditOutlinedIcon />}
                </IconButton>
            </Stack>

            <Stack spacing={2} sx={{ width: '100%', marginTop: '0rem' }}>
                <Grid container spacing={1} sx={{ borderBottom: '1px solid black' }}>
                    <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Email" name="email" data={details.email} />
                </Grid>
                <Grid container spacing={1} sx={{ borderBottom: '1px solid black' }}>
                    <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Institute Email" name="instiEmail" data={details.instiEmail} />
                </Grid>
                <Grid container spacing={1} sx={{ borderBottom: '1px solid black' }}>
                    <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Department" name="department" data={details.department} />
                </Grid>
                <Grid container spacing={1} sx={{ borderBottom: '1px solid black' }}>
                    <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Date of Birth" name="dob" data={details.dob} />
                </Grid>
                <Grid container spacing={1} sx={{ borderBottom: '1px solid black' }}>
                    <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Mobile Number" name="mobileNo" data={details.mobileNo} />
                </Grid>
                <Grid container spacing={1} sx={{ borderBottom: '1px solid black' }}>
                    <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Room Number" name="roomNo" data={details.roomNo} />
                </Grid>
                <Grid container spacing={1} sx={{ borderBottom: '1px solid black' }}>
                    <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Emergency Contact Number" name="emergencyContact" data={details.emergencyContact} />
                </Grid>
            </Stack>
        </Box>
    );
}

export default Profile;