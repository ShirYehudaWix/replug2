import React, { FunctionComponent } from 'react';
import style from "./counterSytle.module.css"

export const Counter = (props: {value: number}) => (
    <div className={style.counter}>
        <div>
            this is my counter
            {props.value}
        </div>
    </div>
);