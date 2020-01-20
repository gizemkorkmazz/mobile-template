import {createStackNavigator} from 'react-navigation-stack';
import NavigationBar from 'Components/StackNavigation/NavigationBar';
import React from 'react';
import Home from 'Screens/Home/Home';
import ScreenNames from 'Constants/ScreenNames';
import Route from 'Screens/Home/Home1/Route';
import Campaign from 'Screens/Home/Home1/Campaign';
import Activity from 'Screens/Home/Home1/Activity';
import Blog from 'Screens/Home/Home1/Blog';
import Home1 from 'Screens/Home/Home1/Home1';

const HomeStackNavigator = createStackNavigator(
  {
    [ScreenNames.HOME]: {
      screen: Home,
      navigationOptions: {},
    },
    [ScreenNames.HOME_1]: {
      screen: Home1,
      navigationOptions: {},
    },
    [ScreenNames.HOME_ROUTE]: {
      screen: Route,
      navigationOptions: {},
    },
    [ScreenNames.HOME_CAMPAIGN]: {
      screen: Campaign,
      navigationOptions: {},
    },
    [ScreenNames.HOME_ACTIVITY]: {
      screen: Activity,
      navigationOptions: {},
    },
    [ScreenNames.HOME_BLOG]: {
      screen: Blog,
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
