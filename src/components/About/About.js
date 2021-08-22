import React from 'react'
import './About.css';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function About() {
    return (
        <div className = "about-section">
            <h1>WHO AM I?</h1>
            <div>
               <p style = {{fontSize: '1.5rem'}}> I am a female front end web developer.</p>
               <p style = {{fontSize: '1.4rem'}}> I can work with:</p>
                <div className = "about-details">
                <p><CheckBoxIcon/>HTML</p>
               <p><CheckBoxIcon/>CSS</p>
               <p><CheckBoxIcon/>JavaScript</p>
               <p><CheckBoxIcon/>ReactJS</p>
               <p><CheckBoxIcon/>NextJS</p>
                </div>
                <div className = "about-details">
                <p><CheckBoxIcon/>Pivotal Tracker</p>
               <p><CheckBoxIcon/>Jira</p>
                </div>
                <div className = "about-details">
                <p><CheckBoxIcon/>Github</p>
               <p><CheckBoxIcon/>Bitbucket</p>
                </div>
            </div>
        </div>
    )
}

export default About
