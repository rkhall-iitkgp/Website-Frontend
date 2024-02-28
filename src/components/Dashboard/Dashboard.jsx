import * as React from 'react';
import Stack from "@mui/material/Stack"


const Dashboard = () => {
    return (
        <>
        <Stack spacing={0} direction="row">
            <div style={{backgroundColor: 'yellow',height: "100vh", width: "20vw"}}></div>
            <Stack spacing={2} direction="row">
                <div>Image</div>
                <Stack spacing={1} direction="column">
                    <div>Soc/Cell Name</div>
                    <div>Role</div>
                </Stack>
            </Stack>
        </Stack>
        </>

    );
}

export default Dashboard;