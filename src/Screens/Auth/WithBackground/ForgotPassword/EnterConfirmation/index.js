import React from 'react';
import {ImageBackground, Text} from 'react-native';
import Rounded from 'Components/TextInput/Rounded';
import styles from './styles';
import Images from 'Themes/Images';
import Circular from 'Components/Buttons/Circular';
import ScreenNames from 'Constants/ScreenNames';

const WithBackgroundEnterConfirmation = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={Images.LoginBackground}>
      <Rounded title="Doğrulama Kodu" iconName="eye" />
      <Rounded title="Yeni Şifre" iconName="lock" isSecureText />
      <Rounded title="Şifreyi Tekrar Giriniz" iconName="lock" isSecureText />
      <Circular
        style={styles.button}
        onPress={() => {
          navigation.navigate(ScreenNames.WITH_BACKGROUND_LOGIN);
        }}
        renderItem={() => {
          return <Text style={styles.text}>KAYDET</Text>;
        }}
      />
    </ImageBackground>
  );
};

WithBackgroundEnterConfirmation.propTypes = {};
WithBackgroundEnterConfirmation.defaultProps = {};

export default WithBackgroundEnterConfirmation;
