import React from 'react'
import { Carousel } from 'antd';
class Banner extends React.Component{
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            // swiper 轮播图
            // <div className="swiper-container bannerImg">
            //     <div className="swiper-wrapper">
            //         <div className="swiper-slide content">
            //             <img src="https://images.91160.com/primary/201711/2017110309484019444.jpg"/> 
            //         </div>
            //         <div className="swiper-slide content">
            //             <img src="https://images.91160.com/primary/201711/2017110111225735905.png"/> 
            //         </div>
            //         <div className="swiper-slide content">
            //             <img src="https://images.91160.com/primary/201711/2017110210093673813.jpg"/> 
            //         </div>
            //         <div className="swiper-slide content">
            //             <img src="https://images.91160.com/primary/201711/2017110214183170642.jpg"/> 
            //         </div>
            //     </div>
            //     <div className="swiper-pagination"></div>
            // </div>
           
             //antd走马灯
            <div className="bannerImg">
                <Carousel autoplay dots={false}>
                    <div><img src="https://images.91160.com/primary/201711/2017110309484019444.jpg"/></div>
                    <div><img src="https://images.91160.com/primary/201711/2017110111225735905.png"/></div>
                    <div><img src="https://images.91160.com/primary/201711/2017110210093673813.jpg"/></div>
                    <div><img src="https://images.91160.com/primary/201711/2017110214183170642.jpg"/></div>
                </Carousel>
            </div>
        )
    }
    // componentDidMount(){
    //     this.swiper4 = new Swiper('.bannerImg',{		    
    //         freeMode : true,
    //         slidesPerView : 'auto',
    //         freeModeSticky : true ,
    //         freeModeMomentumRatio:0.3,
    //         loop:true,
    //         pagination: '.swiper-pagination'
    //    })
    // }
    // componentDidUpdate(){
    // 	this.swiper4.update()
    // }
}
export default Banner