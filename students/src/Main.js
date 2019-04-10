import React, { Component } from 'react';

import{
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Mindfulness from './pages/Mindfulness';
import Tutoring from './pages/Tutoring';
import About from './pages/About';
import Games from './pages/Games';


class Main extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Masthead/>

                <HashRouter>
                <div className='content'> {/* can this be done in a component? */}
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/mindfulness' component={Mindfulness}/>
                        <Route exact path='/tutoring' component={Tutoring}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Route exact path='/games' component={Games}/>
                </div>
                </HashRouter>

                <Footer/>
            </div>
        );
    }
}

export default Main;