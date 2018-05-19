
import React from 'react'
import GoHospitalFooter from '../../common/GoHospitalFooter'
import DoctorHead from './component/DoctorHead'
import FamousDoctor from './component/FamousDoctor'
import PersonalDoctor from './component/PersonalDoctor'
import SmallClass from './component/SmallClass'
import FindDoctor from './component/FindDoctor'
import AskDoctor from './component/AskDoctor'
import HotAskD from './component/HotAskD'
import Article from './component/Article'
import TopBanner from '../../common/TopBanner'


class Doctor extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="fullHeight doctor">
                <div className="doctor-content">
                    <TopBanner/>
                    <DoctorHead/>
                    <FamousDoctor/>
                    <PersonalDoctor/>
                    <SmallClass/>
                    <FindDoctor/>
                    <AskDoctor/>
                    <HotAskD/>
                    <Article/>
                </div>
                <div className="doctorfooter">
                    <GoHospitalFooter active={"doctor"}/>
                </div>     
            </div>
        )
    }
}
export default Doctor