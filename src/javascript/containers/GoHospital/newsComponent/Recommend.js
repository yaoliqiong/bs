import React from 'react'
import axios from 'axios'
import data from './Recommend.json'
class Recommend extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    intoDetail(param,url){
        window.location = param
    }

    render(){
        return(
            <div className="newscontent" >
                {data.map((item,index)=>{
                    return (
                        <div className="newsList" key={index} onClick={this.intoDetail.bind(this,item.url)}>
                            <div className="newsImg">
                                <img src={item.image}/>
                            </div>
                            <div className="newsText">
                                <p className="text">{item.title}</p>

                                <div className="smallText">
                                    <div className="smallText-left">
                                        <i className="iconfont">&#xe661;</i>
                                        <span className="doctorSpeak">{item.class}</span>
                                    <span className="circle"></span>
                                        <span className="date">{item.time}</span>
                                    
                                </div>
                                    <div className="smallText-right">
                                        <i className="iconfont">&#xe614;</i>
                                </div>
                                
                                </div>
                            </div>
                        </div>   
                    )
                })}
        </div>
        )
       
    }
}
export default Recommend