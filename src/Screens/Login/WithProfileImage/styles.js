import {StyleSheet} from 'react-native';
import {Paddings} from 'Themes/Metrics';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.secondary,
    padding: Paddings.PagePadding,
    flex: 1,
    paddingTop: Paddings.Top,
  },
});
export default styles;
