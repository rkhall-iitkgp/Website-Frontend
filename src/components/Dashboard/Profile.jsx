import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import { Box, height } from '@mui/system';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
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
            <Grid item xs={4} textAlign="right" sx={{ padding: '1rem' }}>
                {hedit ? (
                    <TextField
                        id="filled-basic"
                        value={data}
                        name={name}
                        variant="filled"
                        InputProps={{
                            disableUnderline: true,
                            style: {
                                padding: 0,
                                margin: 0,
                                outline: 'none',
                                height: '1rem',
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
    const [hedit, setHedit] = useState(1);
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
    return (
        <Box>
            {/* <Box sx={{ flexGrow: 1, maxWidth: '20rem', justifyContent: 'space-between', backgroundColor: 'red' }}>
            </Box> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <IconButton sx={{
                    position: 'relative', top: '2.6rem', left: '23rem', backgroundColor: '#FFD050',
                    '&:hover': {
                        backgroundColor: "#FFDA50"
                    }
                }} onClick={handletoggle} >
                    {hedit === 1 ? <SaveOutlinedIcon /> : <EditOutlinedIcon />}
                </IconButton>
                <Button sx={{ height: '3rem', width: '10rem', border: '2px solid black', position: 'relative', top: '0rem', right: '21rem', fontWeight: 'bold', color: 'black' }}>Private</Button>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '8rem', height: '8rem' }} />
                {hedit ? (
                    <div style={{ textAlign: 'center' }}>
                        <TextField
                            id="filled-basic"
                            value={details.name}
                            name="name"
                            variant="filled"
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    padding: '0.5rem',
                                    outline: 'none',
                                    height: '1.5rem',
                                    backgroundColor: 'transparent',
                                    fontSize: '1.4rem'
                                },
                            }}
                            onChange={handleChange}
                            fullWidth
                            sx={{ marginLeft: '10rem', marginTop: '0.5rem' }}
                        />
                    </div>

                ) : (
                    <Typography sx={{ marginTop: '1rem' }} variant="h6" value={details.name} align="center" gutterBottom >{details.name}</Typography>
                )}
                {hedit ? (
                    <div style={{ textAlign: 'center' }}>
                        <TextField
                            id="filled-basic"
                            value={details.rollNo}
                            name="rollNo"
                            variant="filled"
                            align="center"
                            InputProps={{
                                disableUnderline: true,
                                style: {
                                    paddingTop: '0rem',
                                    margin: 0,
                                    outline: 'none',
                                    height: '1.5rem',
                                    backgroundColor: 'transparent',
                                    fontSize: '1.4rem'
                                },
                            }}
                            sx={{ marginLeft: '9rem', marginTop: '1rem' }}
                            gutterBottom
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>

                ) : (
                    <Typography variant="h6" value={details.rollNo} align="center" gutterBottom >{details.rollNo}</Typography>
                )}
                <Grid container spacing={1} sx={{ maxWidth: '50rem', height: 'auto' }}>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Email" name="email" data={details.email} />
                    </Grid>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Institute Email" name="instiEmail" data={details.instiEmail} />
                    </Grid>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Department" name="department" data={details.department} />
                    </Grid>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Date of Birth" name="dob" data={details.dob} />
                    </Grid>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Mobile Number" name="mobileNo" data={details.mobileNo} />
                    </Grid>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Room Number" name="roomNo" data={details.roomNo} />
                    </Grid>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow details={details} hedit={hedit} setDetails={setDetails} field="Emergency Contact Number" name="emergencyContact" data={details.emergencyContact} />
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}

export default Profile;