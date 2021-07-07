import {createStore, Store} from 'redux';
import {counterReducer} from "./counterReducer";
import {DispatchType, CounterState, CounterAction} from "../types/types";
const store: Store<CounterState, CounterAction> & {
    dispatch: DispatchType
} = createStore(counterReducer);

export type AppDispatch = typeof store.dispatch;

export default store;