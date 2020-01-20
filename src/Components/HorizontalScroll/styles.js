import {StyleSheet} from 'react-native';
import {wp, FontSizeDict} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';
import {Paddings} from 'Themes/Metrics';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.septenary,
    paddingVertical: wp(7),
  },
  title: {
    paddingBottom: wp(1),
    fontSize: FontSizeDict.font18,
    color: Colors.text.dark.thirnary,
  },
  text: {
    fontSize: FontSizeDict.font13,
    color: Colors.text.light.thirnary,
    paddingBottom: wp(4),
  },
  colored: {
    fontSize: FontSizeDict.font11,
    color: Colors.base.primary,
    fontWeight: 'bold',
    paddingRight: wp(2),
  },
  titleContainer: {
    paddingHorizontal: Paddings.PagePadding,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentContainerStyle: {paddingLeft: wp(2)},
});
export default styles;
