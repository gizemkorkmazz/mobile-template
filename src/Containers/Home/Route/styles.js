import {StyleSheet} from 'react-native';
import {wp, hp, FontSizeDict} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  container: {},
  title: {
    paddingLeft: wp(2),
    paddingBottom: wp(2),
    fontSize: FontSizeDict.font20,
    color: Colors.base.quaternary,
  },
  text: {
    paddingLeft: wp(2),
    paddingBottom: wp(2),
    fontSize: FontSizeDict.font12,
    color: Colors.text.dark.secondary,
  },
  image: {
    position: 'absolute',
    width: wp(20),
    height: wp(30),
    resizeMode: 'contain',
    right: 0,
    top: -hp(4),
  },
});
export default styles;
