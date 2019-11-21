import {StyleSheet} from 'react-native';
import {Paddings} from 'Themes/Metrics';
import {wp, FontSizeDict} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: Paddings.PagePadding,
    paddingTop: Paddings.Top,
  },
  button: {
    marginTop: wp(10),
    backgroundColor: Colors.button.primary,
  },
  text: {
    fontSize: FontSizeDict.font13,
    color: Colors.black,
  },
});
export default styles;
