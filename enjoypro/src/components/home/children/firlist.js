import React,{Component} from "react";

export default class firList extends Component{
    render(){
        let {dataList}=this.props
        console.log(dataList)
        return (
            <div className="firList">
                <h3>每周精选餐饮</h3>
                <div>几年几号更新</div>
                
            </div>
        )
    }
    
}
