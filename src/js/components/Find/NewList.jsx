import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class NewsList extends Component {
  render(){
    return(
      <div>
        <ul className='newsList'>
          <li>
            <div className='newsTxt'>
              <p>信而富交易笔数突破2000万笔 业务增长迅猛</p>
              <p>2017-07-15</p>
            </div>
            <div className='newsImg'>
            </div>
          </li>
          <li>
            <div className='newsTxt'>
              <p>信而富交易笔数突破2000万笔 业务增长迅猛</p>
              <p>2017-07-15</p>
            </div>
            <div className='newsImg'>
            </div>
          </li>
          <li>
            <div className='newsTxt'>
              <p>信而富交易笔数突破2000万笔 业务增长迅猛</p>
              <p>2017-07-15</p>
            </div>
            <div className='newsImg'>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}