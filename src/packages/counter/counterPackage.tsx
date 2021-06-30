import React from 'react';
import { EntryPoint } from 'repluggable';
import { Counter} from "./CounterComponent";
import { MainViewAPI } from "../mainView";
import {Controls} from "./controls/ControlsComponent";
import {TopBarAPI} from "../topBar/TopBarAPI";

export const CounterPackage: EntryPoint[] = [{
    name: 'COUNTER',

    getDependencyAPIs() {
        return [MainViewAPI,TopBarAPI];
    },

    extend(shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <Counter/>});
        shell.getAPI(TopBarAPI).contributeComponent(shell, {component: () => <Controls/>});
    }
}];