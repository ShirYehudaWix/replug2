import React, { FunctionComponent } from 'react';
import style from "./counterSytle.module.css"

export const Counter: FunctionComponent = () => (
    <div className={style.counter}>
        <div>
            this is my counter
        </div>
    </div>
);