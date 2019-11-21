import {StyleSheet} from 'react-native';
import {Paddings} from 'Themes/Metrics';
import {wp, hp, FontSizeDict} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  contentContainer: {
    padding: Paddings.PagePadding,
    paddingTop: Paddings.Top,
  },
  container: {
    flex: 1,
  },
  button: {
    marginTop: wp(5),
    backgroundColor: Colors.button.primary,
  },
  text: {
    fontSize: FontSizeDict.font13,
    color: Colors.black,
  },
  footer: {
    justifyContent: 'flex-end',
    height: hp(40),
  },
});
export default styles;
