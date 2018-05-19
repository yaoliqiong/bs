
import React from 'react'
import GoHospitalFooter from '../../common/GoHospitalFooter'
import { NavBar, Icon } from 'antd-mobile';
import { Tabs, Radio } from 'antd';
const TabPane = Tabs.TabPane;
import oppointmentData from './oppointment.json'

class Department extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    turnToDoctor(){
      window.location = "/doctor"  
    }
    render(){
        return (
            <div className="fullHeight doctor">
                 <NavBar mode="dark" leftContent={<i className="iconfont" onClick={()=>{history.back()}}>&#xe612;</i>} rightContent={<i className="iconfont iconR">&#xe603;</i>} className="doctorTop">
                    科室预约
                </NavBar>
                <div className="doctor-content">
                    <div className="card-container">
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition='left'
                            type="card"
                            >
                            {oppointmentData.map((item,index)=>{
                                return (
                                    <TabPane tab={item.tab} key={index+1}>
                                        <ul>
                                            {item.children.map((item1,index1)=>{
                                                return (
                                                    <li key={index1} className="contentStyle" onClick={this.turnToDoctor}>{item1.content}</li>
                                                )
                                            })}
                                        
                                        </ul>
                                    </TabPane> 
                                )
                            })}
                        </Tabs>
                    </div>
                </div>
                <div className="doctorfooter">
                    <GoHospitalFooter active={"doctor"}/>
                </div>      
            </div>
        )
    }
}
export default Department