import React, {Component} from 'react'
import { Link } from 'react-router'
import './index.scss'
export default class NewProduct extends Component {
  constructor(props,context){
    super(props)
  }
  render(){
    return(
      <div className='newProduct'>
        <h4>新手专享理财产品</h4>
        <ul>
          <li>
            <Link to="investDetail">
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
      </div>       

    )
  }
}