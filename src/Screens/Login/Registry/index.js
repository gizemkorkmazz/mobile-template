import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './styles';
import TextInput from 'Components/TextInput';
import Circular from 'Components/Buttons/Circular';
import Underline from 'Components/Buttons/Underline';

const Registry = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        title="Sicil Numarası"
        placeholder="--- --- -- -- ---"
        iconName="user"
      />
      <TextInput title="Şifre" isSecureText iconName="lock" />
      <View style={styles.footer}>
        <Circular
          style={styles.button}
          onPress={() => {}}
          renderItem={() => {
            return <Text style={styles.text}>GİRİŞ YAP</Text>;
          }}
        />
        <Circular
          style={styles.button}
          onPress={() => {}}
          renderItem={() => {
            return <Text style={styles.text}>ÜYE OL</Text>;
          }}
        />
        <Underline title="Şifremi Unuttum" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

Registry.propTypes = {};
Registry.defaultProps = {};

export default Registry;
