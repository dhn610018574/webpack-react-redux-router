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
                  <div className='icon1'></div>
                  我的投资
                  <div className='next'></div>
                </Link>
              </li>
              <li>
                <Link to=''>
                  <div className='icon2'></div>
                  红包/优惠券
                  <div className='next'></div>
                </Link>
              </li>
            </ul>
          
          </div>
        )
    }
}
