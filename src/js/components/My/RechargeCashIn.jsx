import React, {Component} from 'react'
import { Link } from 'react-router'
import './index.scss'
export default class MyHeader extends Component {
    render() {
        return (
            <div className="recharge_cashIn">
              <div className="cashIn">
                <Link to='#'>
                  <span className='bg_cash'></span>
                  <span>提现</span>
                </Link>
              </div>
              <div className="recharge">
                <Link to='#'>
                  <span className='bg_recharge'></span>
                  <span>充值</span>
                </Link>
              </div>
            </div>
        )
    }
}
