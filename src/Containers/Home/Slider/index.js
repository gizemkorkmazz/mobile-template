import React, {useState} from 'react';
import {Pager, PagerProvider} from '@crowdlinker/react-native-pager';
import styles from './styles';
import SliderItem from '../SliderItem';
import {View} from 'react-native';
import HomeBanner from 'Providers/Home/HomeBanner';
import {wp} from 'Helpers/Responsive';
import Colors from 'Themes/Colors';

const Slider = () => {
  const [activeIndex, onChange] = useState(1);

  return (
    <PagerProvider
      activeIndex={activeIndex}
      onChange={onChange}
      style={styles.container}>
      <Pager style={styles.pagerContainer}>
        {HomeBanner.map(item => {
          return <SliderItem key={item.id} item={item} />;
        })}
      </Pager>

      <View style={styles.dotContainer}>
        {Array.from({length: HomeBanner?.length}, (_, i) => (
          <View
            key={i}
            style={[
              styles.circle,
              {
                width: i === activeIndex ? wp(4) : wp(2),
                backgroundColor:
                  i === activeIndex
                    ? Colors.base.primary
                    : Colors.background.secondary,
              },
            ]}
          />
        ))}
      </View>
    </PagerProvider>
  );
};
Slider.propTypes = {};
Slider.defaultProps = {};

export default Slider;
