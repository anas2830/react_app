import React, { Component } from 'react';
import {BrowserRouter as Router , Link, Route, Switch, Redirect} from 'react-router-dom';

class Admin extends Component {
  constructor (props){
		super(props);
		const token = localStorage.getItem("token");
		let loggedIn = true
		if(token == null)
		{
			loggedIn = false
		}

		this.state = {loggedIn}
	}
  render(){
  	if(this.state.loggedIn == false)
  	{
  		return <Redirect to="/" />
  	}
  	return(
  		<div>
           <h1>This is admin</h1>
           <Link to="/logout">logout</Link>
  		</div>
  	)
  }
}

export default Admin;