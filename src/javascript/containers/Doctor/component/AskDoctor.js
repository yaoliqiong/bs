import React from 'react'
import axios from 'axios'

class AskDoctor extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            askdoctors:[]
        }
    }

    getDatefd(){
        let that = this
        axios.get('http://localhost:9000/doc_api/ask/famousDoc.html?page=2').then((res)=>{
            let result = res.data.data.tel_doctor.data
          return result
        }).then((result)=>{
            that.setState({
                askdoctors:result
            })
        })
    }
    
    componentWillMount(){
        this.getDatefd()
    }
    showAsDoctor(){
        return this.state.askdoctors.map((item,i)=>{
            return <div className="askdoctor-left" key={item.cat_id}> 
                        <img src={item.image}/>
                        
                    </div>
        })
    }
    render(){
        return (
            <div className="askdoctor">
                <div className="indexnav-top">
                    <div className="top-left">
                            <span></span>
                            <p>电话咨询医生</p>
                    </div>
                </div>

                <div className="askdoctor-img clearfix">
                    {this.showAsDoctor()}
                </div>
            </div>
        )
    }
}
export default AskDoctor