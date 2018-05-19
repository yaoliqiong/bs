import React from 'react'

class TitleHead extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
           <div className="titlehead">
               <div className="title-content">
                   <div className="titleimg">
                       <img src="https://static.91160.com/wechat/img/main/160hotnew.png"/>
                   </div>
                   <ul className="titletext">
                       <li className="titleitem">
                           <span className="circle"></span>
                           <p className="titletext-p">160美容特惠活动盛大开启</p>
                        </li>
                       <li className="titleitem">
                            <span className="circle"></span>
                           <p className="titletext-p">惠民健康行动开始啦~</p>
                        </li>
                   </ul>
               </div>
           </div>
        )
    }
}
export default TitleHead