import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import LeftNav from './components/leftnav.jsx';
import SlightLeftNav from './components/slightleftnav.jsx';
import MainContent from './components/maincontent.jsx';

class Layout extends React.Component{
    render(){
        return(<div className="main">
                <LeftNav />
                <SlightLeftNav />
                <MainContent />
               </div>);
    }
}

ReactDOM.render(<Layout />, document.getElementById('app'));