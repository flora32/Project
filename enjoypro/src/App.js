import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/home";
import Find from "./components/find/find";
import Order from "./components/order/order";
import My from "./components/my/my";
import store from "./store/index";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/find" component={Find} />
              <Route path="/order" component={Order} />
              <Route path="/my" component={My} />
              <Redirect path="/" to="/home" />
            </Switch>
            <div id="footer">
              <ul>
                <li>
                  <NavLink to="/home">
                    <i className="iconfont">&#xe635;</i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/find">
                    <i className="iconfont">&#xe612;</i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order">
                    <i className="iconfont">&#xe657;</i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my">
                    <i className="iconfont">&#xe629;</i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
