/**
 * AboutMe.js
 * Student's Name: Kalid Haider
 * StudentID: 301383513
 * Date: 2024-05-31
 */


import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import './Projects.css';

// Component for Projects Page
const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="project">
                    <img src={project1} alt="Project 1" />
                    <p>Project 1:</p>
                    <p>Open-CV based program for silver detection, used for surfaced enhanced Raman Spectroscopy</p>
                </div>
                <div className="project">
                    <img src={project2} alt="Project 2" />
                    <p>Project 2:</p>
                    <p>Website illustrating our wonderful planet</p>
                </div>
                <div className="project">
                    <img src={project3} alt="Project 3" />
                    <p>Project 3:</p>
                    <p>Website for those interested in real estate and overly luxurious homes</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;