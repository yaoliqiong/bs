import React from 'react'

class MineHead extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="minehead">
                <div className="minehead-top">
                    <div className="minehead-top__left">
                        <img src="https://static.91160.com/wechat/img/common/avatar_user_.jpg"/>

                        <div className="topleft-text">
                            <a className="text-info">请完善账号信息</a>
                            <span>升级会员享受更多服务</span>
                            <a className="text-vip">
                                加入会员
                                <i className="iconfont">&#xe606;</i>
                            </a>
                        </div>
                    </div>
                    <div className="minehead-top__right">
                        健康打卡
                    </div>
                </div>

                <div className="minehead-bottom">
                    <a href="#">
                        <span>0.00</span>
                        <p>余额(元)</p>
                    </a>
                    <a href="#">
                        <span>0</span>
                        <p>优惠券(张)</p>
                    </a>
                    <a href="#">
                        <span>0</span>
                       <p>赚积分</p>
                    </a>
                    <a href="#">
                        <span>0</span>
                        <p>经验值</p>
                    </a>
                </div>                
            </div>
        )
        
    }
}

export default MineHead