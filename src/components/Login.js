import React, { Component } from 'react';
import {BrowserRouter as Router , Link, Route, Switch, Redirect} from 'react-router-dom';

class Login extends Component {
	constructor (props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		var loggedIn = false;
		this.state = {
			username:'',
			password:'',
			loggedIn,
			check:0
		}
	}

	onChange(e)
	{
		this.setState({
            [e.target.name]: e.target.value
		});
	}

	submitForm(e)
	{
		e.preventDefault();
		var user_info = {
			username: this.state.username,
			password: this.state.password
		}

		if(user_info.username == 'A' && user_info.password == '123')
		{
			localStorage.setItem("token","kskdfjdslfjdslfk");
			this.setState({
				loggedIn : true
			})
		}
		else
		{
			alert('wrong');
		}
		
	}

	render(){
		if(this.state.loggedIn == true){
			return <Redirect to="/admin" />
		}

		return(
			<div>
               <h1>Login</h1>
               <form onSubmit={this.submitForm}>
                   <input type="text" placeholder="name here" name="username" value={this.state.username} onChange={this.onChange} /> &nbsp;
                   <input type="password" placeholder="pass here" name="password" value={this.state.password} onChange={this.onChange} /> &nbsp;

                   <input type="submit" value="go" />

               </form>
			</div>
		);
	}
}

export default Login;