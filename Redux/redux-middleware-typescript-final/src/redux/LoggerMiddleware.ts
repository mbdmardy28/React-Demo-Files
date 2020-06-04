import { Middleware, MiddlewareAPI  } from "redux";

const loggerMiddleware: Middleware = ({dispatch, getState}: MiddlewareAPI) => next => action => {
    console.log('logger 1', action)
    next(action);
    console.log(getState())
}
const loggerTwoMiddleware: Middleware = ({getState}: MiddlewareAPI) => next => action => {
    
    console.log('logger 2', action)
    next(action)
}


export const LoggerExtensionMiddleware = [loggerMiddleware,loggerTwoMiddleware]