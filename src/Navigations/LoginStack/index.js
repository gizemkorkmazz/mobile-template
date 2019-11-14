import {createStackNavigator} from 'react-navigation-stack';
import Login from 'Screens/Login/Login';
import NavigationBar from 'Components/StackNavigation/NavigationBar';
import React from 'react';
import WithBackground from 'Screens/Login/WithBackground';
import ScreenNames from 'Constants/ScreenNames/index';
import WithLogo from 'Screens/Login/WithLogo';
import WithProfileImage from 'Screens/Login/WithProfileImage';

const LoginStackNavigator = createStackNavigator(
  {
    [ScreenNames.LOGIN]: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      },
    },
    [ScreenNames.WITH_BACKGROUND]: {
      screen: WithBackground,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenNames.WITH_LOGO]: {
      screen: WithLogo,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenNames.WITH_PROFILE_IMAGE]: {
      screen: WithProfileImage,
      navigationOptions: {
        header: null,
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
