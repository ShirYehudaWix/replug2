import { EntryPoint, Shell } from 'repluggable';


import {CounterAPI} from "../counterApis";
import {counterReducer} from "../store/counterReducer";
import {CounterScopedState} from "../store/selectors";
import {createCounterAPI} from "../CounterAPI";

export const CounterDataEntryPoint: EntryPoint = {
    name: 'Counter Data Entry Point',


    // getDependencyAPIs() {
    //     return [PreviewDisplayAPI];
    // },

    declareAPIs() {
        return [CounterAPI];
    },

    attach(shell: Shell) {
        shell.contributeState<CounterScopedState>(() => ({
            counter: counterReducer,
        }));

        shell.contributeAPI(CounterAPI, () => createCounterAPI(shell));
    },
};