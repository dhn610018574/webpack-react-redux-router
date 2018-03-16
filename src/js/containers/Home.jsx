import React, { Component } from 'react'
import { Link } from 'react-router'
import {
  Title,
  Banner,
  NewFits,
  NewProduct,
  OldProduct,
  BottomMenu,
  Bottom,
  HomeBar
} from '../components'
export default class Home extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <Title />
        <Banner />
        <NewFits />
        <NewProduct />
        <OldProduct />
        <BottomMenu />
        <Bottom />
        <HomeBar />
      </div>
    )
  }
}