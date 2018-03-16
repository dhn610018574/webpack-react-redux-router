import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { CommonHeader } from '../../components'
import './index.scss'
let strengthHeight = 0
let complianceHeight = 0

export default class PlatformAdvantage extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <CommonHeader title='平台优势' url='home'></CommonHeader>
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
        top = strengthHeight + 8
        console.log(top)
        break;
      case 2:
        top = strengthHeight + complianceHeight + 15
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
        <div name='综合实力'>
          <Strength />
        </div>
        <div name='专业合规'>
          <Compliance />
        </div>
        <div name='业内领先'>
          <IndustryLeader />
        </div>
      </TabController>
    )
  }
}
// 综合实力
class Strength extends Component {
  componentDidMount() {
    strengthHeight = this.refs.strength.clientHeight
    console.log(strengthHeight);
  }
  render() {
    return (
      <div className='strength' ref='strength'>
        <h3>综合实力</h3>
        <div className='line'></div>
        <div className='strength1'>
          <div className='icon1'></div>
          <div className='text'>
            <p>历史年化收益率 <i>7%-12%</i></p>
            <p>每月<i>多种福利</i>活动回馈用户</p>
          </div>
        </div>
        <div className='strength2'>
          <div className='icon1'></div>
          <div className='text'>
            <p><i>长、中、短</i>期多种方案可选择</p>
            <p>方案到期资金赎回最快 <i>1</i> 个工作日</p>
          </div>
        </div>
        <div className='strength3'>
          <div className='icon1'></div>
          <div className='text'>
            <p>中国互联网金融协会<i>发起人</i></p>
            <p>上海市互联网金融行业协会<i>理事单位</i></p>
            <p>纽约证券交易所<i>上市企业</i></p>
          </div>
        </div>

      </div>
    )
  }
}
// 专业合规
class Compliance extends Component {
  componentDidMount() {
    complianceHeight = this.refs.compliance.clientHeight
    console.log(complianceHeight);
  }
  render() {
    return (
      <div className='compliance' ref='compliance'>
        <h3>专业合规</h3>
        <div className="line"></div>
        <div className='compliance_bg'></div>
      </div>
    )
  }
}
// 业内领先
class IndustryLeader extends Component {
  render() {
    return (
      <div className='industryLeader'>
        <h3>业内领先</h3>
        <div className="line"></div>
        <p className='leader1'>小额分散</p>
        <p>先进的技术系统可将投资人的资金自动分散匹配给多个不同的借款人 </p>
        <p className='leader2'>银行存管</p>
        <p>业内率先与恒丰银行合作实现资金存管，投资人与借款人点对点直接匹配，没有任何中间转贷交易。投资人和借款人真实匹配，客户资金由银行存管。</p>
        <p className='leader3'>顶级智囊</p>
        <p>世界知名网贷鼻祖、资深行业领袖及金融巨头担任信而富董事和顾问，提供战略支持。</p>
      </div>
    )
  }
}
