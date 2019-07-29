import React, { Component } from 'react';
import { View , Text ,Button} from 'react-native';

export default class FaceId extends Component {
    render() {
        return (
        <View>
            <Text> FaceId component is comming soon.</Text>
            <Button title="login with username and passowrod" onPress={()=>this.props.navigation.navigate('Login')}/>
        </View>
        )
    }
}
