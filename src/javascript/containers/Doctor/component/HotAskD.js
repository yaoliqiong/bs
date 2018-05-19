import React from 'react'
import axios from 'axios'

class HotAskD extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            hotaskdoctors:[],
            questions:[]
        }
    }

    getDatefd(){
        let that = this
        axios.get('http://localhost:9000/doc_api/ask/famousDoc.html?page=2').then((res)=>{
            let result = res.data.data.hot_ask.cat_info
          return result
        }).then((result)=>{
            that.setState({
                hotaskdoctors:result
            })
        })
    }

    // 获取问答部分的数据
    getDateQues(){
        let that = this
        axios.get('http://localhost:9000/doc_api/ask/famousDoc.html?page=2').then((res)=>{
            let results = res.data.data.hot_ask.ask_info
          return results
        }).then((results)=>{
            that.setState({
                questions:results

            })
        })
    }
    componentWillMount(){
        this.getDatefd()
        this.getDateQues()
    }

    // 热门咨询的头部
    showAsDoctor(){
        return this.state.hotaskdoctors.map((item,i)=>{
            return  <a href="#" key={item.cat_id}>
                        {item.cat_name}
                   </a>
        })
    }


    // 问答部分的显示
    showQues(){
        return this.state.questions.map((item,i)=>{
            return  <a href={item.url} className="askQues-list" key={item.doctor_id}>
                        <div className="askQues-list__top">
                            <span>问</span>
                            <p>{item.ask_content}</p>
                        </div>

                        <div className="askQues-list__bottom">
                            <span className="tag">答</span>
                            <div className="answer">
                                <p>{item.doctor_reply}</p>
                                <div className="answer-info">
                                    <img src={item.doctor_avatar}/>
                                    <span>{item.doctor_name}</span>
                                    <i>{item.zc_name} {item.unit_name} {item.dep_name}</i>
                                </div>
                                <span className="date">{item.add_time}</span>
                            </div>
                        
                        </div>
                    </a>
        })
    }
    render(){
        return (
            <div className="hotaskdoctor">
                <div className="indexnav-top">
                    <div className="top-left">
                            <span></span>
                            <p>热门咨询</p>
                    </div>
                </div>

                <div className="hotaskdoctor-nav clearfix">
                  {this.showAsDoctor()}
                </div>

                <div className="askQuestion">
                   {this.showQues()}
                </div>
            </div>
        )
    }
}
export default HotAskD