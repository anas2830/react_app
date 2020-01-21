import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Link, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Posts from './components/Posts';


export default class App extends Component {
    render() {
        return (
        	<Router>
	            <div className="container">
	                <p>this is Header</p>
	                <Nav />
	                <Route exact path="/" render={() => {
	                	return <Home name="test" />
	                }} />
	                <Route exact path="/about" component={About} />
	                <Route exact path="/posts/:postId" component={Posts} />
	            </div>
            </Router>
        );
    }
}


