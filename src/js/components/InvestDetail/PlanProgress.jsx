import React ,{Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class PlanProgress extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const saleTime = Common.formatDate(this.props.progress.saleTime,'-').YMD
    const matchTime = Common.formatDate(this.props.progress.saleTime+86400,'-').YMD
    const endTime = Common.formatDate(this.props.progress.saleTime+2592000,'-').YMD
    return(
      <div className='planProgress'>
        <h4><i></i>计划进度</h4>
        <div className='planStep'>
          <div className='steps'>
            <div className='icon1'><div></div></div>
            <p>开始认购</p>
            <p>{saleTime}</p>
          </div>
          <div className='steps'>
            <div className='icon2'><div></div></div>
            <p>匹配债权</p>
            <p>{matchTime}</p>
          </div>
          <div className='steps'>
            <div className='icon3'><div></div></div>
            <p>到期结算</p>
            <p>{endTime}</p>
          </div>
        </div>
      </div>
    )
  }
}