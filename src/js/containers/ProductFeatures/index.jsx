import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import { CommonHeader } from '../../components'
import './index.scss'
export default class ProductFeatures extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div className='productFeatures'>
        <CommonHeader title='方案特色' url='investDetail'></CommonHeader>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}