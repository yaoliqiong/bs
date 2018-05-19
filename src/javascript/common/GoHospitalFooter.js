
import React from 'react'
import {Link} from 'react-router'

class GoHospitalFooter extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        let {active} = this.props
        return (
            <div className="gohospitalFooter">
                <Link to = "/gohospital" className={active == 'gohospital'?'active':''}>
                    <i className="iconfont">&#xe607;</i>
                    首页
                </Link>
                <Link to = "/department" className={active == 'doctor'?'active':''}>
                    <i className="iconfont">&#xe665;</i>
                    预约
                </Link >
              
                <Link to = "/mymessage" className={active == 'mymessage'?'active':''}>
                    <i className="iconfont">&#xe653;</i>
                    留言
                </Link>
                 <Link to = "/mine" className={active == 'mine'?'active':''}>
                    <i className="iconfont">&#xe601;</i>
                    我的
                </Link> 
                
            </div>
        )
    }
}
GoHospitalFooter.defaultProps = {
    active:'gohospital'
}
export default GoHospitalFooter