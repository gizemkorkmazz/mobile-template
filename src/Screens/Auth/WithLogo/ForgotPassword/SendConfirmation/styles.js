import {StyleSheet} from 'react-native';
import {Paddings, Margins} from 'Themes/Metrics';
import {FontSizeDict, wp} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Paddings.PagePadding,
    marginTop: Margins.top,
  },
  footer: {
    marginTop: Margins.top,
  },
  text: {
    fontSize: FontSizeDict.font14,
    color: Colors.text.dark.secondary,
    paddingBottom: wp(3),
  },
});
export default styles;
