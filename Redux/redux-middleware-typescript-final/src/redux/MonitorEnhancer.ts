import { StoreEnhancer, StoreEnhancerStoreCreator, Reducer, Action, AnyAction } from "redux";

const round = (value: number) => Math.round(value * 100) / 100

const monitorReducerEnhancer: StoreEnhancer =  (createStore: StoreEnhancerStoreCreator): StoreEnhancerStoreCreator =>
    <S = any, A extends Action = AnyAction>(reducer: Reducer<S, A>) => {

        const monitorReducer = (state: any, action:any) => {
            const start = performance.now()
            const newState = reducer(state, action)
            const end = performance.now()
            const diff = round(end - start)
            console.log('reducer process time:', diff)
            return newState;      
        }  
        
        const store = createStore(monitorReducer);
    
        return {
            ...store
        };
  };

  export default monitorReducerEnhancer