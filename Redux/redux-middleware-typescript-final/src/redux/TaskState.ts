import { Action } from "redux";

export interface Task {
    Id: number,
    Title: string,
    Description: string,
    Status: string 
}

export interface TaskState {
    loading?: boolean,
    error?: string,
    tasks: Task[]
}

export interface TaskAction extends Action {
    payload: TaskState
}