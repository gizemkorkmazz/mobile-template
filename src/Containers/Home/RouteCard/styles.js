import {StyleSheet} from 'react-native';
import {Border} from 'Themes/Metrics';
import {wp, FontSizeDict} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';

const IMAGE_WIDTH = wp(40);
const IMAGE_HEIGHT = wp(40);
const ICON_SIZE = wp(4);

const styles = StyleSheet.create({
  image: {
    borderRadius: Border.radius.card,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },

  title: {
    fontSize: FontSizeDict.font13,
    color: Colors.text.light.primary,
    position: 'absolute',
    fontWeight: 'bold',
    top: wp(3),
    left: wp(3),
    backgroundColor: Colors.background.transparent,
    padding: wp(2),
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    marginLeft: wp(2),
  },
  text: {
    fontSize: FontSizeDict.font11,
    color: Colors.text.light.primary,
    paddingLeft: wp(2),
    fontWeight: '600',
    flex: 1,
  },
  linearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(1),
    borderBottomRightRadius: Border.radius.card,
    borderBottomLeftRadius: Border.radius.card,
    position: 'absolute',
    bottom: 0,
  },
  container: {
    margin: wp(2),
  },
});
export default styles;
