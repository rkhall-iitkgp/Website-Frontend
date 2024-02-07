import React, { useState } from "react";
import styles from "./css/alumni.module.css";
import styleTes from "./../../components/Testimonials/css/Testimonials.module.css";
// import "../Galllery/css/gallery.css";
import { Grid, Button, Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function Alumform() {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [sucessOpen, setSuccess] = useState(false);
  const [failureOpen, setFailure] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
    setSubmitting(true);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("batch", values.batch);
    formData.append("email", values.email);
    formData.append("topic", values.topic);
    formData.append("description", values.description);
    formData.append("profile", values.profile);
    for (let i = 0; i < values.memory.length; i++) {
      formData.append("memory", values.memory[i]);
    }
    if (values.memory.length === 0) {
      formData.append("memory", null);
    }
    console.log(formData);

    const response = await fetch(
      "https://rk-gallery-api.onrender.com/api/memory",
      {
        method: "POST",
        body: formData,
      }
    );
    if (response.status === 200) {
      setSuccess(true);
      setSubmitting(false);
    } else {
      console.log("ERROR");
      setFailure(true);
      setSubmitting(false);
    }
    const data = await response.json();

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
    <div className={styles.memory}>
      <div className={styles.memoryHead}>Memories</div>
      <div className={styles.memoryTitle}>
        Take a trip down memory lane and share your favorite moments and stories
        from your time at RK hall of residence
      </div>
      <div className={styleTes.padBtn}>
        <button className= {`${styleTes.addbutton} ${styleTes.acceptBtn}`} onClick={handleOpen}>
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
                          size = "medium"
                          autofocus
                          required
                          error={values.name === ""}
                          id="name"
                          name="name"
                          label="Name"
                          variant="outlined"
                          margin="normal"
                          placeholder="Your Name"
                          onChange={handleOnChange}
                          value={values.name}
                        />
                        <TextField
                          required
                          type="number"
                          id="batch"
                          error={values.batch === ""}
                          name="batch"
                          label="Batch"
                          variant="outlined"
                          margin="normal"
                          onChange={handleOnChange}
                          value={values.batch}
                        />
                        <TextField
                          required
                          id="email"
                          error={values.batch === ""}
                          label="Email Address"
                          name="email"
                          type={"email"}
                          variant="outlined"
                          margin="normal"
                          onChange={handleOnChange}
                          value={values.email}
                        />
                        <TextField
                          id="topic"
                          label="Topic/Memory"
                          helperText="Holi 2001, Illumination 2017, A Night at Mess top"
                          name="topic"
                          variant="outlined"
                          margin="normal"
                          onChange={handleOnChange}
                          value={values.topic}
                        />
                        <TextareaAutosize
                          id="description"
                          label="Your Story"
                          placeholder="Your Story"
                          name="description"
                          variant="outlined"
                          margin="normal"
                          helperText="Anything you want to share/anecdotes"
                          onChange={handleOnChange}
                          value={values.description}
                          style={{width:"100%", font:"inherit", fontSize:"1rem"}}
                          minRows={2}
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
                              type="file"
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  profile: e.target.files[0],
                                })
                              }
                            />
                          </Button>
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                            size="large">
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
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  memory: [...e.target.files],
                                })
                              }
                            />
                          </Button>
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                            size="large">
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
                        <Box
                          sx={{ mt: "16px", mb: "8px" }}
                          style={{ backgroundColor: "black", color: "black" }}
                        >
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={handleSubmit}
                            style={{ color: "white", backgroundColor: "black" }}
                          >
                            {submitting ? (
                              <CircularProgress
                                size={24}
                                style={{ color: "white" }}
                              />
                            ) : (
                              "Submit"
                            )}
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
