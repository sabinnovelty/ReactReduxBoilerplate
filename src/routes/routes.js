import { createAppContainer , createStackNavigator , createSwitchNavigator , createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import Login from '../components/screens/Auth/Login';
import FaceId from '../components/screens/Auth/FaceId';

import { ActiveLeads , Tasks , Inventory }  from '../components/screens/DrawerScreen';
import { Showroom , Remote  } from '../components/screens/TabScreen/Showroom';
import { Due , Upcoming } from '../components/screens/TabScreen/Task';

const TaskTabNav = createBottomTabNavigator({
    Due: { screen : Due },
    Upcoming : { screen : Upcoming }
})

const ShowroomTab = createBottomTabNavigator({
    Showroom: { screen : Showroom },
    Remote : { screen: Remote }
})

const ActiveLeadTabStack = createStackNavigator({
    ActiveLeadTab : { screen : ShowroomTab }
});

const DrawerNavigator = createDrawerNavigator({
    ActiveLeads:{ screen :ActiveLeadTabStack  },
    Inventory:{ screen :Inventory },
    Tasks:{ screen :TaskTabNav  },
},{
    initialRouteName:'ActiveLeads'
})


const AppNavigator = createSwitchNavigator({
    Login:{ screen:Login },
    FaceId:{screen:FaceId},
    Home:{ screen : DrawerNavigator }
},{
    initialRouteName:'FaceId'
});

export default createAppContainer( AppNavigator );