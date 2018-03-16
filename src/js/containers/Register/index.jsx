import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import {CommonHeader} from '../../components'
import { Toast } from 'antd-mobile'
import './index.scss'
export default class Register extends Component {
  constructor(props){
    super(props)
    this.state={}
    this.getInitialData = this.getInitialData.bind(this)
  }
  componentDidMount(){
    document.body.scrollTop = 0
  }
  async getInitialData(){
    let registerPath = `${CONFIGS.smsPath}/verifycode`
    let mobilePhone = this.refs.mobilePhone.value
    console.log(mobilePhone)
    let params = {
      mobilePhone:mobilePhone,
      intent:"1",
      type:"0",
      picCode:""
    }
    let headers = CONFIGS.headers
    try{
      let smsPromise = CRFFetch.Put(registerPath,JSON.stringify(params),headers)
      let result = await smsPromise
      console.log(result)
      if(result && !result.response){
        Toast.info('验证短信已发送，请注意查收')
        this.setState(result)
      }
    }catch(error){
      CRFFetch.handleError(error,Toast,()=>{
        if(error.status === 400){
          error.body.then(data => {
            Toast.info(data.message)
          })
        }
      })
    }
  }


  render() {
    return (
      <div className="register">
        <CommonHeader title='快速注册' url='login'></CommonHeader>
        <div className='registerInfo'>
          <input type="number" placeholder='18302185910' className='tel' ref='mobilePhone'/>
          <input type="number" placeholder='请输入验证码' className='smsCode'/>
          <div className='close'></div>
          <div className='smsBtn' onClick={this.getInitialData}>获取验证码</div>
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
        <div className="toast">
          <div className='sms'>
            <h3>请输入图形验证码</h3>
            <i></i>
            <div className='picCode'>
              <input type="text" placeholder="输入验证码"/>
              <div>
                <img src="https://financeapp-static-uat.crfchina.com/webp2p_static/invests/public/image/news/20180104.png" alt=""/>
              </div>
            </div>
            <div className='submitBtn'>提交</div>
          </div>
        </div>
      </div>
    )
  }
}