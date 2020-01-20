import {StyleSheet} from 'react-native';
import {Paddings} from 'Themes/Metrics';
import {wp, FontSizeDict} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  page: {
    padding: Paddings.PagePadding,
  },
  text: {
    fontSize: FontSizeDict.font15,
    color: Colors.themes.pastel.primary,
    paddingBottom: wp(5),
    fontWeight: '600',
  },
});
export default styles;
