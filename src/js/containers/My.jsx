import React, { Component } from 'react'
import { Link,browserHistory } from 'react-router'
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
  handleClick(){
    browserHistory.push({
      pathname:'login'
    })
  }
  render() {
    return (
      <div>
        <MyHeader goLogin={this.handleClick.bind(this)}/>
        <RechargeCashIn />
        <Panel />
        <AppPanel />
        <MyBar />
      </div>
    )
  }
}