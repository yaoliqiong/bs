import React from 'react'
import Health_search from './health_search'
import Health_swiper from './health_swiper'
import Health_examination from './health_examination'
import Health_server from './health_server'
import Health_free from './health_free'
import GoHosptialFooter from '../../common/GoHospitalFooter'

class Health extends React.Component{
	constructor(props) {
		super(props);
	}
	componentWillMount(){
		var Width = document.documentElement.clientWidth;
		if(Width<321){
			document.documentElement.style.fontSize = document.documentElement.clientWidth/3.2/1.171875 + 'px'
		}else if(Width < 376 && Width > 320){
			document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75 + 'px'
			
		}else{
			document.documentElement.style.fontSize = document.documentElement.clientWidth/4.14*1.104 + 'px'
		}
	}
	render(){
		return (
				<div className='health_tab'>
				<div className='flex1'>
					<Health_search/>
					<Health_swiper/>
					<div className='health_empty'></div>
					<div className="health_active">
						<img src='./img/img/a1.png'/>
						<img src='./img/img/a2.png'/>
					</div>
					<div className='health_empty'></div>
					<Health_examination/>
					<div className='health_empty'></div>
					<Health_server/>
					<div className='health_empty'></div>
					<Health_free/>
				</div>
				<div className="healthfooter">
					<GoHospitalFooter active={"health"}/>
				</div> 
				</div>
			)
	}
}
export default Health
