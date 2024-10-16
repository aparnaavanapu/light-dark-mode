import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component{

    state={isDark:true}
    changeMode=()=>{
         this.setState(prevState=>({isDark:!prevState.isDark}))
    }

    render(){
        const {isDark}=this.state
        const modeClassName =isDark?'dark-mode':'light-mode'
        const buttonText =isDark?'Light Mode':'Dark Mode'

        return(
            <div className="bg-container">
                <div className={`container ${modeClassName}`}>
                    <h1 className="heading">Click To Change Mode</h1>
                    <button type="button" className="btn" onClick={this.changeMode} >{buttonText}</button>
                </div>
            </div>
        )
    }

}

export default LightDarkMode