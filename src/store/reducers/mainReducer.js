import {GET_STOCK, SET_LIMIT, SET_LOADER} from "../actionTypes";

const initialState = {
    stock: [],
    limit: 10,
    loader: false
}
export const main = (state = initialState, action) => {
    switch (action.type){
        case GET_STOCK: {
            return {...state, stock: action.payload}
        }
        case SET_LIMIT: {
            return {...state, limit: action.payload}
        }
        case SET_LOADER: {
            return {...state, loader: action.payload}
        }
        default : {
            return state
        }
    }
}