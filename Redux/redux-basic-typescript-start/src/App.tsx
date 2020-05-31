import React from 'react';
import './App.css';
import { Grid, Button, Typography, TextField, Paper } from "@material-ui/core";


export default () => {

  return (
    <div className="App">
      <div className="App-content">
        <Grid>
          <Grid item>
            <Paper style={{margin: 20}}>
              <form>
                <TextField
                  value={0}
                  id="counterId"
                  label="Input Counter"
                  variant="filled"
                  color="secondary"
                />
              </form>
              <Typography variant="h2" >Counter: {0}</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Grid container spacing={2}>
              <Grid item xs>
                <Button variant="contained" >INCREMENT </Button>
              </Grid>
              <Grid item xs>
                <Button variant="contained" color="secondary">DECREMENT</Button>
              </Grid>
              <Grid item xs>
                <Button variant="contained" color="primary">RESET</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


