import { Action } from "redux";
import { CustomAction } from "./CustomAction";
import { INCREMENT, DECREMENT, RESET, ADD_COUNTER } from "./ActionTypes";

export const IncrementAction = (): Action => ({
    type: INCREMENT
})

export const DecrementAction = (): Action => ({
    type: DECREMENT
})

export const ResetAction = (): Action => ({
    type: RESET
})

export const AddCounterAction = (value: number): CustomAction  => ({
    type: ADD_COUNTER,
    payload: value
})