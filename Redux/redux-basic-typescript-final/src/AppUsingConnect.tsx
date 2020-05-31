import React from "react"
import './App.css';
import {  connect } from 'react-redux';
import { Counter } from './redux/CounterState';
import { IncrementAction, DecrementAction, ResetAction, AddCounterAction } from "./redux/ActionCreators";
import { Action, Dispatch } from 'redux';


const mapStateProps = (state: Counter) => {
  return {
    counter: state.Counter
  }
}

const mapDispatchProps = (dispatch: Dispatch<Action>) => {
  return {
    increment: () => dispatch(IncrementAction()),
    decrement: () => dispatch(DecrementAction()),
    resetAction: () => dispatch(ResetAction()),
    addCounter: (counter: number) => dispatch(AddCounterAction(counter))
  }
}

class AppConnect extends React.Component {}
export default connect(mapStateProps, mapDispatchProps) (AppConnect)
