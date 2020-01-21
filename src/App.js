import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function getCurrentDate()
{
  var date = new Date();
  return date.toDateString();
}

export default class App extends Component {
  render() {
    return(
      <React.Fragment>
         <h1>Hello world!! {getCurrentDate()}</h1>
      </React.Fragment>
    );
  }
}