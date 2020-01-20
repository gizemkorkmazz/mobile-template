import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import Underlined from 'Components/TextInput/Underlined';
import Circular from 'Components/Buttons/Circular';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'Themes/Colors';
import ScreenNames from 'Constants/ScreenNames';

const WithProfileImageSendConfirmation = ({navigation}) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        Colors.linearGradient.auth.primary,
        Colors.linearGradient.auth.secondary,
        Colors.linearGradient.auth.thirnary,
        Colors.linearGradient.auth.quaternary,
      ]}>
      <Underlined title="Telefon numaranızı girin" />
      <Circular
        style={styles.button}
        onPress={() => {
          navigation.navigate(
            ScreenNames.WITH_PROFILE_IMAGE_ENTER_CONFIRMATION,
          );
        }}
        renderItem={() => {
          return <Text style={styles.text}>DOĞRULAMA KODU GÖNDER</Text>;
        }}
      />
    </LinearGradient>
  );
};

WithProfileImageSendConfirmation.propTypes = {};
WithProfileImageSendConfirmation.defaultProps = {};

export default WithProfileImageSendConfirmation;
