import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import { CommonHeader } from '../../components'
import './index.scss'
export default class ProductDetail extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div className='productDetail'>
        <CommonHeader title='方案详情' url='investDetail'></CommonHeader>
        <table>
          <tbody>
            <tr>
              <td>出资方式</td>
              <td>一次性出借一定金额给一位或多位现金贷项目借款人</td>
            </tr>
            <tr>
              <td>出资金额</td>
              <td>人民币1,000元起，出借金额为1,000元的整数倍</td>
            </tr>
            <tr>
              <td>收益处理方式</td>
              <td>出借人获得的收益（如有），在出借期内用于循环出借</td>
            </tr>
            <tr>
              <td>锁定投资期限</td>
              <td>180天</td>
            </tr>
            <tr>
              <td>计息开始时间</td>
              <td>资金出借日（出借资金成功匹配债权日）</td>
            </tr>
            <tr>
              <td>退出方式</td>
              <td>锁定出借期内，不能提前退出计划。到期自动退出</td>
            </tr>
            <tr>
              <td>风险提示</td>
              <td>本方案不保证收益率（历史收益率基于历史数据测算，不代表未来收益表现）出借有风险，请谨慎选择</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}