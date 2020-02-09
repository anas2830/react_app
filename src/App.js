import React, {Component} from 'react';
import {connect} from 'react-redux';
import HookCounter from './components/HookCounter';
import HookUseStateCounter from './components/HookUseStateCounter';
import HookUseStateArray from './components/HookUseStateArray';

function App(props){

        return ( 
            <div>
             <HookCounter />
             --------------------------------------------------------- <br></br>
             ---------------------------------------------------------
             <HookUseStateCounter />
             --------------------------------------------------------- <br></br>
             ---------------------------------------------------------
             <HookUseStateArray />
            </div>

        );
}

export default connect(null,null)(App);