import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import Underlined from 'Components/TextInput/Underlined';
import Circular from 'Components/Buttons/Circular';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'Themes/Colors';
import ScreenNames from 'Constants/ScreenNames';

const WithProfileImageEnterConfirmation = ({navigation}) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        Colors.linearGradient.primary,
        Colors.linearGradient.secondary,
        Colors.linearGradient.thirnary,
        Colors.linearGradient.quaternary,
      ]}>
      <Underlined title="Doğrulama Kodu " />
      <Underlined title="Yeni Şifre" />
      <Underlined title="Yeni Şifre Tekrar" />
      <Circular
        style={styles.button}
        onPress={() => {
          navigation.navigate(ScreenNames.WITH_PROFILE_IMAGE_LOGIN);
        }}
        renderItem={() => {
          return <Text style={styles.text}>KAYDET</Text>;
        }}
      />
    </LinearGradient>
  );
};

WithProfileImageEnterConfirmation.propTypes = {};
WithProfileImageEnterConfirmation.defaultProps = {};

export default WithProfileImageEnterConfirmation;
