import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const BackButton = () => {
  return (
    <View>
      <Image style={styles.back} source={require('../assets/back.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
  },
});
