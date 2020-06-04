import { Action } from "redux";

export interface Task {
    id: number,
    title: string,
    description: string,
    status: string 
}

export interface TaskState {
    loading?: boolean,
    error?: string,
    tasks: Task[]
}

export interface TaskAction extends Action {
    payload: TaskState
}