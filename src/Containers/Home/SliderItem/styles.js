import {StyleSheet} from 'react-native';
import {Border} from 'Themes/Metrics';
import {wp} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    borderRadius: Border.radius.card,
    width: wp(90),
  },
  imageContainer: {
    height: '100%',
    justifyContent: 'center',
  },
});
export default styles;
