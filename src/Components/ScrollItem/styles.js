import {StyleSheet} from 'react-native';
import {wp, FontSizeDict} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';
import {Border} from 'Themes/Metrics';
import ImageRates from 'Constants/ImageRates';

const CONTAINER_WIDTH = wp(80);

const styles = StyleSheet.create({
  container: {
    margin: wp(2),
    borderRadius: Border.radius.card,
    justifyContent: 'center',
    paddingBottom: wp(5),
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 6,
  },
  title: {
    fontSize: FontSizeDict.font13,
    color: Colors.text.dark.quinary,
    paddingHorizontal: wp(4),
    paddingTop: wp(4),
    paddingBottom: wp(2),
  },
  description: {
    fontSize: FontSizeDict.font11,
    color: Colors.text.light.thirnary,
    paddingBottom: wp(1),
    paddingHorizontal: wp(4),
  },
  image: {
    width: CONTAINER_WIDTH,
    height: CONTAINER_WIDTH * ImageRates.CardImage,
    resizeMode: 'contain',
    borderTopLeftRadius: Border.radius.card,
    borderTopRightRadius: Border.radius.card,
    alignSelf: 'center',
  },
});
export default styles;
