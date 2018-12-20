import React,{Component} from "react";
import {Link} from "react-router-dom";
import logoPng from "../../../common/img/logo.png"
export default class NavBar extends Component{
    render(){
        return (
            <div className="headNav">
                <div className="left">
                    <Link to="/home">分类</Link>
                </div>
                <div className="middle">
                    <img id="logo" src={logoPng} alt="logo"/>
                    <span>北京^</span>
                </div>
                <div className="right">
                    <a className="iconfont">&#xe629;</a>
                    <a className="iconfont">&#xe6cf;</a>
                </div>
            </div>
        )
    }
}