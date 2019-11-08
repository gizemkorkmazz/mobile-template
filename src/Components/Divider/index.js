import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Colors from 'Themes/Colors/index';

const Divider = ({type, backgroundColor}) => (
  <View style={[styles[type], {backgroundColor}]} />
);

const types = ['bold', 'thin', 'medium', 'lowMedium', 'vertical'];

Divider.propTypes = {
  type: PropTypes.oneOf(types),
  backgroundColor: PropTypes.string,
};

Divider.defaultProps = {
  type: 'bold',
  backgroundColor: Colors.Divider,
};
export default Divider;
