import React, { Component } from 'react'
import { Link } from 'react-router'
import {
  Header,
  FindBanner,
  FinanceNews,
  NewList,
  FindBar
} from '../components'
export default class Find extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <Header />
        <FindBanner />
        <FinanceNews />
        <NewList />
        <FindBar />
      </div>
    )
  }
}