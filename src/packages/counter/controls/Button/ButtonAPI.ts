// import {MINUS, PLUS} from "../../store/actionTypes";
import {Shell, SlotKey} from "repluggable";
//
export interface ButtonAPI{
    setCount(sign: string) :void
}

export const ButtonAPI:SlotKey<ButtonAPI>={
    name:"ButtonApi",
    public:true
}

// export function createButtonApi(shell:Shell){
//     return {
//         setCount(sign: string) {
//             shell.getStore().dispatch({type: sign === "+" ? PLUS : MINUS})
//         }
//     }
// }