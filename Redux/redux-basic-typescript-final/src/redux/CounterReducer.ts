import { CustomAction } from "./CustomAction"
import { Counter } from "./CounterState"
import { INCREMENT, DECREMENT, RESET, ADD_COUNTER } from "./ActionTypes"

const initialState: Counter = {
    Counter: 0
}

export default (state: Counter = initialState, action: CustomAction) => {
    switch(action.type) {
        case INCREMENT:
            return { Counter: state.Counter + 1 }
        case DECREMENT: 
            return { Counter: state.Counter - 1}
        case RESET:
            return { Counter: 0 }
        case ADD_COUNTER:
            return { Counter: state.Counter + action.payload}
        default:
            return state;
    }
}