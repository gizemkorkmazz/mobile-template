import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {wp} from 'Helpers/Responsive';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RenderLeftIcon = ({navigation, index}) => {
  if (!navigation) {
    return null;
  }
  if (index === 0) {
    return <Entypo name="menu" size={wp(5)} />;
  }
  if (index > 0) {
    return <MaterialIcons name="keyboard-arrow-left" size={wp(5)} />;
  }
  return null;
};

const NavigationBar = ({props}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.column, styles.leftIcon]}>
          <RenderLeftIcon index={props.index} navigation={props?.navigation} />
        </View>
        <View style={[styles.column, styles.titleContainer]}>
          <Text style={styles.title} numberOfLines={1}>
            {props?.scene?.descriptor?.options?.title || ''}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default NavigationBar;
