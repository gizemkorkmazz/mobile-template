import React from 'react';
import {View, Image, Text} from 'react-native';
import Images from 'Themes/Images';
import styles from './styles';
import Underlined from 'Components/TextInput/Underlined';
import Circular from 'Components/Buttons/Circular';

const ProfileImageCard = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.ProfileImage} style={styles.image} />
      <Underlined placeholder="Kullanıcı adınızı girin" />
      <Underlined placeholder="Şifrenizi girin" />
      <Text style={styles.signUp} onPress={() => {}}>
        ÜYE OL
      </Text>
      <Text style={styles.forgotPassword} onPress={() => {}}>
        Şifrenizi mi unuttunuz ?
      </Text>

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
    </View>
  );
};

ProfileImageCard.propTypes = {};
ProfileImageCard.defaultProps = {};

export default ProfileImageCard;
