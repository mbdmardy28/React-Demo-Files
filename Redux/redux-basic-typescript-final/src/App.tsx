import React, { useState } from 'react';
import { Grid, Button, Typography, TextField, Paper } from "@material-ui/core";
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Counter } from './redux/CounterState';
import { IncrementAction, DecrementAction, ResetAction, AddCounterAction } from "./redux/ActionCreators";



export default () => {

  const [NewCounter, setNewCounter] = useState<number>(0);
  const counter = useSelector<Counter>(state => state.Counter)
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(IncrementAction())
  const handleDecrement = () => dispatch(DecrementAction())
  const handleReset = () => dispatch(ResetAction())
  const handleSubmitCounter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(AddCounterAction(NewCounter))
  }

  return (
    <div className="App">
      <div className="App-content">
        <Grid>
          <Grid item>
            <Paper style={{margin: 20}}>
              <form onSubmit={handleSubmitCounter}>
                <TextField
                  value={NewCounter}
                  onChange={(e) => setNewCounter(+e.target.value)}
                  id="counterId"
                  label="Input Counter"
                  variant="filled"
                  color="secondary"
                />
              </form>
              <Typography variant="h2" >Counter: {counter}</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Grid container spacing={2}>
              <Grid item xs>
                <Button 
                    variant="contained" 
                    onClick={handleIncrement}>
                      INCREMENT
                </Button>
              </Grid>
              <Grid item xs>
                <Button variant="contained" color="secondary" onClick={handleDecrement}>DECREMENT</Button>
              </Grid>
              <Grid item xs>
                <Button variant="contained" color="primary" onClick={handleReset}>RESET</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


