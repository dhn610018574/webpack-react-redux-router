import React ,{Component} from 'react'
import {Router,Route,IndexRoute, Link} from 'react-router'
import {
  Home,
  Invest,
  InvestDetail,
  Find,
  My,
  AboutUs,
  RiskManagement,
  PlatformAdvantage,
  NoviceWelfare,
  InvestLog,
  ProductDetail,
  ProductFeatures,
  CommonProblem,
  Login,
  Register,
  ForgetPassword
}  from './containers'

export default (
  <Router path='/'>
    <IndexRoute component={Home}></IndexRoute>
    <Route path='login' component={Login}></Route>
    <Route path='register' component={Register}></Route>
    <Route path='forgetPassword' component={ForgetPassword}></Route>
    <Route path='home' component={Home}></Route>
    <Route path='invest' component={Invest}></Route>
    <Route path='investDetail' component={InvestDetail}></Route>
    <Route path='find' component={Find}></Route>
    <Route path='my' component={My}></Route>
    <Route path='aboutUs' component={AboutUs}></Route>
    <Route path='riskManagement' component={RiskManagement}></Route>
    <Route path='platformAdvantage' component={PlatformAdvantage}></Route>
    <Route path='noviceWelfare' component={NoviceWelfare}></Route>
    <Route path='investLog' component={InvestLog}></Route>
    <Route path='productDetail' component={ProductDetail}></Route>
    <Route path='productFeatures' component={ProductFeatures}></Route>
    <Route path='commonProblem' component={CommonProblem}></Route>
  </Router>
)
