import React from 'react';
import {ScrollView, Text} from 'react-native';
import styles from './styles';
import Slider from 'Containers/Home/Slider';
import Route from 'Containers/Home/Route';
import CampaignScroll from 'Containers/Home/CampaignScroll';
import ActivityScroll from 'Containers/Home/ActivityScroll';
import BlogScroll from 'Containers/Home/BlogScroll';

const Home1 = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.page}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.text}>{'Merhaba\nHoşgeldiniz!'}</Text>
      <Slider />
      <Route navigation={navigation} />
      <CampaignScroll navigation={navigation} />
      <ActivityScroll navigation={navigation} />
      <BlogScroll navigation={navigation} />
    </ScrollView>
  );
};

export default Home1;
