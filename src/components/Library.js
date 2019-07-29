import React, { Component } from 'react';
import { connect } from 'react-redux';


class Library extends Component {
    render() {
        return ;
    }
}


const mapStateToProps = state =>{
    console.log('state',state.Auth);
};

export default connect( mapStateToProps )(Library);