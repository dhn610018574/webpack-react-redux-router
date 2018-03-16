import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { CommonHeader } from '../../components'
import './index.scss'
export default class NoviceWelfare extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <CommonHeader title='新手福利' url='investDetail'></CommonHeader>
        <div className="banner"></div>
        <div className='fit_flow'>
          <div className='flow1'>
            <div className='flow_name'>完成注册</div>
            <p className='des'>送<i>100</i>元红包，适用于全部方案</p>
            <div className='flow_hb'>
              <div className='hb_je'>
                <p><e>80</e>元</p>
                <p>满5,000元返现</p>
              </div>
              <div className='hb_je'>
                <p><e>20</e>元</p>
                <p>满1,000元返现</p>
              </div>
            </div>
          </div>
          <div className='flow1'>
            <div className='flow_name'>完成银行存管开户</div>
            <div className='flow_jf'>
              <div className='hb_jf'></div>
              <p className='jf'>送<e>10</e>积分</p>
              <p className='jf'>积分可用于抽奖和商城兑换</p>
            </div>
          </div>
          <div className='flow1 flow3'>
            <div className='flow_name'>完成首次投资</div>
            <p className='des'>再送<i>500</i>元红包，适用于180天及以上方案</p>
            <div className='flow_hb'>
              <div className='hb_je'>
                <p><e>300</e>元</p>
                <p>满100,000元返现</p>
              </div>
              <div className='hb_je'>
                <p><e>200</e>元</p>
                <p>满50,000元返现</p>
              </div>
            </div>
          </div>
          <h4><i></i>活动规则<i></i></h4>
          <p className='regular'>1、返现红包可在信而富理财APP“我的”-“优惠红包”中查看，通过APP按优惠红包使用说明投资后即可提现，详见优惠红包使用规则;</p>
          <p className='regular'>2、现金红包将在投资完成后3个工作日内发至账户，可直接提现；</p>
          <p className='regular'>3、活动详情可咨询信而富理财，客服热线: <br />400-688-8692，服务时间：9:00-21:00</p>
        </div>
      </div>
    )
  }
}