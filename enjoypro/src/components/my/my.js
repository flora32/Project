import React, { Component } from "react";
import loginimg from "../../common/img/login.png";
import "../../common/css/my.css";

export default class My extends Component {
  render() {
    return (
      <div className="login_all">
        <div className="login">
          <img src={loginimg} />
        </div>
        <div className="login_input">
          <p className="phone">
            <input type="tel" placeholder="手机号" />
          </p>
          <p className="totp">
            <input type="tel" placeholder="短信验证码" className="off" />
            <a className="mode">获取验证码</a>
          </p>
          <a className="go">登录</a>
        </div>
        <div className="tips">
          <p>未注册的用户登录后自动创建账户</p>
          <p>
            登录即表示您同意
            <a href="https://topic.ricebook.com/topicpage/agreement.html">
              用户协议
            </a>
          </p>
        </div>
      </div>
    );
  }
}
