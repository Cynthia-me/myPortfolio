import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Contact.css';

function Contact() {
    return (
        <div className = "contactSection">
            <div className = "contactDetails">
                <h1>LET US CONNECT</h1>
                <p style = {{color: '#feab9a',fontSize: '1.1rem'}}>I believe things are made greater through connecting</p>
                <div>
                <button className = "contactBtn"><EmailIcon style = {{fill: "white"}}/>cynthiaayebare7@gmail.com</button>
                <button className = "contactBtn"><LinkedInIcon style = {{fill: "white"}}/> Cynthia Ayebare</button>
                <button className = "contactBtn"><GitHubIcon style = {{fill: "white"}}/> Cynthia-me</button>
                </div>
                
            </div>
        </div>
    )
}

export default Contact
