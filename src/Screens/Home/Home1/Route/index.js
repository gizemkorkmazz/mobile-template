import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Route = ({item, navigation, isAwardWinning}) => {
  return (
    <View style={styles.container}>
      <Text>Route</Text>
    </View>
  );
};

Route.propTypes = {};
Route.defaultProps = {};
export default Route;
