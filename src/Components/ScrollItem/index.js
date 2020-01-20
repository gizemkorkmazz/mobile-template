import React from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ScrollItem = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={item.source} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ScrollItem.propTypes = {
  onPress: PropTypes.func,
  item: PropTypes.shape({
    source: ImageSourcePropType,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
ScrollItem.defaultProps = {
  onPress: () => {},
};

export default ScrollItem;
