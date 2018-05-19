import React from 'react'
import axios from 'axios'
class Health_examination extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			Content:[]
		}
	}
	getContent(){
		let that=this
		axios.get('./json/health_examination.json',{})
		.then((res)=>{
			that.setState({
				Content:res.data
			})		
		})
	}
	componentWillMount(){
		this.getContent()
	}
	showContent(){
		return this.state.Content.map((item,i)=>{
			return <div className='hec_content' key={i}>
						<img className='hec_img' src={item.img}/>
						<p className='hec_title'>{item.title}</p>
						<p className='hec_title1'>{item.title1}</p>
						<div className='hec_price'>￥
							<span className='hec_pricing'>{item.pricing}</span>
							<span className='hec_priced'>{item.priced}</span>
						</div>
					</div>
		})
	}
	render(){
		return (
				<div className='health_examination'>
					<div className='he_headline'>
						<div className='heh_context'>160体检</div>
					</div>
					<div className='he_content'>
						{this.showContent()}
					</div>
				</div>
			)
	}
}
export default Health_examination
