import React from 'react'
import axios from 'axios'

class FamousDoctor extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            doctors:[],
            keshi:[]
        }
    }

    getdoctor(){
        let that = this
        axios.get('http://localhost:9000/doc_api/ask/famousDoc.html?page=1&code=0').then((res)=>{ 
            let results = res.data.data.recommend_doctor.data
            return results
            
        })
        .then((results)=>{
            that.setState({
                doctors:results
            })
        })
    }
    getKeshi(){
        let that = this
        axios.get('http://localhost:9000/doc_api/ask/famousDoc.html?page=1&code=0').then((res)=>{
            let keshi = res.data.data.dep_doctor.data
            return keshi  
        })
        .then((keshi)=>{
            that.setState({
                keshi:keshi

            })
        })
    }
   
    componentWillMount(){
        this.getdoctor() 
        this.getKeshi()
    }
    showDoctor(){
        return this.state.doctors.map((item,i)=>{
            return  <div className="swiper-slide doctorcontent" key={item.doctor_id}>
                        <div className="ImgText">
                            <img src={item.avatar}/>
                            <p>{item.doctor_name}</p>
                        </div>
                        <div className="text-bottom">
                            <p className="bigtext">{item.first_practice}</p>
                            <span>{item.dep_name}</span>
                            <p className="smalltext">
                                好评数:
                                <i>{item.good_comment_total}</i>
                            </p>
                            <p className="smalltext">
                                咨询量:
                                <i>{item.history_ask_total}</i>
                            </p>
                        </div>
                    </div>
            }       
        )
    }
    showKeshi(){
        return this.state.keshi.map((item,i)=>{
           
            return <a href="#" key={item.cat_id}>
                        <img src="https://static.91160.com/wechat/img/famousdoctor/cat_41.png"/>
                        <span>{item.cat_name}</span>
                    </a>
        })
    }
    render(){
        return (
            <div className="famousdoctor">
               <div className="indexnav-top">
                    <div className="top-left">
                            <span></span>
                            <p>名医推荐</p>
                    </div>
                    <a className="top-right">
                        <p>更多</p>
                        <i className="iconfont">&#xe606;</i>
                    </a>
                </div>
             
                <div className="swiper-container doctor-banner">
                    <div className="swiper-wrapper">
                        {
                            this.showDoctor()
                        }
                    </div>
                </div>

                <div className="keshiDoctor">
                    {this.showKeshi()}
                </div>
        </div>
        )
    }
    componentDidMount(){
        this.swiper = new Swiper('.doctor-banner',{		    
            freeMode : true,
            slidesPerView : 'auto',
            freeModeSticky : true ,
            freeModeMomentumRatio:0.3
       })
    }
    componentDidUpdate(){
    	this.swiper.update()
    }
}
export default FamousDoctor