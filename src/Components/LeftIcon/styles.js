import {StyleSheet} from 'react-native';
import Metrics from 'Theme/Metrics/index';
import {wp} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  icon: {
    height: Metrics.NavigationBarIconSize,
    width: Metrics.NavigationBarIconSize,
    tintColor: 'white',
    resizeMode: 'contain',
  },
  touchableArea: {
    padding: wp(1.5),
  },
});

export default styles;
