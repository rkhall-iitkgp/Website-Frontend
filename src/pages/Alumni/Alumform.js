import "./css/alumni.css";
import "../Galllery/css/gallery.css";
import { TextField } from "@mui/material";
import { Grid, Button, Card, CardContent } from "@material-ui/core";
import React, { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


export default function Alumform() {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="memory">
      <div className="memory_head">
        Memories
      </div>
      <div className="memory_title">Take a trip down memory lane and share your favorite moments and stories from your time at RK hall of residence</div>
      <div className="pad-btn">
        <button className="addbutton accept-btn" onClick={handleOpen}>
          Share Here
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="alumForm">
                <Grid className="alumFormGrid">
                  <Card style={{ maxWidth: 450, padding: "10px 5px", margin: "0 auto" }}>

                    <CardContent>
                      <form>
                        <Grid container spacing={1}>
                          <Grid xs={12} item>
                            <TextField
                              placeholder="Name"
                              label="Name"
                              variant="outlined"
                              fullWidth
                              required
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              label="Batch"
                              multiline
                              rows={4}
                              placeholder=""
                              variant="outlined"
                              fullWidth
                              required
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              label="Title"
                              multiline
                              rows={4}
                              placeholder=""
                              variant="outlined"
                              fullWidth
                              required
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              label="Memory"
                              multiline
                              rows={4}
                              placeholder="Share your experience"
                              variant="outlined"
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <label htmlFor="Upload">Pictures </label>
                            <input type="file" />
                          </Grid>
                          <Grid item xs={12}></Grid>
                          <Grid item xs={12} className="alumFormButton" style={{ "paddingBottom": "0" }}>
                            <Button
                              style={{ backgroundColor: "#222436", color: "white" }}
                            >
                              Submit
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
