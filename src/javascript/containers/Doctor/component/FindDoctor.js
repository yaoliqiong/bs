import React from 'react'
import axios from 'axios'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const tabs = [
    { title: <Badge>内科</Badge> },
    { title: <Badge>外科</Badge> },
    { title: <Badge>儿科</Badge> },
    { title: <Badge>女性</Badge> },
    { title: <Badge>男性</Badge> },
  ];

class FindDoctor extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            finddoctors:[]
        }
    }

    getDatefd(){
        let that = this
        axios.get('http://localhost:9000/doc_api/ask/famousDoc.html?page=2').then((res)=>{
            let result = res.data.data.ill_doctor.data
          return result
        }).then((result)=>{
            that.setState({
                finddoctors:result
            })
        })
    }
    
    componentWillMount(){
        this.getDatefd()
    }

   showDatefd(){
       let length = this.state.finddoctors.length
       for(var i = 0 ; i < length ; i++){
           
           return    this.state.finddoctors[i].ills.map((item,j)=>{
                
              return  <div className="tabList-content" key={item.ill_id}>
                            <a>{item.ill_name}</a> 
                        </div>
            })
        }
   }


    render(){
        return (
                <div className="findDoctor">
                    <div className="indexnav-top">
                        <div className="top-left">
                                <span></span>
                                <p>按疾病找医生</p>
                        </div>
                        <a className="top-right">
                            <p>更多</p>
                            <i className="iconfont">&#xe606;</i>
                        </a>
                    </div>
                    
                    <Tabs tabs={tabs} initialPage={1} onChange={(tab, index) => {     
                        console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { 
                            console.log('onTabClick', index, tab); }}
                    >
                        <div className="tabList">
                             {this.showDatefd()}
                        </div>
                       
                
                  </Tabs>

                </div>

        )
    }
    
}
export default FindDoctor