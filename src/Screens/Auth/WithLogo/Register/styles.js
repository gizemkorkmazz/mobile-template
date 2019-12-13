import {StyleSheet} from 'react-native';
import {Paddings} from 'Themes/Metrics';
import {wp} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    padding: Paddings.PagePadding,
  },
  image: {
    width: wp(50),
    height: wp(40),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
export default styles;
