

import React from 'react'
import axios from 'axios'

// import actions from '../../../flux/actions'
// import store from '../../../flux/store'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux' 

import actions from '../../../redux/actionCreator'
import {Button,List, InputItem,WingBlank,SearchBar} from 'antd-mobile'


import {Link} from 'react-router'

class Login extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={

        }
        this.login = this.login.bind(this)
    }

    componentWillReceiveProps(props){
        
                this.props.history.push('mine')
     }
   
    login(e){
      
       e.preventDefault()
    
       this.props.actions.login({
               status:'login',
               userID:this.username.state.value,
               password:this.passwd.state.value
       })
      

    }

    getDate(){
        axios.get('/api/users/issignin',{})       
		.then((res)=>{
			console.log(res,'笑哭笑哭')		
        })
    }
    render(){
       
        return(
          
            
           <div className="fullheight login-index">


                <div className="login-banner .bg_gray">
                    <div className="back">
                        <a className="iconfont" href="javascript:window.history.back()">&#xe612;</a>
                    </div>
                    <img src="https://static.91160.com/wechat/img/account/logo.png" alt=""/>
                </div>
            <form onSubmit={this.login}>
                <List>
                    
                        <InputItem
                        maxLength="11"
                        placeholder="用户名"
                       
                        ref={(userID) => {this.username = userID}}
                        ><i className="iconfont">&#xe63b;</i>
                        <i className="iconfont font-right">&#xe64b;</i>
                        <div onClick={() => this.labelFocusInst.focus()}> </div></InputItem>
                
                </List>

                <List>
                    
                        <InputItem
                        className=".pdf"
                        type="password"
                        ref="password"

                        placeholder="密码"
                        ref={(password) => {this.passwd= password}}
                        >
                        <i className="iconfont">&#xe6c2;</i>
                        <i className="iconfont font-right">&#xe617;</i>
                        <div onClick={() => this.labelFocusInst.focus()}>
                        </div> 
                        </InputItem>
                
                </List>

                <button className="login-btn btns">立即登录</button>
                {/* <p><button onClick={this.getDate}>获取</button></p> */}
            </form>
                 <div className="login-footer clearfix">
                    <a href="##" className="forget-pass">忘记密码？</a>
                    <Link to="/register" className="quickly-register">快速注册</Link>
                </div>

                
               
           </div>
          
           

        )
    }

    componentDidMount(){
        // store.userInfoListener(function(){
        //     this.props.history.push('mine')
        // }.bind(this))
       
        // window.location.hash="mine";

    }


    


 
}


let Login_do = connect(state=>state,(dispatch)=>{

    return{
         actions:bindActionCreators(actions,dispatch)
    }
})(Login)
export default Login_do