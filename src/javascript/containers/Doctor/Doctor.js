
import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
// const FormItem = Form.Item;
import DoctorForm from './component/DoctorForm'

class Doctor extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    
    render(){
        return (
            <div className="fullHeight doctor">
                 <NavBar mode="dark" leftContent={<i className="iconfont" onClick={()=>{history.back()}}>&#xe612;</i>} rightContent={<i className="iconfont iconR">&#xe603;</i>} className="doctorTop">
                    科室预约
                </NavBar>
                <div className="doctor-content1">
                    <DoctorForm/>
                </div>  
            </div>
        )
    }
}
export default Doctor
