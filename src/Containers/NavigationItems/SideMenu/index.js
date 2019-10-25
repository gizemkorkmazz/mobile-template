import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import {DrawerItem} from '../DrawerItem';

const SideMenu = ({descriptors, activeItemKey, navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {Object.keys(descriptors).map((item, index) => {
        if (descriptors[item].options.drawerLabel) {
          return (
            <React.Fragment key={index}>
              <DrawerItem
                onPress={() => {
                  navigation.closeDrawer();
                  navigation.navigate(item);
                  descriptors[item]?.options?.params?.initialRoute || item;
                }}
                title={descriptors[item].options.drawerLabel}
                iconSource={descriptors[item].options.iconSource}
                isActive={activeItemKey === descriptors[item].key}
              />
            </React.Fragment>
          );
        }
      })}
    </ScrollView>
  );
};

export default SideMenu;
