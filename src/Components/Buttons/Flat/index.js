import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

export const Flat = ({
  title,
  onPress,
  textColor = 'white',
  backgroundColor,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, {backgroundColor}]}>
        <Text style={[styles.title, {color: textColor}, textStyle]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
