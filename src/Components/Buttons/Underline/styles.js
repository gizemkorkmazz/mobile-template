import {StyleSheet} from 'react-native';
import Colors from 'Themes/Colors';
import {wp} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'underline',
    textDecorationColor: Colors.text.dark.secondary,
    color: Colors.text.dark.secondary,
    textAlign: 'center',
    marginTop: wp(5),
  },
});

export default styles;
