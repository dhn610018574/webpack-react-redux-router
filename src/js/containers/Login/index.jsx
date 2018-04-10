import React, { Component } from "react";
import { Router, Route, IndexRoute, Link } from "react-router";
import { Toast } from "antd-mobile";
import "./index.scss";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobilePhone: "",
      password: "",
      placeholder:{
        mobilePhone: "请输入手机号",
        password: "请输入密码",
      }
    };
  }
  componentWillMount() {

  }
  componentDidMount() {
    document.body.scrollTop = 0;
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
      mobilePhone:''
    })
    this.mobilePhone.focus();
  }
  onSubmit() {
    const mobilePhone = this.state.mobilePhone;
    const password = this.state.password;
    console.log(mobilePhone,password)
    if (mobilePhone === '') {
      Toast.info("请输入手机号",2);
    }
    if (password ==='') {
      Toast.info("请输入密码",2);
    }
  }
  backBtnClick(){
    history.go(-1);
  }
  render() {
    let mobilePhone = this.state.mobilePhone;
    let password = this.state.password;
    return (
      <div className="login">
        <header className="topBanner">
          <div className="logo" />
          <div className="backBtn" onClick={this.backBtnClick.bind(this)}/>
        </header>
        <form className="userInfo">
          <input
            type="tel"
            className="name"
            value={this.state.mobilePhone}
            placeholder={this.state.placeholder.mobilePhone}
            ref={mobilePhone => (this.mobilePhone = mobilePhone)}
            onChange={this.handleMobilePhoneChange.bind(this)}
          />
          <input
            type="password"
            className="psw"
            value={this.state.password}
            placeholder={this.state.placeholder.password}
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
