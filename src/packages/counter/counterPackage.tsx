import React from 'react';
import { EntryPoint } from 'repluggable';
import { Counter} from "./CounterComponent";
import { MainViewAPI } from "../mainView";

export const CounterPackage: EntryPoint[] = [{
    name: 'COUNTER',

    getDependencyAPIs() {
        return [MainViewAPI];
    },

    extend(shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <Counter/>});
    }
}];