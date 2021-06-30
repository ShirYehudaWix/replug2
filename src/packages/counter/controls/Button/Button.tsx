import style from "../../App.module.css"
import {ButtonDispatchProps, ButtonProps, ButtonStateProps, DispatchType} from "../../types/types";
import {MINUS, PLUS} from "../../store/actionTypes";
import {connect} from "react-redux";
import {connectWithShell, Shell} from "repluggable";
import React from "react";

export const Button : React.FC<ButtonDispatchProps>= ({setCount,children}) => {
    return <button className={style.button} onClick={() => setCount(children?children.toLocaleString():"")}>
        {children}
    </button>
}
const mapStateToProps = (shell: Shell) => {
return{}

}
// const mapDispatchToProps = ( dispatch: DispatchType) => {
//     return {
//         setCount(sign: string) {
//             dispatch({type: sign === "+" ? PLUS : MINUS})
//         }
//     }
// }
const mapDispatchToProps = (shell: Shell, dispatch: DispatchType) => {
    return {
        setCount(sign: string) {
            dispatch({type: sign === "+" ? PLUS : MINUS})
        }
    }
}
export const createButton = (boundShell: Shell) =>
    connectWithShell<{},{},{},ButtonDispatchProps>(
        mapStateToProps, mapDispatchToProps, boundShell
    )(Button)
// export const WrappedButton=connect(null,mapDispatchToProps)(Button)