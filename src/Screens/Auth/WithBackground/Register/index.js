import React from 'react';
import {ScrollView, ImageBackground, Text} from 'react-native';
import Rounded from 'Components/TextInput/Rounded';
import styles from './styles';
import Images from 'Themes/Images';
import Circular from 'Components/Buttons/Circular';

const WithBackgroundRegister = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={Images.LoginBackground}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Rounded
          title="Kullanıcı Adı / Telefon Numarası"
          placeholder="0(5XX-) (XXX)-(XX)-(XX)"
          iconName="phone"
        />
        <Rounded title="Ad-Soyad" iconName="user" />
        <Rounded title="E-Posta Adresi" iconName="mail" />
        <Rounded title="Doğum Tarihi" iconName="calendar" />
        <Rounded title="Şifre" isSecureText iconName="lock" />
        <Rounded title="Şifre Tekrar" isSecureText iconName="lock" />
        <Circular
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
          renderItem={() => {
            return <Text style={styles.text}>KAYDOL</Text>;
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

WithBackgroundRegister.propTypes = {};
WithBackgroundRegister.defaultProps = {};

export default WithBackgroundRegister;
