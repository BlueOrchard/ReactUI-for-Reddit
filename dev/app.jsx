import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import LeftNav from './components/leftnav.jsx';

class SlightLeftNav extends React.Component{
    render(){
        return <div className="list secondlist">
                    Test2
               </div>;
    }
}

class MainContent extends React.Component{
    render(){
        return <div className="content">
                    Test3
               </div>;
    }
}

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