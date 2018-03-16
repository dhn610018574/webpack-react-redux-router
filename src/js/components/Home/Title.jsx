import React ,{Component} from 'react'
import {Link} from 'react-router'
import './index.scss'
export default class Title extends Component {
  render() {
    return(
      <div className='title'>
        <div className='avator'><Link to=''></Link></div>
        <div className='home_title'>理财</div>
        <div className='popover'></div>
      </div>
    )
  }
}