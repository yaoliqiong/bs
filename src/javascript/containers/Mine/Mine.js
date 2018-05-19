
import React from 'react'
import GoHospitalFooter from '../../common/GoHospitalFooter'
import MineHead from './component/MineHead'
import MineNav from './component/MineNav'
import MineContentTop from './component/MineContentTop'
import MineContentMiddle from './component/MineContentMiddle'
import MineContentBottom from './component/MineContentBottom'


class Mine extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="fullHeight mine">
                <div className="mine-content">
                    <MineHead/>
                    <MineNav/>
                    <MineContentTop/>
                    <MineContentMiddle/>
                    <MineContentBottom/>
                </div>
                <div className="minefooter">
                    <GoHospitalFooter active={"mine"}/>
                </div>     
            </div>
        )
    }
}
export default Mine