import axios from 'axios'
import { Dispatch, Action } from 'redux';
import { Task, TaskAction } from './TaskState';
import { FETCH_TASK_REQUEST, FETCH_TASK_SUCCESS, FETCH_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS } from './TaskActionTypes';

export const FetchTasksRequestAction = (): Action => {
    return {
      type: FETCH_TASK_REQUEST
    }
}

export const FetchTasksSuccessAction = (tasks: Task[]): TaskAction => {
    return {
        type: FETCH_TASK_SUCCESS,
        payload: { tasks : tasks } 
    }
}

export const FetchTasksFailureAction = (error: string) : TaskAction => {
    return {
      type: FETCH_TASK_FAILURE,
      payload: { tasks: [],  error}
    }
}

export const FetchTasksAction = () => {
    return function (dispatch: Dispatch<Action>) {
        dispatch(FetchTasksRequestAction());
        axios.get('http://localhost:53147/api/Task')
            .then(response =>dispatch(FetchTasksSuccessAction(response.data)))
            .catch(error => dispatch(FetchTasksFailureAction(error.message)))
    }
}

export const AddTaskRequest = (task: Task) : TaskAction => {
   return {
    type: ADD_TASK_REQUEST,
    payload: { tasks: [task]}
   } 
}
export const AddTaskSuccess = (task: Task) : TaskAction => {
    return {
        type: ADD_TASK_SUCCESS,
        payload: { tasks : [task]}
    }
}

export const AddTaskFailure = (error: string): TaskAction => {
    return {
        type: FETCH_TASK_FAILURE,
        payload: { tasks: [], error}     
    }
}
export const AddTaskAction = (task: Task) => {
    
    return function(dispatch: Dispatch<Action>) {
        dispatch(AddTaskRequest(task))
        axios.post('http://localhost:53147/api/Task',task)
        .then(res => dispatch(AddTaskSuccess(res.data)))
        .catch(error=>dispatch(AddTaskFailure(error.message)))
    }
}


export const DeleteTaskAction = (task: Task) => {
    return function(dispatch: Dispatch<Action>) {
        axios.delete(`http://localhost:53147/api/Task/${task.Id}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(error=> error.message)
    }
}