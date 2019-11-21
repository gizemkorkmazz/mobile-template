import React from 'react';
import {ScrollView, ImageBackground, Text} from 'react-native';
import Rounded from 'Components/TextInput/Rounded';
import styles from './styles';
import Images from 'Themes/Images';
import Circular from 'Components/Buttons/Circular';

const WithBackgroundSendConfirmation = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={Images.LoginBackground}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Rounded placeholder="0(5XX-) (XXX)-(XX)-(XX)" iconName="user" />
        <Circular
          style={styles.button}
          onPress={() => {}}
          renderItem={() => {
            return <Text style={styles.text}>DOĞRULAMA KODU GÖNDER</Text>;
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

WithBackgroundSendConfirmation.propTypes = {};
WithBackgroundSendConfirmation.defaultProps = {};

export default WithBackgroundSendConfirmation;
