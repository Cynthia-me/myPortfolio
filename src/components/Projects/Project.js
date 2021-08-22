import React from 'react'
import './Projects.css'
import acc from '../../images/accounting-firm.JPG'
import ieee from '../../images/ieee-kyu.JPG'
import ninja from '../../images/ninja.JPG'
import courier from '../../images/safeCourier.JPG'
import { Link, BrowserRouter as Router } from 'react-router-dom'

function Project() {
    return (
        <div className = "projects_container">
            <h1>PROJECTS</h1>
            <Router>
            <div className = "projects_section">
                <div className = "project">
                    <Link  style= {{ textDecoration: 'none'}} to={{ pathname: "https://accounting-firm.netlify.app/" }} target="_blank" >
                    <div><img src = {acc} alt = "the project"></img></div>
                    <h3>AN ACCOUNTING FIRM</h3>
                    <p>Html,CSS,JS</p>
                    </Link>
                    
                </div>
                <div className = "project">
                    <Link style= {{ textDecoration: 'none'}} to={{ pathname: "https://findninja.netlify.app/" }} target="_blank">
                    <div> <img src = {ninja}  alt = "the project"></img></div>
                    <h3>NINJA LIST</h3>
                    <p>Next JS</p>
                    </Link>
                    
                </div>
                <div className = "project">
                    <Link style= {{ textDecoration: 'none'}} to={{ pathname: "https://ieeekyu.netlify.app/" }} target="_blank">
                    <div><img src = {ieee}  alt = "the project"></img></div>
                    <h3>IEEE-KYAMBOGO</h3>
                    <p>React JS</p>
                    </Link>
                    
                </div>
                <div className = "project">
                    <Link style= {{ textDecoration: 'none'}} to={{ pathname: "https://safe-courier-ui.netlify.app/" }} target="_blank">
                    <div><img src = {courier}  alt = "the project"></img></div>
                    <h3>SAFE COURIER</h3>
                    <p>React JS</p>
                    </Link>
                    
                </div>
            </div>
            <Link style= {{ textDecoration: 'none'}} to={{ pathname: "https://github.com/Cynthia-me" }} target="_blank"><button className = "projectGit">MORE ON GITHUB</button></Link>
            
            </Router>
        </div>
    )
}

export default Project
