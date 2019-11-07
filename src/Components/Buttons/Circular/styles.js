import {StyleSheet} from 'react-native';
import {Border} from 'Themes/Metrics';
import Colors from 'Themes/Colors';
import {wp} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    borderWidth: Border.width,
    borderRadius: Border.radius.circular,
    borderColor: Colors.border,
    paddingVertical: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
