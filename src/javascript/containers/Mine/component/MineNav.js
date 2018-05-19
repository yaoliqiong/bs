import React from 'react'

class MineNav extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="minenav">
                <div className="minenav-top">
                    <p>我的订单</p>
                </div>

                <div className="minenav-bottom">
                    <a href="#">
                        <img src="https://static.91160.com/wechat/img/account/icon01.png"/>
                        <p>挂号</p>
                    </a>
                    <a href="#">
                        <img src="https://static.91160.com/wechat/img/account/icon03.png"/>
                        <p>咨询</p>
                    </a>
                    <a href="#">
                        <img src="https://static.91160.com/wechat/img/account/icon04.png"/>
                       <p>私人医生</p>
                    </a>
                    <a href="#">
                        <img src="https://static.91160.com/wechat/img/account/icon05.png"/>
                        <p>服务</p>
                    </a>
                </div>                
            </div>
        )
        
    }
}

export default MineNav