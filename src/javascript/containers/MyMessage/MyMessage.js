
import React from 'react'
import GoHospitalFooter from '../../common/GoHospitalFooter'
import { NavBar, Icon } from 'antd-mobile';
import { List } from 'antd-mobile';

const Item = List.Item;

class MyMessage extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="fullHeight mymessage">
                <div className="mymessage-content">
                    <NavBar mode="dark" leftContent={<i className="iconfont"  onClick={()=>{history.back()}}>&#xe612;</i>} rightContent={<i className="iconfont iconR">&#xe603;</i>} className="message">
                        消息中心
                    </NavBar>

                    <List>
                        <Item className="newsContent"
                            thumb={<img src="https://images.91160.com/Sitemessage/service_icon/2017-09-25/2017092511270031755.jpg"/>}
                            >
                            <div className="text">
                                <p>
                                    <span>160微课堂</span>
                                    <i>前天</i>
                                </p>
                                <span className="smallText">78期，科学避孕怎么做</span>
                            </div>
                        </Item>
                  </List>
                </div>
                <div className="mymessagefooter">
                    <GoHospitalFooter active={"mymessage"}/>
                </div>     
            </div>
        )
    }
}
export default MyMessage