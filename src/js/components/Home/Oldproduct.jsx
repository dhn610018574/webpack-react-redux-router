import React, {Component} from 'react'
import { Link } from 'react-router'
import './index.scss'
export default class NewProduct extends Component {
  render(){
    return(
      <div className='oldProduct'>
        <h4>老用户精选理财产品</h4>
        <ul>
          <li>
            <Link to="">
              <div className='product-introl'>
                <div>
                  <span>高回报</span>
                  <p>8.90<i>%</i></p>
                  <p>期望年化收益率</p>
                </div>
                <div>
                  <p>新手共盈计划3MC</p>
                  <p>
                    <span><i>500</i>元起投</span>
                    <span>出借期<i>90</i>天</span>
                    <span>已投<i>25.3%</i></span>
                  </p>
                </div>   
              </div>
            </Link>
          </li>
        </ul>
        <Link to='' className='more'>查看更多理财产品 ></Link>
      </div>       

    )
  }
}