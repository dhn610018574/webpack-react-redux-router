import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { CommonHeader } from '../../components'
import './index.scss'
let companyHeight = 0
let honorHeight = 0
let teamHeight = 0
let bankHeight = 0

export default class AboutUs extends Component {
  componentDidMount(){
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <CommonHeader title='关于我们' url='home'></CommonHeader>
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
        top = companyHeight + 8
        console.log(top)
        break;
      case 2:
        top = companyHeight + honorHeight + 15
        console.log(top)
        break;
      case 3:
        top = companyHeight + honorHeight + teamHeight + 22
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
        <div name='公司简介'>
          <CompanyProfile />
        </div>
        <div name='企业荣誉'>
          <CompanyHonor />
        </div>
        <div name='精英团队'>
          <Team />
        </div>
        <div name='合作伙伴'>
          <Bank />
        </div>
      </TabController>
    )
  }
}

class CompanyProfile extends Component {
  componentDidMount() {
    companyHeight = this.refs.company.clientHeight
    console.log(companyHeight);
  }
  render() {
    return (
      <div className='company' ref='company'>
        <h3>公司简介</h3>
        <div className='line'></div>
        <div className='market_poster'></div>
        <p className='njs'>（信而富——美国纽交所上市公司）</p>
        <p>信而富(NYSE:XRF)2010年涉足网络借贷信息中介服务，结合在中国17年的风险管理实践经验，为借贷两端的用户提供风险评估、信息交互和借贷撮合等服务。业务范围覆盖全国20多个省及直辖市。基于平台促成的借款交易笔数，信而富是中国最大的网络借贷信息中介平台之一。2017年4月28日，信而富在美国纽约证券交易所挂牌上市，成为2017年首家登陆纽交所的中国企业。</p>
        <video poster='https://financeapp-static-uat.crfchina.com/webp2p_static/invests/public/image/tab/new1.png'>
          <source src='https://financeapp-static-uat.crfchina.com/webp2p_static/invests/public/video/e.webm' />
        </video>
        <p className='market_cheer'>（上市精彩瞬间）</p>
      </div>
    )
  }
}
class CompanyHonor extends Component {
  componentDidMount() {
    honorHeight = this.refs.honor.clientHeight
    console.log(honorHeight);
  }
  render() {
    return (
      <div className='honor' ref='honor'>
        <h3>企业荣誉</h3>
        <div className="line"></div>
        <div className='left'>
          <div className='left_content c1'>
            <div>2017年4月</div>
            <p>在美国纽约证券交易所挂牌上市，成为2017年首家登陆纽交所的中国企业。</p>
          </div>
          <div className='left_content c2'>
            <div>2016年3月</div>
            <p>作为中国互联网金融协会发起人，成为协会首批会员单位。</p>
          </div>
          <div className='left_content c3'>
            <div>2015年12月</div>
            <p>年度十佳互联网金融企业（由《金融时报》、社科院金融研究所评选）。</p>
          </div>
          <div className='left_content c4'>
            <div>2015年11月</div>
            <p>年度创新移动金融服务平台（由第一财经《陆家嘴》杂志评选）。</p>
          </div>
          <div className='left_content c5'>
            <div>2015年6月</div>
            <p>最佳商业价值奖（由第一财经《陆家嘴》杂志评选）。</p>
          </div>
          <div className='left_content c6'>
            <div>2014年</div>
            <p>最佳互联网金融企业（由深圳前海管理局和《深圳特区报》联合评选）。</p>
          </div>
          <div className='left_content c7'>
            <div>2014年</div>
            <p>被美国最大的网贷研究机构Lend Academy推选为“中国最重要的网贷公司”。</p>
          </div>
        </div>
        <div className='center'></div>
        <div className='right'>
          <div className='right_content r1'>
            <div>2017年4月</div>
            <p>在美国纽约证券交易所挂牌上市，成为2017年首家登陆纽交所的中国企业。</p>
          </div>
          <div className='right_content r2'>
            <div>2016年3月</div>
            <p>作为中国互联网金融协会发起人，成为协会首批会员单位。</p>
          </div>
          <div className='right_content r3'>
            <div>2015年12月</div>
            <p>年度十佳互联网金融企业（由《金融时报》、社科院金融研究所评选）。</p>
          </div>
          <div className='right_content r4'>
            <div>2015年11月</div>
            <p>年度创新移动金融服务平台（由第一财经《陆家嘴》杂志评选）。</p>
          </div>
          <div className='right_content r5'>
            <div>2015年6月</div>
            <p>最佳商业价值奖（由第一财经《陆家嘴》杂志评选）。</p>
          </div>
          <div className='right_content r6'>
            <div>2014年</div>
            <p>最佳互联网金融企业（由深圳前海管理局和《深圳特区报》联合评选）。</p>
          </div>
        </div>
      </div>
    )
  }
}
class Team extends Component {
  componentDidMount() {
    teamHeight = this.refs.team.clientHeight
    console.log(teamHeight)
  }
  render() {
    return (
      <div className='team' ref='team'>
        <h3>精英团队</h3>
        <div className="line"></div>
        <h4>CEO简介</h4>
        <div className='team_icon'></div>
        <div className='partner'></div>
        <p className='wzy'>王征宇博士曾在美国长期从事消费信贷管理工作，负责控制风险、提高价值等综合策略的制定，先后为众多国际著名金融机构提供咨询服务。2001年回国后开展北京首航的业务，开始了信而富的创业历程。公司为国内一半以上的全国性银行提供风险管理服务，为国内第一个征信服务机构以及央行全国性征信中心的筹建提供咨询服务，成为集风险评分、决策引擎、决策策略为一体的国内消费信贷风险控制领先品牌。</p>
        <h4>顾问和董事团队</h4>
        <div className='team_icon1'></div>
        <p className='introduction_text'>世界知名网贷鼻祖、资深行业领袖及金融巨头担任信而富董事和顾问，提供战略支持。</p>
        <div className='partner_introduction'>
          <div className='partner1'>
            <div className='person_introl'>
              <span className='name'>Phillip Riese</span>
              <span className='pic'></span>
            </div>
            <p>全球首家网络信贷平台、英国Zopa董事会董事</p>
            <p>曾任美国运通(American Express)信用卡服务业务总裁</p>
            <p>现为信而富顾问</p>
          </div>
          <div className='partner2'>
            <div className='person_introl'>
              <span className='pic'></span>
              <span className='name'>Nigel Morris</span>
            </div>
            <p>美国首家网贷平台Prosper公司董事</p>
            <p>曾任美国第一资本（Capital One）创始人、总裁</p>
            <p>1999年被伦敦商学院授予“年度最佳企业家”称号</p>
            <p>现为信而富顾问</p>
          </div>
          <div className='partner3'>
            <div className='person_introl'>
              <span className='name'>Frank Rotman</span>
              <span className='pic'></span>
            </div>
            <p>美国QED Investors创始人之一</p>
            <p>曾任美国Capital One分析师</p>
            <p>现为信而富顾问</p>
          </div>
          <div className='partner4'>
            <div className='person_introl'>
              <span className='pic'></span>
              <span className='name'>Douglas L. Brown</span>
            </div>
            <p>DLB Capital创始人、董事会主席及首席执行官</p>
            <p>中国平安保险公司和中国建设银行上市顾问</p>
            <p>曾任摩根士丹利（Morgan Stanley）投资银行董事会副主席</p>
            <p>现为信而富顾问</p>
          </div>
          <div className='partner5'>
            <div className='person_introl'>
              <span className='name'>张化桥</span>
              <span className='pic'></span>
            </div>
            <p>曾就职于中国人民银行、深圳控股公司、瑞银集团</p>
            <p>现为港交所上市公司中国支付通集团董事长</p>
            <p>现为信而富顾问</p>
          </div>
        </div>
      </div>
    )
  }
}
class Bank extends Component {
  componentDidMount() {
    bankHeight = this.refs.bank.clientHeight
    console.log(bankHeight)
  }
  render() {
    return (
      <div className='bank' ref='bank'>
        <h3>合作伙伴</h3>
        <div className='line'></div>
        <p className='bank_text'>信而富已先后为一半以上的全国性银行及众多金融、科技机构提供各类风险管理服务。</p>
        <ul className='bank_logo'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}