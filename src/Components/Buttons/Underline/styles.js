import {StyleSheet} from 'react-native';
import Colors from 'Themes/Colors';
import {wp, FontSizeDict} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'underline',
    textDecorationColor: Colors.white,
    color: Colors.white,
    textAlign: 'center',
    marginTop: wp(5),
    fontSize: FontSizeDict.font16,
  },
});

export default styles;
