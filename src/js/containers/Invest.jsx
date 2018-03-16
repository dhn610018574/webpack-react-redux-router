import React, { Component } from 'react'
import { Link } from 'react-router'
import {
  InvestHeader,
  InvestPanel,
  NcpProduct,
  InvestBar
} from '../components'
export default class Invest extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <InvestHeader />
        <InvestPanel />
        <NcpProduct />
        <InvestBar />
      </div>
    )
  }
}