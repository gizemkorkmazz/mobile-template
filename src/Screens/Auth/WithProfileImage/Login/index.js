import React from 'react';
import {Text, Image, View, ScrollView} from 'react-native';
import styles from './styles';
import Images from 'Themes/Images';
import Underlined from 'Components/TextInput/Underlined';
import Circular from 'Components/Buttons/Circular';
import ScreenNames from 'Constants/ScreenNames';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'Themes/Colors';

const WithProfileImageLogin = ({navigation}) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        Colors.linearGradient.auth.primary,
        Colors.linearGradient.auth.secondary,
        Colors.linearGradient.auth.thirnary,
        Colors.linearGradient.auth.quaternary,
      ]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={Images.ProfileImage} style={styles.image} />
        <Underlined title="Telefon numaranızı girin" />
        <Underlined isSecureText title="Şifrenizi girin" />
        <View style={styles.footer}>
          <Circular
            style={styles.button}
            onPress={() => {}}
            renderItem={() => {
              return (
                <Text style={styles.text} onPress={() => {}}>
                  GİRİŞ YAP
                </Text>
              );
            }}
          />
          <Circular
            style={styles.button}
            onPress={() => {
              navigation.navigate(ScreenNames.WITH_PROFILE_IMAGE_REGISTER);
            }}
            renderItem={() => {
              return <Text style={styles.text}>ÜYE OL</Text>;
            }}
          />
          <Text
            style={styles.forgotPassword}
            onPress={() => {
              navigation.navigate(
                ScreenNames.WITH_PROFILE_IMAGE_SEND_CONFIRMATION,
              );
            }}>
            Şifrenizi mi unuttunuz ?
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

WithProfileImageLogin.propTypes = {};
WithProfileImageLogin.defaultProps = {};

export default WithProfileImageLogin;
