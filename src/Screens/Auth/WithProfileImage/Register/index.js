import React from 'react';
import {Image, Text, ScrollView} from 'react-native';
import styles from './styles';
import Images from 'Themes/Images';
import Underlined from 'Components/TextInput/Underlined';
import Circular from 'Components/Buttons/Circular';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'Themes/Colors';

const WithProfileImageRegister = ({navigation}) => {
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
        <Image source={Images.BlankProfile} style={styles.image} />
        <Underlined title="Telefon numarası" />
        <Underlined title="Ad / Soyad" />
        <Underlined title="E-Posta" />
        <Underlined title="Şifre" />
        <Underlined title="Şifre Tekrar" />
        <Circular
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
          renderItem={() => {
            return <Text style={styles.text}>ÜYE OL</Text>;
          }}
        />
      </ScrollView>
    </LinearGradient>
  );
};

WithProfileImageRegister.propTypes = {};
WithProfileImageRegister.defaultProps = {};

export default WithProfileImageRegister;
