import {Dimensions, StatusBar, Platform} from 'react-native';
import {wp} from 'Helpers/Responsive';

const {width: Width, height: Height} = Dimensions.get('window');

const Paddings = {
  PagePadding: wp(5),
  Top: wp(15),
};

const Margins = {
  top: wp(10),
};
const Border = {
  radius: {
    card: wp(2),
    circular: wp(30),
    button: wp(1.5),
    round: wp(50),
  },
  width: wp(0.3),
};
const Sizes = {
  NavigationBarIconSize: wp(6),
  StatusBarHeight: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  NavigationBarHeight: wp(10),
};

export {Margins, Paddings, Sizes, Width, Height, Border};
