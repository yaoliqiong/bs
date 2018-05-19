import React from 'react'
import axios from 'axios'
class Health_server extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			Server:[]
		}
	}
	getContent(){
		let that=this
		axios.get('./json/health_server.json',{})
		.then((res)=>{
			that.setState({
				Server:res.data
			})		
		})
	}
	componentWillMount(){
		this.getContent()
	}
	showServer(){
		return this.state.Server.map((item,i)=>{
			return <div className='hs_content' key={i}>
						<div className='hs_content_l'>
							<img src={item.img}/>
						</div>
						<div className='hs_content_r'>
							<p className='hsc_title'>{item.title}</p>
							<p className='hsc_title1'>{item.title1}</p>
							<div className='hsc_price'>￥
								<span className='hsc_pricing'>{item.pricing}</span>
								<span className='hsc_priced'>{item.priced}</span>
							</div>	
						</div>
					</div>
		})
	}
	render(){
		return (
				<div className='health_Server'>
					<div className='he_headline'>
						<div className='heh_context'>健康体验</div>
					</div>

					<div className='health_server'>
						{this.showServer()}
					</div>
				</div>
			)
	}
}
export default Health_server
