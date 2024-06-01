/**
 * AboutMe.js
 * Student's Name: Kalid Haider
 * StudentID: 301383513
 * Date: 2024-05-31
 */


import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; 
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-me">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact-me">Contact Me</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
