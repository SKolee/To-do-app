import React from 'react';
//Navigators
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from './src/screens/HomeScreen';
import RemoteScreen from './src/screens/RemoteScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import LoginScreen from './src/screens/LoginScreen';
import RemoteDetail from './src/screens/RemoteDetail';

//Redux
import {Provider} from 'react-redux';
import store from './src/store/store';

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();
const RemoteStack = createStackNavigator();
const MainStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: 'white'},
      headerStyle: {
        backgroundColor: '#ffeecc',
        height: 60,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'RobotoMono-Bold',
        color: 'tomato',
      },
    }}>
    <HomeStack.Screen name="To-Do List" component={HomeScreen} />
    <HomeStack.Screen name="To-Do Details" component={DetailsScreen} />
  </HomeStack.Navigator>
);
const RemoteStackScreen = () => (
  <RemoteStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ffeecc',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'RobotoMono-Bold',
        color: 'tomato',
      },
    }}>
    <RemoteStack.Screen name="Remote" component={RemoteScreen} />
    <RemoteStack.Screen name="Remote_Detail" component={RemoteDetail} />
  </RemoteStack.Navigator>
);

const TodoStackScreen = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'To-Do Main') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Remote Screen') {
          iconName = focused ? 'database' : 'database-outline';
        }

        return (
          <MaterialCommunityIcons
            name={iconName}
            size={40}
            color={color}
            style={{paddingTop: 8}}
          />
        );
      },
      tabBarLabel: ' ',
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {
        height: 60,
        backgroundColor: '#ffeecc',
      },
    }}>
    <Tab.Screen name="To-Do Main" component={HomeStackScreen} />
    <Tab.Screen name="Remote Screen" component={RemoteStackScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="To-Do_Screen" component={TodoStackScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
