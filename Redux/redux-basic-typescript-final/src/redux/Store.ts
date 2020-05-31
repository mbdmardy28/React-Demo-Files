import { createStore, applyMiddleware, Middleware } from "redux";
import CounterReducer from "./CounterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware : Middleware[] = [];
export const store = createStore(CounterReducer, composeWithDevTools(applyMiddleware(...middleware)))