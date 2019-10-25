import React, {useEffect} from 'react';
import Store from 'Redux/Store';
import {Provider} from 'react-redux';
import NavigationService from 'Services/Navigation';
import OneSignal from 'react-native-onesignal';
import AppNavigator from './src/Navigations/App';
const App = () => {
  useEffect(() => {
    OneSignal.init('');
  }, []);

  return (
    <Provider store={Store}>
      <AppNavigator
      // ref={navigatorRef => {
      //   NavigationService.setTopLevelNavigator(navigatorRef);
      // }}
      />
    </Provider>
  );
};
export default App;
