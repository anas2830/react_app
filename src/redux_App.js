import React, { Component } from 'react';
import { createStore } from 'redux';



export default class App extends Component {
  render() {

    //reducer function must have 2 param
    // 1) state 2) action
    const reducer = (state={}, action) => {
       if(action.type == 'A'){
         return {
           ... state,
          A: 'i am a'
          }
       }
       if(action.type == 'B'){
         return {
           ... state,
           B: 'i am B'
          }
       }

       return state;
    }

    const store = createStore(reducer);

    store.subscribe(() => {
      console.log(store.getState().A);
    });

    store.dispatch({type:'A'});
    store.dispatch({type:'B'});


    return(
      <React.Fragment>
         <h1>Hello world!!</h1>
      </React.Fragment>
    );
  }
}



// 1 = create reducer
//2 create store use reducer
//3= then subscribe
//4 == dispatch when action