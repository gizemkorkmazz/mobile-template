import React from 'react';
import ScreenNames from 'Constants/ScreenNames';
import HorizontalScroll from 'Components/HorizontalScroll';
import ScrollItem from 'Components/ScrollItem';
import Blog from 'Providers/Home/Blog';

const BlogScroll = ({navigation}) => {
  return (
    <HorizontalScroll
      title="Blog"
      route={ScreenNames.HOME_BLOG}
      navigation={navigation}
      data={Blog}
      isViewAll
      shortDescription="Lorem ipsum dolor sit amet"
      renderItem={({item, index}) => {
        return (
          <ScrollItem
            key={index}
            item={item}
            onPress={() => navigation.navigate(ScreenNames.HOME_BLOG)}
          />
        );
      }}
    />
  );
};

BlogScroll.propTypes = {};
BlogScroll.defaultProps = {};

export default BlogScroll;
