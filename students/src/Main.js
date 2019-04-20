import React, { Component } from 'react';
import './sass/base.scss';


import{
    Route,
    HashRouter
} from 'react-router-dom';
//globals
import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import Footer from './components/Footer';
//pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Mindfulness from './pages/Mindfulness';
import Tutoring from './pages/Tutoring';
import About from './pages/About';
import Games from './pages/Games';
// Functions
// import Welcome from './components/functions/Welcome';
// import Clock from './components/functions/Clock';



class Main extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                {/* <Welcome name="Student!"/>  */}

                <Masthead pathName='doot'/>
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

                {/* <Clock/> */}

                <Footer/>
            </div>
        );
    }
}


export default Main;