import {StyleSheet} from 'react-native';
import Colors from 'Themes/Colors';
import {wp, FontSizeDict} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'underline',
    textDecorationColor: Colors.black,
    color: Colors.black,
    textAlign: 'center',
    marginTop: wp(5),
    fontSize: FontSizeDict.font15,
    fontWeight: 'bold',
  },
});

export default styles;
