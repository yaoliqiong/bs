
// ES6
import React from 'react'
import 'antd/dist/antd.css';

class App extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="fullHeight">
                {this.props.children}
            </div>
        )
    }
    
}
export default App