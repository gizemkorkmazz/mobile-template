import {createStackNavigator} from 'react-navigation-stack';
import NavigationBar from 'Components/StackNavigation/NavigationBar';
import React from 'react';
import Home from 'Screens/Home';
import ScreenNames from 'Constants/ScreenNames';

const HomeStackNavigator = createStackNavigator(
  {
    [ScreenNames.HOME]: {
      screen: Home,
      navigationOptions: {},
    },
  },
  {
    initialRouteName: ScreenNames.HOME,
    navigationOptions: {
      gesturesEnabled: false,
    },
    defaultNavigationOptions: {
      header: props => <NavigationBar props={props} />,
    },
  },
);

export default HomeStackNavigator;
