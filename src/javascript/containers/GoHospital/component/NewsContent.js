import React from 'react'
import axios from 'axios'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import Recommend from '../newsComponent/Recommend.js'
// import Recommend from '../newsComponent/Recommend'
class NewsContent extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="news">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="推荐" key="1"><Recommend/></TabPane>
                    <TabPane tab="医生文章" key="2"><Recommend/></TabPane>
                    <TabPane tab="独家" key="3"><Recommend/></TabPane>
                    <TabPane tab="母婴" key="4"><Recommend/></TabPane>
                    <TabPane tab="生活" key="5"><Recommend/></TabPane>
                    <TabPane tab="两性" key="6"><Recommend/></TabPane>
                </Tabs>
            </div>
        )
    }
}
export default NewsContent