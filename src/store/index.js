import {applyMiddleware, combineReducers, createStore} from "redux";
import {main} from "./reducers/mainReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootState = combineReducers({
    main
})

export const store = createStore(rootState, composeWithDevTools(applyMiddleware(thunk)))