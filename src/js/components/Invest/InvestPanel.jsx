import React, {Component} from 'react'
import { Link } from 'react-router'
export default class Investpanel extends Component {
    render() {
        return (
            <div className="investpanel">
              <div className='plan'>
                <div><p className='active total'>全部</p></div>
                <div><p className='plan_name'>短期计划</p><p className='when_long'>(≤180天)</p></div>
                <div><p className='plan_name'>中期计划</p><p className='when_long'>(180天~360天)</p></div>
                <div><p className='plan_name'>长期计划</p><p className='when_long'>(＞360天)</p></div>
              </div>
              <InvestLog/> 
              <SelectPanel/>           
            </div>
        )
    }
}
class InvestLog extends Component {
  render() {
    return(
      <ul className='investLog'>
        <li>
          <p><i>136******82</i><i>幸福月盈20180315</i><i>出资10,000元</i><i>5分钟前</i></p>
        </li>
      </ul>
    )
  }
}
class SelectPanel extends Component {
  render() {
    return(
      <div className='selectPanel'>
        <div className='rate'>
          <p>收益率<i></i></p>
        </div>
        <div className='remainDays'>
          <p>剩余天数<i></i></p>
        </div>
        <div className='payment'>
          <div className='active'>按月付息</div>
          <div>到期付息</div>
        </div>
      </div>
    )
  }
}

