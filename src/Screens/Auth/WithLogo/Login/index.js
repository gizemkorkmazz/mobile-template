import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import Images from 'Themes/Images';
import styles from './styles';
import {Flat} from 'Components/Buttons/Flat';
import Colors from 'Themes/Colors';
import Bordered from 'Components/TextInput/Bordered';
import ScreenNames from 'Constants/ScreenNames';

const WithLogoLogin = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={Images.OmegaLogo} style={styles.image} />
      <Bordered
        title="Sicil / Telefon Numarası"
        placeholder="--- --- -- -- ---"
        iconName="user"
      />
      <Bordered title="Şifre" isSecureText iconName="lock" />
      <View style={styles.footer}>
        <Flat
          title="Giriş Yap"
          backgroundColor={Colors.themes.pastel.primary}
          onPress={() => {}}
        />
        <Flat
          title="Şifremi Unuttum"
          backgroundColor={Colors.themes.pastel.secondary}
          onPress={() => {
            navigation.navigate(ScreenNames.WITH_LOGO_SEND_CONFIRMATION);
          }}
        />
        <Flat
          title="Üye Ol"
          textColor={Colors.text.dark.thirnary}
          backgroundColor={Colors.themes.pastel.thirnary}
          onPress={() => {
            navigation.navigate(ScreenNames.WITH_LOGO_REGISTER);
          }}
        />
      </View>
    </ScrollView>
  );
};

WithLogoLogin.propTypes = {};
WithLogoLogin.defaultProps = {};

export default WithLogoLogin;
