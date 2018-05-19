import React from 'react'
import axios from 'axios'
class Health_free extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			Free:[]
		}
	}
	getContent(){
		let that=this
		axios.get('./json/health_free.json',{})
		.then((res)=>{
			that.setState({
				Free:res.data
			})		
		})
	}
	componentWillMount(){
		this.getContent()
	}
	showFree(){
		return this.state.Free.map((item,i)=>{
			return <div className='hf_content' key={i}>
						<div className='hf_content_l'>
							<img src={item.img}/>
						</div>
						<div className='hf_content_r'>
							<p className='hfc_title'>{item.title}</p>
							<p className='hfc_title1'>{item.title1}</p>
							<div className='hfc_price'>￥
								<span className='hfc_pricing'>{item.pricing}</span>
								<span className='hfc_priced'>{item.priced}</span>
							</div>	
						</div>
					</div>
		})
	}
	render(){
		return (
				<div className='health_Free'>
					<div className='he_headline'>
						<div className='heh_context'>0元体验</div>
					</div>

					<div className='health_free'>
						{this.showFree()}
					</div>
				</div>
			)
	}
}
export default Health_free
