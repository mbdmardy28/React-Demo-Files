import { createStore, applyMiddleware, Middleware } from "redux";
import TaskReducer from "./TaskReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware: Middleware[] = [thunk]

const store = createStore(TaskReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

//store.subscribe(() => { console.log(store.getState()) })
//store.dispatch<any>(fetchTasks())