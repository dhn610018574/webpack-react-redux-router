import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import { CommonHeader } from '../../components'
import './index.scss'
export default class InvestLog extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div className='investLog'>
        <CommonHeader title="投资记录" url='investDetail'></CommonHeader>
        <div className='logNum'>共 <i>93</i> 位用户投资</div>
        <ul>
          <li>
            <div className='tel'>
              <p>152******00</p>
              <p className='time'>2017-06-27 13:19:00</p>
            </div>
            <div className='sum'>40,000元</div>
          </li>
          <li>
            <div className='tel'>
              <p>152******00</p>
              <p className='time'>2017-06-27 13:19:00</p>
            </div>
            <div className='sum'>40,000元</div>
          </li>
          <li>
            <div className='tel'>
              <p>152******00</p>
              <p className='time'>2017-06-27 13:19:00</p>
            </div>
            <div className='sum'>40,000元</div>
          </li>
        </ul>

      </div>
    )
  }
}