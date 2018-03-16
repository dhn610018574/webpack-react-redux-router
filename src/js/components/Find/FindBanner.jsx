import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class Banner extends Component {
  render(){
    return(
      <div className='findBanner'>
        <div className='banner1'><Link to='#'></Link></div>
        <div className='banner2'><Link to='#'></Link></div>
        <div className='banner3'><Link to='#'></Link></div>
        <div className='banner4'><Link to='#'></Link></div>
      </div>
    )
  }
}