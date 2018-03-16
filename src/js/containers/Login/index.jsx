import React, { Component } from "react";
import { Router, Route, IndexRoute, Link } from "react-router";
import { Toast } from "antd-mobile";
import "./index.scss";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobilePhone: "请输入手机号",
      password: "请输入密码"
    };
  }
  componentWillMount() {
    this._loadMobilePhone();
  }
  componentDidMount() {
    document.body.scrollTop = 0;
    this.mobilePhone.focus();
  }
  handleMobilePhoneChange(event) {
    this.setState({
      mobilePhone: event.target.value
    });
  }
  handlePassWordChange(event) {
    this.setState({
      password: event.target.value
    });
  }
  clearInputVal() {
    this.setState({
      mobilePhone: "请输入手机号"
    });
  }
  handleMobilePhoneBlur(event) {
    this._saveMobilePhone(event.target.value);
  }
  _saveMobilePhone(mobilePhone) {
    localStorage.setItem("mobilePhone", mobilePhone);
  }
  _loadMobilePhone() {
    const mobilePhone = localStorage.getItem("mobilePhone");
    if (mobilePhone) {
      this.setState({
        mobilePhone
      });
    }
  }
  onSubmit(event) {
    const mobilePhone = this.state.mobilePhone;
    const password = this.state.password;
    if (mobilePhone === '请输入手机号') {
      Toast.info("请输入手机号");
    }
    if (password ==='请输入密码') {
      Toast.info("请输入密码");
    }
  }
  render() {
    let mobilePhone = this.state.mobilePhone;
    let password = this.state.password;
    return (
      <div className="login">
        <header className="topBanner">
          <div className="logo" />
          <div className="backBtn" />
        </header>
        <form className="userInfo">
          <input
            type="tel"
            className="name"
            ref={mobilePhone => (this.mobilePhone = mobilePhone)}
            onChange={this.handleMobilePhoneChange.bind(this)}
            value={mobilePhone}
            onBlur={this.handleMobilePhoneBlur.bind(this)}
          />
          <input
            type="password"
            className="psw"
            value={password}
            placeholder={password}
            onChange={this.handlePassWordChange.bind(this)}
          />
          <div className="hiddenBtn" onClick={this.clearInputVal.bind(this)} />
          <div className="loginBtn" onClick={this.onSubmit.bind(this)}>
            登录
          </div>
          <div className="userSet">
            <Link to="forgetPassword">忘记密码</Link>
            <Link to="register">快速注册</Link>
          </div>
          <div className="logo" />
        </form>
      </div>
    );
  }
}
