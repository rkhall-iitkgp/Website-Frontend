import React, { useState } from "react";
import "./css/alumni.css";
import "../Galllery/css/gallery.css";
import { Grid, Button, Card, CardContent } from "@material-ui/core";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Label } from "@mui/icons-material";


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
    memory: []
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

    const response = await fetch("https://rk-gallery-api.onrender.com/api/memory", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    console.log("Form submitted");
    if (data.error) {
      console.log(data.error);
      return;
    }
  }


  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    setValues({ ...values, [name]: files ? [...files] : value });
  }

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
                  <Card style={{ maxWidth: 600, padding: "10px 5px", margin: "0 auto" }}>
                    <CardContent>
                      <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={values.name}
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="batch" className="form-label">
                            Batch
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="batch"
                            name="batch"
                            placeholder="Enter your batch"
                            value={values.batch}
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="topic" className="form-label">
                            Topic
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="topic"
                            name="topic"
                            placeholder="Enter your topic"
                            value={values.topic}
                            onChange={handleOnChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Enter your description"
                            value={values.description}
                            onChange={handleOnChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">
                            Profile
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="profile"
                            name="profile"
                            onChange={(e) => setValues({ ...values, profile: e.target.files[0] })}
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">
                            Memories
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="memory"
                            name="memory"
                            multiple
                            onChange={(e) => setValues({ ...values, memory: [...e.target.files] })}
                          />
                        </div>

                        <button type="submit" className="addbutton">
                          Submit
                        </button>
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
