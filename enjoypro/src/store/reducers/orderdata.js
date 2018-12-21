const defaultState = {
    orderlist:[]
}

export default (state=defaultState,action)=>{
    console.log(action.payload)
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "GET_ORDER_FULFILLED":
        newState.orderlist = action.payload; 
        return newState;
        default : break;
    }
    return state;
}