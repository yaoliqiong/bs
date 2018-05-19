import React from 'react'

class TopBanner extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div className="swiper-container commonBanner">
                    <div className="swiper-wrapper">
                        <a className="swiper-slide list-item">
                            <div className="list-item__left">
                                <img src="https://static.91160.com/wechat/img/common/mm1.png"/>
                                <p>
                                    <span>160妈妈圈</span>
                                    <i>3分钟掌握高校育儿经</i>
                                </p>
                            </div>
                            <div className="list-item__right">
                                <a>立即关注</a>
                            </div>
                            
                        </a>
                        <a className="swiper-slide list-item">
                            <div className="list-item__left">
                                <img src="https://static.91160.com/wechat/img/common/icon.png"/>
                                <p>
                                    <span>健康160</span>
                                    <i>去医院,缴费不用排队</i>
                                </p>
                            </div>
                            <div className="list-item__right">
                                <a>立即打开</a>
                            </div>
                            
                        </a>
                    </div>
                </div>
        )
    }
    componentDidMount(){
        var commonSwiper = new Swiper ('.commonBanner',{
            freeMode:true,        //自由模式
            slidesPerView:'auto',
            freeModeSticky:true,
            freeModeMomentumRatio:0.5,
            loop:true
        })   
    }
    componentDidUpdate(){
        this.commonSwiper.update()
    }
}
export default TopBanner