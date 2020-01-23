import {createStore, combineReducers} from 'redux';
import personReducer from './reducers/personReducer';
import sportsReducer from './reducers/sportsReducer';
import update from './actions/Action';

const Allreducer = combineReducers({sports: sportsReducer,person: personReducer})

const initialstate = {
    sports: {game: 'nai'},
    person:{name:'nai'}
}

const store = createStore(Allreducer,initialstate);
console.log(store.getState());

store.dispatch(update);

console.log(store.getState());

export default store;