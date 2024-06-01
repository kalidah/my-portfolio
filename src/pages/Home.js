/**
 * AboutMe.js
 * Student's Name: Kalid Haider
 * StudentID: 301383513
 * Date: 2024-05-31
 */


import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <p>Let's make the world a better place.</p>
            <Link to="/about-me" className="btn">Learn More About Me</Link>
            <Link to="/projects" className="btn">View My Projects</Link>
        </div>
    );
};

export default Home;
