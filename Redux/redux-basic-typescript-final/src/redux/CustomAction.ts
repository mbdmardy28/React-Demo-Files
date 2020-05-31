import { Action } from "redux";

export interface CustomAction extends Action {
    payload: number
}