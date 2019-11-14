import React from 'react';
import {TextInput as RnTextInput, View, Text} from 'react-native';
import styles from './styles';
import Colors from 'Themes/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {wp} from 'Helpers/Responsive';
import Divider from 'Components/Divider';

const Rounded = ({
  title,
  placeholder,
  isSecureText,
  iconName,
  textInputContainerStyle,
  autoCapitalize,
  keyboardType,
}) => (
  <>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.body}>
      {iconName && <Entypo name={iconName} size={wp(5)} color={Colors.white} style={styles.icon} />}
      <Divider type="vertical" backgroundColor={Colors.white} />
      <RnTextInput
        autoCapitalize={autoCapitalize}
        secureTextEntry={isSecureText}
        keyboardType={keyboardType || 'default'}
        style={[styles.textInput, textInputContainerStyle]}
        placeholderTextColor={Colors.white}
        placeholder={placeholder}
      />
    </View>
  </>
);

export default Rounded;
