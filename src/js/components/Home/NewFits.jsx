import React ,{Component} from 'react'
import {Link} from 'react-router'
import './index.scss'
export default class NewFits extends Component {
  render() {
    return(
      <div className='fits'>
        <div className='fitname'>
          <h3>新手福利</h3>
          <Link to='NoviceWelfare'></Link>
        </div>
        <div className='steps'></div>
        <a className="register" href=''>立即注册</a>
      </div>
    )
  }
}