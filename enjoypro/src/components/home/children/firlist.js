import React,{Component,Fragment} from "react";
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {Switch} from "react-router-dom";
import Details from "./details"
export default class firList extends Component{
    render(){
        let {dataList}=this.props
        console.log(dataList)
        return (
            <Fragment>
                <Switch>
                    <Route path="/details" component={Details} />
                </Switch>
                <div className="firList">
                    {
                        dataList.map((item,index)=>{
                            return <div key={index} className="list">
                                    <h3>{item.group_section.title}</h3>
                                    <div className="tit">{item.group_section.desc}</div>
                                    <ul className="list_dat">
                                        {
                                            item.tabs.map((items,index)=>{
                                                return <li key={index}>
                                                            <Link to="/details">
                                                                    <img src={items.url} alt=""/>
                                                                    <div>{items.title}</div>
                                                                    <span>{items.desc}</span>
                                                            </Link>
                                                        </li>
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                        })
                    }
                </div>
            </Fragment>
        )
    }
    
}
