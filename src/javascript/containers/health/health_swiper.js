import React from 'react'
class Health_swiper extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="swiper-container health-shop_classify">
			    <div className="swiper-wrapper">
			        <div className="swiper-slide health-shop_1">
			        	<ul className='swiper_content'>
							<li><i className='iconfont icon-tijianyuyue'></i>
								<div className='swiper_tag'>体检</div>
							</li>
							<li><i className='iconfont icon-shangcheng'></i>
								<div className='swiper_tag'>商城</div>
							</li>
							<li><i className='iconfont icon-dingdanfahuoyaodian'></i>
								<div className='swiper_tag'>药房</div>
							</li>
							<li><i className='iconfont icon-baoxian'></i>
								<div className='swiper_tag'>保险</div>
							</li>
							<li><i className='iconfont icon-kangyouyu'></i>
								<div className='swiper_tag'>康.友鱼</div>
							</li>
							<li><i className='iconfont icon-peihu'></i>
								<div className='swiper_tag'>陪护</div>
							</li>
							<li><i className='iconfont icon-muying'></i>
								<div className='swiper_tag'>母婴护理</div>
							</li>
							<li><i className='iconfont icon-yimei1'></i>
								<div className='swiper_tag'>医美</div>
							</li>
							<li><i className='iconfont icon-kouqiangke'></i>
								<div className='swiper_tag'>口腔</div>
							</li>
							<li><i className='iconfont icon-guojiyiliaox'></i>
								<div className='swiper_tag'>国际医疗</div>
							</li>
						</ul>
			        </div>
			        <div className="swiper-slide health-shop_2">
						<ul className='swiper_content'>
							<li><i className='iconfont icon-tijianyuyue'></i>
								<div className='swiper_tag'>体检</div>
							</li>
						</ul>
			        </div>
			    </div>
			    <div className="swiper-pagination health-pagination"></div>
			</div>	
		)
	}
	componentDidMount() {
		new Swiper('.health-shop_classify',{
    		pagination:'.health-pagination'
    	})    
	}
}
export default Health_swiper