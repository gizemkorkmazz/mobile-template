import React from 'react';
import {ScrollView, View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import Circular from 'Components/Buttons/Circular';
import Underline from 'Components/Buttons/Underline';
import Images from 'Themes/Images';
import Divider from 'Components/Divider';
import Colors from 'Themes/Colors';
import Rounded from 'Components/TextInput/Rounded';
import ScreenNames from 'Constants/ScreenNames';

const WithBackgroundLogin = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={Images.LoginBackground}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Rounded
          title="Kullanıcı Adı / Telefon Numarası"
          placeholder="0554- (123)-(45)-(67)"
          iconName="phone"
        />
        <Rounded title="Şifre" isSecureText iconName="lock" />
        <View style={styles.footer}>
          <Divider type="bold" backgroundColor={Colors.white} />
          <Circular
            style={styles.button}
            onPress={() => {}}
            renderItem={() => {
              return <Text style={styles.text}>GİRİŞ YAP</Text>;
            }}
          />
          <Circular
            style={styles.button}
            onPress={() => {
              navigation.navigate(ScreenNames.WITH_BACKGROUND_REGISTER);
            }}
            renderItem={() => {
              return <Text style={styles.text}>ÜYE OL</Text>;
            }}
          />
          <Underline
            title="Şifremi Unuttum"
            onPress={() => {
              navigation.navigate(
                ScreenNames.WITH_BACKGROUND_SEND_CONFIRMATION,
              );
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

WithBackgroundLogin.propTypes = {};
WithBackgroundLogin.defaultProps = {};

export default WithBackgroundLogin;
