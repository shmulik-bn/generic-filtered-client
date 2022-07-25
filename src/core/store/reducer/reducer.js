import { SET_ARRAY, SET_ROWS } from "../actions/actionTypes";


const initialState = { 
    array: [],
    rows: []
};

const personData = (state = initialState, action) =>{
    switch (action.type) {
        case SET_ROWS:
            return {...state, ...{ rows: action.value }};
        case SET_ARRAY:
            return {...state, ...{ array: action.value }};
        default:
            console.log("there is no such action type:", action.type);
            break;
    }
    return state;
}
export default personData
