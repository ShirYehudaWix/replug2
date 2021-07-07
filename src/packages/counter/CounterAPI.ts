import { Shell } from 'repluggable';


import {CounterAPI} from "./counterApis";
import {CounterScopedState, createCounterSelectors} from "./store/selectors";

export const createCounterAPI = (shell: Shell): CounterAPI => {

    const store = shell.getStore<CounterScopedState>();
    const selectors = createCounterSelectors(() => store.getState());

    const counterValue: CounterAPI['counterValue'] = () => {
       return selectors.counterValue()
    };



    return {
        counterValue,
    };
};