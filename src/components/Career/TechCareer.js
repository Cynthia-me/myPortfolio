import React from 'react'
import CareerStory from '../../images/Career story.png'
import './TechCareer.css'
function TechCareer() {
    return (
        <div className = "career-section">
            <h2>MY CAREER STORY</h2>
            <img src = {CareerStory} alt = "Cynthia's tech career story"/>
        </div>
    )
}

export default TechCareer
