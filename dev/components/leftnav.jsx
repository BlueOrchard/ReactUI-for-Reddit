import React from 'react';
import {connect} from 'react-redux';

class LeftNav extends React.Component{
    maplistNav(){
        return this.props.navList.map((item) => {
            return(<div key={item.id}>
                       {item.name}
                   </div>);
        });
    }

    render(){
        return <div className="list">
                    {this.maplistNav()}
               </div>;
    }
}

function mapStateToProps(state){
    return {
        navList: state.navList
    }
}

export default connect(mapStateToProps)(LeftNav);