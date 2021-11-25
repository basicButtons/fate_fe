import {createStore,applyMiddleware,combineReducers} from "redux"
import Thunk from "redux-thunk"
import reducer from "./reducer"

const store = createStore(
    combineReducers(reducer),
    applyMiddleware(Thunk)
)
export default store