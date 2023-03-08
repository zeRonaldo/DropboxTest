import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FolderProvider from './src/contexts/FolderContext';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Folder from './src/screens/Folder';

const Stack = createStackNavigator();

const App = () => {
  return (
    <FolderProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '',
            }}
          />
          <Stack.Screen name="Folder" component={Folder} />
        </Stack.Navigator>
      </NavigationContainer>
    </FolderProvider>
  );
};

export default App;
