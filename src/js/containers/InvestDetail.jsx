import React, { Component } from 'react'
import { Link } from 'react-router'
import {
  InvestDetailTitle,
  ProductDetails,
  PlanProgress,
  Safety,
  ProductDescription
} from '../components'
export default class InvestDetail extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <InvestDetailTitle />
        <ProductDetails />
        <PlanProgress />
        <Safety />
        <ProductDescription />
        <div className='investBtn' >马上投资</div>
      </div>
    )
  }
}