/**
 * AboutMe.js
 * Student's Name: Kalid Haider
 * StudentID: 301383513
 * Date: 2024-05-31
 */


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Services from './pages/Services';
import ContactMe from './pages/ContactMe';
import logo from './assets/logo.svg';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-me" component={AboutMe} />
                <Route path="/projects" component={Projects} />
                <Route path="/services" component={Services} />
                <Route path="/contact-me" component={ContactMe} />
            </Switch>
        </Router>
    );
};

export default App;
