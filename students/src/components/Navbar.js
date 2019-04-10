import React, { Component } from 'react';
import '../sass/navbar.scss';

import{
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Mindfulness from '../pages/Mindfulness';
import Tutoring from '../pages/Tutoring';
import About from '../pages/About';
import Games from '../pages/Games';




class Navbar extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="navbar--container">
                        <ul className='navbar--list-container'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/mindfulness">Mindfulness</NavLink></li>
                            <li><NavLink to="/tutoring">Tutoring</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/games">Games</NavLink></li>
                        </ul>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Navbar;