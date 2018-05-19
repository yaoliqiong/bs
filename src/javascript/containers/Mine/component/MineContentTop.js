import React from 'react'

class MineContentTop extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="minecontent">
                <a className="minecontent-list minecontent-list1">
                    <img src="https://static.91160.com/wechat/img/account/icon001.png"/>
                    <span>家庭成员管理</span>
                    <i className="iconfont">&#xe606;</i>
                </a>  
                <a className="minecontent-list minecontent-list2">
                    <img src="https://static.91160.com/wechat/img/account/icon002.png"/>
                    <span>我的评价</span>
                    <i className="iconfont">&#xe606;</i>
                </a>  
                <a className="minecontent-list minecontent-list3">
                    <img src="https://static.91160.com/wechat/img/account/icon003.png"/>
                    <span>我的关注</span>
                    <i className="iconfont">&#xe606;</i>
                </a>   
            </div>
        )
        
    }
}

export default MineContentTop