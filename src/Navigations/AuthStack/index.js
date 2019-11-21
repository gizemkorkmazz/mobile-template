import {createStackNavigator} from 'react-navigation-stack';
import Login from 'Screens/Auth/Login';
import NavigationBar from 'Components/StackNavigation/NavigationBar';
import React from 'react';
import WithBackgroundLogin from 'Screens/Auth/WithBackground/Login';
import ScreenNames from 'Constants/ScreenNames';
import WithLogoLogin from 'Screens/Auth/WithLogo/Login';
import WithProfileImageLogin from 'Screens/Auth/WithProfileImage/Login';
import WithBackgroundRegister from 'Screens/Auth/WithBackground/Register';
import WithLogoRegister from 'Screens/Auth/WithLogo/Register';
import WithProfileImageRegister from 'Screens/Auth/WithProfileImage/Register';
import WithBackgroundSendConfirmation from 'Screens/Auth/WithBackground/ForgotPassword/SendConfirmation';

const AuthStackNavigator = createStackNavigator(
  {
    [ScreenNames.LOGIN]: {
      screen: Login,
      navigationOptions: {
        title: 'Giriş Yap',
      },
    },
    [ScreenNames.WITH_BACKGROUND_LOGIN]: {
      screen: WithBackgroundLogin,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenNames.WITH_LOGO_LOGIN]: {
      screen: WithLogoLogin,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenNames.WITH_PROFILE_IMAGE_LOGIN]: {
      screen: WithProfileImageLogin,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenNames.WITH_BACKGROUND_REGISTER]: {
      screen: WithBackgroundRegister,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenNames.WITH_LOGO_REGISTER]: {
      screen: WithLogoRegister,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenNames.WITH_PROFILE_IMAGE_REGISTER]: {
      screen: WithProfileImageRegister,
      navigationOptions: {
        header: null,
      },
    },
    [ScreenNames.WITH_BACKGROUND_SEND_CONFIRMATION]: {
      screen: WithBackgroundSendConfirmation,
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

export default AuthStackNavigator;
