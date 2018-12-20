import {createStore,combineReducers,applyMiddleware} from "redux"; //引入redux
import firlist from "./reducers/firlist";//引入reducer
import reduxPromiseMiddleware from "redux-promise-middleware"; 
const reducers = combineReducers({
    firlist
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;