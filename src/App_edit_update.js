import React, {Component} from 'react';
import {connect} from 'react-redux';

function App(props){

        return ( 
            <div>
             <h1> {props.person.name}<button onClick={props.edit_person}> update </button> </h1>
             <h1> {props.sports.game} <button onClick={props.edit_game}> Update </button></h1>
            </div>

        );
}

const mapStateToProps = state => {
console.log('state');
 return {
     person: state.person,
     sports: state.sports
 }
}

const mapDispatchToProps = dispatch => {
    console.log('dispatch');
  return {
    edit_person: () => { 
        dispatch({type: 'edit_person'});
    },
      edit_game: () => {dispatch({type: 'edit_game'})}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);


// 1 = create reducer
//2 create store use reducer
//3= then subscribe
//4 == dispatch when action