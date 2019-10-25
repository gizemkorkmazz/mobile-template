import {createDrawerNavigator} from 'react-navigation-drawer';
import SideMenu from 'Containers/NavigationItems/SideMenu';
import {wp} from 'Helpers/Responsive';
import LoginStackNavigator from '../LoginStack';
import {createAppContainer} from 'react-navigation';
import Home from 'Screens/Home';

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: 'Anasayfa',
      },
    },
    Login: {
      screen: LoginStackNavigator,
      navigationOptions: {
        drawerLabel: 'Login',
      },
    },
  },
  {
    drawerType: 'front',
    drawerWidth: wp('80'),
    contentComponent: SideMenu,
    unmountInactiveRoutes: true,
  },
);
export default createAppContainer(AppNavigator);
