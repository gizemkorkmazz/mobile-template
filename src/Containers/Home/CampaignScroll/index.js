import React from 'react';
import ScreenNames from 'Constants/ScreenNames';
import HorizontalScroll from 'Components/HorizontalScroll';
import ScrollItem from 'Components/ScrollItem';
import Campaigns from 'Providers/Home/Campaigns';

const CampaignScroll = ({navigation}) => {
  return (
    <HorizontalScroll
      title="Kampanyalar"
      navigation={navigation}
      data={Campaigns}
      isViewAll
      shortDescription="Lorem ipsum dolor sit amet"
      renderItem={({item, index}) => {
        return (
          <ScrollItem
            key={index}
            item={item}
            onPress={() => navigation.navigate(ScreenNames.HOME_CAMPAIGN)}
          />
        );
      }}
    />
  );
};
CampaignScroll.propTypes = {};
CampaignScroll.defaultProps = {};

export default CampaignScroll;
