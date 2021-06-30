import {AnyAction} from "redux";
import {CounterState} from "./../types/types";
import * as actionTypes from "./actionTypes"
const reducer=(
    state:CounterState={counter:0},
    action:AnyAction
):CounterState=>{
    switch(action.type){
        case actionTypes.PLUS:
            return {counter:state.counter +1}
        case actionTypes.MINUS:
            return{
                counter: state.counter-1
            }
        default:
            return state
    }
}
export default reducer;