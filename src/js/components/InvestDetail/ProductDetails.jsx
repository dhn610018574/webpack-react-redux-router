import React, { Component } from 'react'
import { Link } from 'react-router'
import './index.scss'
export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    let float = Common.toDecimal2(parseFloat(this.props.detailData.finishAmount)/parseFloat(this.props.detailData.planAmount))
    let investunit = Common.comdify(parseInt(this.props.detailData.investunit)+"")
    let planAmount = this.props.detailData.planAmount/10000
    let reset = (this.props.detailData.planAmount - this.props.detailData.finishAmount)/10000
    if(!float){
      float = 0
    }
    let width = float+"%"
    return(
      <div className='productDetails'>
      
        <div className='timeAndTips'>
          <h6 className='closeTime'>截止日期：{Common.formatDate(this.props.detailData.closeTime, "-").YMD}</h6>
          <div className='tips'>
          {
            this.props.detailData.isFull=="1"  && <span>满标</span>
          }
          {
            this.props.detailData.tipsStart && <span>{this.props.detailData.tipsStart}</span>
          }
          {
            this.props.detailData.tipsEnd && <span>{this.props.detailData.tipsEnd}</span>
          }
          </div>
        </div>
        <p className='hopeYearRate'><i className='left'></i>期望年化收益率<i className='right'></i></p>
        <p className='yearRate'>{this.props.detailData.yInterestRate}<e>%</e></p>
        <div className='investLimit'>
          <div>
            <p>起投金额</p>
            <p>{investunit}元</p>
          </div>
          <div>
            <p>锁定出借期</p>
            <p>{this.props.detailData.freezePeriod}天</p>
          </div>
          <div>
            <p>计划金额</p>
            <p>{planAmount}万元</p>
          </div>

        </div>
        <div className='progress'>
          <p className='speed'>
            <span>进度 {float}%</span>
            <span>剩余可投{reset}万元</span>
          </p>
          <div className='progressBar'>
            <div className='finished' style={{ width: width }}></div>
          </div>
        </div>
        <Link to='investLog' className='investNum'>已有<i>{this.props.count}</i>人投资<span></span></Link>
      </div>
    )
  }
}