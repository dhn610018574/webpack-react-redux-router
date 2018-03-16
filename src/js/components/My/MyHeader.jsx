import React, {Component} from 'react'
import { Link } from 'react-router'
import './index.scss'
export default class MyHeader extends Component {
    render() {
        return (
            <div className="myHeader">
              <div className='avator'>
                <div className='photo'></div>
                <span>点击登录</span>
              </div>
              <div className='assets'>
                <p className='total_assets'>总资产(元)<i></i></p>
                <p className='sum'>******</p>
              </div>
              <div className='sum_detail'>
                <div className='cumulative'>
                    <p>累计收益(元)</p>
                    <p className='money'>******</p>
                
                </div>
                <div className='available'>
                    <p>可用余额(元)</p>
                    <p className='money'>******</p>                             
                </div>
              </div>
            </div>
        )
    }
}
