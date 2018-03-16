import React, {Component} from 'react'
import { Link } from 'react-router'
import './index.scss'
export default class Panel extends Component {
    render() {
        return (
          <div className='panel'>
            <ul>
              <li>
                <Link to=''>
                  <div className='icon3'></div>
                  消息中心
                  <div className='next'></div>
                </Link>
              </li>
              <li>
                <Link to=''>
                  <div className='icon4'></div>
                  我的客服
                  <div className='next'></div>
                </Link>
              </li>
              <li>
                <Link to=''>
                  <div className='icon5'></div>
                  我的设置
                  <div className='next'></div>
                </Link>
              </li>
            </ul>
          
          </div>
        )
    }
}
