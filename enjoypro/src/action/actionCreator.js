import {fetch} from "whatwg-fetch"
export const getData_action = (dispatch)=>{
    dispatch({
        type:"GET_LIST",
        payload:new Promise(resolve=>{
            let url = "https://api.ricebook.com/hub/home/v1/web/week_choice.json?city_id=140&page=0"
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                resolve(data)
            })
        })
    })
<<<<<<< HEAD
}
=======
}
export const getOrder_action = (dispatch)=>{
    dispatch({
        type:"GET_ORDER",
        payload:new Promise(resolve=>{
            let url = "https://api.ricebook.com/hub/home/v1/mini_app/homepage.json"
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data)
                resolve(data)
            })
        })
    })
}
>>>>>>> syx
