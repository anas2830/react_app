import React, { Component } from 'react';

const Posts = ({match}) => {
	console.log({match});
	return(<h1>i am {match.params.postId}</h1>);
}

export default Posts;