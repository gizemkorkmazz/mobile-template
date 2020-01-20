import {StyleSheet} from 'react-native';
import {wp} from 'Helpers/Responsive';
import {Border} from 'Themes/Metrics';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.septenary,
    paddingBottom: wp(5),
  },
  pagerContainer: {
    width: wp(92),
    height: wp(50),
    alignSelf: 'center',
  },
  circle: {
    height: wp(2),
    borderRadius: Border.radius.round,
    marginRight: wp(2),
  },
  dotContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: wp(4),
  },
});
export default styles;
