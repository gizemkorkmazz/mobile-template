import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icons from 'Theme/Icons/index';

const LeftIcon = ({
  iconSource,
  navigation,
  isHamburger,
  onPress = () => {},
}) => (
  <TouchableOpacity
    style={styles.touchableArea}
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
    <Image source={iconSource} style={styles.icon} />
  </TouchableOpacity>
);

LeftIcon.propTypes = {
  navigation: PropTypes.object.isRequired,
  iconSource: PropTypes.number.isRequired,
  isHamburger: PropTypes.bool,
};

LeftIcon.defaultProps = {
  isHamburger: false,
  iconSource: Icons.Back,
};

export default LeftIcon;
