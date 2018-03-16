import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class FinanceNews extends Component {
  render(){
    return(
      <div className='financeNews'>
        <div className='newsTitle'>
          <span></span>
          <p>信而富动态</p>
          <Link to='javascript:;'>更多</Link>
        </div>
      </div>
    )
  }
}