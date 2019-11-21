import {StyleSheet} from 'react-native';
import {wp, FontSizeDict} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(4),
  },
  textInput: {
    padding: wp(3),
    fontSize: FontSizeDict.font12,
    color: Colors.text.light.thirnary,
    alignSelf: 'center',
  },
  title: {
    fontSize: FontSizeDict.font15,
    padding: wp(3),
    marginTop: wp(2),
    color: Colors.white,
  },
});

export default styles;
