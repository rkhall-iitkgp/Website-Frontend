import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import { Box, height } from '@mui/system';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Experience from './Experience'
import { useState } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';


function FormRow({ field, data }) {
    const [edit, setEdit] = useState(1);
    return (
        <React.Fragment>
            <Grid item xs={8}>
                <h3>{field}:</h3>
            </Grid>
            <Grid item xs={4} textAlign="right" sx={{ padding: '1rem' }}>
                {edit ? (
                    <TextField
                        id="filled-basic"
                        value={data}
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
                        fullWidth
                    />

                ) : (
                    <Typography>{data}</Typography>
                )}
            </Grid>
        </React.Fragment>
    );
}
const Profile = () => {
    return (
        <container  >

            {/* <Box sx={{ flexGrow: 1, maxWidth: '20rem', justifyContent: 'space-between', backgroundColor: 'red' }}>
            </Box> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '8rem', height: '8rem' }} />
                <Grid container spacing={1} sx={{ maxWidth: '50rem', height: 'auto', marginTop: '0.8rem' }}>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow field="name" data="anmol" />
                    </Grid>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow field="name" data="anmol" />
                    </Grid>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow field="name" data="anmolfsgdgsfs" />
                    </Grid>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow field="name" data="anmol" />
                    </Grid>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow field="name" data="anmol" />
                    </Grid>
                    <Grid container item spacing={3} sx={{ borderBottom: '1px solid black' }}>
                        <FormRow field="name" data="anmol" />
                    </Grid>

                </Grid>
            </Box>
        </container>
    );
}

export default Profile;