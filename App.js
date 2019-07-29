import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers';
import { connect } from 'react-redux'
import Library from './src/components/Library';

 export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore( rootReducer )}>
        <Library />
      </Provider>
  
    );
  }
}



// export default connect( mapStateToProps , null )( App );
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
