import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';
import NotFound from './components/NotFound';


export default class App extends Component {
    render() {
        return(
        	<div className="container">
        	<Router>
	        	<Switch>
	                 <Route exact path="/" component={Login} />
	                 <Route path="/admin" component={Admin} />
	                 <Route path="/logout" component={Logout} />
	                 <Route path="" component={NotFound} />
	        	</Switch>
        	</Router>
            </div>
        );
    }
}
