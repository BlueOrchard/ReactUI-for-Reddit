import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import LeftNav from './components/leftnav.jsx';
import SlightLeftNav from './components/slightleftnav.jsx';
import MainContent from './components/maincontent.jsx';

import allReducers from './reducers/index.jsx'

const store = createStore(allReducers);

class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div className="main">
                <LeftNav />
                <SlightLeftNav />
                <MainContent />
               </div>);
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>
    , document.getElementById('app'));