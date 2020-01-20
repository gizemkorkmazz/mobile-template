import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ScreenNames from 'Constants/ScreenNames';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.navigate(ScreenNames.HOME_1);
        }}>
        Anasayfa 1
      </Text>
      <Text
        onPress={() => {
          navigation.navigate(ScreenNames.HOME_2);
        }}>
        Anasayfa 2
      </Text>
    </View>
  );
};

export default Home;
