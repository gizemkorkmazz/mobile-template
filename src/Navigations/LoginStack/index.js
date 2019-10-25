import {createStackNavigator} from 'react-navigation-stack';
import Login from 'Screens/Login';
import NavigationBar from 'Components/StackNavigation/NavigationBar';
import React from 'react';
const LoginStackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      },
    },
  },
  {
    headerMode: 'float',
    defaultNavigationOptions: {
      header: props => <NavigationBar props={props} />,
    },
  },
);

export default LoginStackNavigator;
