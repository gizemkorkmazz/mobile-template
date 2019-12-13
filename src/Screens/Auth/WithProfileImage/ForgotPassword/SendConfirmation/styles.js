import {StyleSheet} from 'react-native';
import Colors from 'Themes/Colors';
import {wp, FontSizeDict} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.black,
    marginHorizontal: wp(3),
    marginVertical: wp(10),
  },
  text: {
    fontSize: FontSizeDict.font13,
    color: Colors.white,
  },
});
export default styles;
