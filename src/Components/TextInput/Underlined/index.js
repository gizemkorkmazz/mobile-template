import React from 'react';
import {TextInput as RnTextInput, View, Text} from 'react-native';
import styles from './styles';
import Colors from 'Themes/Colors';
import Divider from 'Components/Divider';

const Underlined = ({
  placeholder,
  isSecureText,
  textInputContainerStyle,
  autoCapitalize,
  keyboardType,
  title,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <RnTextInput
      autoCapitalize={autoCapitalize}
      secureTextEntry={isSecureText}
      keyboardType={keyboardType || 'default'}
      style={[styles.textInput, textInputContainerStyle]}
      placeholderTextColor={Colors.text.dark.secondary}
      placeholder={placeholder}
    />
    <Divider backgroundColor={Colors.text.dark.secondary} />
  </View>
);

export default Underlined;
