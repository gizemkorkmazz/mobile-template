import React from 'react';
import {View, Text} from 'react-native';
import Circular from 'Components/Buttons/Circular';
import styles from './styles';
import ScreenNames from 'Constants/ScreenNames';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Circular
        style={styles.button}
        onPress={() => {
          navigation.navigate(ScreenNames.WITH_BACKGROUND_LOGIN);
        }}
        renderItem={() => {
          return <Text>ARKA PLAN RESMİ İLE</Text>;
        }}
      />
      <Circular
        style={styles.button}
        onPress={() => {
          navigation.navigate(ScreenNames.WITH_LOGO_LOGIN);
        }}
        renderItem={() => {
          return <Text>LOGO İLE</Text>;
        }}
      />
      <Circular
        style={styles.button}
        onPress={() => {
          navigation.navigate(ScreenNames.WITH_PROFILE_IMAGE_LOGIN);
        }}
        renderItem={() => {
          return <Text>PROFİL FOTOĞRAFI İLE</Text>;
        }}
      />
    </View>
  );
};

Login.propTypes = {};
Login.defaultProps = {};

export default Login;
