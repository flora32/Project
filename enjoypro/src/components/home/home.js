import React,{Component} from "react";
<<<<<<< HEAD
import {connect} from "react-redux"
import NavBar from "./children/navBar"
import List from "./children/firlist"
import {getData_action} from "../../action/actionCreator"
=======
import {connect} from "react-redux";
import NavBar from "./children/navBar";
import List from "./children/firlist";
import {getData_action} from "../../action/actionCreator";


>>>>>>> syx
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
<<<<<<< HEAD
const mapStateToProps = (state)=>({
    dataList:state.firlist.dataList
})
=======


const mapStateToProps = (state)=>({
    dataList:state.firlist.dataList
})


>>>>>>> syx
const mapDispatchToProps = (dispatch)=>({
    getDtata(){
        getData_action(dispatch)
    }
})
<<<<<<< HEAD
=======


>>>>>>> syx
export default connect(mapStateToProps,mapDispatchToProps)(Home);