import React, { Component } from 'react';
import {Link } from 'react-router-dom';

const Nav = (props) => {
	return(
		<nav>
           <Link to="/">Home</Link> &nbsp;
           <Link to="/about?type=1">About</Link>
           &nbsp;
           <a href="/">Home</a>&nbsp;
           <a href="/about">About</a>&nbsp;

           <Link to="/posts/post-1">Post 1</Link>&nbsp;
           <Link to="/posts/post-2">Post 2</Link>&nbsp;
		</nav>
	);
}

export default Nav;