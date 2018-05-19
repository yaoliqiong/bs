import React from 'react'
import axios from 'axios'

class Article extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            articles:[]
        }
    }
   getdate(){
       let that = this
       axios.get('http://localhost:9000/doc_api/ask/docArticleList.html?code=0&page=1&size=10').then((res)=>{
           let result = res.data.data.rows
           return result
       }).then((result)=>{
            that.setState({
                articles:result
            })
       })
   }
  
   componentWillMount(){
       this.getdate()
   }
  
   showArticle(){
    return this.state.articles.map((item,i)=>{
        return <a href={item.link_url} className="article-content__list" key={item.text_id}>
                  <img src={item.cover}/>
                  <div className="article-doctor__text">
                      <span className="text-top">
                         {item.title}
                      </span>
                      <div className="text-bottom">
                          <img src={item.doctor_avatar}/>
                          <span>{item.doctor_name}  {item.unit_name}</span>
                      </div>
                  </div>
              </a>
    }) 
 }
    render(){
        return (
            <div className="article">
                <div className="indexnav-top">
                    <div className="top-left">
                            <span></span>
                            <p>医生文章</p>
                    </div>
                </div> 
                <div className="article-content">
                    {
                        this.showArticle()
                    }
                </div>
                
            </div>
        )
    }
    
}
export default Article