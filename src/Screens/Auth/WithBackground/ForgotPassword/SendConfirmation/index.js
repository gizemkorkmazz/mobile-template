import React from 'react';
import {ImageBackground, Text} from 'react-native';
import Rounded from 'Components/TextInput/Rounded';
import styles from './styles';
import Images from 'Themes/Images';
import Circular from 'Components/Buttons/Circular';
import ScreenNames from '../../../../../Constants/ScreenNames';

const WithBackgroundSendConfirmation = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={Images.LoginBackground}>
      <Rounded placeholder="0(5XX-) (XXX)-(XX)-(XX)" iconName="user" />
      <Circular
        style={styles.button}
        onPress={() => {
          navigation.navigate(ScreenNames.WITH_BACKGROUND_ENTER_CONFIRMATION);
        }}
        renderItem={() => {
          return <Text style={styles.text}>DOĞRULAMA KODU GÖNDER</Text>;
        }}
      />
    </ImageBackground>
  );
};

WithBackgroundSendConfirmation.propTypes = {};
WithBackgroundSendConfirmation.defaultProps = {};

export default WithBackgroundSendConfirmation;
