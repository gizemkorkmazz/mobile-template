import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, ViewPropTypes} from 'react-native';
import styles from './styles';

const Circular = ({onPress, renderItem, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {renderItem()}
    </TouchableOpacity>
  );
};

Circular.propTypes = {
  onPress: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  style: PropTypes.shape(ViewPropTypes),
};
Circular.defaultProps = {
  style: {},
};

export default Circular;
