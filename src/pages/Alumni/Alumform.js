import React, { useState } from "react";
import "./css/alumni.css";
import "../Galllery/css/gallery.css";
import { Grid, Button, Card, CardContent, Dialog } from "@material-ui/core";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

export default function Alumform() {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);

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
    const data = await response.json();
    console.log("Form submitted");
    if (data.error) {
      console.log(data.error);
      return;
    }
  };

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    setValues({ ...values, [name]: files ? [...files] : value });
  };

  const labelStyle = {
    padding: "20px",
    fontSize: "16px",
    marginBottom: "4px",
    width: "40%",
  };
  const inputStyle = {
    padding: "12px",
    fontSize: "14px",
    width: "55%",
    marginBottom: "2px",
    textTransform: "capitalize",
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
                      }}
                    >
                      <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "24px",
                        }}
                      >
                        <div className="form-row">
                          <label
                            htmlFor="name"
                            className="form-label"
                            style={labelStyle}
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter Your Name"
                            style={inputStyle}
                            value={values.name}
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className="form-row">
                          <label
                            htmlFor="batch"
                            className="form-label"
                            style={labelStyle}
                          >
                            Batch
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="batch"
                            name="batch"
                            placeholder="Enter your batch"
                            style={inputStyle}
                            value={values.batch}
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className="form-row">
                          <label
                            htmlFor="topic"
                            className="form-label"
                            style={labelStyle}
                          >
                            Topic
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="topic"
                            name="topic"
                            placeholder="Eg. Janamashtami 2001, Holi, Illumination"
                            style={inputStyle}
                            value={values.topic}
                            onChange={handleOnChange}
                          />
                        </div>

                        <div className="form-row">
                          <label
                            htmlFor="description"
                            className="form-label"
                            style={labelStyle}
                          >
                            Description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Share your memory/story here"
                            style={inputStyle}
                            value={values.description}
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className="form-row">
                          <label
                            htmlFor="description"
                            className="form-label"
                            style={labelStyle}
                          >
                            Your Profile Image
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="profile"
                            style={inputStyle}
                            name="profile"
                            onChange={(e) =>
                              setValues({
                                ...values,
                                profile: e.target.files[0],
                              })
                            }
                          />
                        </div>

                        <div className="form-row">
                          <label
                            htmlFor="description"
                            className="form-label"
                            style={labelStyle}
                          >
                            Memories (pictures)
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="memory"
                            name="memory"
                            style={inputStyle}
                            multiple
                            onChange={(e) =>
                              setValues({
                                ...values,
                                memory: [...e.target.files],
                              })
                            }
                          />
                        </div>

                        <button type="submit" className="submitButton">
                          Submit
                        </button>
                      </form>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            </Box>
          </Fade>
        </Dialog>
      </div>
    </div>
  );
}
