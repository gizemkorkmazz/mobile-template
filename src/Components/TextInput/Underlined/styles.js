import {StyleSheet} from 'react-native';
import {wp, FontSizeDict} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(6),
    marginBottom: wp(6),
  },
  textInput: {
    fontSize: FontSizeDict.font12,
    color: Colors.text.dark.secondary,
    paddingBottom: wp(1),
  },
  title: {
    fontSize: FontSizeDict.font13,
    color: Colors.text.dark.primary,
    paddingBottom: wp(4),
  },
});

export default styles;
