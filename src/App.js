import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store/new_store';

function edit_person()
{
    store.dispatch({type:'edit_person'});
}
function edit_game()
{
    store.dispatch({type:'edit_game'});
}


class App extends Component {
    render() {
        return ( 
            <div>
             <h1> {store.getState().person.name} <button onClick={edit_person}> update </button> </h1>
             <h1> {store.getState().sports.game} <button onClick={edit_game}> Update </button></h1>
            </div>

        );
    }
}
export default App;


// 1 = create reducer
//2 create store use reducer
//3= then subscribe
//4 == dispatch when action