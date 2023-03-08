import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, VirtualizedList} from 'react-native';
import Item from '../components/Item';
import useFolder from '../hooks/useFolder';

function Home() {
  const {loading, getFile, count, folder, loadFiles} = useFolder();

  useEffect(() => {
    loadFiles();
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
          return <Item key={item?.id} data={item.item}/>
        }}
        getItemCount={() => count}
        getItem={getFile}
      />
    </SafeAreaView>
  );
}

export default Home;
