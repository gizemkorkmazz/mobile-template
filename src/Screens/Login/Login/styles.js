import {StyleSheet} from 'react-native';
import {Paddings} from 'Themes/Metrics';
import {wp} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: Paddings.PagePadding,
  },
  button: {
    marginTop: wp(5),
  },
});
export default styles;
