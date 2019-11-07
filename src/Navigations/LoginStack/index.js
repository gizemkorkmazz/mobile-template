import {createStackNavigator} from 'react-navigation-stack';
import Login from 'Screens/Login/Login';
import NavigationBar from 'Components/StackNavigation/NavigationBar';
import React from 'react';
import WithUsername from 'Screens/Login/WithUsername';
import ScreenNames from 'Constants/ScreenNames/index';
import Registry from 'Screens/Login/Registry';

const LoginStackNavigator = createStackNavigator(
  {
    [ScreenNames.LOGIN]: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      },
    },
    [ScreenNames.WITH_USERNAME]: {
      screen: WithUsername,
      navigationOptions: {
        title: 'Login',
      },
    },
    [ScreenNames.REGISTRY]: {
      screen: Registry,
      navigationOptions: {
        title: 'Login',
      },
    },
  },
  {
    initialRouteName: ScreenNames.LOGIN,
    navigationOptions: {
      gesturesEnabled: false,
    },
    defaultNavigationOptions: {
      header: props => <NavigationBar props={props} />,
    },
  },
);

export default LoginStackNavigator;
