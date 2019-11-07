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
    padding: wp(4),
  },
  icon: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
    margin: wp(2),
  },
  textInput: {
    flex: 1,
    paddingHorizontal: wp(3),
    fontSize: FontSizeDict.font12,
  },
  title: {
    fontSize: FontSizeDict.font15,
    padding: wp(3),
    marginTop: wp(5),
  },
});

export default styles;
