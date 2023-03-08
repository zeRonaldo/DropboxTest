import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Title = ({name = 'FolderName'}) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#333',
    fontSize: 18,
    fontWeight: '700',
    padding: 4,
  },
  addendum: {
    padding: 2,
    color: '#555',
    fontSize: 10,
    fontWeight: '300',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Title;
