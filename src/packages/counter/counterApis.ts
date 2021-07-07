import { SlotKey } from 'repluggable';

export const CounterAPI: SlotKey<CounterAPI> = {
    name: 'Counter API',
    public: true,
};

export interface CounterAPI {
    counterValue:()=>number;
}