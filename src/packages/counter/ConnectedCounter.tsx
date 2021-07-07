import { connectWithShell, Shell } from 'repluggable';

import {Counter} from "./CounterComponent";
import {CounterAPI} from "./counterApis";
interface CounterDispatchProps{
    something:()=>void
}
const mapDispatchToProps = (shell: Shell): CounterDispatchProps => {

return {
    something:()=>{}
}

};

interface CounterStateProps{
    value:number
}

const mapStateToProps = (shell: Shell): CounterStateProps => {
    const counterApi = shell.getAPI(CounterAPI);

    return {
        value:counterApi.counterValue()
    };
};

export const createConnectedCounter = (boundShell: Shell) =>
    connectWithShell<{}, {}, CounterStateProps, {}>(
        mapStateToProps,
        mapDispatchToProps,
        boundShell,
    )(Counter);