import React from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './styles';
import {Flat} from 'Components/Buttons/Flat';
import Colors from 'Themes/Colors';
import Bordered from 'Components/TextInput/Bordered';

const WithLogoSendConfirmation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Yeni Şifre için, sistemde kayıtlı olan Sicil / Telefon numaranızı
        giriniz ve şifre değiştirme talebi gönderiniz.
      </Text>
      <Bordered title="Sicil / Telefon Numarası" iconName="user" />
      <View style={styles.footer}>
        <Flat
          title="Şifre Değiştirme Talebi Gönder"
          backgroundColor={Colors.themes.pastel.primary}
          onPress={() => {
            Alert.alert('Şifre değiştirme talebiniz alınmıştır.');
          }}
        />
        <Flat
          title="Geri Dön"
          backgroundColor={Colors.themes.pastel.secondary}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

WithLogoSendConfirmation.propTypes = {};
WithLogoSendConfirmation.defaultProps = {};

export default WithLogoSendConfirmation;
