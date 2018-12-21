import React,{Component} from "react";
import {connect} from "react-redux";
import {getOrder_action} from "../../action/actionCreator";
import "../../common/css/order.css"

class Order extends Component{
    
    render(){
        let {orderinfo}  = this.props
        console.log(orderinfo)
        return (
            <div className="pro">
                <div className="top_pic">
                    {
                        orderinfo.length !=0 ?orderinfo[0].data.tabs.map((item,index)=>{
                            return <li key={index}>
                                        <img src={item.url}/>
                                </li>
                        }):""
                    }
                </div>  
                <div className="prolist">
                    {
                        orderinfo.length !=0 ?orderinfo[1].data.tabs.map((item,index)=>{
                            return <li key={index}>
                                        <div className="pro_left"><img src={item.url}/></div>
                                        <div className="pro_right">
                                            <h3>{item.title}</h3>
                                            <p className="right_dec">{item.desc}</p>
                                            <p className="right_con">
                                                <span>
                                                    <b className="huiyuan"><i>会员价：</i>￥{item.special_price.toString().slice(0,2)}元</b>
                                                    <b className="shichang"><i>市场价：</i>￥{item.enjoy_price.toString().slice(0,2)}元</b>
                                                </span>
                                                <a>立即购买</a>
                                            </p>
                                        </div>                                        
                                   </li>
                        }):""
                    } 
                </div>         
            
            </div>
        )
    }
    componentDidMount(){
        this.props.orderlist()
    }
}

const mapStateToProps = (state)=>({
    orderinfo:state.orderdata.orderlist

})


const mapDispatchToProps = (dispatch)=>({
    orderlist(){
        getOrder_action(dispatch)
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Order);