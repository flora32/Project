import React,{Component} from "react";
import {connect} from "react-redux"
import NavBar from "./children/navBar"
import List from "./children/firlist"
import {getData_action} from "../../action/actionCreator"
class Home extends Component{
    render(){
        let {dataList} = this.props
        return (
            <div>
                <NavBar />
                <List dataList={dataList}/>
            </div>
        )
    }
    componentDidMount(){
        this.props.getDtata()
    }
}
const mapStateToProps = (state)=>({
    dataList:state.firlist.dataList
})
const mapDispatchToProps = (dispatch)=>({
    getDtata(){
        getData_action(dispatch)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);