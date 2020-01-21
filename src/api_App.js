import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



export default class Listing extends Component {
  constructor()
  {
       super();
       this.state={
          categories: [],
      }

  }

  componentDidMount()
  {
    axios.get('http://127.0.0.1:8000/api/category').then(response=>{
      this.setState({
        categories:response.data.result.data
      });

      console.log(this.state.categories);
    });
  }

  render() {
    return(
      <div>

      </div>
    );
  }
}


