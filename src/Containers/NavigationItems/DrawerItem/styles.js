import {StyleSheet} from 'react-native';
import {FontSizeDict} from 'Helpers/Responsive';
import {wp} from 'Helpers/Responsive/index';

const styles = StyleSheet.create({
  title: {
    fontSize: FontSizeDict.font15,
    padding: wp(3),
    fontWeight: 'bold',
  },
});
export default styles;
