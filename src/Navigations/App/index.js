import {createDrawerNavigator} from 'react-navigation-drawer';
import SideMenu from 'Containers/NavigationItems/SideMenu';
import {wp} from 'Helpers/Responsive';
import LoginStackNavigator from '../LoginStack';
import {createAppContainer} from 'react-navigation';
import HomeStackNavigator from '../HomeStack';
import ScreenNames from 'Constants/ScreenNames';

const AppNavigator = createDrawerNavigator(
  {
    [ScreenNames.HOME_NAVIGATOR]: {
      screen: HomeStackNavigator,
      navigationOptions: {
        drawerLabel: 'Anasayfa',
      },
    },
    [ScreenNames.LOGIN_NAVIGATOR]: {
      screen: LoginStackNavigator,
      navigationOptions: {
        drawerLabel: 'Login',
      },
    },
  },
  {
    initialRouteName: ScreenNames.HOME_NAVIGATOR,
    navigationOptions: {
      gesturesEnabled: false,
    },
    drawerType: 'front',
    drawerWidth: wp('80'),
    contentComponent: SideMenu,
    unmountInactiveRoutes: true,
  },
);
export default createAppContainer(AppNavigator);
