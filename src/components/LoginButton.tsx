import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import { checkApp, listFiles } from '../api/Dropbox';


const LoginButton = () => {
  const login = async () => {
    try {
      const res = await listFiles();
    } catch (e) {
      console.log(e.error);
    }
  };
  return (
    <TouchableOpacity onPress={() => login()}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../assets/dropbox-white.png')}
            style={styles.icon}
          />
        </View>
        <View>
          <Text style={styles.text}>Login with Dropbox</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#3e5d3c',
    height: 50,
    width: '80%',
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 35,
  },
  icon: {
    width: 32,
    height: 32,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default LoginButton;
