import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import LoginButton from '../components/LoginButton';

const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.firstLiner}>Hey There!</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.secondLiner}>Let's start with the</Text>
          <Text style={styles.highlight}>Hire Me</Text>
          <Text style={styles.secondLiner}>project</Text>
        </View>
        <View style={styles.lower}>
          <LoginButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#fff',
  },
  top: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  middle: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  lower: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  firstLiner: {
    fontSize: 36,
    fontWeight: '700',
    color: '#333',
    padding: 20,
  },
  secondLiner: {
    fontSize: 28,
    fontWeight: '500',
    color: '#666',
  },
  highlight: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3e5d3c',
    paddingHorizontal: 10,
  },
});

export default Login;
