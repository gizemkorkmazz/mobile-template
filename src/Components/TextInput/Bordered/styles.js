import {StyleSheet} from 'react-native';
import {wp, FontSizeDict} from 'Helpers/Responsive';
import {Border} from 'Themes/Metrics';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: Border.width,
    borderRadius: Border.radius.button,
    borderColor: Colors.border,
    padding: wp(3),
  },
  icon: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
    margin: wp(2),
  },
  textInput: {
    flex: 1,
    paddingHorizontal: wp(2),
    fontSize: FontSizeDict.font12,
    color: Colors.text.dark.thirnary,
  },
  title: {
    fontSize: FontSizeDict.font15,
    paddingVertical: wp(2),
    marginTop: wp(2),
    color: Colors.text.dark.thirnary,
  },
});

export default styles;
