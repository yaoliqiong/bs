
import React from 'react'
import { Carousel } from 'antd';

class GoHospitalHeader extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="gohospitalHeader">
                <Carousel autoplay dots={false}>
                    <div><img src="https://images.91160.com/primary/201710/2017102800430456018.jpg"/></div>
                    <div><img src="https://images.91160.com/primary/201704/2017042516313198564.jpg"/></div>
                    <div><img src="https://images.91160.com/primary/201803/2018032811420586304.jpg"/></div>
                    <div><img src="https://images.91160.com/primary/201804/2018041616194739120.jpg"/></div>
                    <div><img src="https://images.91160.com/primary/201803/2018032711240525498.png"/></div>
                    <div><img src="https://images.91160.com/primary/201804/2018042316593570794.jpg"/></div>
                </Carousel>
                <div className="headertop">
                    <a href="#" className="headerarea">
                         <i className="iconfont">&#xe62d;</i>
                        <span>北京</span>
                       
                    </a>
                    <div className="headersearch">
                        <i className="iconfont">&#xe652;</i>
                        <input placeholder="疾病/医生/科室/医院名称"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default GoHospitalHeader