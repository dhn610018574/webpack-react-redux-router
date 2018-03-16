import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { CommonHeader } from '../../components'
import './index.scss'
let MFHeight = 0
let WCSHeight = 0
let BDMHeight = 0
let FAHeight = 0

export default class RiskManagement extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <CommonHeader title='风险控制' url='home'></CommonHeader>
        <TabComponent></TabComponent>
      </div>
    )
  }
}
class TabController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  check_title_index(index) {
    return index === this.state.currentIndex ? 'active' : ''
  }

  handleScroll(index) {
    let top = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
    switch (index) {
      case 0:
        top = 0
        console.log(top)
        break;
      case 1:
        top = MFHeight + 8
        console.log(top)
        break;
      case 2:
        top = MFHeight + WCSHeight + 15
        console.log(top)
        break;
      case 3:
        top = MFHeight + WCSHeight + BDMHeight + 22
        console.log(top)
        break;
    }
    scrollTo({ 'behavior': 'smooth', top: top })
  }
  render() {
    const that = this;
    return (
      <div>
        {/*动态生成tab*/}
        <ul className='aboutTab'>
          {
            React.Children.map(that.props.children, (element, index) => {
              return (
                <li
                  href='javascript:;'
                  onClick={() => { that.setState({ currentIndex: index }); that.handleScroll(index) }}
                  className={that.check_title_index(index)}
                >
                  {element.props.name}
                </li>
              )
            })
          }
        </ul>
        {/*tab内容*/}
        <div className="tabContent">
          {
            React.Children.map(that.props.children, (element, index) => {
              return (
                <div className='show'>
                  {element}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

class TabComponent extends Component {
  render() {
    return (

      <TabController>
        <div name='小额分散'>
          <Microfinance />
        </div>
        <div name='风控体系'>
          <WindControlSystem />
        </div>
        <div name='银行存管'>
          <BankDepositManagement />
        </div>
        <div name='财务审计'>
          <FinancialAudit />
        </div>
      </TabController>
    )
  }
}
// 小额分散
class Microfinance extends Component {
  componentDidMount() {
    MFHeight = this.refs.MF.clientHeight
    console.log(MFHeight);
  }
  render() {
    return (
      <div className='microfinance' ref='MF'>
        <h3>小额分散</h3>
        <div className='line'></div>
        <div className='moneyTree'></div>
        <p>先进的技术系统可将投资人的资金自动分散匹配给多个不同的借款人，有效分散风险。</p>
      </div>
    )
  }
}
// 风控体系
class WindControlSystem extends Component {
  componentDidMount() {
    WCSHeight = this.refs.WCS.clientHeight
    console.log(WCSHeight);
  }
  render() {
    return (
      <div className='windControl' ref='WCS'>
        <h3>风控体系</h3>
        <div className="line"></div>
        <div className='windIntrol'>
          <div className='wind1'>
            <p>完善的信用评估体系</p>
            <p>借鉴消费信贷行业的全球领先经验，实施覆盖贷前、贷后和贷中全过程的评分模型和风险策略。</p>
          </div>
          <div className='wind2'>
            <p>国际先进的欺诈防范策略系统</p>
            <p>识别和预防欺诈风险，保证借款人及其借款目的的真实性。</p>
          </div>
          <div className='wind3'>
            <p>自动标准化决策体系</p>
            <p>开发自动授信决策系统，基于成百上千的数据维度，去除人工判断等主观因素影响，实现精准化授信。</p>
          </div>
          <div className='wind4'>
            <p>客户验证中心100%亲访亲核</p>
            <p>100%访问客户家庭、100%访问客户单位、100%征信数据评分、100%核查客户银行信息</p>
          </div>
          <div className='wind5'>
            <p>风控经验丰富，实力雄厚</p>
            <p>深耕信贷行业十七年，拥有丰富的信贷分析与管理经验，曾帮助中国近一半的全国性银行发行信用卡超过一亿张。公司在美国硅谷设有大数据技术研究实验室，研究大数据分析、信用评分模型、人工智能、机器学习等前沿技术。</p>
          </div>
        </div>
      </div>
    )
  }
}
// 银行存管
class BankDepositManagement extends Component {
  componentDidMount() {
    BDMHeight = this.refs.BDM.clientHeight
    console.log(BDMHeight)
  }
  render() {
    return (
      <div className='bankManagement' ref='BDM'>
        <h3>银行存管</h3>
        <div className="line"></div>
        <div className='matchingProcess'></div>

      </div>
    )
  }
}
// 财务审计
class FinancialAudit extends Component {
  componentDidMount() {
    FAHeight = this.refs.FA.clientHeight
    console.log(FAHeight)
  }
  render() {
    return (
      <div className='audit' ref='FA'>
        <h3>会计事务所审计</h3>
        <div className='line'></div>
        <p>国内第一家由普华永道出具年度审计报告的网络借贷信息中介机构</p>
        <p>为了实现规范、持久运营，将数据和信息的准确性、权威性提升到更高水平，自2012年起，信而富引进国际知名会计师事务所普华永道对公司业务运营数据进行独立审核。</p>
        <div className='andit_logo'></div>
      </div>
    )
  }
}