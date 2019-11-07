import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import LeftIcon from 'Components/LeftIcon/index';

const RenderLeftIcon = ({navigation, index}) => {
  if (!navigation) {
    return null;
  }
  if (index === 0) {
    return <LeftIcon navigation={navigation} isHamburger iconName="menu" />;
  }
  if (index > 0) {
    return <LeftIcon navigation={navigation} iconName="chevron-thin-left" />;
  }
  return null;
};

const NavigationBar = ({props}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <RenderLeftIcon index={props.index} navigation={props.navigation} />
        <Text style={styles.title} numberOfLines={1}>
          {props?.scene?.descriptor?.options?.title || ''}
        </Text>
        <View />
      </View>
    </SafeAreaView>
  );
};
export default NavigationBar;
