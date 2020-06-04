import { createStore, applyMiddleware, compose} from "redux";
import TaskReducer from "./TaskReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import monitorReducerEnhancer from "./MonitorEnhancer";
import { LoggerExtensionMiddleware } from "./LoggerMiddleware";

const composedEnhancers = compose(monitorReducerEnhancer)
const store = createStore(TaskReducer, composeWithDevTools(composedEnhancers,applyMiddleware(thunk,...LoggerExtensionMiddleware)));


export default store;



//store.subscribe(() => { console.log(store.getState()) })
//store.dispatch<any>(fetchTasks())