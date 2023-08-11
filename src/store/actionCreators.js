import axios from "axios";
import {token} from "../tokens";
import {GET_STOCK, SET_LIMIT, SET_LOADER} from "./actionTypes";

export const fetchingStock = (limit) => async (dispatch) => {
    try {
        dispatch({type: SET_LOADER, payload: true})
        const response = await axios(`https://api.iex.cloud/v1/data/CORE/VOLUME_BY_VENUE/MSFT?token=${token}&limit=${limit}`)
        const {data} = await response
        dispatch({type: GET_STOCK, payload: data})
        dispatch({type: SET_LOADER, payload: false})

    }catch (e) {
        console.log(e)
        dispatch({type: SET_LOADER, payload: false})
    }
}
export const setPrevPage = (limit) => {
    return {type: SET_LIMIT, payload: limit < 20 ? 10 : limit - 10}
}
export const setNextPage = (limit) => {
    return {type: SET_LIMIT, payload: limit + 10}
}
