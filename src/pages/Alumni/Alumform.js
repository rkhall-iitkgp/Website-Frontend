import React, { useState } from "react";
import "./css/alumni.css";
import "../Galllery/css/gallery.css";
import { TextField } from "@mui/material";
import { Grid, Button, Card, CardContent } from "@material-ui/core";

export default function Alumform() {

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
        if(data.error){
            console.log(data.error);
            return;
        }        
    }
    

    const handleOnChange = (e) => {
        const { name, value, files } = e.target;
        setValues({ ...values, [name]: files ? [...files] : value });
    }

    return (
        <div className="alumForm">
            <Grid className="alumFormGrid">
                <Card style={{ maxWidth: 450, padding: "10px 5px", margin: "0 auto" }}>
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
                            <input
                                type="file"
                                className="form-control"
                                id="profile"
                                name="profile"
                                onChange={(e) => setValues({ ...values, profile: e.target.files[0] })}
                            />

                            <input
                                type="file"
                                className="form-control"
                                id="memory"
                                name="memory"
                                multiple
                                onChange={(e) => setValues({ ...values, memory: [...e.target.files] })}
                            />

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>

                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}
