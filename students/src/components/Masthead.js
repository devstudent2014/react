import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import '../sass/masthead.scss';



class Masthead extends Component{
    
    render(){
        return(
            <div className="masthead--container">
                <h2 className="masthead--label">{this.props.pathName}</h2>
            </div>
        );
    }
}

export default Masthead;
