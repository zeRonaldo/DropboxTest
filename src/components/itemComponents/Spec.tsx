import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Spec = ({
  name = 'filename',
  modified = 'mm/dd/yyyy',
  size = '128 kb',
  extension = '.txt',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.addendum}>{extension}</Text>
      </View>
      <View>
        <Text style={styles.addendum}>{modified}</Text>
      </View>
      <View>
        <Text style={styles.addendum}>{size}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
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
export default Spec;
