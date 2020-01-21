import React, { Component } from 'react';
import {BrowserRouter as Router , Link, Route, Switch} from 'react-router-dom';

class Admin extends Component {
   constructor (props){
   	 super(props);
   	 localStorage.removeItem("token");
   }
  render(){
  	return(
  		<div>
           <h1>you are log out</h1>
           <Link to="/">Login</Link>
  		</div>
  	)
  }
}

export default Admin;