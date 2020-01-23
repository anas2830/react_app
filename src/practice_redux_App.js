import React, {Component} from 'react';
import { Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';

const personReducer = (state = {}, action) => {
    if (action.type == 'new_update')
    {
        return {
            new_person: 'tarek'
        }
    }
    return state;
}

const sportsReducer = (state = {}, action) => {
    if (action.type == 'new_update') {
        return {
            new_sports_var: 'football'
        }
    }
    return state;
}

const initialstate = {
    new_sports_var: {},
    new_person: {}
}

const Allreducer = combineReducers({
    new_sports: sportsReducer,
    new_person: personReducer
})

const store = createStore(Allreducer, initialstate);

console.log(store.getState());

store.dispatch({type: 'new_update'});

console.log(store.getState());

class App extends Component {
    render() {
        return( 
            <div>
              <h1> kkkk </h1> 
              {store.getState().new_person.new_person}
              {store.getState().new_sports.new_sports_var}
            </div>
        )
    }
}
export default App;


// 1 = create reducer
//2 create store use reducer
//3= then subscribe
//4 == dispatch when action