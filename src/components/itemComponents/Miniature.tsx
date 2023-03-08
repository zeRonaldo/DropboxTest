import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {getIcon} from '../../assets/Iconography';

const Miniature = ({extension}) => {
  const source = getIcon(extension);
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={source} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
export default Miniature;
