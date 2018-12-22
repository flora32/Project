const defaultState = {
    dataList:[]
}

export default (state=defaultState,action)=>{
    // console.log(action.type)
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "GET_LIST_FULFILLED":
        
          newState.dataList = action.payload;
           return newState;
        default : break;
    }
    return state;
}