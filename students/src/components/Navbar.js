import React, { Component } from 'react';
import '../sass/navbar.scss';

import{
    NavLink,
    HashRouter
} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <HashRouter>
                <div className="navbar--container">
                    <div className="navbar--items-container">
                        <h1 className='navbar--headline'>Mindful Maths</h1>
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