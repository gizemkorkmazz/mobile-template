import {StyleSheet} from 'react-native';
import {Border} from 'Themes/Metrics';
import {wp} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    borderRadius: Border.radius.circular,
    paddingVertical: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
