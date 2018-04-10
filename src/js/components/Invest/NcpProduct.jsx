import React, { Component } from "react";
import { Link } from "react-router";
import { Toast } from "antd-mobile";
import "./index.scss";
const response = require("../../../../mock/newProList.json");
console.log(response)
export default class NcpProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  componentDidMount() {
    this.setState(response.data);
  }
  render() {
    let linkUrl = "/investDetail";
    return (
      <div className="ncpProduct">
        <ul>
          {this.state.productList &&
            this.state.productList.map((e, i) => (
              <li key={i}>
                <Link
                  to={{
                    pathname: linkUrl,
                    query: { contractPrefix: e.contractPrefix }
                  }}
                >
                  <div className="product-introl">
                    <div>
                      {e.tipsStart && <span>{e.tipsStart}</span>}
                      {e.tipsEnd && <span>{e.tipsEnd}</span>}
                      <p>
                        {e.yInterestRate}
                        <i>%</i>
                      </p>
                      <p>期望年化收益率</p>
                    </div>
                    <div>
                      <p>
                        {e.productName}
                        {e.isNewBie && e.isNewBie == "3" && <i>荐</i>}
                      </p>
                      <p>
                        <span>{e.investunit / 1}元起投</span>
                        <span>剩余天数{e.remainDays}天</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
