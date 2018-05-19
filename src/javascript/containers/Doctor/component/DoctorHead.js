import React from 'react'
import axios from 'axios'

class DoctorHead extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            headers:[]
        }
    }

    // getHeaders(){
    //     let that = this
    //     axios.get('http://localhost:9000/doc_api/ask/famousDoc.html?page=1&code=0').then((res)=>{
    //         let result = res.data.data.services
    //         return result
    //     }).then((res)=>{
    //         that.setState({
    //             headers:results
    //         })
    //     })
    // }
    // componentWillMount(){
    //     this.getHeaders()  
    // }
    // showHeaders(){
    //     return this.state.results.map(())
    // }
    render(){
        return (
            <div className="doctorhead">
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

                <div className="headcontent">
                    <div className="content-top">
                        <div className="content-top__left">
                            <img src="https://static.91160.com/wechat/img/famousdoctor/doctor_ask.png"/>
                            <div className="text">
                                <span className="texttop">指定医生咨询</span>
                                <span className="textbottom">指定专家快速问</span>
                            </div>
                        </div>
                        <div className="content-top__left">
                            <img src="https://static.91160.com/wechat/img/famousdoctor/doctor_vip.png"/>
                            <div className="text">
                                <span className="texttop">私人医生</span>
                                <span className="textbottom">您的专属医生服务</span>
                            </div>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <a href="#">
                            <img src="https://static.91160.com/wechat/img/famousdoctor/reward_ask.png"/>
                            <span>极速咨询</span>
                        </a>
                        <a href="#">
                            <img src="https://static.91160.com/wechat/img/famousdoctor/tel_ask.png"/>
                            <span>电话咨询</span>
                            <i>5分钟问名医</i>
                        </a>
                        <a href="#">
                            <img src="https://static.91160.com/wechat/img/famousdoctor/video_ask.png"/>
                            <span>视频咨询</span>
                            <i>与名医面对面</i>
                        </a>
                        <a href="#">
                            <img src="https://static.91160.com/wechat/img/famousdoctor/free_ask.png"/>
                            <span>免费咨询</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default DoctorHead