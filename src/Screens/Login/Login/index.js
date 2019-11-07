import React from 'react';
import {View, Text} from 'react-native';
import Circular from 'Components/Buttons/Circular';
import styles from './styles';
import ScreenNames from 'Constants/ScreenNames';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Circular
        style={styles.button}
        onPress={() => {
          navigation.navigate(ScreenNames.WITH_USERNAME);
        }}
        renderItem={() => {
          return <Text>KULLANICI ADI İLE</Text>;
        }}
      />
      <Circular
        style={styles.button}
        onPress={() => {
          navigation.navigate(ScreenNames.REGISTRY);
        }}
        renderItem={() => {
          return <Text>SİCİL NO İLE</Text>;
        }}
      />
      <Circular
        style={styles.button}
        onPress={() => {}}
        renderItem={() => {
          return <Text>LOGIN 3</Text>;
        }}
      />
    </View>
  );
};

Login.propTypes = {};
Login.defaultProps = {};

export default Login;
