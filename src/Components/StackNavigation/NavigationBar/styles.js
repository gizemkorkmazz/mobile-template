import {StyleSheet} from 'react-native';
import {wp, hp, FontSizeDict} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(8),
    paddingHorizontal: wp(4),
    justifyContent: 'space-between',
    paddingVertical: hp(3),
  },
  leftIcon: {
    justifyContent: 'flex-start',
    width: wp('20'),
  },
  leftIconContainer: {
    width: wp('5'),
    justifyContent: 'flex-end',
    marginLeft: wp('15'),
  },
  titleContainer: {
    flex: 1,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSizeDict.font17,
    color: 'white',
  },
});

export default styles;
