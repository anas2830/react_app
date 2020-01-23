import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Count from './components/redux/count';
import Control from './components/redux/control';



class App extends Component {
    render() {
        return (
            <Provider store={ store }>
              <React.Fragment>
                 <h1> Hello world!! </h1>
                 < Count / >
                 <Control />
              </React.Fragment> 
            </Provider>
        );
    }
}

export default App;


// 1 = create reducer
//2 create store use reducer
//3= then subscribe
//4 == dispatch when action