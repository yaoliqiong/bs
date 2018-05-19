
import React from 'react'

import GoHospitalHeader from './component/GoHospitalHeader'
import HomeMenus from './component/HomeMenus'
import DoctorBg from './component/DoctorBg'
import TitleHead from './component/TitleHead'
import IndexNav from './component/IndexNav'
import Banner from './component/Banner'
import TopBanner from '../../common/TopBanner'

import NewsContent from './component/NewsContent'


import GoHospitalFooter from '../../common/GoHospitalFooter'

class GoHospital extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="fullHeight gohospital">
                <div className="gohospital-content">
                    <TopBanner/>
                    <GoHospitalHeader/>
                    <HomeMenus/>
                    <DoctorBg/>
                    <TitleHead/>
                    <Banner/>
                    <IndexNav/>
                    <NewsContent/>
                </div>
                <div className="hospitalfooter">
                    <GoHospitalFooter/>
                </div>
                
            </div>
        )
    }
}
export default GoHospital