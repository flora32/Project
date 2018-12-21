import {createStore,combineReducers,applyMiddleware} from "redux"; //引入redux
import firlist from "./reducers/firlist";//引入reducer
<<<<<<< HEAD
import reduxPromiseMiddleware from "redux-promise-middleware"; 
const reducers = combineReducers({
    firlist
=======
import orderdata from "./reducers/orderdata";//引入reducer

import reduxPromiseMiddleware from "redux-promise-middleware"; 
const reducers = combineReducers({
    firlist,
    orderdata
>>>>>>> syx
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;