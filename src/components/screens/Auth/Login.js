import React, { Component } from 'react';
import { View , Text ,Button } from 'react-native';
import { connect } from 'react-redux';


class Login extends Component {
    render() {
        return (
        <View>
            <Text> Login component is comming soon.</Text>
            <Button title="login " onPress={()=>this.props.navigation.navigate('Home')}/>
        </View>
        )
    }
}
const mapStateToProps = state =>{
    console.log('login state',state);
    return {
        login:state.libraries
    }
}

export default connect( mapStateToProps )( Login );