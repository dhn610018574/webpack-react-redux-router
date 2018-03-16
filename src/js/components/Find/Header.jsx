import React, {Component} from 'react'
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory} from 'react-router'
import './index.scss'
export default class Header extends Component {
  render(){
    return(
      <div className='findHeader'>
        <div className='header'>   
          <p>发现</p>
        </div>
      </div>
    )
  }
}