// 主文件
require("./styles/app.scss")
import 'antd-mobile/dist/antd-mobile.css';
const React = require('react')
const ReactDOM = require('react-dom')

import{ Router , Route ,hashHistory ,browserHistory,IndexRoute,IndexRedirect,Redirect} from 'react-router'

// const Roote = require("./javascript/app")
// ES6引入
import App from './javascript/app'

import Gohospotal from './javascript/containers/GoHospital/GoHospital'

import Login from './javascript/containers/GoHospital/Login/Login'
import Register from './javascript/containers/GoHospital/Login/Register'
import Mine from './javascript/containers/Mine/Mine'

import Health from './javascript/containers/health/Health'
import Doctor from './javascript/containers/Doctor/Doctor'
import Department from './javascript/containers/Doctor/Department'


import MyMessage from './javascript/containers/MyMessage/MyMessage'
import store from './javascript/redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/gohospital"/>
            <Route path="gohospital" component={Gohospotal}> </Route>
            <Route path="health" component={Health}></Route>
            <Route path="doctor" component={Doctor}></Route>
            <Route path="department" component={Department}></Route>
            <Route path="mine" component={Mine}></Route>
            <Route path="login" component={Login}></Route>
            <Route path="register" component={Register}></Route>
            <Route path="mymessage" component={MyMessage}></Route>    
        </Route>
    </Router>
   </Provider>
    ,document.getElementById("app"))
