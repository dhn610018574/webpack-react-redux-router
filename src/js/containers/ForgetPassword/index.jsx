import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import {CommonHeader} from '../../components'
import '../Register/index.scss'
export default class ForgetPassword extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div className="register">
        <CommonHeader title='忘记密码' url='login'></CommonHeader>
        <div className='registerInfo'>
          <input type="number" placeholder='18302185910' className='tel'/>
          <input type="number" placeholder='请输入验证码' className='smsCode'/>
          <div className='close'></div>
          <div className='smsBtn'>获取验证码</div>
        </div>
        <div className='registerProtocol'>
          <span className='checkBox active'></span>
          <span className='protocol'>
            我已阅读并同意
            <Link to=''>《信而富平台注册协议》</Link>
          </span>
        </div>
        <div className='registerNextBtn'>下一步</div>
        <div className='logo'></div>
      </div>
    )
  }
}