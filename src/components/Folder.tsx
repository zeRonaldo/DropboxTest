import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Miniature from './itemComponents/Miniature';
import Title from './itemComponents/Title';
import {useNavigation} from '@react-navigation/native';
import useFolder from '../hooks/useFolder';

const Folder = ({data}) => {
  const navigation = useNavigation();
  const {loadFolder} = useFolder();

  const goToFolder = () => {
    loadFolder(data.path);
    navigation.push('Folder', {title: data.path});
  };

  return (
    <TouchableOpacity onPress={() => goToFolder()}>
      <View style={styles.container}>
        <Miniature extension="" />
        <Title name={data.name} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});

export default Folder;
