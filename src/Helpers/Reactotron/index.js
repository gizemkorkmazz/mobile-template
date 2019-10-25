import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

export default __DEV__
  ? Reactotron.configure({
      name: 'Cevahir',
      host: '192.168.1.118',
    })
      .use(reactotronRedux())
      .useReactNative()
      .connect()
  : {};
