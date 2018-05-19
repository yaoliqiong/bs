import React from 'react'
import axios from 'axios'

class SmallClass extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            classDate:[]
        }
    }

    // 获取微课堂数据
    getDate(){
        let that = this
        axios.get('http://localhost:9000/doc_api/ask/famousDoc.html?page=2').then((res)=>{
            let result = res.data.data.recommend_class
           return result   
        }).then((result)=>{
            that.setState({
                classDate:result
            })
        })
    }

    componentWillMount(){
        this.getDate()
    }

    // 显示微课堂内容
    showSmalldate(){
        let classdates = this.state.classDate.data
        return classdates?classdates.map((item,i)=>{
            return  <div className="swiper-slide content" key={i}>
                        <a href={item.url}>
                            <img src={item.image}/>
                            <span>{item.title}</span>
                        </a>    
                    </div>
        }):''
    }

    render(){
        return (
                 <div className="smallclass">
                    <div className="indexnav-top">
                        <div className="top-left">
                                <span></span>
                                <p>微课堂</p>
                        </div>
                        <a className="top-right" href={this.state.classDate.more_url}>
                            <p>更多</p>
                            <i className="iconfont">&#xe606;</i>
                        </a>
                    </div>
                    <div className="swiper-container smallclass-banner">
                        <div className="swiper-wrapper">
                            {this.showSmalldate()}
                        </div>
                    </div>
                </div>

        )
    }
    componentDidMount(){
        this.swiper3 = new Swiper('.smallclass-banner',{		    
            freeMode : true,
            slidesPerView : 'auto',
            freeModeSticky : true ,
            freeModeMomentumRatio:0.3
       })
    }
    componentDidUpdate(){
    	this.swiper3.update()
    }
}
export default SmallClass