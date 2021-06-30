import {AnyAction} from "redux";
import * as actionTypes from "../store/actionTypes" ;

export interface ButtonProps {
    children: string,
    setCount: (arg: string) => void
}
export interface ButtonState {
    children: string,
    setCount: (arg: string) => void
}

export interface ButtonStateProps {
    children: string,
}

export interface ButtonDispatchProps {
    setCount: (arg: string) => void
}

export interface CounterState {
    counter: number
}
export interface ControlState {
    reduce:CounterState
}


export type DispatchType = (args: CounterAction) => CounterAction

export type CounterAction = {
    type: string
}

