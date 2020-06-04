import { TaskState, TaskAction } from "./TaskState";
import { FETCH_TASK_REQUEST, FETCH_TASK_SUCCESS, FETCH_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAILURE, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS } from "./TaskActionTypes";


const initialState: TaskState = {
    loading: false,
    tasks: [],
    error: ''
}

const TaskReducer = (state = initialState, action: TaskAction) => {
    switch (action.type) {
        case FETCH_TASK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TASK_SUCCESS:
            return {
                ...state,
                tasks: action.payload.tasks,
                error: '',
                loading: false
            }
        case FETCH_TASK_FAILURE:
            return {
                ...state,
                tasks: [],
                error: action.payload.error,
                loading:false
            }
        case ADD_TASK_REQUEST : 
            return {
                ...state,
                error: '',
                loading:true,
            }
        case ADD_TASK_SUCCESS: 
            return {
                ...state,
                tasks: state.tasks.concat(action.payload.tasks),
                error: '',
                loading: false
            }
        case ADD_TASK_FAILURE:
            return {
                ...state,
                error:action.payload.error,
                loading: false
            }
        case DELETE_TASK_REQUEST: 
            return {
                ...state,
                loading: true,
                error: '',
            }
        case DELETE_TASK_SUCCESS: 
            return {
                ...state,
                loading: false,
                error:'',
                tasks: state.tasks.filter(task => action.payload.tasks.findIndex(i => i.id === task.id) === -1)
            }
        default:
            return state;
    }
}

export default TaskReducer;
