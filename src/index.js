import React from 'react';
import ReactDom from 'react-dom';
import Routers from './js/Routers.jsx';
import './styles/normalize.scss'
import './styles/_base.scss'
import './styles/home.scss'
import './styles/resetAntd.scss'
global.CRFFetch = require('./js/utils/ajax/index')
global.CONFIGS = require('./js/config')
global.LocalImg = require('./js/images')
global.Common = require('./js/utils/common/index')
require('es6-promise/auto');
require('whatwg-fetch');
require('../mock/home.json')

import {Router,Route,IndexRoute, Link,browserHistory} from 'react-router'
ReactDom.render(
  <Router history={browserHistory} routes={Routers} />,
    document.getElementById('app')
);
console.log('111')
