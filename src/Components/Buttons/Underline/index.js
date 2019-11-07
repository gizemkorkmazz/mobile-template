import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './styles';

const Underline = ({title, onPress}) => {
  return (
    <Text style={styles.text} onPress={onPress}>
      {title}
    </Text>
  );
};

Underline.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Underline;
