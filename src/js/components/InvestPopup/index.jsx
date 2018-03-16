import React ,{Component} from 'react'
import {Link} from 'react-router'
import './index.scss'
export default class InvestPopup extends Component {
  render () {
    return(
      <div className='popup'>
        <div className='mask'>
          <div className='mask_title'>投资<i></i></div>
          <div className='popContent'>
            <p className='hope'>
              <span>期望年化收益率<i>7.00%</i></span>
              <span>锁定出借期<i>30天</i></span>
            </p>
            <p className='residue'>投资可用余额:<i>3666</i>元</p>
            <div className='add'>
              <input type="button" className='minus'/>
              <input type="number" className='num' placeholder='500'/>
              <input type="button" className='add'/>
            </div>
            <p className='expected'>预期收益:<i>150</i>元 (同期银行活期收益为1.3元)</p>
            <Link className='chooseSpot' to=''>
                <div className='icon'></div>
                <p>选择返现券</p>
                <div className='goSpot'></div>
            </Link>
            <div className='agreement'>
              <span className='active'></span>
              <span>
                我已阅读并同意
                <Link to=''>《现金贷出借人服务协议》、</Link>
                <Link to=''>委托信而匹配富借款人</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}