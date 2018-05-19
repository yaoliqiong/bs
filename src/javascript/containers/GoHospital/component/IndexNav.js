import React from 'react'

class IndexNav extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
           <div className="indexnav">
               <div className="indexnav-top">
                   <div className="top-left">
                        <span></span>
                        <p>热门科室</p>
                   </div>
                   {/* <a className="top-right">
                       <p>全部</p>
                        <i className="iconfont">&#xe606;</i>
                   </a> */}
               </div>
               <div className="indexnav-bottom clearfix">
                   <a href="#">
                       妇科
                   </a>
                   <a href="#">
                       口腔科
                   </a>
                   <a href="#">
                       皮肤科
                   </a>
                   <a href="#">
                      消化内科
                   </a>
                   <a href="#">
                       产科
                   </a>
                   <a href="#">
                       耳鼻喉科
                   </a>
                   <a href="#">
                       泌尿外科
                   </a>
                   <a href="#">
                       中医科
                   </a>
               </div>
           </div>
        )
    }
}
export default IndexNav