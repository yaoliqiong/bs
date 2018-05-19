import React from 'react'
import axios from 'axios'

class PersonalDoctor extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="personaldoctor">
                <div className="indexnav-top">
                    <div className="top-left">
                            <span></span>
                            <p>私人医生服务</p>
                    </div>

                </div> 
                <div className="doctorserver">
                    <a className="doctorserver-content">
                        <img src="https://static.91160.com/wechat/img/famousdoctor/快捷.gif"/>
                        <span>与名医面对面沟通</span>
                    </a>
                    <a className="doctorserver-content">
                        <img src="https://static.91160.com/wechat/img/famousdoctor/week.gif"/>
                        <span>7日内不计次数问医生</span>
                    </a>
                    <a className="doctorserver-content">
                        <img src="https://static.91160.com/wechat/img/famousdoctor/month.gif"/>
                        <span>30日内随时咨询医生</span>
                    </a>
                    <a className="doctorserver-content">
                        <img src="https://static.91160.com/wechat/img/famousdoctor/report.gif"/>
                        <span>专家在线解读检验检查单</span>
                    </a>
                </div>

                <div className="Img-banner">
                    <div className="swiper-container doctor1-banner">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide doctor-img">
                                <img src="https://images.91160.com/primary/201711/2017110210140324130.jpg"/>
                            </div>
                            <div className="swiper-slide doctor-img">
                                <img src="https://images.91160.com/primary/201710/2017103115375275112.png"/>
                            </div>
                            <div className="swiper-slide doctor-img">
                                <img src="https://images.91160.com/primary/201710/2017103114303335836.jpg"/>
                            </div>
                            <div className="swiper-slide doctor-img">
                                <img src="https://images.91160.com/primary/201711/2017110314144099850.jpg"/>
                            </div>
                            
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>            
            </div>
        )
    }
    componentDidMount(){
        this.swiper = new Swiper('.doctor1-banner',{		    
            slidesPerView : 'auto',
            freeModeSticky : true ,
            loop:true,
            freeModeMomentumRatio:0.3,
            pagination: '.swiper-pagination',
       })

    }
    componentDidUpdate(){
    	this.swiper.update()
    }
}
export default PersonalDoctor