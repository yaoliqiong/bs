import React from 'react'

class MineContentBottom extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="minecontent minecontent-bottom">
                <a className="minecontent-list minecontent-list1">
                    <img src="https://static.91160.com/wechat/img/account/icon008.png"/>
                    <span>客服电话</span>
                    <i>400-119-1160</i>
                </a>  
                <a className="minecontent-list minecontent-list2">
                    <img src="https://static.91160.com/wechat/img/account/icon009.png"/>
                    <span>设置</span>
                    <i className="iconfont">&#xe606;</i>
                </a>  
            </div>
        )
        
    }
}

export default MineContentBottom