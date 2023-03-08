import React from 'react';
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import useFolder from '../hooks/useFolder';
import Miniature from './itemComponents/Miniature';
import Spec from './itemComponents/Spec';

const File = ({data}) => {
  const {downloadFile} = useFolder();

  const download = () => {
    Alert.alert('Downloading', 'Do you want to download this file?', [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'OK',
        onPress: () => {
          downloadFile(data.path);
          console.log('OK Pressed');
        },
      },
    ]);
  };
  return (
    <TouchableOpacity onPress={() => download()}>
      <View style={styles.container}>
        <Miniature extension={data.extension} />
        <Spec
          name={
            data.name.replace('.' + data.extension, '').substring(0, 20) +
            (data.name.length > 20 ? '...' : '')
          }
          modified={data.modified}
          size={data.size}
          extension={data.extension}
        />
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

export default File;
