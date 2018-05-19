import React from 'react'
class Health_search extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
				<div className='health_search'>
					<div className='hs_Box'>
						<div className='hs_box'>
							<div className='hs_logo iconfont icon-sousuo'></div>
							<div className='hs_inp'>
	                	                疾病/医生/科室/医院名称
	                	    </div>
						</div>
					</div>
				</div>
			)
	}
}
export default Health_search
