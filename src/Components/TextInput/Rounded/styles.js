import {StyleSheet} from 'react-native';
import {wp, FontSizeDict} from 'Helpers/Responsive';
import {Border} from 'Themes/Metrics';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: Border.width,
    borderRadius: Border.radius.circular,
    borderColor: Colors.border,
    backgroundColor: Colors.background.transparent,
  },
  icon: {
    padding: wp(4),
  },
  textInput: {
    flex: 1,
    paddingHorizontal: wp(3),
    fontSize: FontSizeDict.font12,
    color: Colors.white,
  },
  title: {
    fontSize: FontSizeDict.font13,
    padding: wp(3),
    marginTop: wp(2),
    color: Colors.black,
    fontWeight: 'bold',
  },
});

export default styles;
