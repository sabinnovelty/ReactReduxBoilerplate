import { createAppContainer , createStackNavigator , createSwitchNavigator } from 'react-navigation';
import Login from '../components/screens/Auth/Login';
import FaceId from '../components/screens/Auth/FaceId';

const AppNavigator = createSwitchNavigator({
    Login:{ screen:Login },
    FaceId:{screen:FaceId}
},{
    initialRouteName:'FaceId'
});

export default createAppContainer( AppNavigator );