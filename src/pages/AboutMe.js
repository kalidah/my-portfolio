/**
 * AboutMe.js
 * Student's Name: Kalid Haider
 * StudentID: 301383513
 * Date: 2024-05-31
 */

import React from 'react';
import './AboutMe.css';
import profilePic from '../assets/profile.jpg';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <p>Hi, I'm Kalid. I am a student and programmer.</p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
    );
};

export default AboutMe;
