import React from 'react';
import { EntryPoint } from 'repluggable';
// import { Counter} from "./CounterComponent";
import { MainViewAPI } from "../mainView";
import {Controls} from "./controls/ControlsComponent";
import {TopBarAPI} from "../topBar/TopBarAPI";
import {CounterDataEntryPoint} from "./counterEntryPoints/counterDataEntryPoint";
import {createConnectedCounter} from "./ConnectedCounter";
import {CounterAPI} from "./counterApis";

export const CounterPackage: EntryPoint[] = [{
    name: 'COUNTER',

    getDependencyAPIs() {
        return [MainViewAPI,TopBarAPI,CounterAPI];
    },

    extend(shell) {
        const Counter=createConnectedCounter(shell)
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <Counter />});
        shell.getAPI(TopBarAPI).contributeComponent(shell, {component: () => <Controls/>});
    }
},
    CounterDataEntryPoint


];