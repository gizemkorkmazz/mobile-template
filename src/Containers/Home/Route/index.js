import React from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import Images from 'Themes/Images';
import styles from './styles';
import RouteCard from '../RouteCard';
import Explore from 'Providers/Home/Explore';

const Route = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} text="Senin için hazırlanmış rotalarla" />
      <Text style={styles.title} text="Cevahir'i Keşfet!" />
      <Image source={Images.Route} style={styles.image} />
      <FlatList
        horizontal
        data={Explore}
        showsRouteIndicator={false}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <RouteCard
              key={index}
              item={item}
              navigation={navigation}
              isAwardWinning={item.isAwardWinnig}
            />
          );
        }}
      />
    </View>
  );
};

Route.propTypes = {};
Route.defaultProps = {};
export default Route;
