import React from 'react';
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const HorizontalScroll = ({
  data,
  title,
  renderItem,
  navigation,
  route,
  isViewAll,
  shortDescription,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(route);
            }}>
            {isViewAll ? <Text style={styles.colored}>Tümünü gör</Text> : null}
          </TouchableOpacity>
        </View>
        {shortDescription && (
          <Text style={styles.text}>{shortDescription}</Text>
        )}
      </View>
      <FlatList
        horizontal
        data={data}
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

HorizontalScroll.propTypes = {
  title: PropTypes.string.isRequired,
  renderItem: PropTypes.func.isRequired,
  route: PropTypes.string,
  isViewAll: PropTypes.bool,
  shortDescription: PropTypes.string,
  data: PropTypes.array.isRequired,
};
HorizontalScroll.defaultProps = {
  route: 'Route',
  isViewAll: false,
  shortDescription: null,
};
export default HorizontalScroll;
