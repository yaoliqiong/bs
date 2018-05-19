import React from 'react'

class MineContentMiddle extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="minecontent">
                <a className="minecontent-list">
                    <img src="https://static.91160.com/wechat/img/account/icon004.png"/>
                    <span>手机取号</span>
                    <i className="iconfont">&#xe606;</i>
                </a>  
                <a className="minecontent-list">
                    <img src="https://static.91160.com/wechat/img/account/icon005.png"/>
                    <span>门诊交费</span>
                    <i className="iconfont">&#xe606;</i>
                </a>  
                <a className="minecontent-list">
                    <img src="https://static.91160.com/wechat/img/account/icon011.png"/>
                    <span>检验检查报告</span>
                    <i className="iconfont">&#xe606;</i>
                </a> 
                <a className="minecontent-list">
                    <img src="https://static.91160.com/wechat/img/account/icon010.png"/>
                    <span>我的住院</span>
                    <i className="iconfont">&#xe606;</i>
                </a>   
            </div>
        )
        
    }
}

export default MineContentMiddle