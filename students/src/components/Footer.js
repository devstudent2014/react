import React, { Component } from 'react';
import '../sass/footer.scss';

import{
    NavLink,
    HashRouter
} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <HashRouter>
                <div className="footer--container">
                    <div className="footer--items-container">
                        <ul className='footer--list-container'>
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

export default Footer;