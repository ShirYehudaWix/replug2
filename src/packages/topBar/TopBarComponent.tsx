import React, { FunctionComponent } from 'react';
import './topBarStyle.css';
import {ExtensionSlot, SlotRenderer} from "repluggable";
import {ContributedComponent1} from "./TopBarAPI";

// export const TopBar: FunctionComponent = () => (
//     <div className="topBar">
//         <div>
//             this is my top bar
//         </div>
//
//     </div>
// );



type TopBarComponent = FunctionComponent<{ slot: ExtensionSlot<ContributedComponent1> }>

const slotItemToComp = ({component}: ContributedComponent1) => component

export const TopBar: TopBarComponent = ({slot}) => (
    <div className="topBar">
        <div>
            this is my top bar
        </div>
        <SlotRenderer slot={slot} mapFunc={slotItemToComp}/>

    </div>
)