import React from 'react';
import {EntryPoint} from 'repluggable';
import {TopBar} from "./TopBarComponent";
import {MainViewAPI} from "../mainView";
import {componentsSlotKey, createTopBarAPI, TopBarAPI} from "./TopBarAPI";

export const TopBarPackage: EntryPoint[] = [{
    name: 'TOP_BAR',
    declareAPIs() {
        return [TopBarAPI]
    },

    getDependencyAPIs() {
        return [MainViewAPI];
    },

    attach(shell) {
        shell.contributeAPI(TopBarAPI, () => createTopBarAPI(shell))
    },

    extend(shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <TopBar slot={shell.getSlot(componentsSlotKey)}/>});
    }
}];