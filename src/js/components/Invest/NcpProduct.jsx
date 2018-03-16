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
    // this.getInitialData();
  }
  componentDidMount() {
    this.setState(response.data);
  }
  // async getInitialData() {
  //   const params = JSON.stringify({
  //     uuid: "",
  //     productListType: 1,
  //     pageNumber: 1,
  //     pageSize: 20
  //   });
  //   const headers = {
  //     "Content-Type": "application/json;charset=UTF-8",
  //     "version-code": "49",
  //     packageName: "com.crfchina.purseTest",
  //     mobileOs: "IOS",
  //     deviceno: "AC1B61A3-F77D-4AA7-BE79-890ABAC41631",
  //     clientId: "",
  //     customerUid: "",
  //     mchntNo: "",
  //     accessToken: ""
  //   };
  //   const ncpProductPath = `${CONFIGS.investmentPath}/product/list`;
  //   try {
  //     const fetchPromise = CRFFetch.Post(ncpProductPath);
  //     const result = await fetchPromise;
  //     if (result && !result.response) {
  //       this.setState(result);
  //     }
  //   } catch (error) {
  //     CRFFetch.handleError(error, Toast, () => {
  //       if (error.status === 400) {
  //         error.body.then(data => {
  //           Toast.info(data.message);
  //         });
  //       }
  //     });
  //   }
  // }
  // setStatus(result) {
  //   this.setState(result);
  // }
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
