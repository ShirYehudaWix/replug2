import React, {FunctionComponent, useState} from 'react';
import style from "../counterSytle.module.css"
import {Button2} from "./Button/Button2";

export const Controls: FunctionComponent = () => {
const [count,setCount]=useState(0)

 return   (

        <div className={style.controls}>
            <div>
                this is my controls
            </div>

            <Button2  >+</Button2>
            <Button2  >-</Button2>

        </div>
    );
}