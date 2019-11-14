import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import ProfileImageCard from 'Containers/Auth/ProfileImageCard';

const WithProfileImage = () => {
  return (
    <View style={styles.container}>
      <ProfileImageCard />
    </View>
  );
};

WithProfileImage.propTypes = {};
WithProfileImage.defaultProps = {};

export default WithProfileImage;
