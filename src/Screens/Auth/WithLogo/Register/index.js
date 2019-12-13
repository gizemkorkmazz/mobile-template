import React from 'react';
import {ScrollView, Image} from 'react-native';
import styles from './styles';
import Bordered from 'Components/TextInput/Bordered';
import Images from 'Themes/Images';
import {Flat} from 'Components/Buttons/Flat';
import Colors from 'Themes/Colors';

const WithLogoRegister = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={Images.OmegaLogo} style={styles.image} />
      <Bordered title="Ad" iconName="user" />
      <Bordered title="Soyad" iconName="user" />
      <Bordered title="Telefon Numarası" iconName="phone" />
      <Bordered title="Şifre" isSecureText iconName="lock" />
      <Bordered title="Şifre Tekrar" isSecureText iconName="lock" />
      <Flat
        title="Kaydol"
        backgroundColor={Colors.themes.pastel.primary}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </ScrollView>
  );
};

WithLogoRegister.propTypes = {};
WithLogoRegister.defaultProps = {};

export default WithLogoRegister;
