import {StyleSheet} from 'react-native';
import {wp, hp, FontSizeDict} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(10),
    paddingHorizontal: wp(4),
    justifyContent: 'space-between',
    paddingVertical: hp(3),
  },

  title: {
    fontSize: FontSizeDict.font17,
  },
});

export default styles;
