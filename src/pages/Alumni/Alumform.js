import React, { useState } from "react";
import "./css/alumni.css";
import "../Galllery/css/gallery.css";
import { TextField } from "@mui/material";
import { Grid, Button, Card, CardContent } from "@material-ui/core";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Typography from '@mui/material/Typography';
import { useForm, ValidationError } from "@formspree/react";

export default function Alumform() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, handleSubmit] = useForm("xknaolej");
  if (state.succeeded) {
    return window.location.reload();
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="alumForm">
      <h2>Share your beautiful memories with hall</h2>
      <div >
        <button className="addbutton accept-btn" onClick={handleOpen}>
          Add Testimonial
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          // BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Grid className="alumFormGrid">
                <Card style={{ maxWidth: 450, padding: "10px 5px", margin: "0 auto",}}>
                  <CardContent>
                    <form method="POST" onSubmit={handleSubmit}>
                      <Grid container spacing={1}>
                        <Grid xs={12} item>
                          <TextField placeholder="Enter your name" label="Name" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                          <TextField placeholder="Topic you want to share" label="Topic" variant="outlined" fullWidth  required />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField label="Memories" multiline rows={4} placeholder="Share your memories with hall" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                          <label className="alum-form-label" htmlFor="Upload">
                            Have some images?{" "}
                          </label>
                          <input type="file" />
                        </Grid>
                        <Grid item xs={12} style={{ paddingBottom: "0" }}>
                          <Button  type="submit" disabled={state.submitting} style={{backgroundColor: "#222436",color: "white", }}>
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
