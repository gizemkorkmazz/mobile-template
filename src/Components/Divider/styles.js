import {StyleSheet} from 'react-native';
import {wp} from 'Helpers/Responsive';
const styles = StyleSheet.create({
  bold: {
    height: 1,
  },
  thin: {
    height: 0.3,
  },
  lowMedium: {
    height: 0.8,
  },
  medium: {
    height: 0.5,
  },
  vertical: {
    width: 1,
    height: wp(13),
  },
});

export default styles;
