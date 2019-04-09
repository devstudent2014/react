import React, { Component } from 'react';

import{
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Mindfulness from './pages/Mindfulness';
import Tutoring from './pages/Tutoring';
import About from './pages/About';
import Games from './pages/Games';



class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Mindful Maths!</h1>
                    <ul className='header'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/mindfulness">Mindfulness</NavLink></li>
                        <li><NavLink to="/tutoring">Tutoring</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/games">Games</NavLink></li>
                    </ul>
                    <div className='content'>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/mindfulness' component={Mindfulness}/>
                        <Route exact path='/tutoring' component={Tutoring}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Route exact path='/games' component={Games}/>

                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;