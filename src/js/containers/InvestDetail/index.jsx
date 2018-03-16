import React, { Component } from 'react'
import { Link } from 'react-router'
import { Toast } from 'antd-mobile'
import './index.scss'
import {
  InvestDetailTitle,
  ProductDetails,
  PlanProgress,
  Safety,
  ProductDescription
} from '../../components'
export default class InvestDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      contractPrefix: props.location.query.contractPrefix,
      count: 0
    }
  }
  show() {
    this.setState({
      isShow: true
    })
  }
  hide() {
    this.setState({
      isShow: false
    })
  }
  componentDidMount() {
    document.body.scrollTop = 0;
    this.getInitialData();
  }
  async getInitialData() {
    let investmentPath = `${CONFIGS.investmentPath}/product/${this.state.contractPrefix}/detail`
    let recordPath = `${CONFIGS.investmentPath}/product/record?${this.state.contractPrefix}&pageNumber=0&pageSize=20`
    try {
      let fetchPromise = CRFFetch.Get(investmentPath)
      let recordPromise = CRFFetch.Get(recordPath)

      let result = await fetchPromise
      let recordResult = await recordPromise
      if(result && !result.response) {
        this.setState({
          isShow: false
        })
        this.setStatus(result.data)
      }
      if (recordResult && !recordResult.response) {
        this.setStatus({
          count: recordResult.data.count
        })
      }
    }catch(error){
      this.setState({
        isShow: false
      })
      CRFFetch.handleError(error, Toast, () => {
        if (error.status === 400) {
          error.body.then(data => {
            Toast.info(data.message)
          })
        }
      })
    }
  }
  setStatus(result) {
    this.setState(result)
  }

  render() {
    const overFlow = this.state.isShow == true ? "hidden" : ""
    const display = this.state.isShow == true ? "block" : "none"
    return (
      <div style={{ overflowY: overFlow }}>
        <InvestDetailTitle url='home' classNo={this.state.classNo} />
        <ProductDetails detailData={this.state} count={this.state.count} />
        <PlanProgress progress={this.state} />
        <Safety />
        <ProductDescription />
        <div className='investBtn' onClick={this.show.bind(this)}>马上投资</div>
        <div className='popup' style={{ display: display }}>
          <div className='mask'>
            <div className='mask_title'>投资<i onClick={this.hide.bind(this)}></i></div>
            <div className='popContent'>
              <p className='hope'>
                <span>期望年化收益率<i>7.00%</i></span>
                <span>锁定出借期<i>30天</i></span>
              </p>
              <p className='residue'>投资可用余额:<i>3666</i>元</p>
              <div className='add'>
                <input type="button" className='minus' />
                <input type="tel" className='num' placeholder='500' />
                <input type="button" className='add' />
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
            <Link to='' className='investBtn1'>马上加入</Link>
            {/*<Link to='' className='investBtn1'>余额不足，去充值</Link> */}
          </div>
        </div>
      </div>
    )
  }
}