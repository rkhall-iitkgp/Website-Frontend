import React, { useState } from "react";
import "./css/alumni.css";
import "../Galllery/css/gallery.css";
import { Grid, Button, Card, CardContent } from "@material-ui/core";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Dialog from "@mui/material/Dialog";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Alumform() {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [sucessOpen, setSuccess] = useState(false);
  const [failureOpen, setFailure] = useState(false);

  const [values, setValues] = useState({
    name: "",
    batch: "",
    topic: "",
    description: "",
    profile: null,
    memory: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("batch", values.batch);
    formData.append("topic", values.topic);
    formData.append("description", values.description);
    formData.append("profile", values.profile);
    for (let i = 0; i < values.memory.length; i++) {
      formData.append("memory", values.memory[i]);
    }

    const response = await fetch(
      "https://rk-gallery-api.onrender.com/api/memory",
      {
        method: "POST",
        body: formData,
      }
    );
    if (response.status === 200) {
      setSuccess(true);
    } else {
      setFailure(true);
    }
    const data = await response.json();
    console.log("Form submitted");

    if (data.error || data.error !== {}) {
      console.log(data.error);
      return;
    }
  };

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    setValues({ ...values, [name]: files ? [...files] : value });
  };

  return (
    <div className="memory">
      <div className="memory_head">Memories</div>
      <div className="memory_title">
        Take a trip down memory lane and share your favorite moments and stories
        from your time at RK hall of residence
      </div>
      <div className="pad-btn">
        <button className="addbutton accept-btn" onClick={handleOpen}>
          Share Here
        </button>
        <Dialog
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          maxWidth="sm"
          fullWidth
        >
          <Fade in={open}>
            <Box>
              <div className="alumForm">
                <Grid className="alumFormGrid">
                  <Card>
                    <CardContent
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        overflowY: "auto",
                      }}
                    >
                      <FormControl
                        style={{
                          width: "90%",
                        }}
                      >
                        <TextField
                          autofocus
                          required
                          error={values.name === ""}
                          helperText={
                            values.name === "" ? "Name is required" : ""
                          }
                          id="name"
                          name="name"
                          label="Name"
                          variant="outlined"
                          margin="normal"
                          onChange={handleOnChange}
                          value={values.name}
                        />
                        <TextField
                          required
                          type="number"
                          id="batch"
                          error={values.batch === ""}
                          helperText={
                            values.batch === "" ? "Batch is required" : ""
                          }
                          name="batch"
                          label="Batch"
                          variant="outlined"
                          margin="normal"
                          onChange={handleOnChange}
                          value={values.batch}
                        />
                        <TextField
                          id="topic"
                          label="Topic"
                          name="topic"
                          variant="outlined"
                          margin="normal"
                          onChange={handleOnChange}
                          value={values.topic}
                        />
                        <TextField
                          id="description"
                          label="description"
                          name="description"
                          variant="outlined"
                          margin="normal"
                          onChange={handleOnChange}
                          value={values.description}
                        />
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={2}
                          sx={{
                            marginTop: "16px",
                            marginBottom: "8px",
                          }}
                        >
                          <Button variant="contained" component="label">
                            Your Profile Image
                            <input
                              hidden
                              accept="image/*"
                              multiple
                              type="file"
                            />
                          </Button>
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input
                              hidden
                              accept="image/*"
                              type="file"
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  profile: e.target.files[0],
                                })
                              }
                            />
                            <PhotoCamera />
                          </IconButton>
                        </Stack>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={2}
                          sx={{
                            marginTop: "16px",
                            marginBottom: "8px",
                          }}
                        >
                          <Button variant="contained" component="label">
                            Memories (pictures){" "}
                            <input
                              hidden
                              accept="image/*"
                              multiple
                              type="file"
                            />
                          </Button>
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input
                              hidden
                              accept="image/*"
                              type="file"
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  memory: [...e.target.files],
                                })
                              }
                            />
                            <PhotoCamera />
                          </IconButton>
                        </Stack>
                        <Box sx={{ mt: "16px", mb: "8px" }}>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                          >
                            Submit
                          </Button>
                        </Box>
                      </FormControl>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            </Box>
          </Fade>
        </Dialog>
        <Snackbar
          open={sucessOpen}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
        >
          <Alert
            onClose={() => setSuccess(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Memory Archieved Successfully !!
          </Alert>
        </Snackbar>
        <Snackbar
          open={failureOpen}
          autoHideDuration={6000}
          onClose={() => setFailure(false)}
        >
          <Alert
            onClose={() => setFailure(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            Cannot register Memory. Please try again after sometime.
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
