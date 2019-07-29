import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View , Text } from 'react-native';


class Library extends Component {
    render() {
        return (
            <View><Text>hello</Text></View>
        ) ;
    }
}


const mapStateToProps = state =>{
    console.log('state',state.Auth);
    return {
        libraray:state.Auth
    }
};

export default connect( mapStateToProps )(Library);