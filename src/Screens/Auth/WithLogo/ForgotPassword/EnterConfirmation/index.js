import React from 'react';
import {ScrollView, ImageBackground, Text} from 'react-native';
import Rounded from 'Components/TextInput/Rounded';
import styles from './styles';
import Images from 'Themes/Images';
import Circular from 'Components/Buttons/Circular';
import ScreenNames from 'Constants/ScreenNames';

const WithLogoEnterConfirmation = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={Images.LoginBackground}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Rounded title="Doğrulama Kodu" iconName="eye" />
        <Rounded title="Yeni Şifre" iconName="lock" />
        <Rounded title="Şifreyi Tekrar Giriniz" iconName="lock" />
        <Circular
          style={styles.button}
          onPress={() => {
            navigation.navigate(ScreenNames.WITH_BACKGROUND_LOGIN);
          }}
          renderItem={() => {
            return <Text style={styles.text}>KAYDET</Text>;
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

WithLogoEnterConfirmation.propTypes = {};
WithLogoEnterConfirmation.defaultProps = {};

export default WithLogoEnterConfirmation;
