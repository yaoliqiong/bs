

import React from 'react'

import {Button,List, InputItem,WingBlank,SearchBar,NavBar,Icon} from 'antd-mobile'

import {Link} from 'react-router'

import {connect} from 'react-redux' 
import {bindActionCreators} from 'redux'
import actions from '../../../redux/actionCreator'

class Register extends React.Component{
    constructor(props,context){
        super(props,context)
        this.register = this.register.bind(this)
    }


    register(e){

        e.preventDefault();
        // console.log(this.username.state.value)
        this.props.actions.register({
            status:'register',
            userID:this.username.state.value,
            password:this.passwd.state.value
        })

    }
    componentWillReceiveProps(props){
        console.log(props,111);
        this.props.history.push('login')
        
    }
    render(){ 

        
     
        return(
            <div className="fullheight registContent">
                  <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => console.log('onLeftClick')}
                  
                >注册</NavBar>

                <div className="bggray"></div>

                <form onSubmit={this.register}>
                <List>
                    
                        <InputItem
                        maxLength="11"
                        placeholder="手机"
                       
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
                
                <div className="check pdf">
                    <span>
                        <input type="checkbox"/>我已阅读并同意

                    </span>
                    <a href="##" className="deal"> 《健康160用户许可协议》</a>
                </div>

                <button className="register-btn btns">立即注册</button>
            </form>    

            </div>

        )
    }
}

let register_do=connect(state=>state,(dispatch)=>{
    return{
        actions:bindActionCreators(actions,dispatch)
    }
})(Register)
export default register_do