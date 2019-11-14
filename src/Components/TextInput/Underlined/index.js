import React from 'react';
import {TextInput as RnTextInput, View} from 'react-native';
import styles from './styles';
import Colors from 'Themes/Colors';
import Divider from 'Components/Divider';

const Underlined = ({
  placeholder,
  isSecureText,
  textInputContainerStyle,
  autoCapitalize,
  keyboardType,
}) => (
  <View style={styles.container}>
    <RnTextInput
      autoCapitalize={autoCapitalize}
      secureTextEntry={isSecureText}
      keyboardType={keyboardType || 'default'}
      style={[styles.textInput, textInputContainerStyle]}
      placeholderTextColor={Colors.text.light.thirnary}
      placeholder={placeholder}
    />
    <Divider backgroundColor={Colors.background.secondary} />
  </View>
);

export default Underlined;
