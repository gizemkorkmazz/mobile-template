import {StyleSheet} from 'react-native';
import {Paddings} from 'Themes/Metrics';
import {wp, FontSizeDict} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  container: {
    padding: Paddings.PagePadding,
  },
  button: {
    marginTop: wp(5),
    backgroundColor: Colors.base.secondary,
  },
  text: {
    fontSize: FontSizeDict.font13,
    color: Colors.white,
  },
  footer: {
    marginTop: wp(8),
  },
});
export default styles;
