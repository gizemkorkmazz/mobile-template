import React from 'react';
import Animated from 'react-native-reanimated';
import {useInterpolation} from '@crowdlinker/react-native-pager';
import {wp} from 'Helpers/Responsive';
import {View} from 'react-native';
import styles from './styles';

const SliderItem = ({item}) => {
  const style = useInterpolation({
    height: {
      inputRange: [-1, 0, 1],
      outputRange: [wp(45), wp(50), wp(45)],
    },
  });

  return (
    <View style={styles.imageContainer}>
      <Animated.Image source={item.source} style={[styles.image, style]} />
    </View>
  );
};

SliderItem.propTypes = {};
export default SliderItem;
