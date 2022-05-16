import { useReducer } from "react";

import { v4 as uuid } from 'uuid';

type Person = {
    id: string;
    name: string;
}

type ActionType = {
    type: string;
    payload?: {
        name?:string;
        id?:string;
    }
}

const initialState: Person[] = [];

const reducer = (state: Person[], action:ActionType) => {

    switch(action.type) {
        case 'ADD':
            if (action.payload?.name) {

                const data = [...state];

                data.push({
                    id: uuid(),
                    name: action.payload?.name
                })

                return data;
            }
        break;
        case 'DEL':
            if (action.payload?.id) {

                let data = [...state];
                data = data.filter(item => item.id !== action.payload?.id);
                return data;
            }
        break;
        case 'ORDER':
            let data = [...state];
            data = state.sort((a, b) => (a.name > b.name) ? 1 : -1);
            return data;
        break;
    }

    return state;
}

export const usePeopleList = () => {
    return useReducer(reducer, initialState);
}