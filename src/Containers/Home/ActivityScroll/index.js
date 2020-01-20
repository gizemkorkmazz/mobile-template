import React from 'react';
import ScreenNames from 'Constants/ScreenNames';
import HorizontalScroll from 'Components/HorizontalScroll';
import ScrollItem from 'Components/ScrollItem';
import Activities from 'Providers/Home/Activities';

const ActivityScroll = ({navigation}) => {
  return (
    <HorizontalScroll
      title="Etkinlikler"
      route={ScreenNames.MENU_ACTIVITY}
      navigation={navigation}
      data={Activities}
      isViewAll
      shortDescription="Lorem ipsum dolor sit amet"
      renderItem={({item, index}) => {
        return (
          <ScrollItem
            key={index}
            item={item}
            onPress={() => navigation.navigate(ScreenNames.HOME_ACTIVITY)}
          />
        );
      }}
    />
  );
};
ActivityScroll.propTypes = {};
ActivityScroll.defaultProps = {};

export default ActivityScroll;
