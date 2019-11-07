import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';
import {wp} from 'Helpers/Responsive';

const LeftIcon = ({iconName, navigation, isHamburger, onPress = () => {}}) => (
  <TouchableOpacity
    onPress={() => {
      if (isHamburger) {
        navigation.toggleDrawer();
      } else {
        onPress();
        let route = navigation.state.routes[navigation.state.index - 1];
        if (route) {
          navigation.navigate(route.routeName);
        } else {
          route =
            navigation.state.routes[0].routes[
              navigation.state.routes[0].index - 1
            ];
          if (route) {
            navigation.navigate(route.routeName);
          } else {
            navigation.goBack();
          }
        }
      }
    }}>
    <Entypo name={iconName} size={wp(7)} color="black" />
  </TouchableOpacity>
);

LeftIcon.propTypes = {
  navigation: PropTypes.object.isRequired,
  iconName: PropTypes.string.isRequired,
  isHamburger: PropTypes.bool,
};

LeftIcon.defaultProps = {
  isHamburger: false,
};

export default LeftIcon;
