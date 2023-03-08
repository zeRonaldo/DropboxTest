import React, {useEffect} from 'react';
import {
  SafeAreaView,
  VirtualizedList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {BackButton} from '../components/BackButton';
import Item from '../components/Item';
import useFolder from '../hooks/useFolder';

function Folder({navigation}) {
  const {loading, count, folder, folderName, getFile, loadFolder} = useFolder();

  const navigateBack = () => {
    const foldernameNew = folderName.split('/');
    const newFolder = foldernameNew.slice(0, foldernameNew.length - 1).join('/');
    loadFolder(newFolder);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      title: folderName,
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={() => navigateBack()}>
            <BackButton />
          </TouchableOpacity>
        );
      },
    });
  }, []);

  if (loading) {
    return (
      <SafeAreaView>
        <View>
          <Text>Loading</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <VirtualizedList
        data={folder}
        initialNumToRender={10}
        keyExtractor={item => item?.id}
        renderItem={item => {
          return <Item key={item?.id} data={item.item} />;
        }}
        getItemCount={() => count}
        getItem={getFile}
      />
    </SafeAreaView>
  );
}

export default Folder;
