
import React from 'react'
import axios from 'axios'


class DoctorBg extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="doctorbg">
               <div className="doctorbg-left">
                    <div className="doctorbg-text__left">
                        <p>名医挂号</p>
                        <span>轻松预约名医</span>
                    </div> 
               </div>

               <div className="doctorbg-right">
                    <div className="doctorbg-right__top">
                        <div className="doctorbg-text__right1">
                            <p>中医频道</p>
                            <span>一键约名中医</span>
                        </div> 
                        <img src="https://static.91160.com/wechat/img/main/zhongyi.png"/>
                    </div>
                    <div className="doctorbg-right__top">
                        <div className="doctorbg-text__right1">
                            <p>口腔专场</p>
                            <span>口腔产品精选</span>
                        </div> 
                        <img src="https://static.91160.com/wechat/img/main/icon_kq.png"/>
                    </div>
               </div>
            </div>
        )
    }
}
export default DoctorBg