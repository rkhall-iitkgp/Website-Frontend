import * as React from 'react';
import Stack from "@mui/material/Stack"
import Experience from "./Experience"

const Dashboard = () => {
    return (
        <>
            <Stack spacing={0} direction="row">
                <div style={{ backgroundColor: '#FFD050', height: "100vh", width: "15vw" }}></div>
                <Stack spacing={2} direction="row">
                    <div>Image</div>
                    <Stack spacing={1} direction="column">
                        <div>Soc/Cell Name</div>
                        <div>Role</div>
                    </Stack>
                </Stack>
                <Experience />
            </Stack>
        </>

    );
}

export default Dashboard;