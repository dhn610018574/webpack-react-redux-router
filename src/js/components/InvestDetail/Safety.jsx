import React ,{Component} from 'react'
import {Link} from 'react-router'
import './index.scss'
export default class Safety extends Component {
  render(){
    return(
      <div className='safety'>
        <div className='safeLevel'>
          <div className='stars'>
            <div className='icon1'></div>
            <div className='itemName'>安全等级参考</div>
            <div className='starIcon'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p>本金、收益可能会有一定幅度的波动</p>
        </div>
        <div className='investor'>
          <div className='stars'>
            <div className='icon1'></div>
            <div className='itemName'>投资人资格</div>
            <Link to=''></Link>
          </div>
          <p>风险承受能力“平衡型”及以上</p>
        </div>
      </div>
    )
  }
}