import axios from 'axios'
import { Dispatch, Action } from 'redux';
import { Task, TaskAction } from './TaskState';
import { FETCH_TASK_REQUEST, FETCH_TASK_SUCCESS, FETCH_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS } from './TaskActionTypes';

export const FetchTasksRequestAction = (): Action => ({
    type: FETCH_TASK_REQUEST
})
export const FetchTasksSuccessAction = (tasks: Task[]): TaskAction => ({
    type: FETCH_TASK_SUCCESS,
    payload: { tasks : tasks } 
})
export const FetchTasksFailureAction = (error: string) : TaskAction => ({
    type: FETCH_TASK_FAILURE,
    payload: { tasks: [],  error}
})
export const FetchTasksAction = () => {
    return function (dispatch: Dispatch<Action>) {
        dispatch(FetchTasksRequestAction());
        axios.get('http://localhost:53147/api/Task')
            .then(response =>dispatch(FetchTasksSuccessAction(response.data)))
            .catch(error => dispatch(FetchTasksFailureAction(error.message)))
    }
}

export const AddTaskRequestAction = (task: Task) : TaskAction => ({
    type: ADD_TASK_REQUEST,
    payload: { tasks: [task]}
})
export const AddTaskSuccessAction = (task: Task) : TaskAction => ({
    type: ADD_TASK_SUCCESS,
    payload: { tasks : [task]}
})
export const AddTaskFailureAction = (error: string): TaskAction => ({
    type: FETCH_TASK_FAILURE,
    payload: { tasks: [], error}     
})
export const AddTaskAction = (task: Task) => {
    return function(dispatch: Dispatch<Action>) {
        dispatch(AddTaskRequestAction(task))
        axios.post('http://localhost:53147/api/Task',task)
        .then(res => dispatch(AddTaskSuccessAction(res.data)))
        .catch(error=>dispatch(AddTaskFailureAction(error.message)))
    }
}

export const DeleteTaskRequestAction = (task: Task) : TaskAction => ({
    type: DELETE_TASK_REQUEST,
    payload: {tasks: [task]}
})
export const DeleteTaskSuccessAction = (task: Task) : TaskAction => ({
    type: DELETE_TASK_SUCCESS,
    payload: { tasks: [task]}
})

export const DeleteTaskAction = (task: Task) => {
  
    return function(dispatch: Dispatch<Action>) {
        dispatch(DeleteTaskRequestAction(task))
        const url = `http://localhost:53147/api/Task/${task.id}`;
        axios.delete(url)
        .then(res =>  {
            console.log("res", res)
            dispatch(DeleteTaskSuccessAction(res.data))
        })
        .catch(error=> error.message)
    }
}