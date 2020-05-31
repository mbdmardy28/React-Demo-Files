import { createStore, applyMiddleware, Middleware } from "redux";
import RootReducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware : Middleware[] = [];
export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleware)))