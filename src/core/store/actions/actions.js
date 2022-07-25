import { SET_ARRAY, SET_ROWS } from "./actionTypes";

export const setRows = (rows)=>{
    return {
        type: SET_ROWS,
        value: rows
    };
};

export const setPersonArray = (array)=>{
    return {
        type: SET_ARRAY,
        value: array
    };
};

