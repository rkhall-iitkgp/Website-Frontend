import React from "react";
import "./css/alumni.css";
import "../Galllery/css/gallery.css";
import { TextField } from "@mui/material";
import { Grid, Button, Card, CardContent } from "@material-ui/core";

export default function Alumform() {
 
  return (
    <div className="alumForm">
      <Grid className="alumFormGrid">
        <Card style={{ maxWidth: 450, padding: "10px 5px", margin: "0 auto" }}>
          
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Enter your name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              
                <Grid item xs={12}>
                  <TextField
                    label="Experiance"
                    multiline
                    rows={4}
                    placeholder="Share your experiance"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="Upload">Memories: </label>
                  <input type="file" />
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} className="alumFormButton" style={{"paddingBottom":"0"}}>
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
  );
}
