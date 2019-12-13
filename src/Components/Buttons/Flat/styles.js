import {StyleSheet} from 'react-native';
import {Border} from 'Themes/Metrics';
import Colors from 'Themes/Colors';
import {wp} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    borderRadius: Border.radius.button,
    borderColor: Colors.border,
    paddingVertical: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(5),
  },
});

export default styles;
