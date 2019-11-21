import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import ProfileImageCard from 'Containers/Auth/ProfileImageCard';

const WithProfileImageLogin = () => {
  return (
    <View style={styles.container}>
      <ProfileImageCard />
    </View>
  );
};

WithProfileImageLogin.propTypes = {};
WithProfileImageLogin.defaultProps = {};

export default WithProfileImageLogin;
