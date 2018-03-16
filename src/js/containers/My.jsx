import React, { Component } from 'react'
import { Link } from 'react-router'
import {
  MyHeader,
  RechargeCashIn,
  Panel,
  AppPanel,
  MyBar
} from '../components'
export default class Find extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <MyHeader />
        <RechargeCashIn />
        <Panel />
        <AppPanel />
        <MyBar />
      </div>
    )
  }
}