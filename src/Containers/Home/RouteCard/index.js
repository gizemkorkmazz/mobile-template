import React from 'react';
import {Image, TouchableOpacity, Text, ImageSourcePropType} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'Themes/Colors';
import ScreenNames from 'Constants/ScreenNames';
import styles from './styles';

const RouteCard = ({item, navigation, isAwardWinning}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(ScreenNames.HOME_ROUTE);
      }}>
      <Image source={item.source} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      {isAwardWinning && (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            Colors.linearGradient.pink.first,
            Colors.linearGradient.pink.second,
            Colors.linearGradient.pink.third,
          ]}
          style={styles.linearGradient}>
          <Text style={styles.text}>Ödüllü Rota</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

RouteCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    source: ImageSourcePropType,
  }).isRequired,
  isAwardWinning: PropTypes.bool,
};
RouteCard.defaultProps = {
  isAwardWinning: false,
};
export default RouteCard;
