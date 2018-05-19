
import React from 'react'

class HomeMenus extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="homemenus clearfix">
                <div className="menu1">
                    <a href="">
                        <em className="iconfont homemenu1">&#xe665;</em> 
                        <span>挂号</span>
                    </a>
                    <a href="">
                            <em className="iconfont homemenu2">&#xe85a;</em> 
                            <span>问医生</span>
                    </a>
                    <a href="">
                            <em className="iconfont homemenu3">&#xe63a;</em> 
                            <span>药店</span>
                    </a>
                    <a href="">
                            <em className="iconfont homemenu4">&#xe6b1;</em> 
                            <span>疾病导诊</span>
                    </a>
                </div>
                <div className="menu2">
                    <a href="">
                        <em className="iconfont homemenu5">&#xe857;</em> 
                        <span>体检</span>
                    </a>
                    <a href="">
                            <em className="iconfont homemenu6">&#xe635;</em> 
                            <span>医美</span>
                    </a>
                    <a href="">
                            <em className="iconfont homemenu7">&#xe602;</em> 
                            <span>母婴</span>
                    </a>
                    <a href="">
                            <em className="iconfont homemenu8">&#xe672;</em> 
                            <span>保险</span>
                    </a>
                </div>
              
            </div>
        )
    }
}
export default HomeMenus